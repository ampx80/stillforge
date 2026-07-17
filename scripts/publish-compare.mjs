import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

import { enrichArticle } from './enrich-articles.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const mod = await import(pathToFileURL(join(root, 'scripts/compare-rich-data.mjs')).href)
const out = join(root, 'src/content/articles/compare.js')
const compare = mod.default.map((a) => enrichArticle({ ...a, category: 'compare' }))
writeFileSync(
  out,
  `/** Stillforge comparison and buyer guides (16 articles). Source: scripts/compare-rich-data.mjs + enrich-articles.mjs */\nexport default ${JSON.stringify(compare, null, 2)}\n`,
)
console.log('compare.js', compare.length, 'articles')
