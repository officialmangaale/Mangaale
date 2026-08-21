import { motion } from 'framer-motion'
import useMotionPrefs from '../../hooks/useMotionPrefs'

/**
 * The single scroll-reveal primitive used across the whole site so every
 * section enters with the same rhythm: fade + rise + micro-blur.
 */
const Reveal = ({
  children,
  as = 'div',
  className = '',
  delay = 0,
  y = 32,
  blur = true,
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
      initial={{ opacity: 0, y, filter: blur ? 'blur(6px)' : 'blur(0px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  )
}

export default Reveal
