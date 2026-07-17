import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  async function onSubmit(event) {
    event.preventDefault()
    setStatus('loading')
    setError('')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'footer' }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Subscribe failed')
      setStatus('ok')
      setEmail('')
    } catch (err) {
      setStatus('error')
      setError(err.message || 'Could not subscribe')
    }
  }

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Stillforge</h3>
          <p style={{ color: 'var(--ink-muted)', maxWidth: '28rem' }}>
            Melodic steel drums forged from propane tanks. Built for quiet places, open air, and
            people who want an instrument that answers the first touch.
          </p>
          <form className="subscribe-row" onSubmit={onSubmit} style={{ marginTop: '1.25rem' }}>
            <label className="sr-only" htmlFor="footer-email" style={{ position: 'absolute', left: '-9999px' }}>
              Email
            </label>
            <input
              id="footer-email"
              type="email"
              required
              placeholder="Email for forge notes"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
            <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
              {status === 'loading' ? 'Joining...' : 'Join'}
            </button>
          </form>
          {status === 'ok' && <p className="form-success">You are on the list.</p>}
          {status === 'error' && <p className="form-error">{error}</p>}
        </div>

        <div>
          <h3>Explore</h3>
          <ul>
            <li><Link to="/play">Playable drum</Link></li>
            <li><Link to="/shop">Available drums</Link></li>
            <li><Link to="/commission">Commission</Link></li>
            <li><Link to="/craft">The craft</Link></li>
            <li><Link to="/story">Maker story</Link></li>
          </ul>
        </div>

        <div>
          <h3>Guides</h3>
          <ul>
            <li><Link to="/guides">All guides</Link></li>
            <li><Link to="/guides/handpan-vs-tongue-drum">Handpan vs tongue drum</Link></li>
            <li><Link to="/guides/how-much-does-a-handpan-cost">Handpan cost</Link></li>
            <li><Link to="/guides/unique-gifts-for-christmas">Gift ideas</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>Stillforge - forged from fire, tuned for stillness.</span>
        <span>ASCII craft. Real steel. No filler copy.</span>
      </div>
    </footer>
  )
}
