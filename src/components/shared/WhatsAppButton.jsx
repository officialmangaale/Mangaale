import React from 'react'
import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const WhatsAppButton = () => {
  const phoneNumber = '91XXXXXXXXXX'
  const message = encodeURIComponent('Hi Mangaale! I\'m interested in learning more about your platform.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  )
}

export default WhatsAppButton
