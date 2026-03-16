import { finalCTA } from '../../data/homeData'
import { ArrowRight } from 'lucide-react'

const FinalCTASection = () => {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <div className="relative bg-gradient-to-r from-mangaale-primary via-mangaale-primary to-mangaale-secondary rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent" />
        </div>

        <div className="relative z-10">
          {/* Content */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {finalCTA.title}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {finalCTA.subtitle}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-mangaale-primary rounded-lg font-semibold hover:shadow-lg hover:shadow-black/20 transition-all duration-300 flex items-center justify-center gap-2 group">
                {finalCTA.cta1}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-300">
                {finalCTA.cta2}
              </button>
            </div>

            {/* Trust message */}
            <p className="mt-8 text-white/80 text-sm">
              💬 Join 150+ restaurants transforming their operations with Mangaale
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default FinalCTASection
