import { motion } from 'framer-motion'
import useMotionPrefs from '../../hooks/useMotionPrefs'

/**
 * Staggered line reveal for hero-scale headings.
 * Each line fades up out of a soft blur, ~90ms apart.
 */
const RevealText = ({ lines = [], className = '', lineClassName = '', delay = 0, stagger = 0.09 }) => {
  const { reduced } = useMotionPrefs()

  if (reduced) {
    return (
      <span className={className}>
        {lines.map((line, i) => (
          <span key={i} className={`block ${lineClassName}`}>
            {line}
          </span>
        ))}
      </span>
    )
  }

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } }
      }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className={`block ${lineClassName}`}
            variants={{
              hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
              visible: {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
              }
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

export default RevealText
