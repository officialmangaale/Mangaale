import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play, Shield, Sparkles, Store, Zap } from 'lucide-react'
import RevealText from '../motion/RevealText'
import MagneticButton from '../motion/MagneticButton'
import AmbientBackdrop from '../visuals/AmbientBackdrop'
import PhoneFrame from '../visuals/PhoneFrame'
import { HomeScreen } from '../visuals/AppScreens'
import { Burger, Pizza, BiryaniBowl, DeliveryBag } from '../visuals/Food3D'
import usePointerParallax from '../../hooks/usePointerParallax'
import useMotionPrefs from '../../hooks/useMotionPrefs'

/**
 * Hero: ~45% copy / ~55% 3D scene on desktop, stacked on mobile.
 *
 * The "3D" is real CSS perspective — the phone and each food object sit on
 * their own depth layer and translate at different rates from a single shared
 * pointer signal, which is what sells the parallax.
 *
 * Mobile follows the specified stack order (badge -> heading -> description ->
 * chips -> CTAs -> phone -> social proof) and drops the absolutely-positioned
 * notification cards, which have nowhere to sit without covering the screen.
 * They reappear as a compact row under the phone instead.
 */

const TRUST_CHIPS = [
  { label: '100+ Restaurants', Icon: Store },
  { label: 'Easy Ordering', Icon: Zap },
  { label: 'Secure Payments', Icon: Shield }
]

const NOTIFICATIONS = [
  { icon: '🛍️', title: 'New Order', body: ['Order #2387', '2 items · ₹450'] },
  { icon: '🚀', title: 'Fast Delivery', body: ['At your doorstep in no time'] },
  { icon: '🏪', title: '50+ Restaurants', body: ['Near You'] }
]

/* Depth layer: multiplies the shared pointer signal by its own factor */
const ParallaxLayer = ({ x, y, depth = 1, className = '', children }) => {
  const tx = useTransform(x, (v) => v * depth * 46)
  const ty = useTransform(y, (v) => v * depth * 34)
  return (
<<<<<<< HEAD
    <motion.div className={className} style={{ x: tx, y: ty }}>
      {children}
    </motion.div>
  )
}

