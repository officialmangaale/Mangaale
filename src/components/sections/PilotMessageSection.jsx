import React from 'react'
import { pilotMessage } from '../../data/homeData'
import SectionReveal from '../shared/SectionReveal'
import { Check, Zap } from 'lucide-react'

const PilotMessageSection = () => {
  return (
    <SectionReveal className="w-full">
      <div className="mangaale-container mangaale-section">
        <div className="mangaale-card bg-gradient-to-br from-mangaale-bg-soft to-white p-6 md:p-10 lg:p-14 overflow-hidden relative">
          {/* Background glow */}
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br from-mangaale-primary/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Badge */}
            <div className="section-eyebrow mb-6 inline-flex">
              <Zap className="w-3.5 h-3.5" />
              <span>Limited Time Opportunity</span>
            </div>

            <h2 className="section-title mb-4">{pilotMessage.title}</h2>

            <p className="text-base md:text-lg text-mangaale-subtext leading-relaxed mb-4 max-w-3xl">
              {pilotMessage.subtitle}
            </p>

            <p className="text-mangaale-text text-[15px] leading-relaxed mb-8 max-w-3xl">
              {pilotMessage.description}
            </p>

            {/* Benefits List */}
            <div className="grid md:grid-cols-2 gap-3.5 mb-8">
              {pilotMessage.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-mangaale-primary to-mangaale-secondary flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-mangaale-text text-[15px] font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="mangaale-button-primary px-8 py-4 text-base">
                {pilotMessage.cta}
              </button>
              <p className="text-mangaale-subtext text-sm">
                ✓ Free demo & consultation included
              </p>
            </div>

            {/* Note */}
            <div className="mt-8 mangaale-card bg-white p-4">
              <p className="text-sm text-mangaale-subtext">
                <strong className="text-mangaale-text">Note:</strong> Spots are limited during our pilot phase. Apply today to secure your restaurant's place on Mangaale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}

export default PilotMessageSection
