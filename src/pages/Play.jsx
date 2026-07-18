import { Link } from 'react-router-dom'
import AmbientField from '../components/AmbientField'
import PerformanceReel from '../components/PerformanceReel'
import PlayableDrum from '../components/PlayableDrum'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import TankDrumDiagram from '../components/TankDrumDiagram'

export default function Play() {
  return (
    <>
      <Seo
        title="Play the Interactive Melodic Drum"
        description="Tap a Stillforge-style melodic drum in your browser. Web Audio notes, ripple strikes, touch-ready for phone and desktop."
        path="/play"
      />
      <section className="play-stage">
        <AmbientField />
        <div className="container play-stage-inner">
          <Reveal>
            <p className="eyebrow">Playable instrument</p>
            <h1>Tap steel. Hear stillness.</h1>
            <p className="lede">
              This interactive drum uses the Web Audio API with pre-rendered handpan-style samples
              per note. Low latency on desktop and phone. Unlock sound with the first tap.
            </p>
          </Reveal>
          <Reveal variant="scale" delay={120} style={{ marginTop: '2rem' }}>
            <PlayableDrum size="stage" />
          </Reveal>
          <Reveal className="hero-actions" style={{ justifyContent: 'center', marginTop: '1.5rem' }} delay={200}>
            <Link className="btn btn-primary" to="/commission">
              Commission this voice
            </Link>
            <Link className="btn btn-ghost" to="/guides/how-to-play-handpan-basics">
              Learn basic technique
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Anatomy</p>
            <h2>What makes it sing.</h2>
            <p className="lede">
              Every tank drum is one reclaimed steel shell, a deep center ding, and hand-cut tone
              fields tuned by ear until the metal speaks.
            </p>
          </Reveal>
          <Reveal>
            <TankDrumDiagram />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Hear the real thing</p>
            <h2>Scales he forged and recorded.</h2>
            <p className="lede">
              The browser drum is D Kurd. These are frames from his own tank drums, each tuned to a
              different scale. Press play.
            </p>
          </Reveal>
          <Reveal variant="scale">
            <PerformanceReel />
          </Reveal>
        </div>
      </section>
    </>
  )
}
