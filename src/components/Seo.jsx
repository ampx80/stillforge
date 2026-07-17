import { useEffect } from 'react'

function upsertMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  if (!href) return
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function Seo({
  title,
  description,
  path = '/',
  type = 'website',
  jsonLd,
}) {
  useEffect(() => {
    const fullTitle = title.includes('Stillforge') ? title : `${title} | Stillforge`
    document.title = fullTitle
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:site_name', 'Stillforge')
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', description)

    const origin = window.location.origin
    const url = `${origin}${path}`
    upsertMeta('property', 'og:url', url)
    upsertLink('canonical', url)

    const scriptId = 'stillforge-jsonld'
    const existing = document.getElementById(scriptId)
    if (existing) existing.remove()
    if (jsonLd) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = scriptId
      script.text = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }

    return () => {
      const node = document.getElementById(scriptId)
      if (node) node.remove()
    }
  }, [title, description, path, type, jsonLd])

  return null
}
