import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import useMotionPrefs from '../../hooks/useMotionPrefs'

/**
 * Subtle perspective tilt (capped at ~4deg) plus a cursor-following glare.
 * Desktop pointer only; degrades to a plain static card everywhere else.
 *
 * All hooks run unconditionally, so the early return below is safe.
 */
const TiltCard = ({ children, className = '', max = 4, glare = true }) => {
  const ref = useRef(null)
  const { allowPointerMotion } = useMotionPrefs()

  const px = useMotionValue(0)
  const py = useMotionValue(0)

  const sx = useSpring(px, { stiffness: 150, damping: 18 })
  const sy = useSpring(py, { stiffness: 150, damping: 18 })

  const rotateX = useTransform(sy, [-0.5, 0.5], [max, -max])
  const rotateY = useTransform(sx, [-0.5, 0.5], [-max, max])

  const glareBackground = useTransform([sx, sy], ([gx, gy]) => {
    const left = 50 + gx * 60
    const top = 50 + gy * 60
    return `radial-gradient(340px circle at ${left}% ${top}%, rgba(12,183,157,0.14), transparent 62%)`
  })

  const handleMove = (event) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    px.set((event.clientX - rect.left) / rect.width - 0.5)
    py.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  const reset = () => {
    px.set(0)
    py.set(0)
  }

  if (!allowPointerMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={`relative preserve-3d ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 220, damping: 22 }}
    >
      {children}
      {glare && (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glareBackground }}
        />
      )}
    </motion.div>
  )
}

export default TiltCard
