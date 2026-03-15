import CTASection from '../../components/shared/CTASection'

const FinalCTASection = () => {
  return (
    <section className="mx-auto w-[92%] max-w-7xl pb-24">
      <CTASection
        title="Ready to modernize your operations?"
        description="Scale confidently with one platform for billing, kitchen flow, stock, and delivery."
        primaryText="Schedule an Executive Demo"
        primaryTo="/contact"
        secondaryText="See all plans"
        secondaryTo="/pricing"
      />
    </section>
  )
}

export default FinalCTASection
