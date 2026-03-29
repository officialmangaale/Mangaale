import { Link } from 'react-router-dom'

const PricingCard = ({ plan }) => {
  return (
    <article className={`relative p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
      plan.popular
        ? 'border-mangaale-primary/40 bg-mangaale-primary/4 shadow-lg'
        : 'mangaale-card'
    }`}>
      {plan.popular && (
        <p className="absolute -top-3 right-6 inline-flex px-3 py-1 rounded-full text-xs bg-gradient-to-r from-mangaale-primary to-mangaale-secondary text-white font-semibold shadow-sm">
          Most Chosen
        </p>
      )}
      <h3 className="text-2xl font-bold text-mangaale-text">{plan.name}</h3>
      <p className="mt-2 text-sm text-mangaale-subtext">{plan.description}</p>
      <div className="mt-6 font-display text-4xl font-extrabold text-mangaale-primary">{plan.price}</div>
      <p className="text-sm text-mangaale-subtext">{plan.period}</p>
      <ul className="mt-6 space-y-2.5">
        {plan.features.map((item) => (
          <li key={item} className="text-sm text-mangaale-text flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-mangaale-primary flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Link to="/contact" className="mangaale-button-primary mt-8 block text-center">{plan.cta}</Link>
    </article>
  )
}

export default PricingCard
