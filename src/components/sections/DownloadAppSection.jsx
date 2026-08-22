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
                  Coming Soon on iOS
                </span>
              </div>

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

      <InstallationInstructionsPopup
        isOpen={showInstallPopup}
        onClose={() => setShowInstallPopup(false)}
      />
    </>
  )
}

export default DownloadAppSection
