import usePageMeta from '../hooks/usePageMeta'
import SectionHeader from '../components/shared/SectionHeader'
import SectionReveal from '../components/shared/SectionReveal'
import { solutionsData } from '../data/solutionsData'
import { Link } from 'react-router-dom'

const SolutionsPage = () => {
  usePageMeta('Mangaale Solutions', 'Explore solutions for restaurant owners, cafes, food chains, cloud kitchens, and grocery stores.')

  return (
    <div className="space-y-10 pb-20">
      <SectionReveal className="mx-auto w-[92%] max-w-7xl pt-24">
        <SectionHeader
          eyebrow="Solutions"
          title="Solutions shaped around how you operate"
          description="Choose the setup that fits your business today and expand as you grow."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {solutionsData.map((solution) => (
            <article key={solution.title} className="mangaale-card p-6">
              <p className="text-sm text-mangaale-primary">{solution.audience}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{solution.title}</h3>
              <p className="mt-3 text-mangaale-subtext">{solution.outcome}</p>
              <p className="mt-5 text-sm font-semibold text-white">Modules included:</p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-mangaale-subtext">
                {solution.modules.map((module) => (
                  <li key={module}>{module}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/contact" className="mangaale-button-primary">Book a solution call</Link>
        </div>
      </SectionReveal>
    </div>
  )
}

export default SolutionsPage
