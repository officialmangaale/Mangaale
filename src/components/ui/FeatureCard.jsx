const FeatureCard = ({ icon: Icon, title, text }) => {
  return (
    <article className="mangaale-card-hover p-6">
      <div className="mangaale-icon-box-soft">
        {Icon ? <Icon size={20} className="text-mangaale-primary" /> : null}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-mangaale-text">{title}</h3>
<<<<<<< HEAD
      <p className="mt-3 text-sm text-mangaale-subtext">{text}</p>
=======
      <p className="mt-2 text-sm text-mangaale-subtext leading-relaxed">{text}</p>
>>>>>>> 3b73117bee929acfc2bb7bc935ae8e312bf19cf6
    </article>
  )
}

export default FeatureCard
