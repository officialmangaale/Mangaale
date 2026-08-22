import usePageMeta from '../hooks/usePageMeta'
import HeroSection from '../components/sections/HeroSection'
import StatsSection from '../components/sections/StatsSection'
import HowItWorksSection from '../components/sections/HowItWorksSection'
import EcosystemSection from '../components/sections/EcosystemSection'
import RestaurantSection from '../components/sections/RestaurantSection'
import CustomerSection from '../components/sections/CustomerSection'
import BuiltForEveryoneSection from '../components/sections/BuiltForEveryoneSection'
import PopularRestaurantsSection from '../components/sections/PopularRestaurantsSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import DownloadAppSection from '../components/sections/DownloadAppSection'
import FinalCTASection from '../components/sections/FinalCTASection'

const HomePage = () => {
  usePageMeta(
    'Restaurant Platform with QR Ordering & Delivery',
    'Mangaale connects local restaurants, customers and riders — QR ordering, billing, order management and live delivery tracking in one platform.'
  )

  return (
    <div className="w-full">
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <EcosystemSection />
      <RestaurantSection />
      <CustomerSection />
      <BuiltForEveryoneSection />
      <PopularRestaurantsSection />
      <TestimonialsSection />
      <DownloadAppSection />
      <FinalCTASection />
    </div>
  )
}

export default HomePage
