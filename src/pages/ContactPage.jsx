import React, { useState } from 'react'
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta'
import SectionReveal from '../components/shared/SectionReveal'
import { contactData, inquiryTypes } from '../data/contactData'

const ContactPage = () => {
  usePageMeta('Contact Mangaale', 'Get in touch with Mangaale team for restaurant partnerships, demos, and inquiries.')

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', inquiryType: 'restaurant', message: '', restaurant: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <SectionReveal className="mangaale-container mangaale-section text-center">
        <span className="section-eyebrow mb-5 inline-flex">Contact Us</span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-5">Get in Touch</h1>
        <p className="section-subtitle">
          Our team is ready to help you with demos, partnerships, and any questions about Mangaale
        </p>
      </SectionReveal>

      {/* Contact Form Section */}
      <SectionReveal className="mangaale-container mangaale-section">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Form */}
          <div className="md:col-span-2">
            <div className="mangaale-card p-6 md:p-8">
              <h2 className="text-xl font-bold text-mangaale-text mb-6">Send us a Message</h2>

              {submitted ? (
                <div className="p-5 bg-green-50 border border-green-200 rounded-xl">
                  <p className="text-green-800 font-medium text-[15px]">Thank you! We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="mangaale-label">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="mangaale-input" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="mangaale-label">Email *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="mangaale-input" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="mangaale-label">Phone Number *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="mangaale-input" placeholder="+91 XXXXXXXXXX" />
                  </div>
                  <div>
                    <label className="mangaale-label">I'm interested in *</label>
                    <select name="inquiryType" value={formData.inquiryType} onChange={handleChange} required className="mangaale-input">
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>
                  {formData.inquiryType === 'restaurant' && (
                    <div>
                      <label className="mangaale-label">Restaurant Name</label>
                      <input type="text" name="restaurant" value={formData.restaurant} onChange={handleChange} className="mangaale-input" placeholder="Your restaurant name" />
                    </div>
                  )}
                  <div>
                    <label className="mangaale-label">Message *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" className="mangaale-input resize-none" placeholder="Tell us more about your inquiry..." />
                  </div>
                  <button type="submit" className="mangaale-button-primary w-full py-3.5">Send Message</button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            {[
              { icon: Mail, title: 'Email', content: contactData.email, href: `mailto:${contactData.email}` },
              { icon: Phone, title: 'Phone', content: contactData.phones[0], href: `tel:${contactData.phones[0]}` },
            ].map(({ icon: Icon, title, content, href }) => (
              <div key={title} className="mangaale-card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="mangaale-icon-box w-9 h-9 rounded-lg">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-mangaale-text text-[15px]">{title}</h3>
                </div>
                <a href={href} className="text-mangaale-primary text-[15px] hover:underline">{content}</a>
              </div>
            ))}

            <div className="mangaale-card p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="mangaale-icon-box w-9 h-9 rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-mangaale-text text-[15px]">Office</h3>
              </div>
              <p className="text-mangaale-text text-[15px]">{contactData.office}</p>
              <p className="text-mangaale-subtext text-sm mt-1.5">{contactData.hours}</p>
            </div>

            {/* WhatsApp */}
            <div className="mangaale-card bg-gradient-to-br from-green-50 to-green-100/50 border-green-200 p-5">
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare className="w-4.5 h-4.5 text-green-600" />
                <h3 className="font-bold text-green-900 text-[15px]">Quick Chat</h3>
              </div>
              <p className="text-green-800 text-sm mb-3 leading-relaxed">Need quick answers? Chat with us on WhatsApp</p>
              <a
                href={`https://wa.me/${contactData.whatsapp}?text=Hi%20Mangaale%2C%20I%27m%20interested%20in%20your%20platform`}
                className="mangaale-button bg-green-600 text-white hover:bg-green-700 text-sm px-4 py-2"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* FAQ CTA */}
      <div className="bg-mangaale-bg-soft">
        <SectionReveal className="mangaale-container mangaale-section">
          <div className="mangaale-card bg-white p-7 md:p-10 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-mangaale-text mb-4">Common Questions?</h2>
            <p className="section-subtitle mb-6">
              Check our FAQ section or book a demo with our team to learn more about Mangaale
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="mangaale-button-primary px-7 py-3">Book a Demo</button>
              <button className="mangaale-button-secondary px-7 py-3">Read FAQ</button>
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  )
}

export default ContactPage
