import { Mail, Phone, MapPin } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta'
import SectionHeader from '../components/shared/SectionHeader'
import SectionReveal from '../components/shared/SectionReveal'
import ContactForm from '../components/forms/ContactForm'
import { contactData } from '../data/contactData'

const ContactPage = () => {
  usePageMeta('Contact Mangaale', 'Book a Mangaale demo for restaurants, cafes, cloud kitchens, and grocery stores.')

  return (
    <div className="pb-20">
      <SectionReveal className="mx-auto w-[92%] max-w-7xl pt-24">
        <SectionHeader
          eyebrow="Contact"
          title="Talk to the Mangaale team"
          description="Tell us about your business and we will help you choose the right setup."
        />
      </SectionReveal>

      <section className="mx-auto mt-8 grid w-[92%] max-w-7xl gap-6 lg:grid-cols-[1.3fr_1fr]">
        <ContactForm />
        <div className="mangaale-shell p-8">
          <h3 className="text-xl font-semibold text-white">Sales and support</h3>
          <div className="mt-6 space-y-4 text-sm text-mangaale-ink-soft">
            <p className="flex gap-3"><Mail size={18} className="text-mangaale-accent" /> <span>Email: {contactData.email}</span></p>
            <p className="flex gap-3"><Phone size={18} className="text-mangaale-accent" /> <span>Phone: {contactData.phones.join(' / ')}</span></p>
            <p className="flex gap-3"><MapPin size={18} className="text-mangaale-accent" /> <span>Office: {contactData.office}</span></p>
            <p className="mt-4">Office hours: {contactData.hours}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
