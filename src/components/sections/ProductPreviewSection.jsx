import React from 'react'
import SectionReveal from '../shared/SectionReveal'

const ProductPreviewSection = () => {
  return (
    <SectionReveal className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mangaale-text mb-4">
          Platform Preview
        </h2>
        <p className="text-lg text-mangaale-subtext max-w-2xl mx-auto">
          Get a glimpse of how Mangaale works across different user interfaces
        </p>
      </div>

      {/* Preview Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Restaurant Dashboard Preview */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-mangaale-primary/10 hover:shadow-xl transition-all duration-300">
          <div className="bg-gradient-to-br from-mangaale-primary to-mangaale-secondary p-4">
            <h3 className="text-white font-bold text-lg">Restaurant Dashboard</h3>
          </div>
          <div className="p-6 space-y-4 bg-mangaale-bg-soft">
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-20 bg-white rounded-lg border border-mangaale-primary/20" />
              ))}
            </div>
            <div className="h-32 bg-white rounded-lg border border-mangaale-primary/20" />
            <p className="text-center text-sm text-mangaale-subtext">
              ✓ Real-time order management<br/>
              ✓ Analytics & insights<br/>
              ✓ Staff coordination
            </p>
          </div>
        </div>

        {/* Customer App Preview */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-mangaale-primary/10 hover:shadow-xl transition-all duration-300">
          <div className="bg-gradient-to-br from-mangaale-primary to-mangaale-secondary p-4">
            <h3 className="text-white font-bold text-lg">Customer Mobile App</h3>
          </div>
          <div className="p-6 space-y-4 bg-mangaale-bg-soft">
            <div className="h-40 bg-white rounded-lg border border-mangaale-primary/20" />
            <div className="grid grid-cols-2 gap-3">
              <div className="h-12 bg-white rounded-lg border border-mangaale-primary/20" />
              <div className="h-12 bg-white rounded-lg border border-mangaale-primary/20" />
            </div>
            <p className="text-center text-sm text-mangaale-subtext">
              ✓ Browse restaurants<br/>
              ✓ View menus & place orders<br/>
              ✓ Track deliveries
            </p>
          </div>
        </div>

        {/* Rider App Preview */}
        <div className=" bg-white rounded-2xl overflow-hidden shadow-lg border border-mangaale-primary/10 hover:shadow-xl transition-all duration-300">
          <div className="bg-gradient-to-br from-mangaale-primary to-mangaale-secondary p-4">
            <h3 className="text-white font-bold text-lg">Rider App</h3>
          </div>
          <div className="p-6 space-y-4 bg-mangaale-bg-soft">
            <div className="h-40 bg-white rounded-lg border border-mangaale-primary/20" />
            <div className="space-y-2">
              <div className="h-4 bg-white rounded w-3/4 border border-mangaale-primary/20" />
              <div className="h-4 bg-white rounded w-1/2 border border-mangaale-primary/20" />
            </div>
            <p className="text-center text-sm text-mangaale-subtext">
              ✓ Accept delivery tasks<br/>
              ✓ Navigation & tracking<br/>
              ✓ Earnings tracking
            </p>
          </div>
        </div>

        {/* Analytics Preview */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-mangaale-primary/10 hover:shadow-xl transition-all duration-300">
          <div className="bg-gradient-to-br from-mangaale-primary to-mangaale-secondary p-4">
            <h3 className="text-white font-bold text-lg">Analytics & Reports</h3>
          </div>
          <div className="p-6 space-y-4 bg-mangaale-bg-soft">
            <div className="h-24 bg-white rounded-lg border border-mangaale-primary/20" />
            <div className="grid grid-cols-2 gap-3">
              <div className="h-16 bg-white rounded-lg border border-mangaale-primary/20" />
              <div className="h-16 bg-white rounded-lg border border-mangaale-primary/20" />
            </div>
            <p className="text-center text-sm text-mangaale-subtext">
              ✓ Revenue insights<br/>
              ✓ Order analytics<br/>
              ✓ Performance metrics
            </p>
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="mt-12 p-6 bg-mangaale-bg-soft rounded-xl border border-mangaale-primary/10 text-center">
        <p className="text-mangaale-text">
          <strong>Note:</strong> These are preview mockups. Actual screenshots will be added during the public launch.
        </p>
      </div>
      </div>
    </SectionReveal>
  )
}

export default ProductPreviewSection
