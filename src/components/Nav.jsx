import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const LINKS = [
  { to: '/play', label: 'Play' },
  { to: '/craft', label: 'Craft' },
  { to: '/shop', label: 'Drums' },
  { to: '/commission', label: 'Commission' },
  { to: '/story', label: 'Story' },
  { to: '/guides', label: 'Guides' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="site-nav">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/brand/mark.svg" alt="" width="34" height="34" />
          Stillforge
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>{open ? 'Close' : 'Menu'}</span>
        </button>

        <ul id="primary-nav" className={`nav-links${open ? ' open' : ''}`}>
          {LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/play" className="btn btn-primary" onClick={() => setOpen(false)}>
              Play the drum
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
