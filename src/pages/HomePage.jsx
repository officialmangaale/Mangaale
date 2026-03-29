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
import DownloadAppSection from '../components/sections/DownloadAppSection'
import FinalCTASection from '../components/sections/FinalCTASection'

const HomePage = () => {
  usePageMeta(
    'Mangaale | Restaurant Platform with QR Ordering & Delivery',
    'Complete restaurant management platform with QR ordering, billing, order management, and delivery coordination. Currently onboarding restaurant partners in pilot phase.'
  )

  return (
    <div className="w-full pt-[72px]">
      <HeroSection />
      <StatsSection />
      <WhatIsMangaaleSection />
      <CoreUserFlowsSection />
      <FeatureShowcaseSection />
      <HowItWorksSection />
      <ProductPreviewSection />
      <WhyChooseMangaaleSection />
      <PilotMessageSection />
      <DownloadAppSection />
      <FinalCTASection />
    </div>
  )
}

export default HomePage
