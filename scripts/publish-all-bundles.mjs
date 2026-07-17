import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { enrichArticle, articleStats } from './enrich-articles.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const outDir = join(root, 'src/content/articles')

async function load(path) {
  return (await import(pathToFileURL(path).href)).default
}

function dump(name, header, data) {
  const code = `${header}\nexport default ${JSON.stringify(data, null, 2)}\n`
  writeFileSync(join(outDir, `${name}.js`), code)
  console.log(`Wrote ${name}.js (${data.length} articles)`)
}

const compareRaw = await load(join(root, 'scripts/compare-rich-data.mjs'))
const { beginners } = await import(pathToFileURL(join(root, 'scripts/data/beginners.mjs')).href)
const { education } = await import(pathToFileURL(join(root, 'scripts/data/education.mjs')).href)

const compare = compareRaw.map((a) => enrichArticle({ ...a, category: 'compare' }))
const beginnersOut = beginners.map((a) =>
  enrichArticle({ ...a, category: 'beginners' }),
)
const educationOut = education.map((a) =>
  enrichArticle({ ...a, category: 'education' }),
)

dump(
  'compare',
  '/** Stillforge comparison and buyer guides (16 articles). */',
  compare,
)
dump(
  'beginners',
  '/** Beginner guides from Stillforge. */',
  beginnersOut,
)
dump(
  'education',
  '/** Educational guides from Stillforge. */',
  educationOut,
)

for (const [label, list] of [
  ['compare', compare],
  ['beginners', beginnersOut],
  ['education', educationOut],
]) {
  for (const a of list) {
    const s = articleStats(a)
    const ok = s.sections >= 5 && s.minParas >= 3 && s.words >= 900
    console.log(
      `${label} ${a.slug}: sections=${s.sections} minParas=${s.minParas} words=${s.words} ${ok ? 'OK' : 'CHECK'}`,
    )
  }
}
