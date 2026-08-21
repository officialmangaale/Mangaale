import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useMotionPrefs from '../../hooks/useMotionPrefs'

/**
 * Resets scroll position on route change.
 *
 * Without this the router kept the previous scroll offset, so navigating from
 * halfway down one page landed you halfway down the next one. Hash links are
 * left alone so in-page anchors still work.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation()
  const { reduced } = useMotionPrefs()

  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: reduced ? 'auto' : 'instant' })
  }, [pathname, hash, reduced])

  return null
}

export default ScrollToTop
