import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { articleStats } from './enrich-articles.mjs'
import { withEducationDepth } from './education-rich-depth.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const outPath = join(root, 'src/content/articles/education.js')

const HOW_TO = new Set([
  'how-handpans-are-made',
  'how-propane-tank-drums-are-forged',
  'handpan-care-and-rust-prevention',
  'how-to-play-handpan-basics',
  'transporting-and-storing-a-handpan',
  'recording-handpan-at-home',
  'playing-handpan-outdoors',
  'building-a-daily-handpan-practice',
])

function normalize(article) {
  return {
    ...article,
    category: 'education',
    schemaType: HOW_TO.has(article.slug) ? 'HowTo' : article.schemaType || 'Article',
  }
}

const { education } = await import(pathToFileURL(join(root, 'scripts/data/education.mjs')).href)
const out = education.map((a) => normalize(withEducationDepth(a)))

writeFileSync(
  outPath,
  `/** Education guides from Stillforge. */\nexport default ${JSON.stringify(out, null, 2)}\n`,
)

for (const a of out) {
  const s = articleStats(a)
  console.log(`${a.slug}: words=${s.words} schema=${a.schemaType}`)
}
