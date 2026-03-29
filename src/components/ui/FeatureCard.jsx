const FeatureCard = ({ icon: Icon, title, text }) => {
  return (
    <article className="mangaale-card-hover p-6">
      <div className="mangaale-icon-box-soft">
        {Icon ? <Icon size={20} className="text-mangaale-primary" /> : null}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-mangaale-text">{title}</h3>
      <p className="mt-2 text-sm text-mangaale-subtext leading-relaxed">{text}</p>
    </article>
  )
}

export default FeatureCard
