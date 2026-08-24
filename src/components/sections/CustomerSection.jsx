import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Compass, MapPinned, Percent, Search, ShoppingBag, Truck } from 'lucide-react'
import Reveal from '../motion/Reveal'
import ScrollDepth from '../motion/ScrollDepth'
import PhoneFrame from '../visuals/PhoneFrame'
import { HomeScreen, CartScreen, TrackingScreen } from '../visuals/AppScreens'
import { downloadLinks } from '../../data/appData'
import useMotionPrefs from '../../hooks/useMotionPrefs'

/**
 * Customer-facing section: three overlapping phones that separate slightly as
 * the section scrolls, plus the app store links.
 *
 * Store URLs come straight from `downloadLinks` — the existing values are
 * reused as-is rather than hardcoded here.
 */

const FEATURES = [
  { label: 'Discover restaurants', Icon: Compass },
  { label: 'Browse full menus', Icon: Search },
  { label: 'Exclusive offers', Icon: Percent },
  { label: 'Easy ordering', Icon: ShoppingBag },
  { label: 'Live order tracking', Icon: MapPinned },
  { label: 'Reliable delivery', Icon: Truck }
]

/* Minimal store badges — drawn inline so no external image assets are needed */
const StoreBadge = ({ href, kicker, name, glyph, disabled }) => {
  const content = (
    <>
      <span className="text-[1.35rem] leading-none">{glyph}</span>
      <span className="text-left leading-tight">
        <span className="block text-[0.62rem] font-medium opacity-75">{kicker}</span>
        <span className="block text-[0.92rem] font-bold">{name}</span>
      </span>
    </>
  )

  const className = `inline-flex items-center gap-2.5 rounded-xl px-4 py-2.5 transition-all duration-200 ${
    disabled
      ? 'cursor-not-allowed border border-mangaale-border bg-mangaale-tint text-mangaale-subtext'
      : 'bg-mangaale-text text-white hover:-translate-y-0.5 hover:shadow-lift'
  }`

  if (disabled) {
    return (
      <span className={className} aria-disabled="true" title="Coming soon">
        {content}
      </span>
    )
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  )
}

const CustomerSection = () => {
  const ref = useRef(null)
  const { reduced } = useMotionPrefs()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  // Phones drift apart at different rates as the section passes through
  const backY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [40, -40])
  const midY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [10, -70])
  const frontY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-15, -105])

  return (
    <section ref={ref} className="m-section relative w-full overflow-hidden bg-mangaale-tint/50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-mangaale-primary/10 blur-[120px]"
      />

      <ScrollDepth className="m-container relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* phones — first on mobile, second on desktop */}
          <Reveal y={40} className="order-1 lg:order-2">
            <div className="relative mx-auto flex h-[430px] w-full max-w-[420px] items-center justify-center sm:h-[500px] sm:max-w-[520px] lg:h-[560px] lg:max-w-[560px]">
              {/* back phone — tracking */}
              <motion.div
                style={{ y: backY }}
                className="absolute left-[-3%] top-[8%] z-10 hidden w-[168px] -rotate-[11deg] sm:block lg:w-[196px]"
              >
                <PhoneFrame glow={false} screenClassName="h-[330px] lg:h-[386px]">
                  <TrackingScreen />
                </PhoneFrame>
              </motion.div>

              {/* front-right phone — cart */}
              <motion.div
                style={{ y: frontY }}
                className="absolute right-[-3%] top-[14%] z-20 hidden w-[168px] rotate-[11deg] sm:block lg:w-[196px]"
              >
                <PhoneFrame glow={false} screenClassName="h-[330px] lg:h-[386px]">
                  <CartScreen />
                </PhoneFrame>
              </motion.div>

              {/* centre phone — home */}
              <motion.div style={{ y: midY }} className="relative z-30 w-[218px] sm:w-[210px] lg:w-[248px]">
                <PhoneFrame screenClassName="h-[420px] sm:h-[404px] lg:h-[476px]">
                  <HomeScreen />
                </PhoneFrame>
              </motion.div>
            </div>
          </Reveal>

          {/* copy */}
          <Reveal className="order-2 lg:order-1">
            <p className="section-eyebrow">For Customers</p>
            <h2 className="section-title mt-5">
              Your Favourite Food.
              <br />
              <span className="text-gradient-brand">Just A Few Taps Away.</span>
            </h2>
            <p className="mt-4 max-w-lg text-[1rem] leading-relaxed text-mangaale-subtext sm:text-[1.08rem]">
              Find the restaurants you already love, order in seconds and watch your food make its
              way to you — all from one app.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-2.5 xs:grid-cols-2">
              {FEATURES.map(({ label, Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-2.5 rounded-xl border border-mangaale-border bg-white px-3.5 py-2.5 shadow-soft"
                >
                  <Icon className="h-4 w-4 shrink-0 text-mangaale-primary" />
                  <span className="text-[0.86rem] font-semibold text-mangaale-text">{label}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <StoreBadge
                href={downloadLinks.playStore}
                kicker="GET IT ON"
                name="Google Play"
                glyph="▶"
              />
              <StoreBadge kicker="Coming soon on" name="App Store" glyph="" disabled />
            </div>
          </Reveal>
        </div>
      </ScrollDepth>
    </section>
  )
}

export default CustomerSection
