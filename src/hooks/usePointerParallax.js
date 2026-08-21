import { useEffect } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'
import useMotionPrefs from './useMotionPrefs'

/**
 * Tracks the pointer across a container and exposes two spring-smoothed
 * motion values in the range -0.5 .. 0.5.
 *
 * Layers multiply these by their own depth factor, which is what produces
 * the layered parallax in the hero (bag moves more than the phone, etc).
 *
 * Returns identity-zero values when pointer motion isn't allowed, so callers
 * never need to branch.
 */
const usePointerParallax = (ref, { stiffness = 90, damping = 20 } = {}) => {
  const { allowPointerMotion } = useMotionPrefs()

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const x = useSpring(rawX, { stiffness, damping, mass: 0.6 })
  const y = useSpring(rawY, { stiffness, damping, mass: 0.6 })

  useEffect(() => {
    if (!allowPointerMotion) {
      rawX.set(0)
      rawY.set(0)
      return undefined
    }

    const node = ref?.current
    if (!node) return undefined

    let frame = 0

    const handleMove = (event) => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const rect = node.getBoundingClientRect()
        if (!rect.width || !rect.height) return
        rawX.set((event.clientX - rect.left) / rect.width - 0.5)
        rawY.set((event.clientY - rect.top) / rect.height - 0.5)
      })
    }

    const handleLeave = () => {
      rawX.set(0)
      rawY.set(0)
    }

    node.addEventListener('pointermove', handleMove)
    node.addEventListener('pointerleave', handleLeave)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      node.removeEventListener('pointermove', handleMove)
      node.removeEventListener('pointerleave', handleLeave)
    }
  }, [ref, allowPointerMotion, rawX, rawY])

  return { x, y, active: allowPointerMotion }
}

export default usePointerParallax
