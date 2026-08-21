import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollToTop from '../components/layout/ScrollToTop'
import WhatsAppButton from '../components/shared/WhatsAppButton'
import AppUpdateNotification from '../components/shared/AppUpdateNotification'
import ScrollProgress from '../components/motion/ScrollProgress'
import useAppVersionCheck from '../hooks/useAppVersionCheck'

const SiteLayout = () => {
  const { updateAvailable, latestVersion, dismissUpdate } = useAppVersionCheck()

  return (
    <div className="flex min-h-screen w-full flex-col bg-white text-mangaale-text">
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <AppUpdateNotification
        updateAvailable={updateAvailable}
        latestVersion={latestVersion}
        onDismiss={dismissUpdate}
      />
      <main className="w-full flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default SiteLayout
