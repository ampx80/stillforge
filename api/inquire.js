const inquiries = []

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
    const name = String(body.name || '').trim()
    const email = String(body.email || '').trim()
    const message = String(body.message || '').trim()
    const interest = String(body.interest || 'commission').trim()
    const scale = String(body.scale || '').trim()

    if (!name || !email || !message) {
      res.status(400).json({ error: 'Name, email, and message are required.' })
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      res.status(400).json({ error: 'Enter a valid email address.' })
      return
    }

    const record = {
      id: `inq_${Date.now()}`,
      name,
      email,
      message,
      interest,
      scale,
      createdAt: new Date().toISOString(),
    }

    inquiries.push(record)
    if (inquiries.length > 200) inquiries.shift()

    // Optional Supabase wire-up when env is present
    const url = process.env.SUPABASE_URL
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY
    if (url && key) {
      try {
        await fetch(`${url}/rest/v1/inquiries`, {
          method: 'POST',
          headers: {
            apikey: key,
            Authorization: `Bearer ${key}`,
            'Content-Type': 'application/json',
            Prefer: 'return=minimal',
          },
          body: JSON.stringify({
            name,
            email,
            message,
            interest,
            scale,
            source: 'stillforge',
          }),
        })
      } catch {
        // Keep local success even if remote write fails
      }
    }

    res.status(200).json({ ok: true, id: record.id })
  } catch {
    res.status(400).json({ error: 'Could not parse inquiry.' })
  }
}
