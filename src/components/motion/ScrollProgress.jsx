import { motion, useScroll, useSpring } from 'framer-motion'
import useMotionPrefs from '../../hooks/useMotionPrefs'

/**
 * 2px turquoise reading-progress line pinned to the very top edge.
 * Hidden entirely under reduced motion — it is decorative only.
 */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const { reduced } = useMotionPrefs()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 })

  if (reduced) return null

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-mangaale-secondary via-mangaale-primary to-mangaale-bright"
      style={{ scaleX }}
    />
  )
}

export default ScrollProgress
