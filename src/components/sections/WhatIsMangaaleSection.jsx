import React from 'react'
import { whatIsMangaale } from '../../data/homeData'
import SectionReveal from '../shared/SectionReveal'
import * as Icons from 'lucide-react'

const WhatIsMangaaleSection = () => {
  return (
    <SectionReveal className="w-full">
      <div className="mangaale-container mangaale-section">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="section-eyebrow mb-4 inline-flex">About Us</span>
          <h2 className="section-title mb-4">{whatIsMangaale.title}</h2>
          <p className="section-subtitle">{whatIsMangaale.subtitle}</p>
        </div>

        {/* Description */}
        <div className="mangaale-card bg-gradient-to-r from-mangaale-primary/4 to-mangaale-secondary/4 p-6 md:p-10 mb-12">
          <p className="text-base md:text-lg text-mangaale-text leading-relaxed">
            {whatIsMangaale.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whatIsMangaale.features.map((feature, index) => (
            <div key={index} className="mangaale-card-hover p-6">
              <div className="mangaale-icon-box mb-4">
                <Icons.Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-mangaale-text mb-2">
                {feature.title}
              </h3>
              <p className="text-mangaale-subtext text-[15px] leading-relaxed">
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
