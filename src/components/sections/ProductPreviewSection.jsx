import React from 'react'
import SectionReveal from '../shared/SectionReveal'

const previews = [
  {
    title: 'Restaurant Dashboard',
    rows: [3, 1],
    features: ['Real-time order management', 'Analytics & insights', 'Staff coordination'],
  },
  {
    title: 'Customer Mobile App',
    rows: [1, 2],
    features: ['Browse restaurants', 'View menus & place orders', 'Track deliveries'],
  },
  {
    title: 'Rider App',
    rows: [1],
    features: ['Accept delivery tasks', 'Navigation & tracking', 'Earnings tracking'],
  },
  {
    title: 'Analytics & Reports',
    rows: [1, 2],
    features: ['Revenue insights', 'Order analytics', 'Performance metrics'],
  },
]

const ProductPreviewSection = () => {
  return (
    <SectionReveal className="w-full">
      <div className="mangaale-container mangaale-section">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="section-eyebrow mb-4 inline-flex">Platform</span>
          <h2 className="section-title mb-4">Platform Preview</h2>
          <p className="section-subtitle">
            Get a glimpse of how Mangaale works across different user interfaces
          </p>
        </div>

        {/* Preview Grid */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {previews.map((preview) => (
            <div key={preview.title} className="mangaale-card-hover overflow-hidden">
              <div className="bg-gradient-to-br from-mangaale-primary to-mangaale-secondary p-4 px-5">
                <h3 className="text-white font-semibold text-[15px]">{preview.title}</h3>
              </div>
              <div className="p-5 md:p-6 space-y-4 bg-gradient-to-b from-mangaale-bg-soft/50 to-white">
                {preview.rows.map((cols, i) => (
                  <div key={i} className={`grid gap-3 ${cols > 1 ? `grid-cols-${cols}` : ''}`}>
                    {Array.from({ length: cols }).map((_, j) => (
                      <div key={j} className={`${cols === 1 ? 'h-28' : 'h-14'} bg-white rounded-xl border border-gray-100`} />
                    ))}
                  </div>
                ))}
                <div className="text-center space-y-1 pt-1">
                  {preview.features.map((f) => (
                    <p key={f} className="text-sm text-mangaale-subtext">✓ {f}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-10 mangaale-card bg-mangaale-bg-soft p-5 md:p-6 text-center">
          <p className="text-mangaale-text text-[15px]">
            <strong>Note:</strong> These are preview mockups. Actual screenshots will be added during the public launch.
          </p>
        </div>
      </div>
    </SectionReveal>
  )
}

export default ProductPreviewSection
