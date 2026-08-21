import { Link } from 'react-router-dom'

/**
 * Maps the `action` keys used in the audience-page data onto real routes.
 *
 * These CTAs used to render as bare <button> elements with no click handler,
 * so every one of them was a dead end. Rendering a Link keeps the data shape
 * unchanged while making the buttons actually navigate.
 */
export const ACTION_ROUTES = {
  'book-demo': '/contact',
  'become-partner': '/contact',
  'apply-rider': '/contact',
  'download-ios': '/download',
  'download-android': '/download',
  'learn-more': '/about'
}

export const routeForAction = (action, fallback = '/contact') => ACTION_ROUTES[action] || fallback

/**
 * A CTA rendered on a coloured/gradient panel.
 * `variant` picks between the solid-on-colour and outlined-on-colour styles.
 */
const CTAButton = ({ action, label, to, variant = 'solid', fallback = '/contact', className = '' }) => {
  const target = to || routeForAction(action, fallback)

  const styles =
    variant === 'solid'
      ? 'bg-white text-mangaale-primary hover:-translate-y-0.5 hover:shadow-lift'
      : 'border-2 border-white/70 text-white hover:-translate-y-0.5 hover:border-white hover:bg-white/10'

  return (
    <Link to={target} className={`mangaale-button px-7 py-3.5 ${styles} ${className}`}>
      {label}
    </Link>
  )
}

export default CTAButton
