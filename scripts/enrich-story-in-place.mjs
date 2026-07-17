import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { enrichArticle, articleStats } from './enrich-articles.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const storyPath = join(root, 'src/content/articles/story.js')

const { default: articles } = await import(pathToFileURL(storyPath).href)

const enriched = articles.map((a) => enrichArticle({ ...a, category: 'story' }))

writeFileSync(
  storyPath,
  `/** Stillforge craft and brand stories. */\nexport default ${JSON.stringify(enriched, null, 2)}\n`,
)

for (const a of enriched) {
  const s = articleStats(a)
  console.log(`${a.slug}: sections=${s.sections} minParas=${s.minParas} words=${s.words}`)
}
