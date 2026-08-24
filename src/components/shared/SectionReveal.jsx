import ScrollDepth from '../motion/ScrollDepth'

/**
 * Section wrapper used by every sub-page.
 *
 * This used to be a one-shot framer-motion `whileInView` fade-and-rise. It now
 * defers to the shared ScrollDepth engine, so a section is driven continuously
 * by scroll position: it rises forward on the way in, rests while it is being
 * read, and tilts back into the Z axis on the way out.
 *
 * The element, class names and `id` passthrough are unchanged, so no page had
 * to be touched.
 */
const SectionReveal = ({ children, className = '', id }) => (
  <ScrollDepth as="section" id={id} className={className}>
    {children}
  </ScrollDepth>
)

export default SectionReveal
