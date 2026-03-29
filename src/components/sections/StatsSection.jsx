import SectionReveal from '../../components/shared/SectionReveal'
import { trustStats } from '../../data/homeData'
import * as Icons from 'lucide-react'

const StatsSection = () => {
  return (
    <SectionReveal className="w-full">
      <div className="mangaale-container mangaale-section">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {trustStats.map((stat, index) => {
            const IconComponent = Icons[stat.icon]
            return (
              <div
                key={index}
                className="mangaale-card-hover p-6 md:p-8 text-center"
              >
                {IconComponent && (
                  <div className="mangaale-icon-box mx-auto mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                )}
                <p className="font-display text-3xl md:text-4xl font-extrabold text-mangaale-text">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-mangaale-subtext font-medium">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </SectionReveal>
  )
}

export default StatsSection
