import { Star } from 'lucide-react'

<<<<<<< HEAD
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
=======
const TestimonialCard = ({ testimonial }) => {
  return (
    <article className="mangaale-card-hover p-6">
      <p className="text-base text-mangaale-text leading-relaxed italic">"{testimonial.quote}"</p>
      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className="font-semibold text-mangaale-text text-[15px]">{testimonial.name}</p>
          <p className="text-sm text-mangaale-subtext">{testimonial.role}</p>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 text-mangaale-secondary fill-mangaale-secondary" />
          ))}
        </div>
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
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
