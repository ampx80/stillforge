import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main" className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
