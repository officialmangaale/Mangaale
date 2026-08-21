import { useState } from 'react'
import { Clock, Heart, Star } from 'lucide-react'
import Reveal from '../motion/Reveal'
import { popularRestaurants } from '../../data/restaurantShowcaseData'

/**
 * Popular restaurants.
 *
 * Desktop : 4-up grid.
 * Mobile  : horizontal snap carousel with the next card peeking, so the swipe
 *           affordance is obvious without any JS carousel library.
 */

const RestaurantCard = ({ item }) => {
  const [liked, setLiked] = useState(false)

  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-mangaale-border bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-mangaale-primary/30 hover:shadow-card">
      {/* image plate — gradient + emoji stands in for photography */}
      <div className="relative h-36 overflow-hidden sm:h-40">
        <div
          className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-premium group-hover:scale-[1.05]"
          style={{ background: `linear-gradient(140deg, ${item.from}, ${item.to})` }}
        >
          <span className="text-[3.4rem] drop-shadow-sm" aria-hidden="true">
            {item.emoji}
          </span>
        </div>

        {item.offer && (
          <span className="absolute left-3 top-3 rounded-lg bg-mangaale-primary px-2 py-1 text-[0.68rem] font-extrabold uppercase tracking-wide text-white shadow-sm">
            {item.offer}
          </span>
        )}

        <button
          type="button"
          onClick={() => setLiked((v) => !v)}
          aria-label={liked ? `Remove ${item.name} from favourites` : `Add ${item.name} to favourites`}
          aria-pressed={liked}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur transition-transform duration-200 hover:scale-110"
        >
          <Heart
            className={`h-4 w-4 transition-colors ${
              liked ? 'fill-rose-500 text-rose-500' : 'text-mangaale-subtext'
            }`}
          />
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="truncate text-[1rem] font-extrabold text-mangaale-text">{item.name}</h3>
          <span className="flex shrink-0 items-center gap-1 rounded-md bg-mangaale-primary px-1.5 py-0.5 text-[0.7rem] font-bold text-white">
            <Star className="h-3 w-3" fill="currentColor" strokeWidth={0} />
            {item.rating}
          </span>
        </div>

        <p className="mt-1 truncate text-[0.85rem] text-mangaale-subtext">{item.cuisine}</p>

        <div className="mt-3 flex items-center justify-between border-t border-mangaale-border pt-3">
          <span className="flex items-center gap-1.5 text-[0.8rem] font-semibold text-mangaale-subtext">
            <Clock className="h-3.5 w-3.5 text-mangaale-primary" />
            {item.time}
          </span>
          <span className="text-[0.8rem] font-semibold text-mangaale-subtext">{item.priceForTwo}</span>
        </div>
      </div>
    </article>
  )
}

const PopularRestaurantsSection = () => (
  <section className="m-section w-full overflow-hidden bg-mangaale-tint/50">
    <div className="m-container">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="section-eyebrow">Popular near you</p>
        <h2 className="section-title mt-5">
          Discover What&apos;s <span className="text-gradient-brand">Popular</span> Near You
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[1rem] leading-relaxed text-mangaale-subtext sm:text-[1.08rem]">
          A taste of the local kitchens already serving customers through Mangaale.
        </p>
      </Reveal>
    </div>

    {/* mobile: peeking snap carousel */}
    <Reveal delay={0.1} className="mt-10 md:hidden">
      <div className="scrollbar-none snap-x-mandatory flex gap-4 overflow-x-auto px-5 pb-2">
        {popularRestaurants.map((item) => (
          <div key={item.name} className="snap-start-always w-[78vw] max-w-[300px] shrink-0">
            <RestaurantCard item={item} />
          </div>
        ))}
        {/* trailing spacer so the last card can settle flush */}
        <div className="w-1 shrink-0" aria-hidden="true" />
      </div>
      <p className="mt-3 px-5 text-center text-[0.78rem] font-medium text-mangaale-subtext">
        Swipe to explore more →
      </p>
    </Reveal>

    {/* tablet + desktop: grid */}
    <div className="m-container hidden md:block">
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {popularRestaurants.map((item, i) => (
          <Reveal key={item.name} delay={i * 0.07}>
            <RestaurantCard item={item} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default PopularRestaurantsSection
