import { useState } from 'react'
import Seo from '../components/Seo'
import { galleryItems } from '../data/gallery'
import { processSteps } from '../data/products'
import { Link } from 'react-router-dom'

export default function Craft() {
  const [active, setActive] = useState(null)

  return (
    <>
      <Seo
        title="The Craft: From Propane Tank to Tuned Drum"
        description="Explore Stillforge metalwork and the process from propane tank to melodic steel drum."
        path="/craft"
      />
      <section className="section">
        <div className="container">
          <p className="eyebrow">The craft</p>
          <h1>Fire first. Music after.</h1>
          <p className="lede">
            The maker is a metalworker first. Sculpture-scale tank work proves the hands. Melodic
            drums are the passion path - industrial steel tuned until it breathes.
          </p>

          <div className="split-2" style={{ marginTop: '2.5rem' }}>
            {processSteps.map((step, index) => (
              <article key={step.title} className="product-card">
                <span className="status">Step {index + 1}</span>
                <h2 style={{ fontSize: '1.6rem' }}>{step.title}</h2>
                <p style={{ color: 'var(--ink-muted)', margin: 0 }}>{step.body}</p>
              </article>
            ))}
          </div>

          <div className="section-head" style={{ marginTop: '3rem' }}>
            <h2>Gallery</h2>
            <p className="lede">
              Real photos from the sculptures album - dragon, workshop, process. Streamside drum
              video can layer onto this same craft story later.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <button
                key={item.id}
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
            ))}
          </div>

          <div style={{ marginTop: '2rem' }}>
            <Link className="btn btn-primary" to="/commission">
              Commission from this craft
            </Link>
          </div>
        </div>
      </section>

      {active && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={() => setActive(null)}
          onKeyDown={(e) => e.key === 'Escape' && setActive(null)}
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
