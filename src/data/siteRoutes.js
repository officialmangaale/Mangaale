/**
 * Every URL this site answers, in one place.
 *
 * Three things have to agree about this list or the site breaks in ways that
 * only show up to a crawler:
 *
 *  - src/routes/AppRoutes.jsx, which renders the SPA routes;
 *  - the sitemap and the pre-rendered documents in scripts/staticPages.js;
 *  - the rewrite tables in vercel.json and nginx.conf, which send exactly these
 *    paths to the app shell and let everything else 404.
 *
 * `static: true` marks a path served as pre-rendered HTML instead of by the
 * SPA. Those must be linked with a real <a href> (see components/ui/SiteLink),
 * because react-router would otherwise intercept the click and land on the
 * SPA's 404.
 */
export const siteRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.7', changefreq: 'monthly' },
  { path: '/for-restaurants', priority: '0.8', changefreq: 'monthly' },
  { path: '/for-customers', priority: '0.8', changefreq: 'monthly' },
  { path: '/for-riders', priority: '0.7', changefreq: 'monthly' },
  { path: '/pricing', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.6', changefreq: 'monthly' },
  { path: '/download', priority: '0.7', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.9', changefreq: 'yearly', static: true },
  { path: '/account-deletion', priority: '0.9', changefreq: 'yearly', static: true },
  { path: '/terms', priority: '0.9', changefreq: 'yearly', static: true }
]

/** Paths served as pre-rendered HTML, outside the single-page app. */
export const staticRoutePaths = siteRoutes.filter((route) => route.static).map((route) => route.path)

export const isStaticRoute = (path) => staticRoutePaths.includes(path)
