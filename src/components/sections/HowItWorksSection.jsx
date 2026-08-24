import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView, useScroll } from 'framer-motion'
import { CreditCard, MapPin, Bike, UtensilsCrossed } from 'lucide-react'
import Reveal from '../motion/Reveal'
import PhoneFrame from '../visuals/PhoneFrame'
import { screensByStep } from '../visuals/AppScreens'
import useMotionPrefs from '../../hooks/useMotionPrefs'

/**
 * "How Mangaale Works" — scroll-driven product story.
 *
 * Desktop : sticky phone on the left, four steps on the right. Scroll position
 *           drives which step is active and which app screen is shown.
 * Mobile  : plain vertical story with a phone under each step. No sticky
 *           viewport hijacking, which keeps small screens fast and predictable.
 *
 * PERFORMANCE: the two layouts used to be `hidden lg:block` / `lg:hidden`,
 * which is CSS-only — React mounted and ran BOTH of them at all times:
 *
 *  - on desktop, the invisible mobile branch kept a 3.2s setInterval running
 *    that cross-faded a full ~110-element app screen through AnimatePresence,
 *    forever, inside a display:none subtree. That is a periodic main-thread
 *    hitch for output nobody can see.
 *  - on mobile, the invisible desktop branch held a live useScroll
 *    subscription firing on every scroll frame plus a second rendered app
 *    screen, on the device least able to afford either.
 *
 * They are now split into separate components and only the matching one is
 * mounted. Both layouts are visually unchanged.
 */

const STEPS = [
  {
    number: '01',
    title: 'Choose Location',
    description: 'Enter your location and explore the restaurants delivering around you right now.',
    Icon: MapPin
  },
  {
    number: '02',
    title: 'Pick Your Food',
    description: 'Browse real menus, compare ratings and add your favourite dishes to the cart.',
    Icon: UtensilsCrossed
  },
  {
    number: '03',
    title: 'Place Your Order',
    description: 'Check out securely with UPI or cash while the restaurant starts preparing your food.',
    Icon: CreditCard
  },
  {
    number: '04',
    title: 'Fast Delivery',
    description: 'Track your Mangaale rider live and get your order fresh at your doorstep.',
    Icon: Bike
  }
]

const SectionIntro = () => (
  <Reveal className="mb-12 text-center lg:mb-16">
    <p className="section-eyebrow">
      <span className="h-1.5 w-1.5 rounded-full bg-mangaale-primary" />
      Simple &amp; Fast
    </p>
    <h2 className="section-title mt-5">
      How <span className="text-gradient-brand">Mangaale</span> Works
    </h2>
    <p className="mx-auto mt-4 max-w-xl text-[1rem] leading-relaxed text-mangaale-subtext sm:text-[1.08rem]">
      From picking your location to watching your rider arrive — four steps, one app.
    </p>
  </Reveal>
)

/* Cross-fading phone screen shared by both layouts */
const StepPhone = ({ step, className = '' }) => {
  const Screen = screensByStep[step]
  const { reduced } = useMotionPrefs()

  return (
    <PhoneFrame className={className} screenClassName="h-[500px] lg:h-[560px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={reduced ? false : { opacity: 0, scale: 1.04, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, scale: 0.98, y: -10 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="h-full"
        >
          <Screen />
        </motion.div>
      </AnimatePresence>
    </PhoneFrame>
  )
}

