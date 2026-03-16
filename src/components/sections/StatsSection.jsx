import SectionReveal from '../../components/shared/SectionReveal'
import { trustStats } from '../../data/homeData'
import * as Icons from 'lucide-react'

const StatsSection = () => {
  return (
    <SectionReveal className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {trustStats.map((stat, index) => {
          const IconComponent = Icons[stat.icon]
          return (
            <div
              key={index}
              className="bg-gradient-to-br from-mangaale-bg-soft to-white rounded-xl p-6 md:p-8 text-center border border-mangaale-primary/10 hover:border-mangaale-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              {IconComponent && (
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-mangaale-primary to-mangaale-secondary rounded-lg text-white mb-4">
                  <IconComponent className="w-6 h-6" />
                </div>
              )}
              <p className="text-3xl md:text-4xl font-bold text-mangaale-text">
                {stat.value}
              </p>
              <p className="mt-2 text-sm md:text-base text-mangaale-subtext font-medium">
                {stat.label}
              </p>
            </div>
          )
        })}
      </div>      </div>    </SectionReveal>
  )
}

export default StatsSection
