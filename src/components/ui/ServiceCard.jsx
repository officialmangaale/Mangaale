import { Link } from 'react-router-dom'
import {
  CreditCard,
  Boxes,
  ChefHat,
  Truck,
  ShoppingBag,
  QrCode,
  Menu,
  LayoutDashboard,
  BarChart3
} from 'lucide-react'

const iconMap = {
  CreditCard,
  Boxes,
  ChefHat,
  Truck,
  ShoppingBag,
  QrCode,
  Menu,
  LayoutDashboard,
  BarChart3
}

const ServiceCard = ({ service, compact = false }) => {
  const Icon = iconMap[service.icon] || CreditCard

  return (
    <article className={`mangaale-card p-6 transition-transform duration-300 hover:-translate-y-1 ${
      compact ? 'h-full' : ''
    }`}>
      <div className="flex items-start justify-between gap-3">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-mangaale-accent/25 bg-mangaale-accent/10 text-mangaale-accent">
          <Icon size={22} />
        </div>
        <span className="rounded-full border border-white/15 px-2 py-1 text-xs text-mangaale-ink-soft">{service.tag}</span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
      <p className="mt-3 text-sm text-mangaale-ink-soft">{service.summary}</p>
      <p className="mt-4 text-sm leading-relaxed">{service.description}</p>
      <ul className="mt-5 space-y-2">
        {service.features.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-mangaale-ink-soft">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-mangaale-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {compact && (
        <Link
          to="/services"
          className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-mangaale-accent transition-all hover:gap-2"
        >
          Learn more
          <span>-></span>
        </Link>
      )}
    </article>
  )
}

export default ServiceCard
