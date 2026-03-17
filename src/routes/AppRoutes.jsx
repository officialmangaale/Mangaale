import { useRoutes } from 'react-router-dom'
import SiteLayout from '../layouts/SiteLayout'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ForRestaurantsPage from '../pages/ForRestaurantsPage'
import ForCustomersPage from '../pages/ForCustomersPage'
import ForRidersPage from '../pages/ForRidersPage'
import PricingPage from '../pages/PricingPage'
import ContactPage from '../pages/ContactPage'
import DownloadPage from '../pages/DownloadPage'
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage'
import NotFoundPage from '../pages/NotFoundPage'

const AppRoutes = () => {
  return useRoutes([
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
        { path: '*', element: <NotFoundPage /> }
      ]
    }
  ])
}

export default AppRoutes
