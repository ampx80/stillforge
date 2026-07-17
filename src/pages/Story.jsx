import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

export default function Story() {
  return (
    <>
      <Seo
        title="Maker Story"
        description="Stillforge began in metalwork. Melodic drums forged from propane tanks are the passion that turned craft into voice."
        path="/story"
      />
      <section className="section">
        <div className="container-narrow">
          <p className="eyebrow">Story</p>
          <h1>A metalworker who wanted steel to sing.</h1>
          <p>
            Before Stillforge was a drum brand, it was a forge practice: cutting, welding, shaping
            industrial forms into sculpture. The album of tank-built creatures and workshop days is
            not marketing theater. It is the resume of the hands.
          </p>
          <p>
            Melodic drums became the passion lane. Propane tanks offer a stubborn, generous shell.
            With heat, time, and careful tuning, that shell becomes an instrument you can take to a
            quiet bank of water and play until the air feels wider.
          </p>
          <p>
            The brand promise is simple: no plastic mystique, no fake reviews, no invented awards.
            Watch the craft. Play the interactive drum. Commission a voice that matches how you
            actually live - outdoors, in meditation, as a gift that refuses to be ordinary.
          </p>
          <div className="hero-actions" style={{ marginTop: '1.75rem' }}>
            <Link className="btn btn-primary" to="/craft">
              See the craft
            </Link>
            <Link className="btn btn-ghost" to="/guides/stillforge-origin-story">
              Read the origin guide
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
