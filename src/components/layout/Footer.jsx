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
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider uppercase text-mangaale-text">Quick Links</h4>
            <ul className="grid gap-2.5 text-sm">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-mangaale-subtext transition-colors hover:text-mangaale-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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
      </div>
    </footer>
  )
}

export default Footer
