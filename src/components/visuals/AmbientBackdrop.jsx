/**
 * Ambient turquoise atmosphere behind the hero / ecosystem sections:
 * soft glows, flowing lines, a faint mesh and a handful of drifting particles.
 *
 * Everything is pointer-events-none and aria-hidden. Kept inside an
 * overflow-hidden parent so it can never create horizontal scroll.
 */

const PARTICLES = [
  { left: '12%', top: '68%', size: 6, delay: '0s', duration: '11s' },
  { left: '26%', top: '32%', size: 4, delay: '1.6s', duration: '9s' },
  { left: '48%', top: '78%', size: 7, delay: '3.1s', duration: '13s' },
  { left: '63%', top: '22%', size: 5, delay: '0.8s', duration: '10s' },
  { left: '78%', top: '58%', size: 6, delay: '2.4s', duration: '12s' },
  { left: '88%', top: '36%', size: 4, delay: '4.2s', duration: '9.5s' }
]

const AmbientBackdrop = ({ particles = true, className = '' }) => (
  <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
    {/* primary glow behind the 3D scene (right side) */}
    <div className="absolute -right-24 top-[-10%] h-[620px] w-[620px] rounded-full bg-mangaale-primary/20 blur-[130px]" />
    <div className="absolute right-[18%] top-[38%] h-[380px] w-[380px] rounded-full bg-mangaale-bright/15 blur-[110px]" />
    {/* faint cool glow bottom-left, kept weak so hero text stays readable */}
    <div className="absolute -left-32 bottom-[-15%] h-[420px] w-[420px] rounded-full bg-mangaale-primary/8 blur-[120px]" />

    {/* flowing curved lines */}
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="flowLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0CB79D" stopOpacity="0" />
          <stop offset="45%" stopColor="#0CB79D" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#10C9AA" stopOpacity="0" />
        </linearGradient>
        <pattern id="dotMesh" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="#0CB79D" fillOpacity="0.16" />
        </pattern>
      </defs>

      {/* dot mesh, bottom-left only so it doesn't fight the headline */}
      <rect x="0" y="620" width="230" height="230" fill="url(#dotMesh)" />

      <g fill="none" stroke="url(#flowLine)" strokeWidth="1.5">
        <path d="M760 120 C 980 200, 1080 340, 980 520 S 760 760, 900 880" />
        <path d="M880 60 C 1140 180, 1240 380, 1100 560 S 880 800, 1020 900" />
        <path d="M660 220 C 860 300, 940 440, 860 600" />
      </g>
    </svg>

    {/* drifting particles */}
    {particles &&
      PARTICLES.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-mangaale-primary/45 animate-particle-drift"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration
          }}
        />
      ))}
  </div>
)

export default AmbientBackdrop
