import { motion } from 'framer-motion'
import useMotionPrefs from '../../hooks/useMotionPrefs'

/**
 * The single scroll-reveal primitive used across the whole site so every
 * section enters with the same rhythm: fade + rise.
 *
 * PERFORMANCE: `blur` now defaults to false.
 *
 * This component has ~34 call sites, and several of them wrap whole subtrees
 * (the stats bar, the restaurant grid, the testimonial marquee). Animating
 * `filter: blur()` pulls the wrapped subtree out of its cached layer and
 * forces a full re-rasterisation at every intermediate blur radius, for the
 * entire 0.75s. Scrolling down the home page fires several of these at once,
 * which is what produced the stutter while scrolling.
 *
 * `opacity`, `y` and `scale` are all compositor properties, so the reveal
 * runs off the main thread entirely. The prop is kept so the micro-blur can
 * still be opted into on a small, isolated element where it is cheap.
 *
 * The small `scale` lift is what gives cards their own sense of depth as they
 * arrive, layered underneath the section-level depth ScrollDepth applies.
 * Callers stagger a group by passing `delay={i * 0.07}`.
 */
const Reveal = ({
  children,
  as = 'div',
  className = '',
  delay = 0,
  y = 32,
  scale = 0.97,
  blur = false,
  duration = 0.75,
  amount = 0.25,
  id
}) => {
  const { reduced } = useMotionPrefs()
  const MotionTag = motion[as] || motion.div

  if (reduced) {
    const Tag = as
    return (
      <Tag id={id} className={className}>
        {children}
      </Tag>
    )
  }

  return (
    <MotionTag
      id={id}
      className={className}
      initial={
        blur ? { opacity: 0, y, scale, filter: 'blur(6px)' } : { opacity: 0, y, scale }
      }
      whileInView={
        blur
          ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
          : { opacity: 1, y: 0, scale: 1 }
      }
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  )
}

export default Reveal
