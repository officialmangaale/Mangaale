import { motion } from 'framer-motion'

const SectionHeader = ({ eyebrow, title, description, centered = false }) => {
  return (
    <div className={`mx-auto ${centered ? 'text-center max-w-3xl' : ''}`}>
      {eyebrow && <p className="section-eyebrow mb-4">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed text-mangaale-ink-soft md:text-lg ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
