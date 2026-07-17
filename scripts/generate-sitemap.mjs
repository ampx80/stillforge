import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const origin = process.env.SITE_ORIGIN || 'https://stillforge.vercel.app'

const staticPaths = [
  '/',
  '/play',
  '/shop',
  '/commission',
  '/craft',
  '/story',
  '/contact',
  '/guides',
]

async function loadSlugs() {
  try {
    const mod = await import(pathToFileURL(join(root, 'src/content/articles/index.js')).href)
    return mod.getArticleSlugs()
  } catch {
    return []
  }
}

const slugs = await loadSlugs()
const urls = [
  ...staticPaths,
  ...slugs.map((slug) => `/guides/${slug}`),
]

const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${origin}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === '/' ? '1.0' : path.startsWith('/guides/') ? '0.7' : '0.8'}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

mkdirSync(join(root, 'public'), { recursive: true })
writeFileSync(join(root, 'public/sitemap.xml'), body)
console.log(`Wrote sitemap with ${urls.length} URLs`)