/* ---------------- DESKTOP: sticky scroll story ---------------- */
const DesktopStory = () => {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  // Map scroll progress across the tall track onto the four steps
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      const index = Math.min(STEPS.length - 1, Math.max(0, Math.floor(v * STEPS.length)))
      setActive((prev) => (prev === index ? prev : index))
    })
    return unsubscribe
  }, [scrollYProgress])

  return (
    <div ref={trackRef} className="relative" style={{ height: `${STEPS.length * 72}vh` }}>
      <div className="sticky top-24 grid grid-cols-[minmax(0,42fr)_minmax(0,58fr)] items-center gap-16">
        {/* sticky phone */}
        <div className="relative flex justify-center">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 m-auto h-[420px] w-[420px] rounded-full bg-mangaale-primary/18 blur-[100px]"
          />
          <StepPhone step={active} className="w-[286px]" />
        </div>

        {/* steps */}
        <div className="relative">
          {/* progress rail */}
          <div aria-hidden="true" className="absolute left-[27px] top-4 bottom-4 w-[2px] rounded-full bg-mangaale-border">
            <motion.div
              className="w-full origin-top rounded-full bg-gradient-to-b from-mangaale-primary to-mangaale-bright"
              style={{ scaleY: scrollYProgress, height: '100%' }}
            />
          </div>

          <div className="space-y-3">
            {STEPS.map((step, i) => {
              const isActive = i === active
              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActive(i)}
                  className="flex w-full gap-6 rounded-2xl p-4 text-left transition-colors hover:bg-mangaale-tint/60"
                  aria-current={isActive}
                >
                  {/* number bubble */}
                  <motion.span
                    animate={{
                      backgroundColor: isActive ? '#0CB79D' : '#FFFFFF',
                      color: isActive ? '#FFFFFF' : '#5E6B73',
                      borderColor: isActive ? '#0CB79D' : '#E7EEEC',
                      scale: isActive ? 1.06 : 1
                    }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 text-[1rem] font-extrabold"
                  >
                    {isActive ? <step.Icon className="h-6 w-6" /> : step.number}
                  </motion.span>

                  <div className="pt-1">
                    <motion.h3
                      animate={{
                        x: isActive ? 6 : 0,
                        color: isActive ? '#10212B' : '#5E6B73'
                      }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="text-[1.4rem] font-extrabold tracking-tight"
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p
                      animate={{ opacity: isActive ? 1 : 0.55, x: isActive ? 6 : 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="mt-2 max-w-md text-[0.98rem] leading-relaxed text-mangaale-subtext"
                    >
                      {step.description}
                    </motion.p>
                  </div>
                </button>
              )
            })}
          </div>
    </div>
  </div>
</div>
  )
}

/* ---------------- MOBILE / TABLET: vertical story ---------------- */
const MobileStory = ({ reduced }) => (
  <div>
    <div className="relative space-y-4">
    {/* connecting rail */}
    <div aria-hidden="true" className="absolute left-[26px] top-6 bottom-6 w-[2px] rounded-full bg-mangaale-border" />

    {STEPS.map((step, i) => (
      <Reveal key={step.number} delay={i * 0.06} className="relative">
        <div className="flex gap-4">
          <span className="relative z-10 flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-2xl border-2 border-mangaale-primary bg-mangaale-primary text-white shadow-glow">
            <step.Icon className="h-6 w-6" />
          </span>
          <div className="flex-1 rounded-2xl border border-mangaale-border bg-white p-4 shadow-soft">
            <p className="text-[0.72rem] font-extrabold tracking-[0.14em] text-mangaale-primary">
              STEP {step.number}
            </p>
            <h3 className="mt-1 text-[1.15rem] font-extrabold text-mangaale-text">{step.title}</h3>
            <p className="mt-1.5 text-[0.92rem] leading-relaxed text-mangaale-subtext">
              {step.description}
            </p>
          </div>
        </div>
      </Reveal>
    ))}
  </div>

    {/* one phone preview under the story rather than four */}
    <Reveal className="mt-10 flex justify-center" delay={0.1}>
      <MobileStepPreview reduced={reduced} />
    </Reveal>
  </div>
)

const HowItWorksSection = () => {
  const { reduced, isLargeViewport } = useMotionPrefs()

  return (
    <section className="m-section relative w-full overflow-x-clip bg-white">
      {/* soft tinted field behind the story — overflow-x-clip (not overflow-hidden)
          so the sticky pane below keeps working */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-mangaale-primary/6 blur-[120px]"
      />

      <div className="m-container relative">
        <SectionIntro />
        {isLargeViewport ? <DesktopStory /> : <MobileStory reduced={reduced} />}
      </div>
    </section>
  )
}

/**
 * Mobile preview: auto-advances through the four screens on a slow timer so the
 * product still tells its story without any scroll hijacking.
 */
const MobileStepPreview = ({ reduced }) => {
  const [step, setStep] = useState(0)
  const ref = useRef(null)
  // Each tick swaps a full app screen through AnimatePresence, so the timer
  // only runs while the preview is actually on screen.
  const inView = useInView(ref, { amount: 0.3 })

  useEffect(() => {
    if (reduced || !inView) return undefined
    const id = setInterval(() => setStep((s) => (s + 1) % screensByStep.length), 3200)
    return () => clearInterval(id)
  }, [reduced, inView])

  return (
    <div ref={ref} className="flex flex-col items-center gap-4">
      <StepPhone step={step} className="w-[250px]" />
      <div className="flex gap-1.5" role="tablist" aria-label="App preview steps">
        {screensByStep.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === step}
            aria-label={`Show step ${i + 1}`}
            onClick={() => setStep(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === step ? 'w-6 bg-mangaale-primary' : 'w-1.5 bg-mangaale-border'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default HowItWorksSection
