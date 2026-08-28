import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import Reveal from '../components/motion/Reveal'
import LegalLayout from '../components/layout/LegalLayout'

/**
 * Terms & Conditions.
 *
 * The footer already linked to /terms but no such route existed, so the link
 * dropped users on the 404 page. This is a straightforward terms page that
 * matches the tone and structure of the existing privacy policy.
 */
const SECTIONS = [
  {
    title: '1. Agreement to These Terms',
    body: 'By accessing the Mangaale website or using the Mangaale and Mangaale Partner applications (together, the "Services"), you agree to these Terms & Conditions. If you do not agree, please do not use the Services.'
  },
  {
    title: '2. Who Can Use Mangaale',
    body: 'You must be able to form a binding contract to use the Services. Restaurant and rider accounts are intended for business use and must be created by someone authorised to act for that business.'
  },
  {
    title: '3. Accounts and Security',
    body: 'You are responsible for the accuracy of the information on your account and for keeping your sign-in credentials secure. Notify us promptly at supportmangaale@gmail.com if you believe your account has been accessed without your permission.'
  },
  {
    title: '4. Orders, Pricing and Payments',
    list: [
      'Menu content, availability and pricing are set and maintained by the restaurant, not by Mangaale.',
      'An order is confirmed once the restaurant accepts it. Delivery estimates are estimates, not guarantees.',
      'Applicable taxes, delivery fees and platform charges are shown before you confirm payment.',
      'Refunds and cancellations are handled according to the policy shown at checkout and may depend on the order status.'
    ]
  },
  {
    title: '5. Restaurant Partners',
    body: 'Restaurant partners are responsible for food quality, safety, accurate menu information, applicable licences (including FSSAI and GST where required) and compliance with local food-service regulations. Mangaale provides the technology platform that supports these operations.'
  },
  {
    title: '6. Delivery Partners',
    body: 'Delivery partners are responsible for holding valid documentation, following traffic and safety laws, and handling orders appropriately during delivery. Payouts follow the rate structure communicated at onboarding.'
  },
  {
    title: '7. Acceptable Use',
    list: [
      'Do not misuse, disrupt, reverse-engineer, or attempt to gain unauthorised access to the Services.',
      'Do not upload unlawful, misleading, infringing or harmful content.',
      'Do not use the Services to place fraudulent orders or to impersonate another person or business.'
    ]
  },
  {
    title: '8. Intellectual Property',
    body: 'The Mangaale name, logo, software, designs and platform content are owned by Mangaale and protected by applicable intellectual property law. Content you upload remains yours; you grant us the licence needed to operate and display it within the Services.'
  },
  {
    title: '9. Service Availability',
    body: 'We work to keep the Services available and reliable, but we do not guarantee uninterrupted access. Features may change, and maintenance or third-party outages may temporarily affect availability.'
  },
  {
    title: '10. Limitation of Liability',
    body: 'To the extent permitted by law, Mangaale is not liable for indirect, incidental or consequential losses arising from use of the Services. Nothing in these terms limits liability that cannot be limited under applicable law.'
  },
  {
    title: '11. Termination',
    body: 'You may stop using the Services at any time and may request account deletion. We may suspend or end access where these terms are breached or where required for legal, security or operational reasons.'
  },
  {
    title: '12. Changes to These Terms',
    body: 'We may update these Terms & Conditions from time to time. When we do, the "Last updated" date above will change. Continuing to use the Services after an update means the updated terms apply.'
  },
  {
    title: '13. Governing Law',
    body: 'These terms are governed by the laws of India, and the courts of India will have jurisdiction over any disputes relating to the Services.'
  }
]

const TermsPage = () => {
  usePageMeta(
    'Terms & Conditions',
    'The terms that apply when you use the Mangaale website, customer app and Mangaale Partner app.'
  )

  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms & Conditions"
      updated="Last updated: March 15, 2026"
      intro="These terms explain the rules for using Mangaale as a customer, restaurant partner or delivery partner."
    >
      {SECTIONS.map((section, i) => (
        <Reveal key={section.title} as="section" delay={i * 0.02} y={18}>
          <h2 className="text-[1.35rem] font-extrabold text-mangaale-text">{section.title}</h2>

          {section.body && (
            <p className="mt-3 leading-relaxed text-mangaale-subtext">{section.body}</p>
          )}

          {section.list && (
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-mangaale-subtext marker:text-mangaale-primary">
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </Reveal>
      ))}

      <Reveal as="section" y={18}>
        <h2 className="text-[1.35rem] font-extrabold text-mangaale-text">14. Contact</h2>
        <p className="mt-3 leading-relaxed text-mangaale-subtext">
          Questions about these terms? Email{' '}
          <a
            href="mailto:supportmangaale@gmail.com"
            className="font-semibold text-mangaale-primary hover:underline"
          >
            supportmangaale@gmail.com
          </a>{' '}
          or visit our{' '}
          <Link to="/contact" className="font-semibold text-mangaale-primary hover:underline">
            contact page
          </Link>
          .
        </p>
      </Reveal>
    </LegalLayout>
  )
}

export default TermsPage
