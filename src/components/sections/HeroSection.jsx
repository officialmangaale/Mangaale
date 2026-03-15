import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import { servicesData } from '../../data/servicesData'
import SectionReveal from '../../components/shared/SectionReveal'
import SectionHeader from '../../components/shared/SectionHeader'

const HeroSection = () => {
  return (
    <SectionReveal className="relative overflow-hidden">
      <div className="absolute -right-24 -top-20 h-72 w-72 rounded-full bg-gradient-to-br from-mangaale-accent/20 to-transparent blur-3xl" />
      <div className="mx-auto w-[92%] max-w-7xl px-2 pt-24 pb-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="section-eyebrow">
              <Sparkles size={14} />
              Unified commerce for food brands
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[0.96] tracking-tight sm:text-5xl lg:text-6xl xl:text-[5rem]">
              One operating system for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mangaale-accent to-mangaale-accent-soft">
                {' '}modern restaurants and grocery brands.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mangaale-ink-soft">
              Billing, inventory, kitchen flow, QR ordering, and delivery management in one clear platform.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="mangaale-button-primary">Book a Demo</Link>
              <Link to="/services" className="mangaale-button-secondary inline-flex items-center gap-2">
                Explore Platform
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-mangaale-ink-soft">
              <p>Billing, inventory, and KDS</p>
              <p>QR ordering and digital menus</p>
              <p>Delivery, analytics, and control</p>
            </div>
          </div>

          <div className="relative">
            <div className="mangaale-shell relative p-5 md:p-7">
              <div className="rounded-2xl border border-white/8 bg-[#0a0e16] p-4 shadow-luxe">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">Mangaale Control Center</h3>
                <div className="mt-5 grid gap-3">
                  {servicesData.slice(0, 5).map((service) => (
                    <div key={service.id} className="rounded-xl border border-white/10 bg-[#151a29] px-3 py-2 text-sm text-mangaale-ink-soft">
                      {service.title}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-mangaale-accent">Live operations across every channel</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <SectionHeader
            eyebrow="Built for scale"
            title="Trusted by ambitious food businesses"
            description="From independent cafes to growing multi-location brands."
            centered
          />
        </div>
      </div>
    </SectionReveal>
  )
}

export default HeroSection
