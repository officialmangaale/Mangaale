import { finalCTA } from '../../data/homeData'
import { ArrowRight } from 'lucide-react'

const FinalCTASection = () => {
  return (
    <section className="w-full">
      <div className="mangaale-container mangaale-section">
        <div className="mangaale-cta-banner">
          {/* Decorative */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent" />
          </div>

          <div className="relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {finalCTA.title}
              </h2>
              <p className="text-lg text-white/85 mb-8 leading-relaxed">
                {finalCTA.subtitle}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
                <button className="mangaale-button bg-white text-mangaale-primary hover:shadow-lg hover:-translate-y-0.5 px-8 py-3.5 group">
                  {finalCTA.cta1}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="mangaale-button border-2 border-white text-white hover:bg-white/10 px-8 py-3.5">
                  {finalCTA.cta2}
                </button>
              </div>

              {/* Trust message */}
              <p className="mt-8 text-white/70 text-sm font-medium">
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
