const subscribers = []

function readBody(req) {
  return new Promise((resolve, reject) => {
    if (req.body && typeof req.body === 'object') {
      resolve(req.body)
      return
    }
    let raw = ''
    req.on('data', (chunk) => {
      raw += chunk
    })
    req.on('end', () => {
      if (!raw) {
        resolve({})
        return
      }
      try {
        resolve(JSON.parse(raw))
      } catch (err) {
        reject(err)
      }
    })
    req.on('error', reject)
  })
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(204).end()
    return
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  try {
    const body = await readBody(req)
    const email = String(body.email || '').trim().toLowerCase()
    const source = String(body.source || 'footer').trim()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      res.status(400).json({ error: 'Enter a valid email address.' })
      return
    }

    const record = {
      id: `sub_${Date.now()}`,
      email,
      source,
      createdAt: new Date().toISOString(),
    }
    subscribers.push(record)
    if (subscribers.length > 500) subscribers.shift()

    const url = process.env.SUPABASE_URL
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY
    if (url && key) {
      try {
        await fetch(`${url}/rest/v1/subscribers`, {
          method: 'POST',
          headers: {
            apikey: key,
            Authorization: `Bearer ${key}`,
            'Content-Type': 'application/json',
            Prefer: 'return=minimal',
          },
          body: JSON.stringify({ email, source, app: 'stillforge' }),
        })
      } catch {
        // ignore remote failure
      }
    }

    res.status(200).json({ ok: true })
  } catch {
    res.status(400).json({ error: 'Could not subscribe.' })
  }
}
