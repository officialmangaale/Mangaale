import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Play, Shield, Sparkles, Store, Zap } from 'lucide-react'
import RevealText from '../motion/RevealText'
import MagneticButton from '../motion/MagneticButton'
import OrderNowButton from '../ui/OrderNowButton'
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
  const { reduced, isDesktop, isMediumViewport } = useMotionPrefs()
  const heroInView = useInView(sectionRef, { amount: 0 })

  /*
   * One dial for the whole hero: 0 under reduced motion (everything below
   * collapses to identity), and roughly half travel on phones.
   */
  const depth = reduced ? 0 : isMediumViewport ? 1 : 0.55

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  })

  /*
   * Scroll-linked depth for the hero — three layers moving at three speeds, so
   * scrolling away from it reads as the whole scene being pushed backwards
   * rather than sliding off.
   *
   *   backdrop : drifts DOWN, so it travels slower than the page (~87% speed)
   *   copy     : rises fastest, tips back and recedes furthest
   *   scene    : lags slightly and recedes, keeping the product shot forward
   *              of the copy the whole way out
   *
   * Depth is carried by translateZ against a perspective rather than by
   * `scale`. A previous pass removed a scroll-linked `scale` from this subtree
   * because it forced a re-rasterisation of the blur-3xl glow, the two-layer
   * `shadow-phone` and four drop-shadow-filtered SVGs on every scroll frame.
   * `willChange` below is what keeps that from coming back: it promotes each
   * layer once so the compositor transforms a cached raster instead of
   * repainting it. It is dropped again as soon as the hero leaves the viewport
   * so the GPU memory is not held for the whole session.
   */
  const backdropY = useTransform(scrollYProgress, [0, 1], [0, 110 * depth])

  const copyY = useTransform(scrollYProgress, [0, 1], [0, -90 * depth])
  const copyZ = useTransform(scrollYProgress, [0, 1], [0, -140 * depth])
  const copyRotateX = useTransform(scrollYProgress, [0, 1], [0, 4 * depth])
  const copyOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 1 - 0.75 * depth])

  const sceneY = useTransform(scrollYProgress, [0, 1], [0, 90 * depth])
  const sceneZ = useTransform(scrollYProgress, [0, 1], [0, -110 * depth])
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 1 - 0.6 * depth])

  const willChange = heroInView && !reduced ? 'transform, opacity' : 'auto'

  // Phone tilt follows the pointer, capped at ~7deg
  const phoneRotateY = useTransform(x, [-0.5, 0.5], reduced ? [0, 0] : [7, -7])
  const phoneRotateX = useTransform(y, [-0.5, 0.5], reduced ? [0, 0] : [-5, 5])

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-white to-mangaale-tint/60 pt-24 lg:pt-28"
    >
      {/* Background layer — drifts down as the page scrolls up, so it trails
          the content and gives the hero its parallax depth. */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ y: backdropY, willChange }}
      >
        <AmbientBackdrop particles={!reduced} />
      </motion.div>

      <div className="m-container relative z-10">
        <div className="grid items-center gap-12 pb-16 pt-6 lg:grid-cols-[minmax(0,46fr)_minmax(0,54fr)] lg:gap-6 lg:pb-24 lg:pt-10">
          {/* ---------------- COPY (first on every breakpoint) ---------------- */}
          <motion.div
            className="text-center lg:text-left"
            style={{
              y: copyY,
              z: copyZ,
              rotateX: copyRotateX,
              opacity: copyOpacity,
              transformPerspective: 1200,
              willChange
            }}
          >
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
              {/* Straight into the ordering app, same tab — see config/orderApp.js */}
              <MagneticButton className="w-full sm:w-auto">
                <OrderNowButton surface="hero" className="w-full px-7 py-3.5 text-[1rem] sm:w-auto" />
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
          </motion.div>

          {/* ---------------- 3D SCENE ---------------- */}
          <motion.div
            style={{
              y: sceneY,
              z: sceneZ,
              opacity: sceneOpacity,
              transformPerspective: 1400,
              willChange
            }}
          >
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
                {/* Food3D draws its own contact shadow, so the drop-shadow
                    filter here only needs to add a soft lift. Filters on an
                    element with an infinite transform animation are the most
                    expensive thing in this scene, so it is kept small. */}
                <Burger className="h-full w-full animate-float-soft drop-shadow-md" />
              </ParallaxLayer>

              <ParallaxLayer
                x={x}
                y={y}
                depth={0.75}
                className="absolute bottom-[11%] right-[4%] z-20 w-[100px] sm:bottom-[13%] sm:right-[8%] sm:w-[130px] lg:right-[2%] lg:w-[172px]"
              >
                <Pizza
                  className="h-full w-full animate-float-tilt drop-shadow-md"
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
                <BiryaniBowl className="h-full w-full animate-float-y drop-shadow-md" />
              </ParallaxLayer>

              {/* desktop only — deepest layer, so it moves the most */}
              <ParallaxLayer
                x={x}
                y={y}
                depth={1}
                className="absolute left-[3%] top-[34%] z-10 hidden w-[136px] lg:block"
              >
                <DeliveryBag className="h-full w-full animate-float-soft drop-shadow-lg" />
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
