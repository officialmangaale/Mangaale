import SectionReveal from '../../components/shared/SectionReveal'
import SectionHeader from '../../components/shared/SectionHeader'
import ServiceCard from '../../components/ui/ServiceCard'
import { servicesData } from '../../data/servicesData'

const ServicesSection = () => {
  return (
    <SectionReveal id="services" className="mx-auto w-[92%] max-w-7xl">
      <div className="mb-10">
        <SectionHeader
          eyebrow="Core products"
          title="Software for every stage of service"
          description="Each module is designed to keep teams faster, calmer, and more in control."
        />
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} compact />
        ))}
      </div>
    </SectionReveal>
  )
}

export default ServicesSection
