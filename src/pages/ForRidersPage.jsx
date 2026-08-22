import React from 'react'
import usePageMeta from '../hooks/usePageMeta'
import SectionReveal from '../components/shared/SectionReveal'
import { Link } from 'react-router-dom'
import Icon from '../components/ui/Icon'
import CTAButton from '../components/ui/CTAButton'
import { riderHero, riderBenefits, riderFeatures, riderRequirements, riderFlow, riderCTA } from '../data/riderData'

const ForRidersPage = () => {
  usePageMeta('Mangaale | For Riders', 'Join Mangaale as a delivery partner. Earn money with flexible hours, smart routing, and transparent payouts.')

  return (
<<<<<<< HEAD
    <div className="w-full pt-16 md:pt-20 pb-16 md:pb-24">
      {/* Hero Section */}
      <SectionReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mangaale-text mb-4">
            {riderHero.headline}
          </h1>
          <p className="text-lg text-mangaale-subtext max-w-2xl mx-auto mb-8">
            {riderHero.subheadline}
          </p>
          <Link to="/contact" className="mangaale-button-primary">
            {riderHero.cta}
          </Link>
        </div>
      </SectionReveal>

      {/* Benefits Grid */}
      <SectionReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-mangaale-text mb-12 text-center">Why Riders Love Mangaale</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {riderBenefits.map((benefit, index) => {
            const iconName = benefit.icon
            return (
              <div key={index} className="bg-white rounded-xl p-6 border border-mangaale-primary/10 hover:border-mangaale-primary/30 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-mangaale-primary to-mangaale-secondary rounded-lg flex items-center justify-center text-white mb-4">
                  <Icon name={iconName} className="w-6 h-6" />
=======
    <div className="pt-[72px]">
      {/* Hero */}
      <SectionReveal className="mangaale-container mangaale-section text-center">
        <span className="section-eyebrow mb-5 inline-flex">For Riders</span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-5">{riderHero.headline}</h1>
        <p className="section-subtitle mb-8">{riderHero.subheadline}</p>
        <button className="mangaale-button-primary px-8 py-3.5">{riderHero.cta}</button>
      </SectionReveal>

      {/* Benefits */}
      <div className="bg-mangaale-bg-soft">
        <SectionReveal className="mangaale-container mangaale-section">
          <div className="text-center mb-12">
            <span className="section-eyebrow mb-4 inline-flex">Benefits</span>
            <h2 className="section-title">Why Riders Love Mangaale</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {riderBenefits.map((benefit, index) => {
              const IconComponent = Icons[benefit.icon]
              return (
                <div key={index} className="mangaale-card-hover p-6">
                  <div className="mangaale-icon-box mb-4">
                    {IconComponent && <IconComponent className="w-5 h-5" />}
                  </div>
                  <h3 className="text-lg font-bold text-mangaale-text mb-2">{benefit.title}</h3>
                  <p className="text-mangaale-subtext text-[15px] leading-relaxed">{benefit.description}</p>
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
                </div>
              )
            })}
          </div>
        </SectionReveal>
      </div>

      {/* Features */}
      <SectionReveal className="mangaale-container mangaale-section">
        <div className="text-center mb-12">
          <span className="section-eyebrow mb-4 inline-flex">Tools</span>
          <h2 className="section-title">Rider Tools & Features</h2>
        </div>
        <div className="space-y-5">
          {riderFeatures.map((feature, index) => (
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

      {/* Requirements */}
      <div className="bg-mangaale-bg-soft">
        <SectionReveal className="mangaale-container mangaale-section">
          <div className="text-center mb-12">
            <span className="section-eyebrow mb-4 inline-flex">Requirements</span>
            <h2 className="section-title">Requirements to Become a Rider</h2>
          </div>
          <div className="mangaale-card p-6 md:p-8 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {riderRequirements.map((req, index) => (
                <div key={index} className="mangaale-check-item">
                  <div className="w-5 h-5 rounded-full bg-mangaale-primary flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <Icons.Check className="w-3 h-3" />
                  </div>
                  <span className="text-mangaale-text text-[15px] font-medium">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>

      {/* Onboarding Flow */}
      <SectionReveal className="mangaale-container mangaale-section">
        <div className="text-center mb-12">
          <span className="section-eyebrow mb-4 inline-flex">Getting Started</span>
          <h2 className="section-title">Simple Onboarding Process</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {riderFlow.map((step, index) => (
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

<<<<<<< HEAD
      {/* CTA Section */}
      <SectionReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="bg-gradient-to-r from-mangaale-primary to-mangaale-secondary rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{riderCTA.title}</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">{riderCTA.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {riderCTA.buttons.map((btn, idx) => (
              <CTAButton
                key={idx}
                action={btn.action}
                label={btn.label}
                variant={idx === 0 ? "solid" : "outline"}
              />
            ))}
=======
      {/* CTA */}
      <SectionReveal className="mangaale-container mangaale-section">
        <div className="mangaale-cta-banner">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{riderCTA.title}</h2>
            <p className="text-white/85 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">{riderCTA.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {riderCTA.buttons.map((btn, idx) => (
                <button key={idx} className="mangaale-button-white px-8 py-3.5">{btn.label}</button>
              ))}
            </div>
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
          </div>
        </div>
      </SectionReveal>
    </div>
  )
}

export default ForRidersPage
