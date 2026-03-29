import React from 'react'
import { processSteps } from '../../data/homeData'
import SectionReveal from '../shared/SectionReveal'
import { ArrowDown } from 'lucide-react'

const HowItWorksSection = () => {
  return (
    <SectionReveal className="w-full bg-mangaale-bg-soft">
      <div className="mangaale-container mangaale-section">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="section-eyebrow mb-4 inline-flex">Getting Started</span>
          <h2 className="section-title mb-4">How It Works</h2>
          <p className="section-subtitle">
            Get your restaurant live on Mangaale in just 5 simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto space-y-4">
          {processSteps.map((item, index) => (
            <div key={index}>
              <div className="flex gap-5 md:gap-6">
                {/* Step Number */}
                <div className="flex flex-col items-center gap-3">
                  <div className="mangaale-step-number">
                    {item.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block w-0.5 h-10 bg-gradient-to-b from-mangaale-primary/40 to-mangaale-primary/5 rounded-full" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-grow pb-2">
                  <div className="mangaale-card p-5 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-mangaale-text mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-mangaale-subtext text-[15px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Arrow */}
              {index < processSteps.length - 1 && (
                <div className="md:hidden flex justify-center py-2">
                  <ArrowDown className="w-4 h-4 text-mangaale-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="mangaale-button-primary px-8 py-3.5">
            Start Now – Book a Demo
          </button>
        </div>
      </div>
    </SectionReveal>
  )
}

export default HowItWorksSection
