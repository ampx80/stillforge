import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { enrichArticle, articleStats } from './enrich-articles.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const giftsPath = join(root, 'src/content/articles/gifts.js')

const { default: articles } = await import(pathToFileURL(giftsPath).href)

const enriched = articles.map((a) => enrichArticle({ ...a, category: 'gifts' }))

writeFileSync(
  giftsPath,
  `/** Gift-intent guides from Stillforge. */\nexport default ${JSON.stringify(enriched, null, 2)}\n`,
)

for (const a of enriched) {
  const s = articleStats(a)
  console.log(`${a.slug}: sections=${s.sections} words=${s.words}`)
}
