import PlayableDrum from '../components/PlayableDrum'
import Seo from '../components/Seo'
import { Link } from 'react-router-dom'

export default function Play() {
  return (
    <>
      <Seo
        title="Play the Interactive Melodic Drum"
        description="Tap a Stillforge-style melodic drum in your browser. Web Audio notes, ripple strikes, touch-ready for phone and desktop."
        path="/play"
      />
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="eyebrow">Playable instrument</p>
          <h1>Tap steel. Hear stillness.</h1>
          <p className="lede" style={{ marginInline: 'auto' }}>
            This interactive drum uses the Web Audio API with pre-rendered handpan-style samples
            per note. Low latency on desktop and phone. Unlock sound with the first tap.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <PlayableDrum />
          </div>
          <div className="hero-actions" style={{ justifyContent: 'center', marginTop: '1.5rem' }}>
            <Link className="btn btn-primary" to="/commission">
              Commission this voice
            </Link>
            <Link className="btn btn-ghost" to="/guides/how-to-play-handpan-basics">
              Learn basic technique
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
