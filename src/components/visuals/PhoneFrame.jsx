/**
 * Realistic device shell used by the hero, the "How Mangaale Works" scroll
 * story and the customer section.
 *
 * Built from stacked divs rather than an image so the screen content stays
 * live DOM (selectable, crisp at any DPI, themeable) and costs no network.
 */
const PhoneFrame = ({ children, className = '', screenClassName = '', glow = true }) => (
  <div className={`relative ${className}`}>
    {glow && (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10 -z-10 rounded-[999px] bg-mangaale-primary/25 blur-3xl"
      />
    )}

    {/* outer titanium rail */}
    <div className="relative rounded-[2.75rem] bg-gradient-to-br from-[#2B3A42] via-[#10212B] to-[#05131A] p-[3px] shadow-phone">
      {/* inner bezel */}
      <div className="relative rounded-[2.6rem] bg-[#05131A] p-[9px]">
        {/* side buttons */}
        <span aria-hidden="true" className="absolute -left-[5px] top-[110px] h-9 w-[3px] rounded-l bg-[#33454E]" />
        <span aria-hidden="true" className="absolute -left-[5px] top-[158px] h-14 w-[3px] rounded-l bg-[#33454E]" />
        <span aria-hidden="true" className="absolute -right-[5px] top-[136px] h-16 w-[3px] rounded-r bg-[#33454E]" />

        {/* screen */}
        <div
          className={`relative overflow-hidden rounded-[2.1rem] bg-white ${screenClassName}`}
        >
          {children}

          {/* dynamic island */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-[10px] z-30 flex h-[26px] w-[86px] -translate-x-1/2 items-center justify-end rounded-full bg-black pr-2.5"
          >
            <span className="h-2 w-2 rounded-full bg-[#1B2A31] ring-1 ring-[#2E3F47]" />
          </div>

          {/* screen glare */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-br from-white/25 via-transparent to-transparent"
          />
        </div>
      </div>
    </div>
  </div>
)

export default PhoneFrame
