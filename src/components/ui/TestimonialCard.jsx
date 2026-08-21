import { Star } from 'lucide-react'

/**
 * Fixes: the quote marks and the star rating were corrupted characters
 * (rendering as "?" and the replacement glyph). Now uses proper typographic
 * quotes and real star icons.
 */
const TestimonialCard = ({ testimonial }) => (
  <article className="mangaale-card p-6">
    <p className="text-[1.05rem] leading-relaxed text-mangaale-text">
      &ldquo;{testimonial.quote}&rdquo;
    </p>

    <div className="mt-6 flex items-center justify-between gap-4">
      <div className="min-w-0">
        <p className="truncate font-bold text-mangaale-text">{testimonial.name}</p>
        <p className="truncate text-[0.88rem] text-mangaale-subtext">{testimonial.role}</p>
      </div>
      <span
        className="flex shrink-0 items-center gap-0.5"
        aria-label={`${testimonial.rating} out of 5 stars`}
      >
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 text-amber-400" fill="currentColor" strokeWidth={0} />
        ))}
      </span>
    </div>
  </article>
)

export default TestimonialCard
