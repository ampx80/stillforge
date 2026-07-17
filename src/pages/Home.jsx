import { Link } from 'react-router-dom'
import PlayableDrum from '../components/PlayableDrum'
import Seo from '../components/Seo'
import { products } from '../data/products'
import { galleryItems, filmPlates } from '../data/gallery'

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
            <h2>Forge heat first. Streamside play next.</h2>
            <p className="lede">
              Real photos from his sculptures album. When streamside drum video lands, it drops into
              this film strip - the metal already proves the hands.
            </p>
          </div>
          <div className="film-strip">
            {filmPlates.map((plate) => (
              <article key={plate.id} className="film-stage film-stage-photo">
                <img src={plate.src} alt={plate.title} className="film-photo" loading="lazy" />
                <div className="film-caption">
                  <h3>{plate.title}</h3>
                  <p>{plate.caption}</p>
                </div>
              </article>
            ))}
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
              Pulled from his shared sculptures album: tank-built dragon, workshop grit, outdoor
              scale. The same forge path that becomes a melodic drum.
            </p>
          </div>
          <div className="gallery-grid">
            {galleryItems.slice(0, 6).map((item) => (
              <article key={item.id} className="gallery-card" style={{ cursor: 'default' }}>
                <div
                  className="gallery-visual"
                  style={{ backgroundImage: `url(${item.src})` }}
                  role="img"
                  aria-label={item.title}
                />
                <div className="gallery-body">
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
