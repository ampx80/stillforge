import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import { getArticleBySlug, getAllArticles } from '../content/articles'

function buildJsonLd(article, path) {
  const base = {
    '@context': 'https://schema.org',
    '@type': article.schemaType === 'HowTo' ? 'HowTo' : 'Article',
    headline: article.h1,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: { '@type': 'Organization', name: 'Stillforge' },
    mainEntityOfPage: `https://stillforge.vercel.app${path}`,
  }

  const graph = [base]
  if (article.faqs?.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: article.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    })
  }
  return graph.length === 1 ? graph[0] : { '@context': 'https://schema.org', '@graph': graph }
}

export default function Article() {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)
  const all = getAllArticles()

  if (!article) {
    return (
      <section className="section">
        <div className="container empty-state">
          <h1>Guide not found</h1>
          <p>That page is not in the library yet.</p>
          <Link className="btn btn-primary" to="/guides">
            Back to guides
          </Link>
        </div>
      </section>
    )
  }

  const path = `/guides/${article.slug}`
  const related = (article.relatedSlugs || [])
    .map((s) => all.find((a) => a.slug === s))
    .filter(Boolean)
    .slice(0, 4)

  return (
    <>
      <Seo
        title={article.title}
        description={article.description}
        path={path}
        type="article"
        jsonLd={buildJsonLd(article, path)}
      />
      <article className="article-layout">
        <div className="container-narrow">
          <p className="eyebrow">{article.category}</p>
          <h1>{article.h1}</h1>
          <p className="article-meta">
            Updated {article.updatedAt} · {article.readingMinutes || 8} min read
          </p>
          <p className="lede">{article.description}</p>

          {article.sections?.map((section) => (
            <section key={section.h2} className="article-section">
              <h2>{section.h2}</h2>
              {section.paragraphs?.map((p) => (
                <p key={p.slice(0, 48)}>{p}</p>
              ))}
              {section.list?.length > 0 && (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {section.table && (
                <table className="article-table">
                  <thead>
                    <tr>
                      {section.table.headers.map((h) => (
                        <th key={h}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row) => (
                      <tr key={row.join('-')}>
                        {row.map((cell) => (
                          <td key={cell}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </section>
          ))}

          {article.faqs?.length > 0 && (
            <section className="article-section">
              <h2>FAQ</h2>
              <div className="faq-list">
                {article.faqs.map((faq) => (
                  <details key={faq.q}>
                    <summary>{faq.q}</summary>
                    <p style={{ color: 'var(--ink-muted)' }}>{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {article.cta && (
            <div className="cta-band">
              <h2>{article.cta.headline}</h2>
              <p className="lede">{article.cta.body}</p>
              <Link className="btn btn-primary" to={article.cta.primaryTo || '/commission'}>
                {article.cta.primaryLabel || 'Start a commission'}
              </Link>
            </div>
          )}

          {related.length > 0 && (
            <section className="article-section">
              <h2>Keep reading</h2>
              <div className="guides-grid">
                {related.map((item) => (
                  <Link key={item.slug} className="guide-card" to={`/guides/${item.slug}`}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </>
  )
}
