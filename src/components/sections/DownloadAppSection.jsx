<<<<<<< HEAD
import { useState } from 'react'
import { Apple, CheckCircle2, Clock, Download, Headphones, ShieldCheck, Smartphone, Zap } from 'lucide-react'
import Reveal from '../motion/Reveal'
import MagneticButton from '../motion/MagneticButton'
import PhoneFrame from '../visuals/PhoneFrame'
import { HomeScreen } from '../visuals/AppScreens'
import InstallationInstructionsPopup from './InstallationInstructionsPopup'
import { appInfo, appFeatures } from '../../data/appData'
import useMotionPrefs from '../../hooks/useMotionPrefs'

/**
 * Download section on the home page.
 *
 * The section id (`download-app-section`) is unchanged — the navbar's
 * "Download App" button scrolls to it, and that behaviour still works.
 * Colours moved from the old orange palette onto the Mangaale turquoise brand.
 */

const HIGHLIGHTS = [
  { title: '30-Min Delivery', description: 'Get your food fast', Icon: Zap },
  { title: 'QR Menu Scan', description: 'Instant menu access', Icon: Smartphone },
  { title: 'Real-time Tracking', description: 'Know your delivery status', Icon: Clock },
  { title: '24/7 Support', description: 'Always here to help', Icon: Headphones }
]

const DownloadAppSection = () => {
  const [showInstallPopup, setShowInstallPopup] = useState(false)
  const { reduced } = useMotionPrefs()

  return (
    <>
      <section
        id="download-app-section"
        className="m-section relative w-full overflow-hidden bg-gradient-to-b from-white to-mangaale-tint"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-0 h-[460px] w-[460px] rounded-full bg-mangaale-primary/12 blur-[120px]"
        />

        <div className="m-container relative">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* copy */}
            <Reveal className="order-2 lg:order-1">
              <p className="section-eyebrow">Get the app</p>
              <h2 className="section-title mt-5">
                Download the <span className="text-gradient-brand">Mangaale</span> App
              </h2>
              <p className="mt-4 max-w-lg text-[1rem] leading-relaxed text-mangaale-subtext sm:text-[1.08rem]">
                Order from nearby restaurants, scan QR menus and follow your delivery in real time —
                straight from your phone.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {HIGHLIGHTS.map(({ title, description, Icon }) => (
                  <div key={title} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-mangaale-tint">
                      <Icon className="h-4 w-4 text-mangaale-primary" />
                    </span>
                    <div>
                      <p className="text-[0.94rem] font-bold text-mangaale-text">{title}</p>
                      <p className="text-[0.84rem] text-mangaale-subtext">{description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* download actions */}
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <MagneticButton className="w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setShowInstallPopup(true)}
                    className="mangaale-button-primary w-full px-7 py-3.5 sm:w-auto"
                    title="Download APK for Android"
                  >
                    <Download className="h-[18px] w-[18px]" />
                    Download for Android
                  </button>
                </MagneticButton>

                <span
                  className="mangaale-button w-full cursor-not-allowed border border-mangaale-border bg-mangaale-tint px-7 py-3.5 text-mangaale-subtext sm:w-auto"
                  aria-disabled="true"
                  title="iOS coming soon"
                >
                  <Apple className="h-[18px] w-[18px]" />
=======
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
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
                  Coming Soon on iOS
                </span>
              </div>

<<<<<<< HEAD
              {/* app meta */}
              <div className="mt-7 rounded-2xl border border-mangaale-border bg-white p-4 shadow-soft sm:p-5">
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-mangaale-subtext">
                  App information
                </p>
                <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {[
                    ['App Version', appInfo.version],
                    ['Size', appInfo.size],
                    ['Platform', appInfo.platform],
                    ['Min Android', `${appInfo.minAndroidVersion}+`]
                  ].map(([label, value]) => (
                    <div key={label}>
                      <p className="text-[1.05rem] font-extrabold text-mangaale-primary">{value}</p>
                      <p className="text-[0.75rem] text-mangaale-subtext">{label}</p>
                    </div>
                  ))}
=======
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
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
                </div>
              </div>

              <p className="mt-4 flex items-center gap-2 text-[0.85rem] text-mangaale-subtext">
                <ShieldCheck className="h-4 w-4 text-mangaale-primary" />
                Secure &amp; safe download — HTTPS protected
              </p>
            </Reveal>

            {/* phone */}
            <Reveal delay={0.1} y={40} className="order-1 lg:order-2">
              <div className="relative mx-auto flex w-full max-w-[300px] justify-center">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 m-auto h-[380px] w-[380px] rounded-full bg-mangaale-primary/20 blur-[100px]"
                />
                <div className={reduced ? 'w-[250px]' : 'w-[250px] animate-float-y'}>
                  <PhoneFrame screenClassName="h-[480px]">
                    <HomeScreen />
                  </PhoneFrame>
                </div>

                <span className="absolute -bottom-3 right-2 rounded-full bg-mangaale-primary px-4 py-2 text-[0.82rem] font-bold text-white shadow-glow">
                  Available Now
                </span>
              </div>
            </Reveal>
          </div>

          {/* feature grid */}
          <div className="mt-20 lg:mt-24">
            <Reveal className="text-center">
              <h3 className="text-[1.5rem] font-extrabold tracking-tight text-mangaale-text sm:text-[1.85rem]">
                Why download our app?
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-[0.98rem] leading-relaxed text-mangaale-subtext">
                Everything you need to order, track and enjoy food from the businesses around you.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {appFeatures.map((feature, i) => (
                <Reveal key={feature.title} delay={i * 0.06}>
                  <div className="group h-full rounded-2xl border border-mangaale-border bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-mangaale-primary/35 hover:shadow-card">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-mangaale-bright to-mangaale-secondary text-white transition-transform duration-300 group-hover:scale-110">
                      <CheckCircle2 className="h-5 w-5" />
                    </span>
                    <h4 className="mt-4 text-[1.02rem] font-extrabold text-mangaale-text">
                      {feature.title}
                    </h4>
                    <p className="mt-1.5 text-[0.9rem] leading-relaxed text-mangaale-subtext">
                      {feature.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
=======
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
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
      <InstallationInstructionsPopup
        isOpen={showInstallPopup}
        onClose={() => setShowInstallPopup(false)}
      />
    </>
  )
}

export default DownloadAppSection
