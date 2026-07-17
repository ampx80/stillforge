import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const mod = await import(pathToFileURL(join(root, 'scripts/compare-rich-data.mjs')).href)
const out = join(root, 'src/content/articles/compare.js')
writeFileSync(
  out,
  `/** Stillforge comparison and buyer guides (16 articles). */\nexport default ${JSON.stringify(mod.default, null, 2)}\n`,
)
console.log('compare.js', mod.default.length, 'articles')
