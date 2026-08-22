import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import { contactData } from '../../data/contactData'

/**
 * Dark footer.
 *
 * Fixes carried over from the previous version:
 *  - column headings were `text-white` on a white background (invisible)
 *  - the copyright line contained a corrupted replacement character
 *  - "Terms & Conditions" pointed at a route that did not exist
 */

const COLUMNS = [
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Privacy Policy', to: '/privacy-policy' }
    ]
  },
  {
    title: 'Customers',
    links: [
      { label: 'Order Food', to: '/for-customers' },
      { label: 'Download App', to: '/download' },
      { label: 'Offers', to: '/for-customers' }
    ]
  },
  {
    title: 'Partners',
    links: [
      { label: 'Restaurant Partner', to: '/for-restaurants' },
      { label: 'Rider Partner', to: '/for-riders' },
      { label: 'Book Demo', to: '/contact' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms & Conditions', to: '/terms' },
      { label: 'Account Deletion', to: '/account-deletion' }
    ]
  }
]

<<<<<<< HEAD
const SOCIALS = [
  { label: 'Instagram', Icon: Instagram, href: 'https://instagram.com/mangaale' },
  { label: 'Facebook', Icon: Facebook, href: 'https://facebook.com/mangaale' },
  { label: 'LinkedIn', Icon: Linkedin, href: 'https://linkedin.com/company/mangaale' },
  { label: 'Twitter', Icon: Twitter, href: 'https://twitter.com/mangaale' }
]

const Footer = () => (
  <footer className="relative w-full overflow-hidden bg-mangaale-navy text-white">
    {/* subtle turquoise wash */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-mangaale-primary/15 blur-[120px]"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-32 right-0 h-[360px] w-[360px] rounded-full bg-mangaale-primary/10 blur-[110px]"
    />

    <div className="m-container relative py-16 lg:py-20">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6 lg:gap-8">
        {/* brand */}
        <div className="lg:col-span-2">
          <Link to="/" className="inline-flex items-center gap-2.5" aria-label="Mangaale home">
            <span className="flex h-9 w-9 items-center justify-center rounded-[0.7rem] bg-gradient-to-br from-mangaale-bright to-mangaale-secondary">
              <span className="text-[17px] font-extrabold leading-none text-white">M</span>
            </span>
            <span className="text-[1.35rem] font-extrabold tracking-tight text-white">Mangaale</span>
          </Link>

          <p className="mt-4 max-w-xs text-[0.92rem] leading-relaxed text-white/60">
            Connecting local restaurants, customers and riders through one seamless delivery
            ecosystem.
          </p>

          <div className="mt-6 flex gap-2.5">
            {SOCIALS.map(({ label, Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/12 bg-white/5 text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-mangaale-primary/50 hover:bg-mangaale-primary/15 hover:text-mangaale-bright"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
=======
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mangaale-container py-16 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <div className="inline-flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-mangaale-primary to-mangaale-secondary text-white font-display font-bold text-sm">
                M
              </span>
              <span className="font-display text-xl font-extrabold text-mangaale-text">Mangaale</span>
            </div>
            <p className="max-w-xs text-sm text-mangaale-subtext leading-relaxed">
              Unified software for billing, inventory, kitchen operations, QR ordering, and delivery.
            </p>
            <div className="flex gap-3 pt-1">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Twitter, label: 'Twitter' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center text-mangaale-subtext hover:bg-mangaale-primary/10 hover:text-mangaale-primary transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
          </div>
        </div>

<<<<<<< HEAD
        {/* link columns */}
        {COLUMNS.map((column) => (
          <div key={column.title}>
            <h4 className="text-[0.82rem] font-bold uppercase tracking-[0.12em] text-white">
              {column.title}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={`${column.title}-${link.label}`}>
                  <Link
                    to={link.to}
                    className="text-[0.9rem] text-white/60 transition-colors hover:text-mangaale-bright"
                  >
                    {link.label}
=======
          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider uppercase text-mangaale-text">Quick Links</h4>
            <ul className="grid gap-2.5 text-sm">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-mangaale-subtext transition-colors hover:text-mangaale-primary">
                    {item.label}
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
                  </Link>
                </li>
              ))}
            </ul>
          </div>
<<<<<<< HEAD
        ))}
=======

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider uppercase text-mangaale-text">Legal</h4>
            <ul className="grid gap-2.5 text-sm">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-mangaale-subtext transition-colors hover:text-mangaale-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-3.5">
            <h4 className="mb-4 text-sm font-semibold tracking-wider uppercase text-mangaale-text">Contact</h4>
            <p className="flex items-start gap-2.5 text-sm text-mangaale-subtext">
              <Mail size={15} className="mt-0.5 text-mangaale-primary/70 flex-shrink-0" />
              {contactData.email}
            </p>
            <p className="flex items-start gap-2.5 text-sm text-mangaale-subtext">
              <Phone size={15} className="mt-0.5 text-mangaale-primary/70 flex-shrink-0" />
              {contactData.phones.join(' / ')}
            </p>
            <p className="flex items-start gap-2.5 text-sm text-mangaale-subtext">
              <MapPin size={15} className="mt-0.5 text-mangaale-primary/70 flex-shrink-0" />
              {contactData.office}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100 pt-6 text-xs text-mangaale-subtext">
          <p>© {new Date().getFullYear()} Mangaale. All rights reserved.</p>
          <p>Built for modern food operations</p>
        </div>
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
      </div>

      {/* contact strip */}
      <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
        <a
          href={`mailto:${contactData.email}`}
          className="flex items-center gap-2.5 text-[0.9rem] text-white/60 transition-colors hover:text-mangaale-bright"
        >
          <Mail className="h-4 w-4 shrink-0 text-mangaale-primary" />
          {contactData.email}
        </a>
        <p className="flex items-center gap-2.5 text-[0.9rem] text-white/60">
          <Phone className="h-4 w-4 shrink-0 text-mangaale-primary" />
          {contactData.phones.join(' / ')}
        </p>
        <p className="flex items-center gap-2.5 text-[0.9rem] text-white/60">
          <MapPin className="h-4 w-4 shrink-0 text-mangaale-primary" />
          {contactData.office}
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-[0.82rem] text-white/45 sm:flex-row">
        <p>© {new Date().getFullYear()} Mangaale. All rights reserved.</p>
        <p>Built for modern food operations</p>
      </div>
    </div>
  </footer>
)

export default Footer
