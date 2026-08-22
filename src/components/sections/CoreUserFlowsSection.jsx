import React from 'react'
import { Link } from 'react-router-dom'
import { coreUserFlows } from '../../data/homeData'
import SectionReveal from '../shared/SectionReveal'
import * as Icons from 'lucide-react'

const CoreUserFlowsSection = () => {
  return (
    <SectionReveal className="w-full bg-mangaale-bg-soft">
      <div className="mangaale-container mangaale-section">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="section-eyebrow mb-4 inline-flex">Ecosystem</span>
          <h2 className="section-title mb-4">Three Powerful User Flows</h2>
          <p className="section-subtitle">
            Mangaale serves every stakeholder in the food delivery ecosystem
          </p>
        </div>

        {/* User Flow Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {coreUserFlows.map((flow, index) => {
            const IconComponent = Icons[flow.icon]
            return (
              <div
                key={index}
                className="mangaale-card-hover p-7 md:p-8 flex flex-col"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-mangaale-primary to-mangaale-secondary rounded-2xl flex items-center justify-center text-white mb-5">
                  {IconComponent ? (
                    <IconComponent className="w-7 h-7" />
                  ) : (
                    <span className="text-xl">👥</span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-mangaale-text mb-4">{flow.title}</h3>

                {/* Features List */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {flow.features.map((feature, idx) => (
                    <li key={idx} className="mangaale-check-item">
                      <span className="mangaale-check-dot">
                        <span className="w-1.5 h-1.5 bg-mangaale-primary rounded-full" />
                      </span>
                      <span className="text-mangaale-text text-[15px]">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <Link
                  to={flow.link}
                  className="inline-flex items-center gap-2 text-mangaale-primary font-semibold text-[15px] hover:gap-3 transition-all group"
                >
                  {flow.cta}
                  <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
