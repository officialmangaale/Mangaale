import { ArrowRight } from 'lucide-react'
import OrderAppLink from './OrderAppLink'
import { orderHomeUrl } from '../../config/orderApp'

/**
 * The "Order Now" call to action, shared by the header, the hero and the
 * footer so all three stay identical in behaviour.
 *
 * Styling reuses the site's own .mangaale-button-* classes — nothing is
 * imported from the ordering app, so this keeps looking like a mangaale.com
 * button rather than dropping a foreign control onto the page.
 *
 * ACCESSIBILITY
 *  - min-h/min-w 44px guarantees the 44x44 tap target at every size the button
 *    is used at, including the compact header variant.
 *  - focus-visible paints an explicit on-brand ring. index.css already has a
 *    global :focus-visible outline; this restates it on the element so the ring
 *    is still visible against the dark footer and the primary fill, where a
 *    default outline can disappear into the background.
 *  - the accessible name is the visible label. The `iconOnly` variant drops the
 *    text, so it supplies the same name via aria-label instead.
 */

const VARIANTS = {
  /* Header + hero: the site's standard primary button. */
  primary: 'mangaale-button-primary',
  /* Footer: the footer sits on mangaale-navy, where a turquoise fill on dark
     reads as low contrast — white-on-navy matches the footer's own hierarchy. */
  onDark:
    'mangaale-button bg-white text-mangaale-primary shadow-lift hover:-translate-y-0.5 hover:bg-mangaale-tint'
}

const FOCUS_RING =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-mangaale-primary'

const OrderNowButton = ({
  surface,
  label = 'Order Now',
  variant = 'primary',
  iconOnly = false,
  showArrow = true,
  className = ''
}) => (
  <OrderAppLink
    href={orderHomeUrl()}
    surface={surface}
    aria-label={iconOnly ? label : undefined}
    className={`group min-h-[44px] min-w-[44px] ${VARIANTS[variant]} ${FOCUS_RING} ${className}`}
  >
    {!iconOnly && label}
    {showArrow && <ArrowRight className="btn-arrow h-[18px] w-[18px]" aria-hidden="true" />}
  </OrderAppLink>
)

export default OrderNowButton
