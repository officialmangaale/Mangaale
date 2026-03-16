const FeatureCard = ({ icon: Icon, title, text }) => {
  return (
    <article className="mangaale-card p-6">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-mangaale-primary/12 text-mangaale-primary">
        {Icon ? <Icon size={20} /> : null}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm text-mangaale-subtext">{text}</p>
    </article>
  )
}

export default FeatureCard

