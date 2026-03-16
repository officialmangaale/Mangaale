const TestimonialCard = ({ testimonial }) => {
  return (
    <article className="mangaale-shell p-6">
      <p className="text-lg text-white leading-relaxed">�{testimonial.quote}�</p>
      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="font-semibold text-white">{testimonial.name}</p>
          <p className="text-sm text-mangaale-subtext">{testimonial.role}</p>
        </div>
        <div className="text-mangaale-accent font-semibold">
          {'?'.repeat(testimonial.rating)}
        </div>
      </div>
    </article>
  )
}

export default TestimonialCard
