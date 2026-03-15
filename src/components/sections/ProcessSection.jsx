import SectionReveal from '../../components/shared/SectionReveal'
import SectionHeader from '../../components/shared/SectionHeader'
import { processData } from '../../data/processData'

const ProcessSection = () => {
  return (
    <SectionReveal className="mx-auto w-[92%] max-w-7xl">
      <SectionHeader
        eyebrow="Launch process"
        title="Go live in four clear steps"
        description="A simple rollout from setup to daily operations."
      />
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {processData.map((item) => (
          <div key={item.step} className="mangaale-card p-6">
            <p className="text-sm text-mangaale-accent">Step {item.step}</p>
            <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm text-mangaale-ink-soft">{item.text}</p>
          </div>
        ))}
      </div>
    </SectionReveal>
  )
}

export default ProcessSection
