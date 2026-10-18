// Runs after `vite build`. Writes a copy of index.html for every page with that page's own
// title, description and share tags, so search engines and link previews see the right text
// before any JavaScript runs. Also writes sitemap.xml.
import fs from 'node:fs'
import path from 'node:path'
import { caseStudies } from '../src/data/caseStudies.js'
import { SITE_URL, pages } from '../src/seo.js'

const dist = path.resolve('dist')
const html = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

const routes = { ...pages }
for (const c of caseStudies) {
  routes[`/projects/${c.slug}`] = {
    title: `${c.name}: ${c.title} | Olanrewaju Oredipe`,
    description: c.card,
    image: `/images/${c.cover}.webp`,
  }
}

for (const [route, m] of Object.entries(routes)) {
  const url = SITE_URL + (route === '/' ? '/' : route)
  const image = m.image ? SITE_URL + m.image : `${SITE_URL}/og-image.png`
  let out = html
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(m.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(m.description)}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(m.title)}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(m.description)}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:image" content=")[^"]*/, `$1${image}`)
    .replace(/(<meta name="twitter:image" content=")[^"]*/, `$1${image}`)
  if (m.image) out = out.replace(/\s*<meta property="og:image:(width|height)"[^>]*>/g, '')
  if (route === '/') {
    fs.writeFileSync(path.join(dist, 'index.html'), out)
  } else {
    fs.mkdirSync(path.join(dist, route), { recursive: true })
    fs.writeFileSync(path.join(dist, route, 'index.html'), out)
  }
}

const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.keys(routes)
  .map((r) => `  <url><loc>${SITE_URL}${r === '/' ? '/' : r}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n')}
</urlset>
`
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)
console.log(`Prerendered ${Object.keys(routes).length} pages and wrote sitemap.xml`)
