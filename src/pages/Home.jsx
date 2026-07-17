import { Link } from 'react-router-dom'
import PlayableDrum from '../components/PlayableDrum'
import Seo from '../components/Seo'
import { products } from '../data/products'
import { galleryItems } from '../data/gallery'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Stillforge',
    url: 'https://stillforge.vercel.app',
    description:
      'Handcrafted melodic steel drums forged from propane tanks for meditation, outdoor play, and custom commissions.',
    makesOffer: products.map((p) => ({
      '@type': 'Offer',
      name: p.name,
      description: p.blurb,
    })),
  }

  return (
    <>
      <Seo
        title="Stillforge | Melodic Steel Drums Forged for Stillness"
        description="Play an interactive handpan-style drum in your browser, explore tank-forged craft, and commission a Stillforge melodic steel drum."
        path="/"
        jsonLd={jsonLd}
      />

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Stillforge</p>
            <h1>Steel that sings when the world gets quiet.</h1>
            <p className="lede">
              Melodic drums forged from propane tanks. Tap the instrument. Feel the strike. Then
              commission the real thing for streamside evenings and still rooms.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/play">
                Play the drum
              </Link>
              <Link className="btn btn-ghost" to="/commission">
                Commission a build
              </Link>
            </div>
            <div className="hero-meta">
              <span>
                <strong>Interactive</strong> Web Audio drum
              </span>
              <span>
                <strong>Artisan</strong> tank-forged craft
              </span>
              <span>
                <strong>Custom</strong> scales on request
              </span>
            </div>
          </div>
          <PlayableDrum />
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Watch the vibe</p>
            <h2>Streamside calm. Forge heat. One instrument.</h2>
            <p className="lede">
              Cinematic placeholders mark where his real play and process footage drop in. The mood
              is already here: water, metal, fire, breath.
            </p>
          </div>
          <div className="film-stage">
            <div className="film-caption">
              <span className="placeholder-badge">Placeholder film plate</span>
              <h3>Maker playing by moving water</h3>
              <p>
                Drop in vertical or landscape video of him playing. Soft ambient motion and parallax
                already wrap this stage.
              </p>
            </div>
          </div>
          <div className="stat-row">
            <div className="stat">
              <strong>Tank</strong>
              <span>Industrial steel reborn as voice</span>
            </div>
            <div className="stat">
              <strong>Tune</strong>
              <span>Notes aligned by ear and patience</span>
            </div>
            <div className="stat">
              <strong>Still</strong>
              <span>Built for outdoor quiet and focus</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">The craft</p>
            <h2>Metalwork that already proves the hands.</h2>
            <p className="lede">
              From the sculpture album: tank-built forms, workshop grit, outdoor scale. Drum process
              frames sit ready for his real instrument photos.
            </p>
          </div>
          <div className="gallery-grid">
            {galleryItems.slice(0, 6).map((item) => (
              <article key={item.id} className="gallery-card" style={{ cursor: 'default' }}>
                <div className="gallery-visual" style={{ background: item.visual }} />
                <div className="gallery-body">
                  {item.placeholder && <span className="placeholder-badge">Media slot</span>}
                  <h3>{item.title}</h3>
                  <p>{item.caption}</p>
                </div>
              </article>
            ))}
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <Link className="btn btn-ghost" to="/craft">
              Open the full gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Drums</p>
            <h2>Commission paths, not fake inventory.</h2>
          </div>
          <div className="products-grid">
            {products.map((product) => (
              <article key={product.id} className="product-card">
                <span className="status">{product.status}</span>
                <h3>{product.name}</h3>
                <p style={{ color: 'var(--ink-muted)', margin: 0 }}>{product.blurb}</p>
                <div className="price">{product.priceLabel}</div>
                <p style={{ margin: 0, color: 'var(--ink-muted)' }}>
                  {product.scale} · {product.notes} notes
                </p>
                <Link className="btn btn-primary" to="/commission">
                  Start a commission
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-band">
          <p className="eyebrow">Next</p>
          <h2>Hear it. Then own a voice of your own.</h2>
          <p className="lede">
            Play the browser drum, read the forge story, or send a commission note. Every path leads
            back to real steel.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-ember" to="/play">
              Play now
            </Link>
            <Link className="btn btn-ghost" to="/guides">
              Read the guides
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
