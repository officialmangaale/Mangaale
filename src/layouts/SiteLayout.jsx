import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const SiteLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-mangaale-bg text-mangaale-ink">
      <Navbar />
      <main className="flex-1 pt-6 sm:pt-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default SiteLayout
