import { Link } from 'react-router-dom'
import SectionReveal from '../../components/shared/SectionReveal'
import SectionHeader from '../../components/shared/SectionHeader'
import { ArrowRight } from 'lucide-react'
import { industriesData } from '../../data/industriesData'

const IndustriesSection = () => {
  return (
    <SectionReveal className="mx-auto w-[92%] max-w-7xl">
      <SectionHeader
        eyebrow="Who it's for"
        title="Built for food businesses of every size"
        description="From independent cafes to multi-location restaurant and grocery operations."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {industriesData.map((industry) => (
          <article key={industry.name} className="mangaale-card p-6">
            <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
            <p className="mt-3 text-sm text-mangaale-ink-soft">{industry.description}</p>
            <Link to="/solutions" className="mt-5 inline-flex items-center gap-2 text-sm text-mangaale-accent">
              View use case <ArrowRight size={16} />
            </Link>
          </article>
        ))}
      </div>
    </SectionReveal>
  )
}

export default IndustriesSection
