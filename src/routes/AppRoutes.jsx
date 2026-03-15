import { useRoutes } from 'react-router-dom'
import SiteLayout from '../layouts/SiteLayout'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ServicesPage from '../pages/ServicesPage'
import SolutionsPage from '../pages/SolutionsPage'
import PricingPage from '../pages/PricingPage'
import ContactPage from '../pages/ContactPage'
import AccountDeletionPage from '../pages/AccountDeletionPage'
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage'
import NotFoundPage from '../pages/NotFoundPage'

const AppRoutes = () => {
  return useRoutes([
    {
      element: <SiteLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/about', element: <AboutPage /> },
        { path: '/services', element: <ServicesPage /> },
        { path: '/solutions', element: <SolutionsPage /> },
        { path: '/pricing', element: <PricingPage /> },
        { path: '/contact', element: <ContactPage /> },
        { path: '/account-deletion', element: <AccountDeletionPage /> },
        { path: '/privacy-policy', element: <PrivacyPolicyPage /> },
        { path: '*', element: <NotFoundPage /> }
      ]
    }
  ])
}

export default AppRoutes
