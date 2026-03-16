import React, { useState } from 'react'
import { Mail, Phone, MapPin, MessageSquare, Zap } from 'lucide-react'
import usePageMeta from '../hooks/usePageMeta'
import SectionReveal from '../components/shared/SectionReveal'
import { contactData, inquiryTypes } from '../data/contactData'

const ContactPage = () => {
  usePageMeta('Contact Mangaale', 'Get in touch with Mangaale team for restaurant partnerships, demos, and inquiries.')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'restaurant',
    message: '',
    restaurant: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="pt-20 pb-24">
      {/* Hero Section */}
      <SectionReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mangaale-text mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-mangaale-subtext max-w-2xl mx-auto">
            Our team is ready to help you with demos, partnerships, and any questions about Mangaale
          </p>
        </div>
      </SectionReveal>

      {/* Contact Form Section */}
      <SectionReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl p-8 border border-mangaale-primary/10">
              <h2 className="text-2xl font-bold text-mangaale-text mb-6">Send us a Message</h2>
              
              {submitted ? (
                <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">Thank you! We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-mangaale-text font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-mangaale-primary/20 rounded-lg focus:outline-none focus:border-mangaale-primary"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-mangaale-text font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-mangaale-primary/20 rounded-lg focus:outline-none focus:border-mangaale-primary"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-mangaale-text font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-mangaale-primary/20 rounded-lg focus:outline-none focus:border-mangaale-primary"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label className="block text-mangaale-text font-medium mb-2">I'm interested in *</label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-mangaale-primary/20 rounded-lg focus:outline-none focus:border-mangaale-primary"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Restaurant Name (conditional) */}
                  {formData.inquiryType === 'restaurant' && (
                    <div>
                      <label className="block text-mangaale-text font-medium mb-2">Restaurant Name</label>
                      <input
                        type="text"
                        name="restaurant"
                        value={formData.restaurant}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-mangaale-primary/20 rounded-lg focus:outline-none focus:border-mangaale-primary"
                        placeholder="Your restaurant name"
                      />
                    </div>
                  )}

                  {/* Message */}
                  <div>
                    <label className="block text-mangaale-text font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-mangaale-primary/20 rounded-lg focus:outline-none focus:border-mangaale-primary resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-mangaale-primary to-mangaale-secondary text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Email */}
            <div className="bg-white rounded-xl p-6 border border-mangaale-primary/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-mangaale-primary to-mangaale-secondary rounded-lg flex items-center justify-center text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-mangaale-text">Email</h3>
              </div>
              <a href={`mailto:${contactData.email}`} className="text-mangaale-primary hover:underline">
                {contactData.email}
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-xl p-6 border border-mangaale-primary/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-mangaale-primary to-mangaale-secondary rounded-lg flex items-center justify-center text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-mangaale-text">Phone</h3>
              </div>
              <a href={`tel:${contactData.phones[0]}`} className="text-mangaale-primary hover:underline">
                {contactData.phones[0]}
              </a>
            </div>

            {/* Address */}
            <div className="bg-white rounded-xl p-6 border border-mangaale-primary/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-mangaale-primary to-mangaale-secondary rounded-lg flex items-center justify-center text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-mangaale-text">Office</h3>
              </div>
              <p className="text-mangaale-text">{contactData.office}</p>
              <p className="text-mangaale-subtext text-sm mt-2">{contactData.hours}</p>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-green-900">Quick Chat</h3>
              </div>
              <p className="text-green-900 text-sm mb-3">Need quick answers? Chat with us on WhatsApp</p>
              <a
                href={`https://wa.me/${contactData.whatsapp}?text=Hi%20Mangaale%2C%20I%27m%20interested%20in%20your%20platform`}
                className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* FAQ CTA */}
      <SectionReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="bg-mangaale-bg-soft rounded-2xl p-8 md:p-12 border border-mangaale-primary/10 text-center">
          <h2 className="text-2xl font-bold text-mangaale-text mb-4">
            Common Questions?
          </h2>
          <p className="text-mangaale-subtext mb-6 max-w-2xl mx-auto">
            Check our FAQ section or book a demo with our team to learn more about Mangaale
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-mangaale-primary to-mangaale-secondary text-white rounded-lg font-semibold hover:shadow-lg transition-all">
              Book a Demo
            </button>
            <button className="px-6 py-3 border-2 border-mangaale-primary text-mangaale-primary rounded-lg font-semibold hover:bg-mangaale-bg-soft transition-colors">
              Read FAQ
            </button>
          </div>
        </div>
      </SectionReveal>
    </div>
  )
}

export default ContactPage
