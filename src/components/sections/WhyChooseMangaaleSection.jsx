import React from 'react'
import { whyChooseMangaale } from '../../data/homeData'
import SectionReveal from '../shared/SectionReveal'
import * as Icons from 'lucide-react'

const WhyChooseMangaaleSection = () => {
  return (
    <SectionReveal className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mangaale-text mb-4">
          Why Choose Mangaale?
        </h2>
        <p className="text-lg text-mangaale-subtext max-w-2xl mx-auto">
          The smarter choice for restaurants who want to take control
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {whyChooseMangaale.map((item, index) => {
          const IconComponent = Icons[item.icon]
          return (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-mangaale-bg-soft rounded-xl p-6 md:p-8 border border-mangaale-primary/10 hover:border-mangaale-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              {/* Icon */}
              {IconComponent && (
                <div className="w-14 h-14 bg-gradient-to-br from-mangaale-primary to-mangaale-secondary rounded-lg flex items-center justify-center text-white mb-6">
                  <IconComponent className="w-7 h-7" />
                </div>
              )}

              {/* Title */}
              <h3 className="text-xl font-bold text-mangaale-text mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-mangaale-subtext leading-relaxed">
                {item.description}
              </p>
            </div>
          )
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 bg-gradient-to-r from-mangaale-primary/10 to-mangaale-secondary/10 rounded-2xl p-8 md:p-12 border border-mangaale-primary/20 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-mangaale-text mb-4">
          Take Control of Your Restaurant Today
        </h3>
        <p className="text-mangaale-subtext mb-6 max-w-2xl mx-auto">
          Stop paying unnecessary commissions and start building direct relationships with your customers. Join Mangaale today.
        </p>
        <button className="px-8 py-3 bg-gradient-to-r from-mangaale-primary to-mangaale-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-mangaale-primary/30 transition-all duration-300">
          Get Started Now
        </button>
      </div>
      </div>
    </SectionReveal>
  )
}

export default WhyChooseMangaaleSection
