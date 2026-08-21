import { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import SiteLayout from '../layouts/SiteLayout'
import HomePage from '../pages/HomePage'

/**
 * The home page is bundled eagerly (it is the entry point for almost every
 * visitor); every other route is code-split so the initial JS payload stays
 * small. All original routes are preserved, plus /terms and /account-deletion
 * which were linked from the footer but had no route.
 */
const AboutPage = lazy(() => import('../pages/AboutPage'))
const ForRestaurantsPage = lazy(() => import('../pages/ForRestaurantsPage'))
const ForCustomersPage = lazy(() => import('../pages/ForCustomersPage'))
const ForRidersPage = lazy(() => import('../pages/ForRidersPage'))
const PricingPage = lazy(() => import('../pages/PricingPage'))
const ContactPage = lazy(() => import('../pages/ContactPage'))
const DownloadPage = lazy(() => import('../pages/DownloadPage'))
const PrivacyPolicyPage = lazy(() => import('../pages/PrivacyPolicyPage'))
const TermsPage = lazy(() => import('../pages/TermsPage'))
const AccountDeletionPage = lazy(() => import('../pages/AccountDeletionPage'))
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
        { path: '/privacy-policy', element: <PrivacyPolicyPage /> },
        { path: '/terms', element: <TermsPage /> },
        { path: '/account-deletion', element: <AccountDeletionPage /> },
        { path: '*', element: <NotFoundPage /> }
      ]
    }
  ])

  return <Suspense fallback={<RouteFallback />}>{element}</Suspense>
}

export default AppRoutes
