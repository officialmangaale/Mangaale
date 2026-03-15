import SectionReveal from '../../components/shared/SectionReveal'
import SectionHeader from '../../components/shared/SectionHeader'
import { Gem, ShieldCheck, Rocket, BarChartBig } from 'lucide-react'
import FeatureCard from '../../components/ui/FeatureCard'

const points = [
  {
    Icon: Gem,
    title: 'Clean guest experience',
    text: 'Serve guests with a polished digital journey from menu to checkout.'
  },
  {
    Icon: ShieldCheck,
    title: 'Reliable daily control',
    text: 'Keep orders, stock, and kitchen flow aligned throughout the day.'
  },
  {
    Icon: Rocket,
    title: 'Faster to launch',
    text: 'Go live with the right modules now and expand as the business grows.'
  },
  {
    Icon: BarChartBig,
    title: 'Clear business insight',
    text: 'Track revenue, speed, and team performance in one place.'
  }
]

const WhyChooseSection = () => {
  return (
    <SectionReveal className="mx-auto w-[92%] max-w-7xl">
      <SectionHeader
        eyebrow="Why Mangaale"
        title="Built for calm, fast operations"
        description="Mangaale removes system clutter so teams can focus on service, speed, and growth."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {points.map((point) => (
          <FeatureCard key={point.title} Icon={point.Icon} title={point.title} text={point.text} />
        ))}
      </div>
    </SectionReveal>
  )
}

export default WhyChooseSection
