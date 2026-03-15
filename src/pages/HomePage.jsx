import usePageMeta from '../hooks/usePageMeta'
import HeroSection from '../components/sections/HeroSection'
import StatsSection from '../components/sections/StatsSection'
import ServicesSection from '../components/sections/ServicesSection'
import WhyChooseSection from '../components/sections/WhyChooseSection'
import FeatureShowcaseSection from '../components/sections/FeatureShowcaseSection'
import ProcessSection from '../components/sections/ProcessSection'
import IndustriesSection from '../components/sections/IndustriesSection'
import TestimonialSection from '../components/sections/TestimonialSection'
import PricingSection from '../components/sections/PricingSection'
import FAQSection from '../components/sections/FAQSection'
import FinalCTASection from '../components/sections/FinalCTASection'

const HomePage = () => {
  usePageMeta(
    'Mangaale | Home',
    'Premium restaurant and food commerce platform with billing, inventory, KDS, QR ordering, and delivery operations modules.'
  )

  return (
    <div className="space-y-24 pb-24">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseSection />
      <FeatureShowcaseSection />
      <ProcessSection />
      <IndustriesSection />
      <TestimonialSection />
      <PricingSection compact />
      <FAQSection />
      <FinalCTASection />
    </div>
  )
}

export default HomePage
