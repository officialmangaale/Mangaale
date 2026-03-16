import { Link } from 'react-router-dom'
import { ArrowRight, Zap } from 'lucide-react'
import { heroData } from '../../data/homeData'
import SectionReveal from '../../components/shared/SectionReveal'

const HeroSection = () => {
  return (
    <SectionReveal className="relative overflow-hidden py-12 md:py-16 lg:py-24">
      {/* Background gradient elements */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-mangaale-primary/10 to-transparent blur-3xl" />
      <div className="absolute -left-32 top-1/2 h-72 w-72 rounded-full bg-gradient-to-br from-mangaale-secondary/5 to-transparent blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-mangaale-bg-soft rounded-full border border-mangaale-primary/20">
              <Zap className="w-4 h-4 text-mangaale-primary" />
              <span className="text-sm font-medium text-mangaale-primary">Pilot Phase - Onboarding Open</span>
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-mangaale-text">
              {heroData.headline}
            </h1>

            <p className="mt-6 text-lg text-mangaale-subtext leading-relaxed max-w-xl">
              {heroData.subheadline}
            </p>

            <p className="mt-4 text-sm text-mangaale-subtext italic">
              {heroData.pilotNote}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-mangaale-primary to-mangaale-secondary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-mangaale-primary/30 transition-all duration-300 flex items-center justify-center gap-2">
                {heroData.cta1}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 border-2 border-mangaale-primary text-mangaale-primary rounded-lg font-semibold hover:bg-mangaale-bg-soft transition-colors">
                {heroData.cta2}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-mangaale-subtext">
              <div>✓ 150+ Restaurants</div>
              <div>✓ 10K+ Orders</div>
              <div>✓ 5+ Cities</div>
            </div>
          </div>

          {/* Right - Hero Image Area */}
          <div className="relative">
            <div className="relative">
              {/* Mockup Container */}
              <div className="space-y-4">
                {/* Desktop Mockup */}
                <div className="hidden md:block relative bg-gradient-to-br from-mangaale-bg-soft to-white rounded-2xl p-8 shadow-xl border border-mangaale-primary/10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-mangaale-primary/5 to-transparent" />
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="h-20 bg-gradient-to-br from-mangaale-primary to-mangaale-secondary rounded-lg opacity-80" />
                      <div className="h-20 bg-gradient-to-br from-mangaale-secondary to-orangey-300 rounded-lg opacity-60" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-mangaale-bg-soft rounded w-3/4" />
                      <div className="h-3 bg-mangaale-bg-soft rounded w-1/2" />
                    </div>
                    <p className="mt-6 text-center text-mangaale-subtext text-sm">
                      Restaurant Dashboard Preview
                    </p>
                  </div>
                </div>

                {/* Mobile Preview */}
                <div className="md:absolute md:bottom-0 md:right-0 md:w-1/2 mx-auto max-w-xs">
                  <div className="bg-white rounded-3xl shadow-2xl border-8 border-mangaale-text p-1 overflow-hidden">
                    <div className="bg-mangaale-bg-soft rounded-2xl p-4 space-y-3 min-h-96">
                      <div className="h-8 bg-gradient-to-r from-mangaale-primary to-mangaale-secondary rounded w-2/3" />
                      <div className="space-y-2">
                        <div className="h-4 bg-mangaale-bg-soft rounded w-full" />
                        <div className="h-4 bg-mangaale-bg-soft rounded w-5/6" />
                      </div>
                      <div className="pt-4 space-y-2">
                        <div className="h-12 bg-white rounded-lg" />
                        <div className="h-12 bg-white rounded-lg" />
                      </div>
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
