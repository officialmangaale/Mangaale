import usePageMeta from '../hooks/usePageMeta'
import SectionHeader from '../components/shared/SectionHeader'
import SectionReveal from '../components/shared/SectionReveal'
import ServiceCard from '../components/ui/ServiceCard'
import { servicesData } from '../data/servicesData'

const ServicesPage = () => {
  usePageMeta('Mangaale Services', 'Explore all Mangaale restaurant and food commerce services from billing to analytics and delivery.')

  return (
    <div className="space-y-12 pb-20">
      <SectionReveal className="mx-auto w-[92%] max-w-7xl pt-24">
        <SectionHeader
          eyebrow="Services"
          title="Software across every stage of service"
          description="From billing to delivery, every module is built to feel simple, fast, and dependable."
        />
      </SectionReveal>

      <section className="mx-auto w-[92%] max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
