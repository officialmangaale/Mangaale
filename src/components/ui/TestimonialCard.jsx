import { Star } from 'lucide-react'

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
      </div>
    </article>
  )
}

export default TestimonialCard
