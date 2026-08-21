import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import useMotionPrefs from '../../hooks/useMotionPrefs'

/**
 * Desktop-only magnetic pull toward the cursor. Deliberately tiny (max ~7px)
 * so it reads as premium rather than gimmicky. Renders a plain wrapper on
 * touch devices and under prefers-reduced-motion.
 *
 * Purely a wrapper: it never owns the click target, so whatever button or
 * link is passed as a child keeps all of its own behaviour.
 */
const MagneticButton = ({ children, className = '', strength = 7 }) => {
  const ref = useRef(null)
  const { allowPointerMotion } = useMotionPrefs()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })

  const handleMove = (event) => {
    if (!allowPointerMotion) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const relX = (event.clientX - rect.left) / rect.width - 0.5
    const relY = (event.clientY - rect.top) / rect.height - 0.5
    x.set(relX * strength * 2)
    y.set(relY * strength * 2)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  if (!allowPointerMotion) {
    return <div className={`inline-flex ${className}`}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={`inline-flex ${className}`}
      style={{ x: springX, y: springY }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {children}
    </motion.div>
  )
}

export default MagneticButton
