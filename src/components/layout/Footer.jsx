import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import { contactData } from '../../data/contactData'

const Footer = () => {
  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'For Restaurants', to: '/for-restaurants' },
    { label: 'For Customers', to: '/for-customers' },
    { label: 'For Riders', to: '/for-riders' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' }
  ]

  const legalLinks = [
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms & Conditions', to: '/terms' }
  ]

  return (
    <footer className="border-t border-mangaale-primary/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-mangaale-primary/70 bg-mangaale-primary/10 text-mangaale-primary font-display font-bold">
                M
              </span>
              <span className="font-display text-xl font-bold">Mangaale</span>
            </div>
            <p className="max-w-sm text-sm text-mangaale-subtext">
              Unified software for billing, inventory, kitchen operations, QR ordering, and delivery.
            </p>
            <div className="flex gap-3 pt-2 text-mangaale-subtext">
              <a href="#" aria-label="Instagram" className="hover:text-mangaale-primary"><Instagram size={18} /></a>
              <a href="#" aria-label="Facebook" className="hover:text-mangaale-primary"><Facebook size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-mangaale-primary"><Linkedin size={18} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-mangaale-primary"><Twitter size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
            <ul className="grid gap-2 text-sm">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-mangaale-subtext transition-colors hover:text-mangaale-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Legal</h4>
            <ul className="grid gap-2 text-sm">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-mangaale-subtext transition-colors hover:text-mangaale-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 text-sm">
            <h4 className="font-semibold text-white">Contact</h4>
            <p className="flex items-start gap-2 text-mangaale-subtext">
              <Mail size={16} className="mt-1" />
              {contactData.email}
            </p>
            <p className="flex items-start gap-2 text-mangaale-subtext">
              <Phone size={16} className="mt-1" />
              {contactData.phones.join(' / ')}
            </p>
            <p className="flex items-start gap-2 text-mangaale-subtext">
              <MapPin size={16} className="mt-1" />
              {contactData.office}
            </p>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-mangaale-subtext">
          <p>� Mangaale. All rights reserved.</p>
          <p>Built for modern food operations</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
