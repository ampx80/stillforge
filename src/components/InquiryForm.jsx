import { useState } from 'react'

const INTERESTS = [
  { value: 'commission', label: 'Custom commission' },
  { value: 'available', label: 'Available drum' },
  { value: 'visit', label: 'Workshop visit' },
  { value: 'other', label: 'Something else' },
]

export default function InquiryForm({ defaultInterest = 'commission' }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    interest: defaultInterest,
    scale: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  function update(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  async function onSubmit(event) {
    event.preventDefault()
    setStatus('loading')
    setError('')
    try {
      const res = await fetch('/api/inquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Inquiry failed')
      setStatus('ok')
      setForm({
        name: '',
        email: '',
        interest: defaultInterest,
        scale: '',
        message: '',
      })
    } catch (err) {
      setStatus('error')
      setError(err.message || 'Could not send inquiry')
    }
  }

  if (status === 'ok') {
    return (
      <div className="empty-state" role="status">
        <h3>Inquiry received</h3>
        <p>Thank you. The forge will follow up by email. While you wait, try the playable drum.</p>
        <p style={{ marginTop: '1rem' }}>
          <a className="btn btn-primary" href="/play">
            Play the drum
          </a>
        </p>
      </div>
    )
  }

  return (
    <form className="form-stack" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="inq-name">Name</label>
        <input
          id="inq-name"
          name="name"
          required
          value={form.name}
          onChange={(e) => update('name', e.target.value)}
          autoComplete="name"
        />
      </div>
      <div className="field">
        <label htmlFor="inq-email">Email</label>
        <input
          id="inq-email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
          autoComplete="email"
        />
      </div>
      <div className="field">
        <label htmlFor="inq-interest">Interest</label>
        <select
          id="inq-interest"
          name="interest"
          value={form.interest}
          onChange={(e) => update('interest', e.target.value)}
        >
          {INTERESTS.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="inq-scale">Preferred scale (optional)</label>
        <input
          id="inq-scale"
          name="scale"
          placeholder="e.g. D Kurd, Celtic Minor, not sure yet"
          value={form.scale}
          onChange={(e) => update('scale', e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="inq-message">Message</label>
        <textarea
          id="inq-message"
          name="message"
          required
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          placeholder="Tell us how you want to play - streamside, meditation, gift, performance..."
        />
      </div>
      <p className="form-note">
        No fake waitlists. This sends a real inquiry to the Stillforge inbox path.
      </p>
      {status === 'error' && <p className="form-error">{error}</p>}
      <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send inquiry'}
      </button>
    </form>
  )
}
