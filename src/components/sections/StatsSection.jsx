import { Package, ShieldCheck, Store, Users } from 'lucide-react'
import Reveal from '../motion/Reveal'
import Counter from '../motion/Counter'

<<<<<<< HEAD
/**
 * Floating stats bar that overlaps the hero.
 * 2x2 on mobile (never four cramped columns), 4-up from md.
 */
const STATS = [
  { value: 100, suffix: '+', label: 'Local Restaurants', Icon: Store },
  { value: 10, suffix: 'K+', label: 'Happy Customers', Icon: Users },
  { value: 50, suffix: 'K+', label: 'Orders Delivered', Icon: Package },
  { value: 99, suffix: '%', label: 'Customer Satisfaction', Icon: ShieldCheck }
]

const StatsSection = () => (
  <section className="relative z-20 -mt-8 w-full sm:-mt-12 lg:-mt-16">
    <div className="m-container">
      <Reveal className="rounded-3xl border border-mangaale-border bg-white/90 p-5 shadow-lift backdrop-blur-xl sm:p-7 lg:px-10 lg:py-8">
        <div className="grid grid-cols-2 gap-x-4 gap-y-7 md:grid-cols-4 md:gap-x-2">
          {STATS.map(({ value, suffix, label, Icon }, i) => (
            <div
              key={label}
              className={`flex items-center gap-3 sm:gap-4 ${
                i > 0 ? 'md:border-l md:border-mangaale-border md:pl-6' : ''
              }`}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-mangaale-tint sm:h-12 sm:w-12">
                <Icon className="h-5 w-5 text-mangaale-primary sm:h-[22px] sm:w-[22px]" />
              </span>
              <div className="min-w-0">
                <p className="text-[1.6rem] font-extrabold leading-none tracking-tight text-mangaale-primary sm:text-[1.9rem]">
                  <Counter value={value} suffix={suffix} />
                </p>
                <p className="mt-1.5 text-[0.78rem] font-medium leading-snug text-mangaale-subtext sm:text-[0.88rem]">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
)
=======
const StatsSection = () => {
  return (
    <SectionReveal className="w-full">
      <div className="mangaale-container mangaale-section">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {trustStats.map((stat, index) => {
            const IconComponent = Icons[stat.icon]
            return (
              <div
                key={index}
                className="mangaale-card-hover p-6 md:p-8 text-center"
              >
                {IconComponent && (
                  <div className="mangaale-icon-box mx-auto mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                )}
                <p className="font-display text-3xl md:text-4xl font-extrabold text-mangaale-text">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-mangaale-subtext font-medium">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </SectionReveal>
  )
}
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6

export default StatsSection
