import usePageMeta from '../hooks/usePageMeta'
import PricingSection from '../components/sections/PricingSection'
import SectionHeader from '../components/shared/SectionHeader'
import SectionReveal from '../components/shared/SectionReveal'

const PricingPage = () => {
  usePageMeta('Mangaale Pricing', 'Compare Mangaale plans for restaurants, cafes, chains, and grocery operators.')

  return (
    <div className="pb-20">
      <SectionReveal className="mx-auto w-[92%] max-w-7xl pt-24">
        <SectionHeader
          eyebrow="Pricing"
          title="Pricing designed to scale with you"
          description="Simple plans, clear value, and room to grow."
        />
      </SectionReveal>
      <div className="mt-4">
        <PricingSection />
      </div>
    </div>
  )
}

export default PricingPage
