import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import useMotionPrefs from '../../hooks/useMotionPrefs'

/**
 * Counts 0 -> value once, when scrolled into view.
 * Uses an eased rAF loop rather than a timer so it stays frame-accurate,
 * and renders the final value immediately under reduced motion.
 */
const Counter = ({ value, prefix = '', suffix = '', duration = 1400, className = '' }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const { reduced } = useMotionPrefs()
  const [display, setDisplay] = useState(reduced ? value : 0)

  useEffect(() => {
    if (reduced) {
      setDisplay(value)
      return undefined
    }
    if (!inView) return undefined

    let frame = 0
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      // easeOutExpo — quick start, gentle settle
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setDisplay(Math.round(eased * value))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, duration, reduced])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}

export default Counter
