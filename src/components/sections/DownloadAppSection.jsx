import React, { useState } from 'react'
import { Download, Smartphone, Apple, CheckCircle2, Zap, Clock, Headphones } from 'lucide-react'
import InstallationInstructionsPopup from './InstallationInstructionsPopup'
import { appInfo, appFeatures } from '../../data/appData'

const DownloadAppSection = () => {
  const [showInstallPopup, setShowInstallPopup] = useState(false)

  return (
    <>
      <section id="download-app-section" className="relative overflow-hidden bg-gradient-to-b from-white to-mangaale-bg-soft">
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-mangaale-primary/5 rounded-full -mr-48 -mt-48 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-mangaale-secondary/5 rounded-full -ml-48 -mb-48 blur-3xl pointer-events-none" />

        <div className="mangaale-container mangaale-section relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <div className="order-2 lg:order-1">
              <span className="section-eyebrow mb-5 inline-flex">
                <Smartphone className="w-3.5 h-3.5" />
                Mobile App
              </span>

              <h2 className="section-title mb-4">Download the Mangaale App</h2>
              <p className="text-mangaale-subtext text-base md:text-lg leading-relaxed mb-8">
                Order from nearby restaurants, scan QR menus, and get fast delivery directly from the Mangaale app.
              </p>

              {/* App Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Zap, title: '30-Min Delivery', desc: 'Get your food fast' },
                  { icon: Smartphone, title: 'QR Menu Scan', desc: 'Instant menu access' },
                  { icon: Clock, title: 'Real-time Tracking', desc: 'Know your delivery status' },
                  { icon: Headphones, title: '24/7 Support', desc: 'Always here to help' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="mangaale-icon-box-soft">
                      <Icon className="w-4.5 h-4.5 text-mangaale-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-mangaale-text text-[15px]">{title}</h4>
                      <p className="text-sm text-mangaale-subtext">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button
                  onClick={() => setShowInstallPopup(true)}
                  className="mangaale-button-primary px-7 py-3.5"
                  title="Download APK for Android"
                >
                  <Download className="w-4.5 h-4.5" />
                  Download for Android
                </button>
                <button
                  disabled
                  className="mangaale-button bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
                  title="iOS coming soon"
                >
                  <Apple className="w-4.5 h-4.5" />
                  Coming Soon on iOS
                </button>
              </div>

              {/* App Info */}
              <div className="mangaale-card p-5 md:p-6">
                <p className="text-xs font-semibold tracking-wider uppercase text-mangaale-subtext mb-4">App Information</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'App Version', value: appInfo.version },
                    { label: 'Size', value: appInfo.size },
                    { label: 'Platform', value: appInfo.platform },
                    { label: 'Downloads', value: appInfo.downloads },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="font-display text-lg font-extrabold text-mangaale-primary">{item.value}</p>
                      <p className="text-xs text-mangaale-subtext mt-0.5">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Badge */}
              <div className="mt-5 flex items-center gap-2 text-sm text-mangaale-subtext">
                <CheckCircle2 className="w-4.5 h-4.5 text-green-500" />
                <span>Secure & Safe Download – HTTPS Protected</span>
              </div>
            </div>

            {/* Right Side - Phone Mockup */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-[260px]">
                {/* Phone Frame */}
                <div className="bg-mangaale-text rounded-[2.5rem] shadow-2xl p-2.5">
                  <div className="bg-gradient-to-b from-mangaale-primary to-mangaale-secondary rounded-[2rem] h-full flex flex-col items-center justify-center p-8 text-white overflow-hidden relative min-h-[380px]">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-mangaale-text rounded-b-2xl z-20" />

                    {/* Phone Content */}
                    <div className="text-center space-y-5 mt-4">
                      <Smartphone className="w-14 h-14 mx-auto opacity-90" />
                      <div>
                        <h3 className="text-2xl font-display font-extrabold">Mangaale</h3>
                        <p className="text-white/70 text-sm mt-1">Order. Scan. Deliver.</p>
                      </div>
                      <div className="space-y-2">
                        {['Fast Delivery', 'Easy Ordering', 'Real-time Tracking'].map((text) => (
                          <div key={text} className="flex items-center justify-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-white/80" />
                            <span className="text-sm text-white/90">{text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Status Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-5 bg-mangaale-text rounded-b-[2rem] z-10" />
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-mangaale-primary to-mangaale-secondary text-white px-4 py-2 rounded-full font-semibold shadow-lg text-sm">
                  Available Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="bg-white">
        <div className="mangaale-container mangaale-section">
          <div className="text-center mb-10">
            <h3 className="section-title text-2xl md:text-3xl mb-3">Why Download Our App?</h3>
            <p className="section-subtitle">
              Get exclusive features and benefits available only on the Mangaale mobile app
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {appFeatures.map((feature, index) => (
              <div key={index} className="mangaale-card-hover p-6 group">
                <div className="mangaale-icon-box w-10 h-10 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-mangaale-text text-[15px] mb-1.5">{feature.title}</h4>
                <p className="text-mangaale-subtext text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Popup */}
      <InstallationInstructionsPopup
        isOpen={showInstallPopup}
        onClose={() => setShowInstallPopup(false)}
      />
    </>
  )
}

export default DownloadAppSection
