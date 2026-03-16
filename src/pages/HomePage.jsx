import usePageMeta from '../hooks/usePageMeta'
import HeroSection from '../components/sections/HeroSection'
import StatsSection from '../components/sections/StatsSection'
import WhatIsMangaaleSection from '../components/sections/WhatIsMangaaleSection'
import CoreUserFlowsSection from '../components/sections/CoreUserFlowsSection'
import FeatureShowcaseSection from '../components/sections/FeatureShowcaseSection'
import HowItWorksSection from '../components/sections/HowItWorksSection'
import ProductPreviewSection from '../components/sections/ProductPreviewSection'
import WhyChooseMangaaleSection from '../components/sections/WhyChooseMangaaleSection'
import PilotMessageSection from '../components/sections/PilotMessageSection'
import FinalCTASection from '../components/sections/FinalCTASection'

const HomePage = () => {
  usePageMeta(
    'Mangaale | Restaurant Platform with QR Ordering & Delivery',
    'Complete restaurant management platform with QR ordering, billing, order management, and delivery coordination. Currently onboarding restaurant partners in pilot phase.'
  )

  return (
    <div className="w-full space-y-16 md:space-y-20 lg:space-y-24 pb-16 md:pb-20 lg:pb-24 pt-16 md:pt-20">
      <HeroSection />
      <StatsSection />
      <WhatIsMangaaleSection />
      <CoreUserFlowsSection />
      <FeatureShowcaseSection />
      <HowItWorksSection />
      <ProductPreviewSection />
      <WhyChooseMangaaleSection />
      <PilotMessageSection />
      <FinalCTASection />
    </div>
  )
}

export default HomePage
