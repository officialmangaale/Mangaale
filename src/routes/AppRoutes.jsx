import { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import SiteLayout from '../layouts/SiteLayout'
import HomePage from '../pages/HomePage'

/**
 * The home page is bundled eagerly (it is the entry point for almost every
 * visitor); every other route is code-split so the initial JS payload stays
 * small.
 *
 * /terms, /privacy-policy and /account-deletion are deliberately absent: they
 * are pre-rendered HTML (scripts/staticPages.js) served ahead of the SPA rewrite,
 * because Play reviewers and crawlers do not run JavaScript. Route them here
 * again and react-router would swallow the navigation and show its own page
 * instead of the document those reviewers need. data/siteRoutes.js is the list
 * both halves read from; components/ui/SiteLink keeps links pointed at the real
 * documents.
 */
const AboutPage = lazy(() => import('../pages/AboutPage'))
const ForRestaurantsPage = lazy(() => import('../pages/ForRestaurantsPage'))
const ForCustomersPage = lazy(() => import('../pages/ForCustomersPage'))
const ForRidersPage = lazy(() => import('../pages/ForRidersPage'))
const PricingPage = lazy(() => import('../pages/PricingPage'))
const ContactPage = lazy(() => import('../pages/ContactPage'))
const DownloadPage = lazy(() => import('../pages/DownloadPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))

const RouteFallback = () => (
  <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-live="polite">
    <span className="sr-only">Loading page</span>
    <span className="h-8 w-8 animate-spin rounded-full border-2 border-mangaale-border border-t-mangaale-primary" />
  </div>
)

const AppRoutes = () => {
  const element = useRoutes([
    {
      element: <SiteLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/about', element: <AboutPage /> },
        { path: '/for-restaurants', element: <ForRestaurantsPage /> },
        { path: '/for-customers', element: <ForCustomersPage /> },
        { path: '/for-riders', element: <ForRidersPage /> },
        { path: '/pricing', element: <PricingPage /> },
        { path: '/contact', element: <ContactPage /> },
        { path: '/download', element: <DownloadPage /> },
        { path: '*', element: <NotFoundPage /> }
      ]
    }
  ])

  return <Suspense fallback={<RouteFallback />}>{element}</Suspense>
}

export default AppRoutes
