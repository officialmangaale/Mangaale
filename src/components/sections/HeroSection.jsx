import { Link } from 'react-router-dom'
import { ArrowRight, Zap } from 'lucide-react'
import { heroData } from '../../data/homeData'
import SectionReveal from '../../components/shared/SectionReveal'

const HeroSection = () => {
  return (
    <SectionReveal className="relative overflow-hidden py-16 md:py-20 lg:py-28">
      {/* Background glows */}
      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-mangaale-primary/8 to-transparent blur-[100px] pointer-events-none" />
      <div className="absolute -left-40 top-1/2 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-mangaale-secondary/5 to-transparent blur-[100px] pointer-events-none" />

      <div className="mangaale-container relative z-10">
        <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <div className="section-eyebrow mb-6">
              <Zap className="w-3.5 h-3.5" />
              <span>Pilot Phase – Onboarding Open</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6">
              {heroData.headline}
            </h1>

            <p className="text-base md:text-lg text-mangaale-subtext leading-relaxed max-w-xl mb-4">
              {heroData.subheadline}
            </p>

            <p className="text-sm text-mangaale-subtext/80 italic mb-8">
              {heroData.pilotNote}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="mangaale-button-primary px-7 py-3.5 group">
                {heroData.cta1}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="mangaale-button-secondary px-7 py-3.5">
                {heroData.cta2}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex flex-wrap gap-5 text-sm text-mangaale-subtext">
              {['150+ Restaurants', '10K+ Orders', '5+ Cities'].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-mangaale-primary" />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Hero Visual */}
          <div className="relative">
            <div className="space-y-4">
              {/* Desktop Mockup */}
              <div className="hidden md:block relative mangaale-card p-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-mangaale-primary/3 to-transparent pointer-events-none" />
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div className="h-20 bg-gradient-to-br from-mangaale-primary to-mangaale-secondary rounded-xl opacity-80" />
                    <div className="h-20 bg-gradient-to-br from-mangaale-secondary to-orange-300 rounded-xl opacity-60" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-100 rounded-full w-3/4" />
                    <div className="h-3 bg-gray-100 rounded-full w-1/2" />
                  </div>
                  <p className="mt-6 text-center text-mangaale-subtext text-sm font-medium">
                    Restaurant Dashboard Preview
                  </p>
                </div>
              </div>

              {/* Mobile Preview */}
              <div className="md:absolute md:bottom-0 md:right-0 md:w-1/2 mx-auto max-w-[200px]">
                <div className="bg-mangaale-text rounded-[2rem] shadow-2xl p-1.5 overflow-hidden">
                  <div className="bg-mangaale-bg-soft rounded-[1.6rem] p-4 space-y-3 min-h-[280px]">
                    <div className="h-7 bg-gradient-to-r from-mangaale-primary to-mangaale-secondary rounded-lg w-2/3" />
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-100 rounded-full w-full" />
                      <div className="h-3 bg-gray-100 rounded-full w-5/6" />
                    </div>
                    <div className="pt-3 space-y-2">
                      <div className="h-10 bg-white rounded-xl" />
                      <div className="h-10 bg-white rounded-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}

export default HeroSection
