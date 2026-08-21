import { Quote, Star } from 'lucide-react'
import Reveal from '../motion/Reveal'
import { homeTestimonials, partnerLogos } from '../../data/restaurantShowcaseData'
import useMotionPrefs from '../../hooks/useMotionPrefs'

/**
 * Testimonials as a slow CSS marquee that pauses on hover, plus a partner
 * logo strip below it.
 *
 * The marquee duplicates its track and translates -50%, so the loop is
 * seamless. Under reduced motion it falls back to a plain scrollable row —
 * all content stays reachable either way.
 */

const TestimonialCard = ({ item }) => (
  <article className="flex h-full w-[300px] shrink-0 flex-col rounded-2xl border border-mangaale-border bg-white p-5 shadow-soft sm:w-[360px]">
    <Quote className="h-6 w-6 shrink-0 text-mangaale-primary/30" fill="currentColor" strokeWidth={0} />

    <p className="mt-3 flex-1 text-[0.94rem] leading-relaxed text-mangaale-text">
      &ldquo;{item.quote}&rdquo;
    </p>

    <div className="mt-5 flex items-center gap-3 border-t border-mangaale-border pt-4">
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg"
        style={{ background: `linear-gradient(140deg, ${item.from}, ${item.to})` }}
        aria-hidden="true"
      >
        {item.avatar}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[0.9rem] font-bold text-mangaale-text">{item.name}</p>
        <p className="truncate text-[0.78rem] text-mangaale-subtext">{item.role}</p>
      </div>
      <span className="flex shrink-0 items-center gap-0.5" aria-label={`${item.rating} out of 5 stars`}>
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 text-amber-400" fill="currentColor" strokeWidth={0} />
        ))}
      </span>
    </div>
  </article>
)

const TestimonialsSection = () => {
  const { reduced } = useMotionPrefs()

  return (
    <section className="m-section w-full overflow-hidden bg-white">
      <div className="m-container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Testimonials</p>
          <h2 className="section-title mt-5">
            Loved by Restaurants
            <br />
            and <span className="text-gradient-brand">Customers</span>
          </h2>
        </Reveal>
      </div>

      {/* marquee */}
      <Reveal delay={0.1} className="mt-12 lg:mt-16">
        {reduced ? (
          <div className="scrollbar-none snap-x-mandatory flex gap-5 overflow-x-auto px-5">
            {homeTestimonials.map((item) => (
              <div key={item.name} className="snap-start-always">
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="group mask-fade-x relative flex overflow-hidden">
            <div className="flex shrink-0 animate-marquee gap-5 pr-5 group-hover:[animation-play-state:paused]">
              {homeTestimonials.map((item) => (
                <TestimonialCard key={item.name} item={item} />
              ))}
            </div>
            {/* duplicate track for the seamless loop */}
            <div
              aria-hidden="true"
              className="flex shrink-0 animate-marquee gap-5 pr-5 group-hover:[animation-play-state:paused]"
            >
              {homeTestimonials.map((item) => (
                <TestimonialCard key={`${item.name}-dup`} item={item} />
              ))}
            </div>
          </div>
        )}
      </Reveal>

      {/* partner logo strip */}
      <div className="m-container">
        <Reveal delay={0.16} className="mt-16 lg:mt-20">
          <p className="text-center text-[0.78rem] font-bold uppercase tracking-[0.16em] text-mangaale-subtext">
            Trusted by local restaurants
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="mt-7">
        {reduced ? (
          <div className="m-container flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {partnerLogos.map((logo) => (
              <span key={logo} className="text-[1.05rem] font-extrabold tracking-tight text-mangaale-subtext/70">
                {logo}
              </span>
            ))}
          </div>
        ) : (
          <div className="group mask-fade-x relative flex overflow-hidden">
            {[0, 1].map((track) => (
              <div
                key={track}
                aria-hidden={track === 1}
                className="flex shrink-0 animate-marquee-slow items-center gap-12 pr-12 group-hover:[animation-play-state:paused]"
              >
                {partnerLogos.map((logo) => (
                  <span
                    key={`${logo}-${track}`}
                    className="whitespace-nowrap text-[1.15rem] font-extrabold tracking-tight text-mangaale-subtext/45 grayscale transition-all duration-300 hover:text-mangaale-primary hover:grayscale-0"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            ))}
          </div>
        )}
      </Reveal>
    </section>
  )
}

export default TestimonialsSection
