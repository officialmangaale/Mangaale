/**
 * JavaScript-free pages emitted ahead of the SPA fallback.
 *
 * The three legal documents in `legal-pages/` are deployment artifacts copied
 * byte-for-byte from the restaurant-owner repository's Dart legal generator.
 * Legal wording must be changed in that repository's Markdown, regenerated,
 * and then synchronized here. This website build never maintains a second
 * version of the policy text.
 */
import { readFileSync } from 'node:fs'

import { companyData, legalLastUpdated } from '../src/data/companyData.js'
import { siteRoutes } from '../src/data/siteRoutes.js'

const { name, siteUrl } = companyData
const legalPagesDirectory = new URL('../legal-pages/', import.meta.url)
const requiredCin = 'U47912UP2026OPC251523'

const esc = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const legalArtifact = (file) => {
  const body = readFileSync(new URL(file, legalPagesDirectory), 'utf8')

  if (!body.includes(requiredCin)) {
    throw new Error(`${file} does not contain the required Mangaale CIN`)
  }
  if (/TODO|PLACEHOLDER|DRAFT|pre-publication|replace this|confirm before|TBD/i.test(body)) {
    throw new Error(`${file} contains non-production legal copy`)
  }

  return body
}

const utilityStyles = `
:root{--brand:#0CB79D;--brand-deep:#087F70;--ink:#10212B;--muted:#5E6B73;--border:#E7EEEC;--tint:#F2FBF9}
*,*::before,*::after{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{margin:0;background:#fff;color:var(--ink);font-family:Manrope,Inter,"Segoe UI",system-ui,-apple-system,sans-serif;font-size:16px;line-height:1.7;-webkit-font-smoothing:antialiased}
a{color:var(--brand-deep);overflow-wrap:anywhere}
a:hover{color:var(--brand)}
.wrap{width:92%;max-width:820px;margin:0 auto}
.skip{position:absolute;left:-9999px}
.skip:focus{left:1rem;top:1rem;z-index:10;padding:.6rem 1rem;background:#fff;border:2px solid var(--brand)}
.head{border-bottom:1px solid var(--border)}
.head .wrap{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1.1rem 0}
.brand{font-weight:800;font-size:1.25rem;color:var(--ink);text-decoration:none}
main{padding:4rem 0 5rem}
.eyebrow{margin:0;font-size:.75rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--brand-deep)}
h1{margin:.9rem 0 0;font-size:clamp(2rem,8vw,2.7rem);line-height:1.15}
.intro{margin-top:1.5rem;font-size:1.05rem;color:var(--muted)}
.links{margin-top:2rem;padding:1.4rem 1.5rem;border:1px solid var(--border);border-radius:1rem;background:var(--tint)}
.links li{margin:.55rem 0}
`.trim()

const utilityDocument = ({ title, description, body }) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}">
    <meta name="robots" content="noindex, follow">
    <style>${utilityStyles}</style>
  </head>
  <body>
    <a class="skip" href="#content">Skip to content</a>
    <header class="head"><div class="wrap"><a class="brand" href="/">Mangaale</a></div></header>
    <main id="content"><div class="wrap">${body}</div></main>
  </body>
</html>
`

const notFoundPage = () =>
  utilityDocument({
    title: `Page not found | ${name}`,
    description: 'The page you are looking for does not exist.',
    body: `
      <p class="eyebrow">404</p>
      <h1>Page not found</h1>
      <p class="intro">The page you are looking for does not exist or has moved.</p>
      <ul class="links">
        <li><a href="/">Home</a></li>
        <li><a href="/terms">Terms of Service</a></li>
        <li><a href="/privacy-policy">Privacy Policy</a></li>
        <li><a href="/account-deletion">Account Deletion</a></li>
        <li><a href="/contact">Contact us</a></li>
      </ul>`
  })

const robotsTxt = () => `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`

const sitemapXml = () => {
  const urls = siteRoutes
    .map(
      (route) => `  <url>
    <loc>${siteUrl}${route.path === '/' ? '/' : route.path}</loc>
    <lastmod>${legalLastUpdated.iso}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}

export const renderStaticPages = () => [
  {
    path: '/terms',
    file: 'terms.html',
    contentType: 'text/html; charset=utf-8',
    body: legalArtifact('terms.html')
  },
  {
    path: '/privacy-policy',
    file: 'privacy-policy.html',
    contentType: 'text/html; charset=utf-8',
    body: legalArtifact('privacy-policy.html')
  },
  {
    path: '/account-deletion',
    file: 'account-deletion.html',
    contentType: 'text/html; charset=utf-8',
    body: legalArtifact('account-deletion.html')
  },
  {
    path: '/404.html',
    file: '404.html',
    contentType: 'text/html; charset=utf-8',
    body: notFoundPage()
  },
  {
    path: '/robots.txt',
    file: 'robots.txt',
    contentType: 'text/plain; charset=utf-8',
    body: robotsTxt()
  },
  {
    path: '/sitemap.xml',
    file: 'sitemap.xml',
    contentType: 'application/xml; charset=utf-8',
    body: sitemapXml()
  }
]
