import SectionReveal from '../../components/shared/SectionReveal'
import { features } from '../../data/homeData'
import * as Icons from 'lucide-react'

const FeatureShowcaseSection = () => {
  return (
    <SectionReveal className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mangaale-text mb-4">
          Platform Features
        </h2>
        <p className="text-lg text-mangaale-subtext max-w-2xl mx-auto">
          Everything you need to run your restaurant business efficiently
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        {features.map((feature, index) => {
          const IconComponent = Icons[feature.icon]
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-mangaale-primary/10 hover:border-mangaale-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              {IconComponent && (
                <div className="w-12 h-12 bg-gradient-to-br from-mangaale-primary to-mangaale-secondary rounded-lg flex items-center justify-center text-white mb-4">
                  <IconComponent className="w-6 h-6" />
                </div>
              )}
              
              {/* Title */}
              <h3 className="text-lg font-semibold text-mangaale-text mb-2">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-mangaale-subtext">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>

      {/* Bottom Note */}
      <div className="mt-12 p-6 bg-mangaale-bg-soft rounded-xl border border-mangaale-primary/10 text-center">
        <p className="text-mangaale-text">
          <span className="font-semibold">All features </span>
          work seamlessly together to give you complete control over your restaurant operations
        </p>
      </div>
      </div>
    </SectionReveal>
  )
}

export default FeatureShowcaseSection
