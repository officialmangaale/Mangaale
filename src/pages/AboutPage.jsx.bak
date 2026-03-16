import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import SectionReveal from '../components/shared/SectionReveal'

const AboutPage = () => {
  usePageMeta('About Mangaale', 'Learn about Mangaale, our vision for premium operations, and how we support restaurants and food chains.')

  return (
    <div className="pb-20">
      <SectionReveal className="mx-auto w-[92%] max-w-7xl pt-24">
        <p className="section-eyebrow inline-block">About Mangaale</p>
        <h1 className="mt-6 max-w-4xl text-4xl font-bold text-white md:text-5xl">Built for modern food operations.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-mangaale-ink-soft">
          Mangaale brings billing, kitchen, inventory, QR ordering, and delivery into one clean platform for teams that want control without complexity.
        </p>
        <div className="mt-8 grid gap-4 text-sm text-mangaale-ink-soft md:grid-cols-3">
          <div className="mangaale-card p-5">
            <h3 className="text-lg font-semibold text-white">Mission</h3>
            <p className="mt-2">Make modern operations simple for food businesses.</p>
          </div>
          <div className="mangaale-card p-5">
            <h3 className="text-lg font-semibold text-white">Focus</h3>
            <p className="mt-2">Clear software, reliable workflows, and better visibility.</p>
          </div>
          <div className="mangaale-card p-5">
            <h3 className="text-lg font-semibold text-white">Promise</h3>
            <p className="mt-2">One platform, less operational noise.</p>
          </div>
        </div>
        <div className="mt-10">
          <Link to="/contact" className="mangaale-button-primary">Book a Demo</Link>
        </div>
      </SectionReveal>
    </div>
  )
}

export default AboutPage
