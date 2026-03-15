import { useState } from 'react'

const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:8082').replace(/\/$/, '')

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  business: '',
  message: ''
}

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState({
    type: '',
    message: ''
  })

  const onChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFeedback({
      type: '',
      message: ''
    })

    try {
      const response = await fetch(`${apiBaseUrl}/api/v1/demo-requests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          businessName: formData.business,
          message: formData.message,
          source: 'website',
          pagePath: typeof window !== 'undefined' ? window.location.pathname : '/contact'
        })
      })

      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(result.error || result.message || 'We could not submit your request. Please try again.')
      }

      setFormData(initialFormData)
      setFeedback({
        type: 'success',
        message: result.message || 'Demo request submitted successfully.'
      })
    } catch (error) {
      setFeedback({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Something went wrong while sending your request. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mangaale-shell p-6">
      {feedback.message && (
        <div
          className={`mb-4 rounded-xl px-4 py-3 text-sm ${
            feedback.type === 'success'
              ? 'border border-mangaale-accent/50 bg-mangaale-accent/10 text-mangaale-accent'
              : 'border border-red-400/40 bg-red-500/10 text-red-200'
          }`}
        >
          {feedback.message}
        </div>
      )}

      <form className="grid gap-4" onSubmit={onSubmit}>
        <input
          value={formData.name}
          onChange={(e) => onChange('name', e.target.value)}
          required
          placeholder="Your name"
          className="w-full rounded-xl bg-[#10121d] border border-white/15 px-4 py-3 outline-none focus:border-mangaale-accent/60"
        />
        <input
          value={formData.email}
          onChange={(e) => onChange('email', e.target.value)}
          required
          type="email"
          placeholder="Work email"
          className="w-full rounded-xl bg-[#10121d] border border-white/15 px-4 py-3 outline-none focus:border-mangaale-accent/60"
        />
        <input
          value={formData.phone}
          onChange={(e) => onChange('phone', e.target.value)}
          required
          type="tel"
          placeholder="Phone number"
          className="w-full rounded-xl bg-[#10121d] border border-white/15 px-4 py-3 outline-none focus:border-mangaale-accent/60"
        />
        <input
          value={formData.business}
          onChange={(e) => onChange('business', e.target.value)}
          required
          placeholder="Business name"
          className="w-full rounded-xl bg-[#10121d] border border-white/15 px-4 py-3 outline-none focus:border-mangaale-accent/60"
        />
        <textarea
          value={formData.message}
          onChange={(e) => onChange('message', e.target.value)}
          rows={5}
          placeholder="Tell us about your operation"
          className="w-full rounded-xl bg-[#10121d] border border-white/15 px-4 py-3 outline-none focus:border-mangaale-accent/60"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="mangaale-button-primary text-center disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? 'Sending Request...' : 'Request Demo'}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
