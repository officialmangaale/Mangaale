import SectionReveal from '../../components/shared/SectionReveal'
import SectionHeader from '../../components/shared/SectionHeader'
import { statsData } from '../../data/statsData'

const StatsSection = () => {
  return (
    <SectionReveal className="mx-auto w-[92%] max-w-7xl">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat) => (
          <div key={stat.label} className="mangaale-card p-6 text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
            <p className="mt-3 text-sm text-mangaale-ink-soft">{stat.label}</p>
          </div>
        ))}
      </div>
    </SectionReveal>
  )
}

export default StatsSection
