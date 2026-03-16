import React from 'react'
import usePageMeta from '../hooks/usePageMeta'
import SectionReveal from '../components/shared/SectionReveal'
import * as Icons from 'lucide-react'
import { customerHero, customerBenefits, customerFeatures, customerFlow, customerCTA } from '../data/customerData'

const ForCustomersPage = () => {
  usePageMeta('Mangaale | For Customers', 'Order food directly from your favorite restaurants with Mangaale. Browse menus, track delivery and support local businesses.')

  return (
    <div className="w-full pt-16 md:pt-20 pb-16 md:pb-24">
      {/* Hero Section */}
      <SectionReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mangaale-text mb-4">
            {customerHero.headline}
          </h1>
          <p className="text-lg text-mangaale-subtext max-w-2xl mx-auto mb-8">
            {customerHero.subheadline}
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-mangaale-primary to-mangaale-secondary text-white rounded-lg font-semibold hover:shadow-lg">
            {customerHero.cta}
          </button>
        </div>
      </SectionReveal>

      {/* Benefits Grid */}
      <SectionReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-mangaale-text mb-12 text-center">Why Use Mangaale?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {customerBenefits.map((benefit, index) => {
            const IconComponent = Icons[benefit.icon]
            return (
              <div key={index} className="bg-white rounded-xl p-6 border border-mangaale-primary/10 hover:border-mangaale-primary/30 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-mangaale-primary to-mangaale-secondary rounded-lg flex items-center justify-center text-white mb-4">
                  {IconComponent && <IconComponent className="w-6 h-6" />}
                </div>
                <h3 className="text-lg font-bold text-mangaale-text mb-2">{benefit.title}</h3>
                <p className="text-mangaale-subtext">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </SectionReveal>

      {/* Features Section */}
      <SectionReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-mangaale-bg-soft rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-mangaale-text mb-12 text-center">How It Works</h2>
        <div className="space-y-8">
          {customerFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 border border-mangaale-primary/10">
              <h3 className="text-2xl font-bold text-mangaale-text mb-4">{feature.title}</h3>
              <p className="text-mangaale-subtext mb-6">{feature.description}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {feature.features.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-mangaale-primary flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span className="text-mangaale-text">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionReveal>

      {/* Order Flow */}
      <SectionReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-mangaale-text mb-12 text-center">Simple Ordering Process</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {customerFlow.map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-6 border border-mangaale-primary/10 text-center h-full flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-mangaale-primary to-mangaale-secondary rounded-full flex items-center justify-center text-white font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-mangaale-text mb-2">{item.title}</h3>
                <p className="text-sm text-mangaale-subtext">{item.description}</p>
              </div>
              {index < customerFlow.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 w-4 h-0.5 bg-mangaale-primary" />
              )}
            </div>
          ))}
        </div>
      </SectionReveal>

      {/* CTA Section */}
      <SectionReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="bg-gradient-to-r from-mangaale-primary to-mangaale-secondary rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{customerCTA.title}</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">{customerCTA.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {customerCTA.buttons.map((btn, idx) => (
              <button key={idx} className="px-8 py-3 bg-white text-mangaale-primary rounded-lg font-semibold hover:shadow-lg transition-all">
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </SectionReveal>
    </div>
  )
}

export default ForCustomersPage
