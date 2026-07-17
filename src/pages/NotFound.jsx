import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="That Stillforge page does not exist." path="/404" />
      <section className="section">
        <div className="container empty-state">
          <h1>Lost in the forge smoke</h1>
          <p>This path does not lead to a drum, a guide, or a page we know.</p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link className="btn btn-primary" to="/">
              Home
            </Link>
            <Link className="btn btn-ghost" to="/play">
              Play the drum
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
