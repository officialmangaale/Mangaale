import React from 'react'
import { whatIsMangaale } from '../../data/homeData'
import SectionReveal from '../shared/SectionReveal'
import * as Icons from 'lucide-react'

const WhatIsMangaaleSection = () => {
  return (
    <SectionReveal className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mangaale-text mb-4">
          {whatIsMangaale.title}
        </h2>
        <p className="text-lg text-mangaale-subtext max-w-2xl mx-auto">
          {whatIsMangaale.subtitle}
        </p>
      </div>

      {/* Description */}
      <div className="bg-gradient-to-r from-mangaale-primary/5 to-mangaale-secondary/5 rounded-2xl p-6 md:p-10 border border-mangaale-primary/10 mb-12">
        <p className="text-lg text-mangaale-text leading-relaxed">
          {whatIsMangaale.description}
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {whatIsMangaale.features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 border border-mangaale-primary/10 hover:border-mangaale-primary/30 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-mangaale-primary to-mangaale-secondary rounded-lg flex items-center justify-center text-white mb-4">
              <Icons.Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-mangaale-text mb-2">
              {feature.title}
            </h3>
            <p className="text-mangaale-subtext">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      </div>
    </SectionReveal>
  )
}

export default WhatIsMangaaleSection
