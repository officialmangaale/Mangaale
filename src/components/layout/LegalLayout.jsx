import Reveal from '../motion/Reveal'

/**
 * Shared shell for the legal pages (privacy policy, terms, account deletion)
 * so they share one readable, on-brand layout instead of three slightly
 * different hand-rolled ones.
 */
const LegalLayout = ({ eyebrow = 'Legal', title, updated, intro, children }) => (
  <div className="relative w-full overflow-hidden bg-white pb-20 pt-28 lg:pb-28 lg:pt-36">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-mangaale-primary/8 blur-[120px]"
    />

    <div className="relative mx-auto w-full max-w-3xl px-5 sm:px-6">
      <Reveal>
        <p className="section-eyebrow">{eyebrow}</p>
        <h1 className="mt-5 text-[2.2rem] font-extrabold leading-[1.1] tracking-tight text-mangaale-text sm:text-[2.8rem]">
          {title}
        </h1>
        {updated && <p className="mt-3 text-[0.88rem] text-mangaale-subtext">{updated}</p>}
        {intro && (
          <p className="mt-6 text-[1.02rem] leading-relaxed text-mangaale-subtext">{intro}</p>
        )}
      </Reveal>

      <div className="mt-12 space-y-10">{children}</div>
    </div>
  </div>
)

export default LegalLayout
