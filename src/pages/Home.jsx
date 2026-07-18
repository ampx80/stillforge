import { Link } from 'react-router-dom'
import AmbientField from '../components/AmbientField'
import PerformanceReel from '../components/PerformanceReel'
import PlayableDrum from '../components/PlayableDrum'
import Reveal from '../components/Reveal'
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
        <AmbientField intensity="soft" />
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
          <PlayableDrum size="hero" />
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Hear it played</p>
            <h2>Real drums. Real scales. Real hands.</h2>
            <p className="lede">
              Frames from the maker&apos;s own recordings - each a tank drum he tuned to a chosen
              scale. Press play to run the reel and let the steel bloom.
            </p>
          </Reveal>
          <Reveal variant="scale">
            <PerformanceReel />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">The forge on film</p>
            <h2>Fire at full scale. Then the stillness.</h2>
            <p className="lede">
              Real photos from his album - the tank-forged dragon, a season of drums, hands on
              steel. The metal proves the hands.
            </p>
          </Reveal>
          <div className="film-strip">
            {filmPlates.map((plate, i) => (
              <Reveal key={plate.id} as="article" className="film-stage film-stage-photo" delay={i * 90}>
                <img src={plate.src} alt={plate.title} className="film-photo" loading="lazy" />
                <div className="film-caption">
                  <h3>{plate.title}</h3>
                  <p>{plate.caption}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="stat-row stagger" delay={120}>
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
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">The craft</p>
            <h2>Metalwork that already proves the hands.</h2>
            <p className="lede">
              Pulled from his shared sculptures album: tank-built dragon, workshop grit, outdoor
              scale. The same forge path that becomes a melodic drum.
            </p>
          </Reveal>
          <div className="gallery-grid">
            {galleryItems.slice(0, 6).map((item, i) => (
              <Reveal
                key={item.id}
                as="article"
                className="gallery-card"
                delay={i * 70}
                style={{ cursor: 'default' }}
              >
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
              </Reveal>
            ))}
          </div>
          <Reveal style={{ marginTop: '1.5rem' }}>
            <Link className="btn btn-ghost" to="/craft">
              Open the full gallery
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Drums</p>
            <h2>Commission paths, not fake inventory.</h2>
          </Reveal>
          <div className="products-grid">
            {products.map((product, i) => (
              <Reveal key={product.id} as="article" className="product-card" delay={i * 90}>
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="cta-band">
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
          </Reveal>
        </div>
      </section>
    </>
  )
}
