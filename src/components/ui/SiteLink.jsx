import { Link } from 'react-router-dom'
import { isStaticRoute } from '../../data/siteRoutes'

/**
 * A link that knows which of the site's pages are not part of the SPA.
 *
 * The privacy policy and account deletion pages are pre-rendered HTML served
 * ahead of the SPA rewrite, so react-router has no route for them. A <Link>
 * would intercept the click, find nothing, and render the SPA's 404; a real
 * <a href> lets the browser fetch the pre-rendered document instead.
 *
 * Everything else keeps client-side navigation. Use this wherever a link target
 * comes from data rather than being written inline, so adding a page to
 * data/siteRoutes.js is all it takes.
 */
const SiteLink = ({ to, children, ...props }) =>
  isStaticRoute(to) ? (
    <a href={to} {...props}>
      {children}
    </a>
  ) : (
    <Link to={to} {...props}>
      {children}
    </Link>
  )

export default SiteLink
