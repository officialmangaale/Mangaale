import SectionReveal from '../../components/shared/SectionReveal'
import SectionHeader from '../../components/shared/SectionHeader'
import PricingCard from '../../components/ui/PricingCard'
import { pricingData } from '../../data/pricingData'

const PricingSection = ({ compact = false }) => {
  return (
    <SectionReveal className="mx-auto w-[92%] max-w-7xl">
      <SectionHeader
        eyebrow="Plans"
        title="Plans for growing teams"
        description="Choose the setup that fits today and expand as your operation grows."
      />
      <div className={`mt-8 grid gap-6 ${compact ? 'md:grid-cols-3' : 'md:grid-cols-2 xl:grid-cols-3'}`}>
        {pricingData.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </SectionReveal>
  )
}

export default PricingSection
