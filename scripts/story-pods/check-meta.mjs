import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '../..')
const txt = readFileSync(join(root, 'src/content/articles/story.js'), 'utf8')
const slugs = [...txt.matchAll(/"slug": "([^"]+)"/g)].map((m) => m[1])
console.log('slug count:', slugs.length)
for (const m of txt.matchAll(/"description": "([^"]+)"/g)) {
  const d = m[1]
  const n = d.length
  if (n < 140 || n > 160) console.log(`description ${n} chars: ${d}`)
}
