import React from 'react'
import { whyChooseMangaale } from '../../data/homeData'
import SectionReveal from '../shared/SectionReveal'
import * as Icons from 'lucide-react'

const WhyChooseMangaaleSection = () => {
  return (
    <SectionReveal className="w-full bg-mangaale-bg-soft">
      <div className="mangaale-container mangaale-section">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="section-eyebrow mb-4 inline-flex">Advantages</span>
          <h2 className="section-title mb-4">Why Choose Mangaale?</h2>
          <p className="section-subtitle">
            The smarter choice for restaurants who want to take control
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyChooseMangaale.map((item, index) => {
            const IconComponent = Icons[item.icon]
            return (
              <div key={index} className="mangaale-card-hover bg-gradient-to-br from-white to-mangaale-bg-soft/50 p-6 md:p-7">
                {IconComponent && (
                  <div className="w-12 h-12 bg-gradient-to-br from-mangaale-primary to-mangaale-secondary rounded-xl flex items-center justify-center text-white mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>
                )}
                <h3 className="text-lg font-bold text-mangaale-text mb-2">{item.title}</h3>
                <p className="text-mangaale-subtext text-[15px] leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 mangaale-cta-banner">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Take Control of Your Restaurant Today
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto text-[15px] leading-relaxed">
              Stop paying unnecessary commissions and start building direct relationships with your customers. Join Mangaale today.
            </p>
            <button className="mangaale-button-white px-8 py-3.5">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}

export default WhyChooseMangaaleSection
