import { trackOrderClick } from '../../config/orderApp'

/**
 * Every link from mangaale.com into the Mangaale Food Ordering app.
 *
 * Deliberately a plain <a href>, never a click handler and never a router
 * <Link>: the ordering app is a separate origin, so it has to be a real
 * navigation. Being a real anchor is also what makes these middle-clickable,
 * right-clickable ("copy link address"), and crawlable.
 *
 * There is intentionally no target="_blank". The ordering app stores the cart
 * and the login session in localStorage, which is per-origin — opening a second
 * tab and letting the customer wander back to this one splits their journey and
 * strands the cart in a tab they have stopped looking at.
 *
 * `surface` is the analytics label for *where on the marketing site* the click
 * came from ('header', 'hero', 'footer', 'popular-restaurants', ...).
 */
const OrderAppLink = ({ href, surface, children, className = '', ...rest }) => {
  const report = () => trackOrderClick(surface, href)

  /*
   * A middle click opens the link without firing onClick in most browsers, so
   * without this the "open in a background tab" path would go unattributed.
   */
  const handleAuxClick = (event) => {
    if (event.button === 1) report()
  }

  return (
    <a href={href} onClick={report} onAuxClick={handleAuxClick} className={className} {...rest}>
      {children}
    </a>
  )
}

export default OrderAppLink
