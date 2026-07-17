import { writeFileSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const out = join(here, '../../src/content/articles/story.js')

const files = readdirSync(here)
  .filter((f) => f.endsWith('.article.mjs'))
  .sort()

const articles = []
for (const f of files) {
  const mod = await import(pathToFileURL(join(here, f)).href)
  articles.push(mod.default)
}

const body = `export default ${JSON.stringify(articles, null, 2)}\n`
writeFileSync(out, body, 'utf8')

for (const a of articles) {
  let words = 0
  for (const s of a.sections) {
    for (const p of s.paragraphs) words += p.split(/\s+/).filter(Boolean).length
    if (s.list) for (const i of s.list) words += i.split(/\s+/).filter(Boolean).length
    if (s.table) {
      for (const h of s.table.headers) words += h.split(/\s+/).filter(Boolean).length
      for (const row of s.table.rows) {
        for (const cell of row) words += cell.split(/\s+/).filter(Boolean).length
      }
    }
  }
  if (words < 800) console.error(`${a.slug}: only ${words} words`)
  else console.log(`${a.slug}: ${words} words`)
}

console.log(`Wrote ${articles.length} articles to ${out}`)
