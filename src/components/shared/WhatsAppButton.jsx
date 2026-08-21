import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { contactData } from '../../data/contactData'
import useMotionPrefs from '../../hooks/useMotionPrefs'

/**
 * Floating WhatsApp button.
 *
 * The number now comes from `contactData` instead of a hardcoded literal, so
 * there is a single place to set it.
 *
 * NOTE: `contactData.whatsapp` is still the placeholder "+91XXXXXXXXXX".
 * Until a real number is filled in, this button hides itself rather than
 * linking somewhere broken.
 */
const WhatsAppButton = () => {
  const { reduced } = useMotionPrefs()

  const digits = (contactData.whatsapp || '').replace(/[^0-9]/g, '')
  const isPlaceholder = !digits || /^9?1?0*$/.test(digits) || digits.length < 10

  if (isPlaceholder) return null

  const message = encodeURIComponent("Hi Mangaale! I'd like to know more about your platform.")

  return (
    <motion.a
      href={`https://wa.me/${digits}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lift transition-shadow hover:shadow-glow-lg sm:right-6"
      whileHover={reduced ? undefined : { scale: 1.08 }}
      whileTap={reduced ? undefined : { scale: 0.95 }}
      initial={reduced ? false : { opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
      aria-label="Chat with Mangaale on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
  )
}

export default WhatsAppButton
