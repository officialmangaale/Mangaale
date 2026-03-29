import { Link } from 'react-router-dom'
import {
  CreditCard, Boxes, ChefHat, Truck, ShoppingBag,
  QrCode, Menu, LayoutDashboard, BarChart3, ArrowRight
} from 'lucide-react'

const iconMap = { CreditCard, Boxes, ChefHat, Truck, ShoppingBag, QrCode, Menu, LayoutDashboard, BarChart3 }

const ServiceCard = ({ service, compact = false }) => {
  const Icon = iconMap[service.icon] || CreditCard

  return (
    <article className={`mangaale-card-hover p-6 ${compact ? 'h-full flex flex-col' : ''}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="mangaale-icon-box w-11 h-11 rounded-xl">
          <Icon size={20} />
        </div>
        <span className="rounded-full border border-mangaale-primary/20 bg-mangaale-primary/5 px-2.5 py-1 text-xs text-mangaale-primary font-medium">
          {service.tag}
        </span>
      </div>
      <h3 className="mt-5 text-lg font-semibold text-mangaale-text">{service.title}</h3>
      <p className="mt-2 text-sm text-mangaale-subtext">{service.summary}</p>
      <p className="mt-3 text-sm text-mangaale-text leading-relaxed">{service.description}</p>
      <ul className="mt-4 space-y-2 flex-grow">
        {service.features.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-mangaale-subtext">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-mangaale-primary flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {compact && (
        <Link
          to="/services"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-mangaale-primary hover:gap-2.5 transition-all group"
        >
          Learn more
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      )}
    </article>
  )
}

export default ServiceCard
