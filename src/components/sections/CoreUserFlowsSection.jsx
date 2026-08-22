import React from 'react'
import { Link } from 'react-router-dom'
import { coreUserFlows } from '../../data/homeData'
import SectionReveal from '../shared/SectionReveal'
import * as Icons from 'lucide-react'

const CoreUserFlowsSection = () => {
  return (
    <SectionReveal className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 bg-mangaale-bg-soft rounded-2xl md:rounded-3xl">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mangaale-text mb-4">
          Three Powerful User Flows
        </h2>
        <p className="text-lg text-mangaale-subtext max-w-2xl mx-auto">
          Mangaale serves every stakeholder in the food delivery ecosystem
        </p>
      </div>

      {/* User Flow Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {coreUserFlows.map((flow, index) => {
          const IconComponent = Icons[flow.icon]
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-mangaale-primary/10 hover:border-mangaale-primary/30 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-mangaale-primary to-mangaale-secondary rounded-xl flex items-center justify-center text-white mb-6">
                {IconComponent ? (
                  <IconComponent className="w-8 h-8" />
                ) : (
                  <span className="text-2xl">👥</span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-mangaale-text mb-4">
                {flow.title}
              </h3>

              {/* Features List */}
              <ul className="space-y-3 mb-8 flex-grow">
                {flow.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-mangaale-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 bg-mangaale-primary rounded-full" />
                    </div>
                    <span className="text-mangaale-text">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Link */}
              <Link
                to={flow.link}
                className="inline-flex items-center justify-center gap-2 text-mangaale-primary font-semibold hover:gap-3 transition-all"
              >
                {flow.cta}
                <Icons.ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )
        })}
      </div>
      </div>
    </SectionReveal>
  )
}

export default CoreUserFlowsSection
