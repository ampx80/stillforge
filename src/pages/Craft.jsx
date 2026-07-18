import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AmbientField from '../components/AmbientField'
import ForgeProcessDiagram from '../components/ForgeProcessDiagram'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import { galleryItems } from '../data/gallery'
import { processSteps } from '../data/products'

export default function Craft() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (!active) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <>
      <Seo
        title="The Craft: From Propane Tank to Tuned Drum"
        description="Explore Stillforge metalwork and the process from propane tank to melodic steel drum."
        path="/craft"
      />
      <section className="page-hero">
        <AmbientField intensity="soft" />
        <div className="container">
          <Reveal>
            <p className="eyebrow">The craft</p>
            <h1>Fire first. Music after.</h1>
            <p className="lede">
              The maker is a metalworker first. Sculpture-scale tank work proves the hands. Melodic
              drums are the passion path - industrial steel tuned until it breathes.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Process</p>
            <h2>From stubborn tank to singing shell.</h2>
            <p className="lede">
              Five beats of the forge path — cut, heat, form, tune, still. Scroll and watch the
              steel travel.
            </p>
          </Reveal>

          <ForgeProcessDiagram />

          <div className="split-2" style={{ marginTop: '2rem' }}>
            {processSteps.map((step, index) => (
              <Reveal key={step.title} as="article" className="product-card" delay={index * 80}>
                <span className="status">Step {index + 1}</span>
                <h2 style={{ fontSize: '1.6rem' }}>{step.title}</h2>
                <p style={{ color: 'var(--ink-muted)', margin: 0 }}>{step.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="section-head" style={{ marginTop: '3rem' }}>
            <h2>Gallery</h2>
            <p className="lede">
              Real photos from the sculptures album - dragon, workshop, process. Streamside drum
              video can layer onto this same craft story later.
            </p>
          </Reveal>

          <div className="gallery-grid">
            {galleryItems.map((item, i) => (
              <Reveal key={item.id} delay={i * 50}>
                <button
                  type="button"
                  className="gallery-card"
                  onClick={() => setActive(item)}
                >
                  <div
                    className="gallery-visual"
                    style={{ backgroundImage: `url(${item.src})` }}
                    role="img"
                    aria-label={item.title}
                  />
                  <div className="gallery-body">
                    <h3>{item.title}</h3>
                    <p>{item.category}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          <Reveal style={{ marginTop: '2rem' }}>
            <Link className="btn btn-primary" to="/commission">
              Commission from this craft
            </Link>
          </Reveal>
        </div>
      </section>

      {active && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={() => setActive(null)}
        >
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="modal-close" onClick={() => setActive(null)}>
              Close
            </button>
            <img
              src={active.src}
              alt={active.title}
              style={{ width: '100%', borderRadius: 6, maxHeight: 420, objectFit: 'cover' }}
            />
            <p className="eyebrow" style={{ marginTop: '1rem' }}>
              {active.category}
            </p>
            <h2>{active.title}</h2>
            <p style={{ color: 'var(--ink-muted)' }}>{active.caption}</p>
          </div>
        </div>
      )}
    </>
  )
}