const NotificationCard = ({ item, className = '', duration = '6s', delay = '0s', floating = true }) => (
  <div
    className={`rounded-2xl border border-mangaale-border bg-white/95 p-3 shadow-card backdrop-blur ${className}`}
    style={floating ? { animation: `float-y ${duration} ease-in-out ${delay} infinite` } : undefined}
  >
    <div className="flex items-start gap-2.5">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-mangaale-tint text-base">
        {item.icon}
      </span>
      <div className="min-w-0">
        <p className="text-[0.8rem] font-bold leading-tight text-mangaale-text">{item.title}</p>
        <div className="mt-0.5 text-[0.7rem] leading-snug text-mangaale-subtext">
          {item.body.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
=======
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
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
        </div>
      </div>
    </div>
  </div>
)

const Avatars = () => (
  <div className="flex -space-x-2.5">
    {[
      ['#FFD9A8', '#F5A65B'],
      ['#BFE7DD', '#5FC7B0'],
      ['#FFC9C4', '#F08A80'],
      ['#CFE0FB', '#8FB4E8']
    ].map((pair, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, scale: 0.6, x: -8 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1.05 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex h-9 w-9 items-center justify-center rounded-full text-sm ring-[2.5px] ring-white"
        style={{ background: `linear-gradient(140deg, ${pair[0]}, ${pair[1]})` }}
      >
        {['🧑', '👩', '🧔', '👧'][i]}
      </motion.span>
    ))}
  </div>
)

const HeroSection = () => {
  const sceneRef = useRef(null)
  const sectionRef = useRef(null)
  const { x, y } = usePointerParallax(sceneRef)
  const { reduced, isDesktop } = useMotionPrefs()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  })
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 90])
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 0.94])

  // Phone tilt follows the pointer, capped at ~7deg
  const phoneRotateY = useTransform(x, [-0.5, 0.5], reduced ? [0, 0] : [7, -7])
  const phoneRotateX = useTransform(y, [-0.5, 0.5], reduced ? [0, 0] : [-5, 5])

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-white to-mangaale-tint/60 pt-24 lg:pt-28"
    >
      <AmbientBackdrop particles={!reduced} />

      <div className="m-container relative z-10">
        <div className="grid items-center gap-12 pb-16 pt-6 lg:grid-cols-[minmax(0,46fr)_minmax(0,54fr)] lg:gap-6 lg:pb-24 lg:pt-10">
          {/* ---------------- COPY (first on every breakpoint) ---------------- */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-mangaale-primary/20 bg-white/80 px-3.5 py-1.5 shadow-soft backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5 text-mangaale-primary" />
              <span className="text-[0.78rem] font-bold text-mangaale-text">
                Trusted by 100+ Local Restaurants
              </span>
            </motion.div>

            <h1 className="mt-6 text-[2.4rem] font-extrabold leading-[1.06] tracking-[-0.035em] text-mangaale-text xs:text-[2.75rem] sm:text-[3.4rem] lg:text-[3.35rem] xl:text-[3.9rem]">
              <RevealText lines={['Your Local Food,']} lineClassName="whitespace-nowrap" delay={0.12} />
              <RevealText
                lines={['Delivered Faster.']}
                lineClassName="whitespace-nowrap text-gradient-brand"
                delay={0.26}
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.52, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-5 max-w-lg text-[1.02rem] leading-relaxed text-mangaale-subtext sm:text-[1.1rem] lg:mx-0"
            >
              Discover your favourite restaurants, order in seconds, and enjoy fresh food from
              businesses around you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.64, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 flex flex-wrap justify-center gap-2.5 lg:justify-start"
            >
              {TRUST_CHIPS.map(({ label, Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-xl border border-mangaale-border bg-white/90 px-3.5 py-2 text-[0.82rem] font-semibold text-mangaale-text shadow-soft backdrop-blur transition-colors hover:border-mangaale-primary/40"
                >
                  <Icon className="h-4 w-4 text-mangaale-primary" />
                  {label}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.76, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <MagneticButton className="w-full sm:w-auto">
                <Link
                  to="/download"
                  className="mangaale-button-primary group w-full px-7 py-3.5 text-[1rem] sm:w-auto"
                >
                  Order Now
                  <ArrowRight className="btn-arrow h-[18px] w-[18px]" />
                </Link>
              </MagneticButton>

              <Link
                to="/contact"
                className="mangaale-button-secondary group w-full px-7 py-3.5 text-[1rem] sm:w-auto"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-mangaale-tint transition-transform duration-200 group-hover:scale-110">
                  <Play className="h-3 w-3 fill-current" />
                </span>
                Watch Demo
              </Link>
            </motion.div>

            {/* social proof — desktop keeps it under the CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 hidden items-center gap-3.5 lg:flex lg:justify-start"
            >
              <Avatars />
              <div className="text-left">
                <p className="text-[0.85rem] font-bold text-mangaale-text">Loved by Thousands</p>
                <p className="flex items-center gap-1.5">
                  <span className="text-[0.85rem] tracking-tight text-amber-400" aria-hidden="true">
                    ★★★★★
                  </span>
                  <span className="text-[0.82rem] font-bold text-mangaale-text">4.8/5</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* ---------------- 3D SCENE ---------------- */}
          <motion.div style={{ y: sceneY, scale: sceneScale }}>
            <motion.div
              ref={sceneRef}
              initial={{ opacity: 0, scale: 0.92, y: 26 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="perspective-1400 relative mx-auto flex h-[430px] w-full items-center justify-center sm:h-[520px] lg:h-[640px]"
            >
              {/* pedestal */}
              <div
                aria-hidden="true"
                className="absolute bottom-[6%] left-1/2 h-[70px] w-[230px] -translate-x-1/2 sm:w-[280px] lg:h-[90px] lg:w-[340px]"
              >
                <div className="absolute inset-0 rounded-[50%] bg-gradient-to-b from-mangaale-primary/25 to-transparent blur-2xl" />
                <div className="absolute inset-x-6 top-1/2 h-[46px] -translate-y-1/2 rounded-[50%] border border-white/70 bg-white/50 backdrop-blur-md" />
                <div className="absolute inset-x-10 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-mangaale-primary/45 blur-[1px]" />
              </div>

              {/* --- food objects, each on its own depth layer --- */}
              <ParallaxLayer
                x={x}
                y={y}
                depth={0.45}
                className="absolute bottom-[13%] left-[4%] z-20 w-[104px] sm:bottom-[15%] sm:left-[8%] sm:w-[132px] lg:left-[1%] lg:w-[168px]"
              >
                <Burger className="h-full w-full animate-float-soft drop-shadow-xl" />
              </ParallaxLayer>

              <ParallaxLayer
                x={x}
                y={y}
                depth={0.75}
                className="absolute bottom-[11%] right-[4%] z-20 w-[100px] sm:bottom-[13%] sm:right-[8%] sm:w-[130px] lg:right-[2%] lg:w-[172px]"
              >
                <Pizza
                  className="h-full w-full animate-float-tilt drop-shadow-xl"
                  style={{ animationDelay: '1.2s' }}
                />
              </ParallaxLayer>

              {/* tablet + desktop only */}
              <ParallaxLayer
                x={x}
                y={y}
                depth={0.6}
                className="absolute right-[6%] top-[20%] z-20 hidden w-[118px] sm:block lg:right-[6%] lg:top-[24%] lg:w-[142px]"
              >
                <BiryaniBowl className="h-full w-full animate-float-y drop-shadow-xl" />
              </ParallaxLayer>

              {/* desktop only — deepest layer, so it moves the most */}
              <ParallaxLayer
                x={x}
                y={y}
                depth={1}
                className="absolute left-[3%] top-[34%] z-10 hidden w-[136px] lg:block"
              >
                <DeliveryBag className="h-full w-full animate-float-soft drop-shadow-2xl" />
              </ParallaxLayer>

              {/* --- the phone --- */}
              <motion.div
                style={{
                  rotateY: phoneRotateY,
                  rotateX: phoneRotateX,
                  transformStyle: 'preserve-3d'
                }}
                className="relative z-30 w-[214px] sm:w-[254px] lg:w-[296px]"
              >
                <div className={reduced ? '' : 'animate-float-y'}>
                  <PhoneFrame screenClassName="h-[404px] sm:h-[484px] lg:h-[568px]">
                    <HomeScreen />
                  </PhoneFrame>
                </div>
              </motion.div>

              {/* --- floating notification cards (sm+ only: below that they
                    have nowhere to sit without covering the screen) --- */}
              <ParallaxLayer
                x={x}
                y={y}
                depth={0.85}
                className="absolute left-0 top-[4%] z-40 hidden w-[164px] sm:block lg:left-[-2%] lg:top-[6%]"
              >
                <NotificationCard item={NOTIFICATIONS[0]} duration="6.5s" />
              </ParallaxLayer>

              {/* kept on the right so it doesn't collide with the burger,
                  which occupies the lower-left of the composition */}
              <ParallaxLayer
                x={x}
                y={y}
                depth={0.65}
                className="absolute right-0 top-[46%] z-40 hidden w-[160px] sm:block lg:right-[-3%] lg:top-[48%]"
              >
                <NotificationCard item={NOTIFICATIONS[1]} duration="7.5s" delay="0.8s" />
              </ParallaxLayer>

              <ParallaxLayer
                x={x}
                y={y}
                depth={0.95}
                className="absolute right-0 top-[8%] z-40 hidden w-[162px] sm:block lg:right-[-2%] lg:top-[6%]"
              >
                <NotificationCard item={NOTIFICATIONS[2]} duration="8s" delay="1.6s" />
              </ParallaxLayer>
            </motion.div>

            {/* mobile: the same notifications, in normal flow under the phone */}
            <div className="mt-6 flex gap-3 sm:hidden">
              {NOTIFICATIONS.slice(0, 2).map((item, i) => (
                <NotificationCard
                  key={item.title}
                  item={item}
                  className="flex-1"
                  floating={!reduced}
                  duration={i === 0 ? '6.5s' : '7.5s'}
                  delay={i === 0 ? '0s' : '0.8s'}
                />
              ))}
            </div>

            {/* mobile/tablet social proof sits after the product shot */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex items-center justify-center gap-3.5 lg:hidden"
            >
              <Avatars />
              <div className="text-left">
                <p className="text-[0.85rem] font-bold text-mangaale-text">Loved by Thousands</p>
                <p className="flex items-center gap-1.5">
                  <span className="text-[0.85rem] tracking-tight text-amber-400" aria-hidden="true">
                    ★★★★★
                  </span>
                  <span className="text-[0.82rem] font-bold text-mangaale-text">4.8/5</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {isDesktop && !reduced && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-[0.72rem] font-medium tracking-wide text-mangaale-subtext/70 lg:block"
        >
          Move your cursor to explore
        </motion.p>
      )}
    </section>
  )
}

export default HeroSection
