import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import WhatsAppButton from '../components/shared/WhatsAppButton'
import AppUpdateNotification from '../components/shared/AppUpdateNotification'
import useAppVersionCheck from '../hooks/useAppVersionCheck'

const SiteLayout = () => {
  const { updateAvailable, latestVersion } = useAppVersionCheck()

  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-mangaale-text">
      <Navbar />
      <AppUpdateNotification 
        updateAvailable={updateAvailable}
        latestVersion={latestVersion}
      />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default SiteLayout
