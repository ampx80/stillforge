import { Link } from 'react-router-dom'
import AmbientField from '../components/AmbientField'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import { products } from '../data/products'

export default function Shop() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Stillforge melodic drums',
    itemListElement: products.map((p, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: p.name,
        description: p.blurb,
        brand: { '@type': 'Brand', name: 'Stillforge' },
        category: 'Melodic steel drum',
      },
    })),
  }

  return (
    <>
      <Seo
        title="Melodic Steel Drums for Commission"
        description="Browse Stillforge commission paths: Rivulet, Ember, and fully custom propane-tank forged melodic drums."
        path="/shop"
        jsonLd={jsonLd}
      />
      <section className="page-hero">
        <AmbientField intensity="soft" />
        <div className="container">
          <Reveal>
            <p className="eyebrow">Drums</p>
            <h1>Available paths to a voice in steel.</h1>
            <p className="lede">
              No fake &quot;in stock&quot; counters. Each drum is forged and tuned to order. Pricing
              reflects mid-artisan custom work, not mass-market toys.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="products-grid">
            {products.map((product, i) => (
              <Reveal key={product.id} as="article" className="product-card" delay={i * 90}>
                <span className="status">{product.status}</span>
                <h2 style={{ fontSize: '1.8rem' }}>{product.name}</h2>
                <p style={{ color: 'var(--ink-muted)' }}>{product.blurb}</p>
                <div className="price">{product.priceLabel}</div>
                <ul>
                  {product.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link className="btn btn-primary" to="/commission">
                  Inquire about {product.name}
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="empty-state" style={{ marginTop: '2rem' }}>
            <h3>Stripe checkout optional</h3>
            <p>
              Ready when a deposit flow is needed. Today, commissions start with a real inquiry so
              scale, finish, and timeline stay honest.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
