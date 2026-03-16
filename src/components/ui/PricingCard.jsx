import { Link } from 'react-router-dom'

const PricingCard = ({ plan }) => {
  return (
    <article className={`relative p-7 rounded-3xl border ${
      plan.popular
        ? 'border-mangaale-accent/65 bg-mangaale-accent/6'
        : 'border-white/10 bg-mangaale-card/70'
    }`}
    >
      {plan.popular && (
        <p className="absolute -top-3 right-6 inline-flex px-3 py-1 rounded-full text-xs text-black bg-mangaale-accent font-semibold">
          Most Chosen
        </p>
      )}
      <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
      <p className="mt-2 text-sm text-mangaale-subtext">{plan.description}</p>
      <div className="mt-6 text-4xl font-bold text-white">{plan.price}</div>
      <p className="text-sm text-mangaale-subtext">{plan.period}</p>
      <ul className="mt-6 space-y-2">
        {plan.features.map((item) => (
          <li key={item} className="text-sm text-mangaale-subtext flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-mangaale-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Link to="/contact" className="mangaale-button-secondary mt-8 block text-center">{plan.cta}</Link>
    </article>
  )
}

export default PricingCard
