import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { gifts } from './generate-article-bundles.mjs'
import { beginners } from './data/beginners.mjs'
import { compare } from './data/compare.mjs'
import { education } from './data/education.mjs'
import { story } from './data/story.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '..', 'src', 'content', 'articles')

function writeBundle(name, comment, arr, expected) {
  if (arr.length !== expected) {
    throw new Error(`${name}: expected ${expected} articles, got ${arr.length}`)
  }
  const file = path.join(outDir, `${name}.js`)
  const body = `/** ${comment} */\nexport default ${JSON.stringify(arr, null, 2)}\n`
  fs.writeFileSync(file, body, 'utf8')
  return arr.length
}

// Re-import gifts from inline module - export gifts from generate file
const counts = {
  gifts: writeBundle('gifts', 'Gift-intent guides from Stillforge.', gifts, 16),
  beginners: writeBundle('beginners', 'Beginner guides from Stillforge.', beginners, 14),
  compare: writeBundle('compare', 'Compare and buyer guides from Stillforge.', compare, 16),
  education: writeBundle('education', 'Education guides from Stillforge.', education, 18),
  story: writeBundle('story', 'Stillforge story and craft essays.', story, 12),
}

console.log('Written:', counts)
console.log('Total:', Object.values(counts).reduce((a, b) => a + b, 0))
