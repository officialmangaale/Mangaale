import React from 'react'
import { processSteps } from '../../data/homeData'
import SectionReveal from '../shared/SectionReveal'
import { ArrowRight } from 'lucide-react'

const HowItWorksSection = () => {
  return (
    <SectionReveal className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mangaale-text mb-4">
          How It Works
        </h2>
        <p className="text-lg text-mangaale-subtext max-w-2xl mx-auto">
          Get your restaurant live on Mangaale in just 5 simple steps
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-6 md:space-y-0">
        {processSteps.map((item, index) => (
          <div key={index} className="relative">
            <div className="flex gap-6 md:gap-8">
              {/* Step Number */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-mangaale-primary to-mangaale-secondary rounded-full flex items-center justify-center text-white font-bold text-xl md:text-2xl flex-shrink-0">
                  {item.step}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block w-1 h-16 bg-gradient-to-b from-mangaale-primary to-mangaale-secondary" />
                )}
              </div>

              {/* Content */}
              <div className="pb-10 md:pb-0 flex-grow">
                <div className="bg-white rounded-xl p-6 md:p-8 border border-mangaale-primary/10 hover:border-mangaale-primary/30 transition-all duration-300">
                  <h3 className="text-xl md:text-2xl font-bold text-mangaale-text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-mangaale-subtext">
                    {item.description}
                  </p>
                </div>

                {/* Mobile Arrow */}
                <div className="md:hidden flex justify-center mt-4">
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-mangaale-primary rotate-90" />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <button className="px-8 py-3 bg-gradient-to-r from-mangaale-primary to-mangaale-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-mangaale-primary/30 transition-all duration-300">
          Start Now - Book a Demo
        </button>
      </div>
      </div>
    </SectionReveal>
  )
}

export default HowItWorksSection
