import SectionReveal from '../../components/shared/SectionReveal'
import SectionHeader from '../../components/shared/SectionHeader'
import TestimonialCard from '../../components/ui/TestimonialCard'
import { testimonialsData } from '../../data/testimonialsData'

const TestimonialSection = () => {
  return (
    <SectionReveal className="mx-auto w-[92%] max-w-7xl">
      <SectionHeader eyebrow="What Teams Say" title="Built for operators, not complexity" description="Real operators share what changed after adopting Mangaale." centered />
      <div className="mt-8 grid md:grid-cols-2 gap-5">
        {testimonialsData.map((item) => (
          <TestimonialCard key={item.name} testimonial={item} />
        ))}
      </div>
    </SectionReveal>
  )
}

export default TestimonialSection
