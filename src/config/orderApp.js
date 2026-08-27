/**
 * Mangaale Food Ordering — the one place the ordering app's origin is defined.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * The ordering app keeps the cart and the login session in localStorage, which
 * is scoped per origin. If half the site linked to food.mangaale.com and half
 * to a staging host, a customer would build a cart on one origin and arrive
 * logged out with an empty cart on the other. So the origin is declared exactly
 * once, here, and every link on mangaale.com is built by the helpers below.
 * Nothing else in the codebase should contain the ordering app's hostname.
 *
 * SETTING IT PER ENVIRONMENT
 * --------------------------
 * Vite inlines `import.meta.env.*` at build time, so this is a *build* input,
 * not a runtime one — each environment needs it set before `npm run build`:
 *
 *   local dev     .env.local  (or the committed .env fallback)
 *   Vercel        Project -> Settings -> Environment Variables -> VITE_ORDER_APP_URL
 *   Docker/nginx  docker build --build-arg VITE_ORDER_APP_URL=... (see Dockerfile)
 *
 * If it is ever unset the DEFAULT below keeps every link working rather than
 * emitting `undefined/restaurants`.
 */

const DEFAULT_ORDER_APP_URL = 'https://food.mangaale.com'

/* A trailing slash here would produce `//restaurants` in every built URL. */
const stripTrailingSlash = (value) => value.replace(/\/+$/, '')

export const ORDER_APP_URL = stripTrailingSlash(
  import.meta.env.VITE_ORDER_APP_URL || DEFAULT_ORDER_APP_URL
)

/*
 * The radius the ordering app's "nearby" screens are tuned for. Passing it
 * explicitly means a customer arriving from the marketing site sees the same
 * catchment as one who set their location inside the app.
 */
export const DEFAULT_RADIUS_KM = 7

/**
 * Builds an absolute ordering-app URL from a path and an optional query object.
 * Keys whose value is null/undefined/'' are dropped, so callers can pass
 * optional coordinates without branching.
 */
const buildUrl = (path, params) => {
  const base = `${ORDER_APP_URL}${path}`
  if (!params) return base

  const query = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    if (value === null || value === undefined || value === '') return
    query.append(key, String(value))
  })

  const serialised = query.toString()
  return serialised ? `${base}?${serialised}` : base
}

/* Location params are optional everywhere; this keeps the three call sites tidy. */
const locationParams = ({ lat, lng, radiusKm } = {}) =>
  lat === undefined || lng === undefined
    ? {}
    : { lat, lng, radius_km: radiusKm ?? DEFAULT_RADIUS_KM }

/* ---------------------------------------------------------------- routes --
 * Mirrors the ordering app's real customer-facing routes. Only the ones the
 * marketing site actually links to are used today; the rest are here so a new
 * link is never tempted to re-derive the origin by hand.
 * -------------------------------------------------------------------------- */

/** `/` — ordering app homepage. `category` pre-selects a category pill. */
export const orderHomeUrl = ({ category } = {}) => buildUrl('/', { category })

/** `/restaurants` — nearby restaurants. */
export const restaurantsUrl = (location) => buildUrl('/restaurants', locationParams(location))

/** `/restaurants/<restaurantId>` — one restaurant, by numeric id. */
export const restaurantByIdUrl = (restaurantId) => buildUrl(`/restaurants/${restaurantId}`)

/**
 * `/r/<slug>` — one restaurant in single-restaurant mode.
 *
 * Preferred over the numeric-id route for anyone arriving from that
 * restaurant's presence on the marketing site: single-restaurant mode is the
 * right experience when the customer already chose where they want to eat.
 */
export const restaurantUrl = (slug) => buildUrl(`/r/${slug}`)

/** `/categories/<categoryKey>` — a cuisine or category listing. */
export const categoryUrl = (categoryKey, { name, ...location } = {}) =>
  buildUrl(`/categories/${categoryKey}`, { name, ...locationParams(location) })

/** `/trending` — trending dishes. */
export const trendingUrl = ({ windowDays, ...location } = {}) =>
  buildUrl('/trending', { ...locationParams(location), window_days: windowDays })

/** `/search?q=` — search results. */
export const searchUrl = (query, extra = {}) => buildUrl('/search', { q: query, ...extra })

/** `/orders/<orderId>/track` — live tracking for one known order. */
export const orderTrackingUrl = (orderId) => buildUrl(`/orders/${orderId}/track`)

/**
 * `/profile/orders` — order history.
 *
 * The tracking route needs an order id, and a marketing page never has one. So
 * the site's "Track your order" entry point lands on the customer's order list,
 * which is where they pick the order and go on to /orders/<id>/track inside the
 * app. (Note the app has no bare `/orders` page — do not link that.)
 */
export const orderHistoryUrl = () => buildUrl('/profile/orders')

/* ------------------------------------------------------------- analytics --
 * mangaale.com has no analytics vendor installed. Rather than adding one, this
 * forwards to a dataLayer or gtag *if the page already has them*, and is a
 * silent no-op otherwise — so every ordering-app click is already attributed to
 * the surface it came from on the day a vendor is finally added.
 * -------------------------------------------------------------------------- */
export const trackOrderClick = (surface, destination) => {
  if (typeof window === 'undefined') return

  const detail = { surface, destination, app: 'order' }

  try {
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: 'order_app_click', ...detail })
    }
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'order_app_click', detail)
    }
  } catch {
    /* Analytics must never block the navigation the customer asked for. */
  }
}
