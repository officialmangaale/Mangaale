import React from 'react'
import { pilotMessage } from '../../data/homeData'
import SectionReveal from '../shared/SectionReveal'
import { Check, Zap } from 'lucide-react'

const PilotMessageSection = () => {
  return (
    <SectionReveal className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <div className="bg-gradient-to-br from-mangaale-bg-soft to-white rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16 border border-mangaale-primary/20 overflow-hidden relative">
        {/* Background decorative element */}
        <div className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br from-mangaale-primary/10 to-transparent rounded-full blur-3xl" />
        
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4 inline-flex px-4 py-2 bg-mangaale-primary/10 rounded-full">
            <Zap className="w-5 h-5 text-mangaale-primary" />
            <span className="text-mangaale-primary font-semibold">Limited Time Opportunity</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mangaale-text mb-4">
            {pilotMessage.title}
          </h2>

          <p className="text-lg text-mangaale-subtext mb-6 max-w-3xl">
            {pilotMessage.subtitle}
          </p>

          <p className="text-mangaale-text mb-8 leading-relaxed max-w-3xl">
            {pilotMessage.description}
          </p>

          {/* Benefits List */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {pilotMessage.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-mangaale-primary to-mangaale-secondary flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-mangaale-text font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-mangaale-primary to-mangaale-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-mangaale-primary/30 transition-all duration-300 text-lg">
              {pilotMessage.cta}
            </button>
            <p className="text-mangaale-subtext text-sm pt-4 sm:pt-0">
              ✓ Free demo & consultation included
            </p>
          </div>

          {/* Note */}
          <div className="mt-8 p-4 bg-white rounded-lg border border-mangaale-primary/10">
            <p className="text-sm text-mangaale-subtext">
              <strong>Note:</strong> Spots are limited during our pilot phase. Apply today to secure your restaurant's place on Mangaale.
            </p>
          </div>
        </div>
      </div>
      </div>
    </SectionReveal>
  )
}

export default PilotMessageSection
