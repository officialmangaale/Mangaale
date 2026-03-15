import { Link } from 'react-router-dom'

const CTASection = ({
  title,
  description,
  primaryText,
  primaryTo,
  secondaryText,
  secondaryTo
}) => {
  return (
    <div className="mangaale-shell p-10 md:p-12 lg:p-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      <p className="mt-4 text-mangaale-ink-soft max-w-3xl mx-auto">{description}</p>
      <div className="mt-8 flex justify-center gap-3 flex-wrap">
        <Link to={primaryTo} className="mangaale-button-primary">{primaryText}</Link>
        {secondaryText && secondaryTo && (
          <Link to={secondaryTo} className="mangaale-button-secondary">{secondaryText}</Link>
        )}
      </div>
    </div>
  )
}

export default CTASection
