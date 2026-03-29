import React from 'react'
import usePageMeta from '../hooks/usePageMeta'
import SectionReveal from '../components/shared/SectionReveal'
import * as Icons from 'lucide-react'
import { restaurantHero, restaurantBenefits, restaurantFeatures, restaurantOnboarding, restaurantCTA } from '../data/restaurantData'

const ForRestaurantsPage = () => {
  usePageMeta('Mangaale | For Restaurants', 'Restaurant management platform with QR ordering, billing, order management, rider coordination and analytics')

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <SectionReveal className="mangaale-container mangaale-section text-center">
        <span className="section-eyebrow mb-5 inline-flex">For Restaurants</span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-5">{restaurantHero.headline}</h1>
        <p className="section-subtitle mb-8">{restaurantHero.subheadline}</p>
        <button className="mangaale-button-primary px-8 py-3.5">{restaurantHero.cta}</button>
      </SectionReveal>

      {/* Benefits */}
      <div className="bg-mangaale-bg-soft">
        <SectionReveal className="mangaale-container mangaale-section">
          <div className="text-center mb-12">
            <span className="section-eyebrow mb-4 inline-flex">Benefits</span>
            <h2 className="section-title">Why Restaurants Choose Mangaale</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {restaurantBenefits.map((benefit, index) => {
              const IconComponent = Icons[benefit.icon]
              return (
                <div key={index} className="mangaale-card-hover p-6">
                  <div className="mangaale-icon-box mb-4">
                    {IconComponent && <IconComponent className="w-5 h-5" />}
                  </div>
                  <h3 className="text-lg font-bold text-mangaale-text mb-2">{benefit.title}</h3>
                  <p className="text-mangaale-subtext text-[15px] leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </SectionReveal>
      </div>

      {/* Features */}
      <SectionReveal className="mangaale-container mangaale-section">
        <div className="text-center mb-12">
          <span className="section-eyebrow mb-4 inline-flex">Features</span>
          <h2 className="section-title">Restaurant Features</h2>
        </div>
        <div className="space-y-5">
          {restaurantFeatures.map((feature, index) => (
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

      {/* Onboarding */}
      <div className="bg-mangaale-bg-soft">
        <SectionReveal className="mangaale-container mangaale-section">
          <div className="text-center mb-12">
            <span className="section-eyebrow mb-4 inline-flex">Getting Started</span>
            <h2 className="section-title">Simple Onboarding</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {restaurantOnboarding.map((step, index) => (
              <div key={index} className="flex gap-5">
                <div className="mangaale-step-number">{step.step}</div>
                <div className="mangaale-card p-5 md:p-6 flex-grow">
                  <h3 className="text-lg font-bold text-mangaale-text mb-1.5">{step.title}</h3>
                  <p className="text-mangaale-subtext text-[15px] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>

      {/* CTA */}
      <SectionReveal className="mangaale-container mangaale-section">
        <div className="mangaale-cta-banner">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{restaurantCTA.title}</h2>
            <p className="text-white/85 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">{restaurantCTA.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {restaurantCTA.buttons.map((btn, idx) => (
                <button key={idx} className="mangaale-button-white px-8 py-3.5">{btn.label}</button>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>
    </div>
  )
}

export default ForRestaurantsPage
