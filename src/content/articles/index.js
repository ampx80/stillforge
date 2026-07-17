import gifts from './gifts.js'
import beginners from './beginners.js'
import compare from './compare.js'
import education from './education.js'
import story from './story.js'

const bundles = [gifts, beginners, compare, education, story]

function normalize(list) {
  if (!Array.isArray(list)) return []
  return list.filter((item) => item && item.slug && item.title)
}

export function getAllArticles() {
  return bundles.flatMap(normalize)
}

export function getArticleBySlug(slug) {
  return getAllArticles().find((article) => article.slug === slug) || null
}

export function getArticleSlugs() {
  return getAllArticles().map((article) => article.slug)
}
