import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, BellRing, Check, TrendingUp } from 'lucide-react'
import Reveal from '../motion/Reveal'
import Counter from '../motion/Counter'
import MagneticButton from '../motion/MagneticButton'
import useMotionPrefs from '../../hooks/useMotionPrefs'

/**
 * "Grow Your Restaurant With Mangaale" — partner-facing section with a
 * dashboard mock that assembles itself as the section scrolls into view.
 */

const BENEFITS = [
  'Receive online orders',
  'Manage your digital menu',
  'Track restaurant performance',
  'Reach more customers',
  'Simplify daily operations'
]

/* Bars are drawn with scaleY so the "chart draws itself" without any library */
const CHART = [38, 55, 44, 72, 61, 88, 76]

const DashboardMock = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.35 })
  const { reduced } = useMotionPrefs()
  const show = reduced || inView

  return (
    <div ref={ref} className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-mangaale-primary/12 blur-3xl"
      />

      <div className="overflow-hidden rounded-3xl border border-mangaale-border bg-white shadow-lift">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-mangaale-border bg-mangaale-tint/60 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF6058]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28CA42]" />
          <p className="ml-2 text-[0.72rem] font-bold text-mangaale-subtext">Mangaale Partner Dashboard</p>
        </div>

        <div className="space-y-4 p-4 sm:p-5">
          {/* KPI row */}
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { label: 'Orders today', value: 128, suffix: '' },
              { label: 'Revenue', value: 42, suffix: 'K', prefix: '₹' },
              { label: 'Avg rating', value: 48, suffix: '', display: '4.8' }
            ].map((kpi, i) => (
              <motion.div
                key={kpi.label}
                initial={reduced ? false : { opacity: 0, y: 18 }}
                animate={show ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.09, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-xl border border-mangaale-border bg-white p-2.5 sm:p-3"
              >
                <p className="text-[0.62rem] font-semibold uppercase tracking-wide text-mangaale-subtext">
                  {kpi.label}
                </p>
                <p className="mt-1 text-[1.05rem] font-extrabold text-mangaale-text sm:text-[1.25rem]">
                  {kpi.display ? (
                    kpi.display
                  ) : (
                    <Counter value={kpi.value} prefix={kpi.prefix || ''} suffix={kpi.suffix} />
                  )}
                </p>
              </motion.div>
            ))}
          </div>

          {/* chart */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.34, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl border border-mangaale-border bg-white p-3 sm:p-4"
          >
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[0.78rem] font-bold text-mangaale-text">Weekly orders</p>
              <span className="flex items-center gap-1 rounded-md bg-mangaale-tint px-1.5 py-0.5 text-[0.65rem] font-bold text-mangaale-primary">
                <TrendingUp className="h-3 w-3" />
                +18%
              </span>
            </div>
            <div className="flex h-[92px] items-end gap-1.5 sm:gap-2">
              {CHART.map((h, i) => (
                <motion.div
                  key={i}
                  initial={reduced ? false : { scaleY: 0 }}
                  animate={show ? { scaleY: 1 } : {}}
                  transition={{ delay: 0.45 + i * 0.06, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  style={{ height: `${h}%`, transformOrigin: 'bottom' }}
                  className={`flex-1 rounded-t-md ${
                    i === CHART.length - 2
                      ? 'bg-gradient-to-t from-mangaale-secondary to-mangaale-bright'
                      : 'bg-mangaale-primary/25'
                  }`}
                />
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[0.6rem] font-medium text-mangaale-subtext">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                <span key={i} className="flex-1 text-center">
                  {d}
                </span>
              ))}
            </div>
          </motion.div>

          {/* live order row */}
          <motion.div
            initial={reduced ? false : { opacity: 0, x: 22 }}
            animate={show ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.95, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 rounded-xl border border-mangaale-primary/30 bg-mangaale-tint/70 p-3"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-mangaale-primary text-white">
              <BellRing className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[0.82rem] font-bold text-mangaale-text">New order received</p>
              <p className="text-[0.72rem] text-mangaale-subtext">Table 6 · 3 items · ₹640</p>
            </div>
            <span className="rounded-lg bg-mangaale-primary px-2.5 py-1 text-[0.7rem] font-bold text-white">
              Accept
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const RestaurantSection = () => (
  <section className="m-section relative w-full overflow-hidden bg-white">
    <div className="m-container">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* copy */}
        <Reveal>
          <p className="section-eyebrow">For Restaurants</p>
          <h2 className="section-title mt-5">
            Grow Your Restaurant
            <br />
            With <span className="text-gradient-brand">Mangaale.</span>
          </h2>
          <p className="mt-4 max-w-lg text-[1rem] leading-relaxed text-mangaale-subtext sm:text-[1.08rem]">
            Take orders directly, own your customer relationships and run daily operations from a
            single dashboard built for local restaurants.
          </p>

          <ul className="mt-7 space-y-3">
            {BENEFITS.map((benefit, i) => (
              <motion.li
                key={benefit}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mangaale-primary text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-[0.98rem] font-medium text-mangaale-text">{benefit}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <MagneticButton className="w-full sm:w-auto">
              <Link to="/contact" className="mangaale-button-primary group w-full sm:w-auto">
                Partner With Mangaale
                <ArrowRight className="btn-arrow h-[18px] w-[18px]" />
              </Link>
            </MagneticButton>
            <Link to="/contact" className="mangaale-button-secondary w-full sm:w-auto">
              Book Demo
            </Link>
          </div>
        </Reveal>

        {/* dashboard */}
        <Reveal delay={0.12} y={40}>
          <DashboardMock />
        </Reveal>
      </div>
    </div>
  </section>
)

export default RestaurantSection
