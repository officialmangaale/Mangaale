import { Link } from 'react-router-dom'
import { ArrowRight, Bike, Store, Users } from 'lucide-react'
import Reveal from '../motion/Reveal'
import TiltCard from '../motion/TiltCard'

/**
 * Three audience cards with a subtle desktop perspective tilt.
 * Each card links to its existing audience route — no routes invented.
 */
const CARDS = [
  {
    title: 'For Restaurants',
    description: 'Grow your business, take direct orders and reach more customers in your city.',
    Icon: Store,
    to: '/for-restaurants',
    cta: 'Explore restaurant tools'
  },
  {
    title: 'For Customers',
    description: 'Find your favourite food nearby, order in seconds and track every delivery live.',
    Icon: Users,
    to: '/for-customers',
    cta: 'See the customer app'
  },
  {
    title: 'For Riders',
    description: 'Earn while delivering around your city with smart routing and transparent payouts.',
    Icon: Bike,
    to: '/for-riders',
    cta: 'Join as a rider'
  }
]

const BuiltForEveryoneSection = () => (
  <section className="m-section w-full bg-white">
    <div className="m-container">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="section-eyebrow">Built for everyone</p>
        <h2 className="section-title mt-5">
          One app, <span className="text-gradient-brand">three sides</span> of the table
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[1rem] leading-relaxed text-mangaale-subtext sm:text-[1.08rem]">
          Whether you cook it, order it or deliver it — Mangaale is built around how you work.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16 lg:gap-6">
        {CARDS.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.09}>
            <TiltCard className="group h-full">
              <Link
                to={card.to}
                className="flex h-full flex-col rounded-3xl border border-mangaale-border bg-white p-6 shadow-soft transition-colors duration-300 hover:border-mangaale-primary/40 lg:p-7"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-mangaale-bright to-mangaale-secondary text-white shadow-glow transition-transform duration-300 group-hover:-translate-y-1">
                  <card.Icon className="h-6 w-6" />
                </span>

                <h3 className="mt-5 text-[1.25rem] font-extrabold tracking-tight text-mangaale-text">
                  {card.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[0.95rem] leading-relaxed text-mangaale-subtext">
                  {card.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-1.5 text-[0.9rem] font-bold text-mangaale-primary">
                  {card.cta}
                  <ArrowRight className="btn-arrow h-4 w-4" />
                </span>
              </Link>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default BuiltForEveryoneSection
