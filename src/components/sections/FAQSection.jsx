import SectionReveal from '../../components/shared/SectionReveal'
import SectionHeader from '../../components/shared/SectionHeader'
import FAQItem from '../../components/ui/FAQItem'
import { faqsData } from '../../data/faqsData'

const FAQSection = () => {
  return (
    <SectionReveal className="mx-auto w-[92%] max-w-4xl">
      <SectionHeader
        eyebrow="Questions"
        title="Common questions"
        description="Clear answers before you book a demo."
        centered
      />
      <div className="mt-8 space-y-3">
        {faqsData.map((item) => (
          <FAQItem key={item.question} item={item} />
        ))}
      </div>
    </SectionReveal>
  )
}

export default FAQSection
