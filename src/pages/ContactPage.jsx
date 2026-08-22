import { useState } from 'react'
import { CheckCircle2, Loader2, Mail, MapPin, MessageSquare, Phone } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta'
import Reveal from '../components/motion/Reveal'
import MagneticButton from '../components/motion/MagneticButton'
import { contactData, inquiryTypes } from '../data/contactData'

/**
 * Contact page.
 *
 * Fix: the form previously only ran `console.log` and then showed a success
 * message, so every enquiry was silently dropped. It now posts to the same
 * `/api/v1/demo-requests` endpoint the (previously unused) ContactForm
 * component targeted, with real pending/error states.
 */

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:8082').replace(/\/$/, '')

const INITIAL = {
  name: '',
  email: '',
  phone: '',
  inquiryType: 'restaurant',
  message: '',
  restaurant: ''
}

const fieldClass =
  'w-full rounded-xl border border-mangaale-border bg-white px-4 py-3 text-[0.95rem] text-mangaale-text outline-none transition-colors placeholder:text-mangaale-subtext/60 focus:border-mangaale-primary'

const ContactPage = () => {
  usePageMeta(
    'Contact Mangaale',
    'Get in touch with the Mangaale team about restaurant partnerships, demos and general enquiries.'
  )

  const [formData, setFormData] = useState(INITIAL)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [feedback, setFeedback] = useState('')

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setFeedback('')

    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/demo-requests`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          businessName: formData.restaurant,
          inquiryType: formData.inquiryType,
          message: formData.message,
          source: 'website',
          pagePath: typeof window !== 'undefined' ? window.location.pathname : '/contact'
        })
      })

      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(result.error || result.message || 'We could not submit your request.')
      }

      setFormData(INITIAL)
      setStatus('success')
      setFeedback(result.message || "Thank you! We'll get back to you within 24 hours.")
    } catch (error) {
      setStatus('error')
      setFeedback(
        error instanceof Error && error.message
          ? error.message
          : 'Something went wrong while sending your request. Please try again.'
      )
    }
  }

  const isSubmitting = status === 'submitting'

  return (
    <div className="relative w-full overflow-hidden bg-white pb-20 pt-28 lg:pb-28 lg:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-mangaale-primary/8 blur-[120px]"
      />

      <div className="m-container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Contact</p>
          <h1 className="mt-5 text-[2.3rem] font-extrabold leading-[1.08] tracking-tight text-mangaale-text sm:text-[3rem]">
            Get in <span className="text-gradient-brand">Touch</span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-[1.02rem] leading-relaxed text-mangaale-subtext">
            Our team is ready to help with demos, partnerships and any questions about Mangaale.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {/* form */}
          <Reveal className="lg:col-span-2">
            <div className="rounded-3xl border border-mangaale-border bg-white p-6 shadow-card sm:p-8">
              <h2 className="text-[1.35rem] font-extrabold text-mangaale-text">Send us a message</h2>

              {status === 'success' ? (
                <div className="mt-6 flex items-start gap-3 rounded-2xl border border-mangaale-primary/30 bg-mangaale-tint p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-mangaale-primary" />
                  <div>
                    <p className="font-bold text-mangaale-text">Request received</p>
                    <p className="mt-1 text-[0.92rem] text-mangaale-subtext">{feedback}</p>
                    <button
                      type="button"
                      onClick={() => {
                        setStatus('idle')
                        setFeedback('')
                      }}
                      className="mt-4 text-[0.9rem] font-bold text-mangaale-primary hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {status === 'error' && feedback && (
                    <div
                      role="alert"
                      className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[0.9rem] text-red-700"
                    >
                      {feedback}
                    </div>
                  )}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-[0.88rem] font-bold text-mangaale-text">
                        Full name *
                      </span>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        className={fieldClass}
                        placeholder="Your name"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-1.5 block text-[0.88rem] font-bold text-mangaale-text">
                        Email *
                      </span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        className={fieldClass}
                        placeholder="you@example.com"
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block text-[0.88rem] font-bold text-mangaale-text">
                        Phone number *
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        autoComplete="tel"
                        className={fieldClass}
                        placeholder="+91 00000 00000"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-1.5 block text-[0.88rem] font-bold text-mangaale-text">
                        I&apos;m interested in *
                      </span>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                        className={fieldClass}
                      >
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  {formData.inquiryType === 'restaurant' && (
                    <label className="block">
                      <span className="mb-1.5 block text-[0.88rem] font-bold text-mangaale-text">
                        Restaurant name
                      </span>
                      <input
                        type="text"
                        name="restaurant"
                        value={formData.restaurant}
                        onChange={handleChange}
                        className={fieldClass}
                        placeholder="Your restaurant name"
                      />
                    </label>
                  )}

                  <label className="block">
                    <span className="mb-1.5 block text-[0.88rem] font-bold text-mangaale-text">
                      Message *
                    </span>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`${fieldClass} resize-none`}
                      placeholder="Tell us a little about your operation..."
                    />
                  </label>

                  <MagneticButton className="w-full">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mangaale-button-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-[18px] w-[18px] animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </MagneticButton>
                </form>
              )}
            </div>
          </Reveal>

          {/* contact details */}
          <div className="space-y-4">
            {[
              {
                Icon: Mail,
                title: 'Email',
                body: (
                  <a href={`mailto:${contactData.email}`} className="text-mangaale-primary hover:underline">
                    {contactData.email}
                  </a>
                )
              },
              {
                Icon: Phone,
                title: 'Phone',
                body: (
                  <a href={`tel:${contactData.phones[0]}`} className="text-mangaale-primary hover:underline">
                    {contactData.phones[0]}
                  </a>
                )
              },
              {
                Icon: MapPin,
                title: 'Office',
                body: (
                  <>
                    <p className="text-mangaale-text">{contactData.office}</p>
                    <p className="mt-1 text-[0.85rem] text-mangaale-subtext">{contactData.hours}</p>
                  </>
                )
              }
            ].map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={0.06 * i}>
                <div className="rounded-2xl border border-mangaale-border bg-white p-5 shadow-soft">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mangaale-tint">
                      <Icon className="h-[18px] w-[18px] text-mangaale-primary" />
                    </span>
                    <h3 className="font-bold text-mangaale-text">{title}</h3>
                  </div>
                  <div className="text-[0.92rem]">{body}</div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.24}>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <div className="mb-2 flex items-center gap-2">
                  <MessageSquare className="h-[18px] w-[18px] text-emerald-600" />
                  <h3 className="font-bold text-emerald-900">Quick chat</h3>
                </div>
                <p className="text-[0.88rem] text-emerald-900/80">
                  Need quick answers? Message us on WhatsApp.
                </p>
                <a
                  href={`https://wa.me/${contactData.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                    "Hi Mangaale, I'm interested in your platform"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex rounded-lg bg-emerald-600 px-4 py-2 text-[0.86rem] font-bold text-white transition-colors hover:bg-emerald-700"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
