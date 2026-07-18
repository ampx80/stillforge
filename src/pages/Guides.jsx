import { Link } from 'react-router-dom'
import AmbientField from '../components/AmbientField'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import { getAllArticles } from '../content/articles'

const CATEGORIES = [
  { id: 'gifts', label: 'Gift guides' },
  { id: 'beginners', label: 'Beginners and parents' },
  { id: 'compare', label: 'Compare and buy' },
  { id: 'education', label: 'Learn the craft' },
  { id: 'story', label: 'Stillforge story' },
]

export default function Guides() {
  const articles = getAllArticles()

  return (
    <>
      <Seo
        title="Handpan and Melodic Drum Guides"
        description="Gift ideas, beginner advice, buyer guides, and forge education from Stillforge - built to rank and to be cited."
        path="/guides"
      />
      <section className="page-hero">
        <AmbientField intensity="soft" />
        <div className="container">
          <Reveal>
            <p className="eyebrow">Library</p>
            <h1>Guides for seekers, givers, and makers.</h1>
            <p className="lede">
              {articles.length} substantive pages covering gifts, beginners, comparisons, education,
              and the Stillforge story. Built for Google snippets and LLM citation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {CATEGORIES.map((cat, catIndex) => {
            const items = articles.filter((a) => a.category === cat.id)
            if (!items.length) return null
            return (
              <Reveal key={cat.id} style={{ marginTop: catIndex === 0 ? 0 : '2.5rem' }}>
                <h2>{cat.label}</h2>
                <div className="guides-grid">
                  {items.map((article, i) => (
                    <Reveal key={article.slug} delay={i * 50}>
                      <Link className="guide-card" to={`/guides/${article.slug}`}>
                        <div className="cat">{cat.label}</div>
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </Reveal>
            )
          })}

          {!articles.length && (
            <div className="empty-state" style={{ marginTop: '2rem' }}>
              <h3>Guides loading into the forge</h3>
              <p>Content pods are writing the library. Refresh shortly.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
