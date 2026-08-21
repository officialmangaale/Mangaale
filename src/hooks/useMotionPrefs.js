import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * Central switchboard for "how much motion is allowed right now".
 *
 * - `reduced`  : user asked for reduced motion (OS level)
 * - `isDesktop`: pointer is fine + viewport is wide enough for parallax
 * - `allowPointerMotion`: mouse-tracking / magnetic / tilt effects are OK
 *
 * Everything decorative should gate on these instead of assuming a desktop
 * mouse exists. Functionality never depends on them.
 */
const useMotionPrefs = () => {
  const reduced = useReducedMotion()
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined

    const query = window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)')
    const sync = () => setIsDesktop(query.matches)

    sync()

    // Safari < 14 only supports addListener
    if (query.addEventListener) {
      query.addEventListener('change', sync)
      return () => query.removeEventListener('change', sync)
    }
    query.addListener(sync)
    return () => query.removeListener(sync)
  }, [])

  return {
    reduced: Boolean(reduced),
    isDesktop,
    allowPointerMotion: isDesktop && !reduced
  }
}

export default useMotionPrefs
