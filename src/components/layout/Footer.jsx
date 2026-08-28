import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import { companyData } from '../../data/companyData'
import SiteLink from '../ui/SiteLink'
import OrderAppLink from '../ui/OrderAppLink'
import OrderNowButton from '../ui/OrderNowButton'
import { orderHistoryUrl, restaurantsUrl, trendingUrl } from '../../config/orderApp'

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
    /*
     * `to` is an in-site route; `href` is an absolute ordering-app URL built by
     * config/orderApp.js. The three ordering entries below are additions — the
     * existing marketing links are unchanged and still point where they did.
     */
    title: 'Customers',
    links: [
      { label: 'Order Food', to: '/for-customers' },
      { label: 'Download App', to: '/download' },
      { label: 'Offers', to: '/for-customers' },
      { label: 'Browse Restaurants', href: restaurantsUrl(), surface: 'footer-nav' },
      { label: 'Trending Dishes', href: trendingUrl(), surface: 'footer-nav' },
      /*
       * The app's live-tracking route needs an order id, which a marketing page
       * never has. Order history is the real entry point: the customer picks the
       * order there and the app takes them on to /orders/<id>/track.
       */
      { label: 'Track Your Order', href: orderHistoryUrl(), surface: 'footer-nav' }
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

const SOCIALS = [
  { label: 'Instagram', Icon: Instagram, href: 'https://instagram.com/mangaale' },
  { label: 'Facebook', Icon: Facebook, href: 'https://facebook.com/mangaale' },
  { label: 'LinkedIn', Icon: Linkedin, href: 'https://linkedin.com/company/mangaale' },
  { label: 'Twitter', Icon: Twitter, href: 'https://twitter.com/mangaale' }
]

const FOOTER_LINK_CLASS = 'text-[0.9rem] text-white/60 transition-colors hover:text-mangaale-bright'

/* One row of a footer column: an in-site route, or a link into the ordering app. */
const FooterLink = ({ link }) =>
  link.href ? (
    <OrderAppLink href={link.href} surface={link.surface} className={FOOTER_LINK_CLASS}>
      {link.label}
    </OrderAppLink>
  ) : (
    <SiteLink to={link.to} className={FOOTER_LINK_CLASS}>
      {link.label}
    </SiteLink>
  )

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

          {/* White on navy — a turquoise fill on this surface reads as low contrast. */}
          <OrderNowButton surface="footer" variant="onDark" className="mt-6 px-6 py-3" />

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
          </div>
        </div>

        {/* link columns */}
        {COLUMNS.map((column) => (
          <div key={column.title}>
            <h4 className="text-[0.82rem] font-bold uppercase tracking-[0.12em] text-white">
              {column.title}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={`${column.title}-${link.label}`}>
                  <FooterLink link={link} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/*
        Contact strip. The support email, phone and the full registered postal
        address are printed here on every page: Play review checks that the
        address shown against the app matches the one in the console, and
        expects to find it without hunting through a contact form.
      */}
      <div className="mt-12 grid gap-5 border-t border-white/10 pt-8 sm:grid-cols-3">
        <a
          href={`mailto:${companyData.supportEmail}`}
          className="flex items-start gap-2.5 text-[0.9rem] text-white/60 transition-colors hover:text-mangaale-bright"
        >
          <Mail className="mt-1 h-4 w-4 shrink-0 text-mangaale-primary" />
          {companyData.supportEmail}
        </a>
        <a
          href={`tel:${companyData.phone.replace(/\s/g, '')}`}
          className="flex items-start gap-2.5 text-[0.9rem] text-white/60 transition-colors hover:text-mangaale-bright"
        >
          <Phone className="mt-1 h-4 w-4 shrink-0 text-mangaale-primary" />
          {companyData.phone}
        </a>
        <address className="flex items-start gap-2.5 text-[0.9rem] not-italic leading-relaxed text-white/60">
          <MapPin className="mt-1 h-4 w-4 shrink-0 text-mangaale-primary" />
          <span>
            {companyData.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </span>
        </address>
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-[0.82rem] text-white/45 sm:flex-row">
        <p>© {new Date().getFullYear()} Mangaale. All rights reserved.</p>
        <p>Built for modern food operations</p>
      </div>
    </div>
  </footer>
)

export default Footer
