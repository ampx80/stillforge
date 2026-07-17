import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

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
          Menu
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
