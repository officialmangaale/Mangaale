import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import { contactData } from '../../data/contactData'

const Footer = () => {
  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Solutions', to: '/solutions' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Contact', to: '/contact' }
  ]

  return (
    <footer className="mt-24 border-t border-white/8 bg-[#0a0b12]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-mangaale-accent/70 bg-mangaale-accent/10 text-mangaale-accent font-display font-bold">
                M
              </span>
              <span className="font-display text-xl font-bold">Mangaale</span>
            </div>
            <p className="max-w-sm text-sm text-mangaale-ink-soft">
              Unified software for billing, inventory, kitchen operations, QR ordering, and delivery.
            </p>
            <div className="flex gap-3 pt-2 text-mangaale-ink-soft">
              <a href="#" aria-label="Instagram" className="hover:text-mangaale-accent"><Instagram size={18} /></a>
              <a href="#" aria-label="Facebook" className="hover:text-mangaale-accent"><Facebook size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-mangaale-accent"><Linkedin size={18} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-mangaale-accent"><Twitter size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
            <ul className="grid gap-2 text-sm">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-mangaale-ink-soft transition-colors hover:text-mangaale-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 text-sm">
            <h4 className="font-semibold text-white">Contact</h4>
            <p className="flex items-start gap-2 text-mangaale-ink-soft">
              <Mail size={16} className="mt-1" />
              {contactData.email}
            </p>
            <p className="flex items-start gap-2 text-mangaale-ink-soft">
              <Phone size={16} className="mt-1" />
              {contactData.phones.join(' / ')}
            </p>
            <p className="flex items-start gap-2 text-mangaale-ink-soft">
              <MapPin size={16} className="mt-1" />
              {contactData.office}
            </p>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-mangaale-ink-soft">
          <p>© Mangaale. All rights reserved.</p>
          <p>Built for modern food operations</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
