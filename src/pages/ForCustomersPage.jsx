import React from 'react'
import usePageMeta from '../hooks/usePageMeta'
import SectionReveal from '../components/shared/SectionReveal'
import * as Icons from 'lucide-react'
import { customerHero, customerBenefits, customerFeatures, customerFlow, customerCTA } from '../data/customerData'

const ForCustomersPage = () => {
  usePageMeta('Mangaale | For Customers', 'Order food directly from your favorite restaurants with Mangaale. Browse menus, track delivery and support local businesses.')

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <SectionReveal className="mangaale-container mangaale-section text-center">
        <span className="section-eyebrow mb-5 inline-flex">For Customers</span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-5">{customerHero.headline}</h1>
        <p className="section-subtitle mb-8">{customerHero.subheadline}</p>
        <button className="mangaale-button-primary px-8 py-3.5">{customerHero.cta}</button>
      </SectionReveal>

      {/* Benefits */}
      <div className="bg-mangaale-bg-soft">
        <SectionReveal className="mangaale-container mangaale-section">
          <div className="text-center mb-12">
            <span className="section-eyebrow mb-4 inline-flex">Why Mangaale</span>
            <h2 className="section-title">Why Use Mangaale?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {customerBenefits.map((benefit, index) => {
              const IconComponent = Icons[benefit.icon]
              return (
                <div key={index} className="mangaale-card-hover p-6">
                  <div className="mangaale-icon-box mb-4">
                    {IconComponent && <IconComponent className="w-5 h-5" />}
                  </div>
                  <h3 className="text-base font-bold text-mangaale-text mb-2">{benefit.title}</h3>
                  <p className="text-mangaale-subtext text-sm leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </SectionReveal>
      </div>

      {/* Features */}
      <SectionReveal className="mangaale-container mangaale-section">
        <div className="text-center mb-12">
          <span className="section-eyebrow mb-4 inline-flex">How It Works</span>
          <h2 className="section-title">How It Works</h2>
        </div>
        <div className="space-y-5">
          {customerFeatures.map((feature, index) => (
            <div key={index} className="mangaale-card p-6 md:p-8">
              <h3 className="text-xl font-bold text-mangaale-text mb-3">{feature.title}</h3>
              <p className="text-mangaale-subtext text-[15px] leading-relaxed mb-5">{feature.description}</p>
              <div className="grid md:grid-cols-2 gap-3">
                {feature.features.map((f, idx) => (
                  <div key={idx} className="mangaale-check-item">
                    <span className="mangaale-check-dot">
                      <Icons.Check className="w-3 h-3 text-mangaale-primary" />
                    </span>
                    <span className="text-mangaale-text text-[15px]">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionReveal>

      {/* Order Flow */}
      <div className="bg-mangaale-bg-soft">
        <SectionReveal className="mangaale-container mangaale-section">
          <div className="text-center mb-12">
            <span className="section-eyebrow mb-4 inline-flex">Process</span>
            <h2 className="section-title">Simple Ordering Process</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {customerFlow.map((item, index) => (
              <div key={index} className="mangaale-card-hover p-5 text-center flex flex-col items-center">
                <div className="mangaale-step-number w-11 h-11 text-base mb-4">{item.step}</div>
                <h3 className="font-bold text-mangaale-text text-[15px] mb-1.5">{item.title}</h3>
                <p className="text-sm text-mangaale-subtext leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>

      {/* CTA */}
      <SectionReveal className="mangaale-container mangaale-section">
        <div className="mangaale-cta-banner">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{customerCTA.title}</h2>
            <p className="text-white/85 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">{customerCTA.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {customerCTA.buttons.map((btn, idx) => (
                <button key={idx} className="mangaale-button-white px-8 py-3.5">{btn.label}</button>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>
    </div>
  )
}

export default ForCustomersPage
