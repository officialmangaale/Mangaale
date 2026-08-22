import SectionReveal from '../../components/shared/SectionReveal'
import { features } from '../../data/homeData'
import * as Icons from 'lucide-react'

const FeatureShowcaseSection = () => {
  return (
    <SectionReveal className="w-full">
      <div className="mangaale-container mangaale-section">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="section-eyebrow mb-4 inline-flex">Capabilities</span>
          <h2 className="section-title mb-4">Platform Features</h2>
          <p className="section-subtitle">
            Everything you need to run your restaurant business efficiently
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {features.map((feature, index) => {
            const IconComponent = Icons[feature.icon]
            return (
              <div key={index} className="mangaale-card-hover p-5 md:p-6">
                {IconComponent && (
                  <div className="mangaale-icon-box w-10 h-10 rounded-lg mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                )}
                <h3 className="text-[15px] font-semibold text-mangaale-text mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-sm text-mangaale-subtext leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 mangaale-card bg-mangaale-bg-soft p-5 md:p-6 text-center">
          <p className="text-mangaale-text text-[15px]">
            <span className="font-semibold">All features </span>
            work seamlessly together to give you complete control over your restaurant operations
          </p>
        </div>
      </div>
    </SectionReveal>
  )
}

export default FeatureShowcaseSection
