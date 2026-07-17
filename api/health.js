export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  if (req.method === 'OPTIONS') {
    res.status(204).end()
    return
  }
  res.status(200).json({
    ok: true,
    service: 'stillforge',
    time: new Date().toISOString(),
  })
}
