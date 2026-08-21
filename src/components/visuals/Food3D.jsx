/**
 * Hand-built "3D-ish" food objects.
 *
 * The repo ships no image or model assets, so these are layered SVGs using
 * radial/linear gradients, contact shadows and rim light to read as volumetric
 * objects. They cost ~0kb of network, scale perfectly at any DPI, and never
 * block first paint — which is why they are used instead of WebGL meshes.
 */

const Shadow = ({ opacity = 0.22 }) => (
  <ellipse cx="100" cy="176" rx="58" ry="11" fill="#0A1A22" opacity={opacity} />
)

export const Burger = ({ className = '', style }) => (
  <svg viewBox="0 0 200 200" className={className} style={style} role="presentation" aria-hidden="true">
    <defs>
      <radialGradient id="bunTop" cx="38%" cy="26%" r="78%">
        <stop offset="0%" stopColor="#FFD79A" />
        <stop offset="55%" stopColor="#EFA85C" />
        <stop offset="100%" stopColor="#C97B33" />
      </radialGradient>
      <linearGradient id="pattyG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#7A4326" />
        <stop offset="100%" stopColor="#4A2413" />
      </linearGradient>
      <linearGradient id="cheeseG" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFD34D" />
        <stop offset="100%" stopColor="#F0A81E" />
      </linearGradient>
      <linearGradient id="bunBase" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#E6A055" />
        <stop offset="100%" stopColor="#B96E2C" />
      </linearGradient>
    </defs>

    <Shadow />

    {/* bottom bun */}
    <path d="M44 138h112a10 10 0 0 1-4 12c-12 9-30 13-52 13s-40-4-52-13a10 10 0 0 1-4-12Z" fill="url(#bunBase)" />
    {/* patty */}
    <rect x="40" y="118" width="120" height="24" rx="12" fill="url(#pattyG)" />
    {/* cheese drape */}
    <path d="M42 112h116l-8 16-14-8-12 12-14-10-13 11-14-9-13 8-12-4Z" fill="url(#cheeseG)" />
    {/* lettuce */}
    <path
      d="M42 104c8-8 16 2 24-4s16 6 24-2 18 6 26-2 16 6 24 0 16 4 18 10c-14 6-40 8-58 8s-44-2-58-10Z"
      fill="#5FBF63"
    />
    {/* tomato */}
    <rect x="52" y="96" width="96" height="9" rx="4.5" fill="#E5544B" />
    {/* top bun */}
    <path d="M40 96c0-30 26-48 60-48s60 18 60 48Z" fill="url(#bunTop)" />
    {/* sesame */}
    <g fill="#FFF3DA" opacity="0.95">
      <ellipse cx="76" cy="72" rx="5" ry="3" transform="rotate(-20 76 72)" />
      <ellipse cx="100" cy="64" rx="5" ry="3" transform="rotate(6 100 64)" />
      <ellipse cx="124" cy="72" rx="5" ry="3" transform="rotate(22 124 72)" />
      <ellipse cx="88" cy="86" rx="4.5" ry="2.8" transform="rotate(-8 88 86)" />
      <ellipse cx="114" cy="86" rx="4.5" ry="2.8" transform="rotate(12 114 86)" />
    </g>
    {/* rim light */}
    <path d="M40 96c0-30 26-48 60-48" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="3" fill="none" strokeLinecap="round" />
  </svg>
)

export const Pizza = ({ className = '', style }) => (
  <svg viewBox="0 0 200 200" className={className} style={style} role="presentation" aria-hidden="true">
    <defs>
      <radialGradient id="pizzaBase" cx="38%" cy="32%" r="72%">
        <stop offset="0%" stopColor="#FFD98C" />
        <stop offset="70%" stopColor="#EDB25B" />
        <stop offset="100%" stopColor="#C9812F" />
      </radialGradient>
      <radialGradient id="pizzaSauce" cx="40%" cy="34%" r="66%">
        <stop offset="0%" stopColor="#FFC46B" />
        <stop offset="100%" stopColor="#E8873A" />
      </radialGradient>
    </defs>

    <Shadow opacity={0.18} />

    {/* crust */}
    <circle cx="100" cy="104" r="66" fill="url(#pizzaBase)" />
    {/* cheese field */}
    <circle cx="100" cy="104" r="54" fill="url(#pizzaSauce)" />
    {/* pepperoni */}
    <g>
      {[
        [78, 82],
        [122, 86],
        [96, 110],
        [70, 122],
        [128, 124],
        [104, 142]
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="10" fill="#D2402F" />
          <circle cx={cx - 2.5} cy={cy - 2.5} r="6.5" fill="#E4584A" />
        </g>
      ))}
    </g>
    {/* basil */}
    <g fill="#3F9E4D">
      <ellipse cx="112" cy="98" rx="8" ry="4.5" transform="rotate(-28 112 98)" />
      <ellipse cx="82" cy="134" rx="7" ry="4" transform="rotate(24 82 134)" />
      <ellipse cx="132" cy="104" rx="6.5" ry="3.8" transform="rotate(48 132 104)" />
    </g>
    {/* rim light */}
    <path d="M46 82a66 66 0 0 1 44-42" stroke="#FFFFFF" strokeOpacity="0.55" strokeWidth="4" fill="none" strokeLinecap="round" />
  </svg>
)

export const BiryaniBowl = ({ className = '', style }) => (
  <svg viewBox="0 0 200 200" className={className} style={style} role="presentation" aria-hidden="true">
    <defs>
      <linearGradient id="bowlG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F4F8F9" />
        <stop offset="45%" stopColor="#D9E4E7" />
        <stop offset="100%" stopColor="#9FB2B7" />
      </linearGradient>
      <radialGradient id="riceG" cx="40%" cy="28%" r="72%">
        <stop offset="0%" stopColor="#FFF6DF" />
        <stop offset="60%" stopColor="#F5DFA8" />
        <stop offset="100%" stopColor="#E0BC72" />
      </radialGradient>
    </defs>

    <Shadow opacity={0.2} />

    {/* rice mound */}
    <path d="M46 106c0-26 24-44 54-44s54 18 54 44Z" fill="url(#riceG)" />
    {/* garnish */}
    <g>
      <circle cx="80" cy="88" r="7" fill="#C9452F" />
      <circle cx="118" cy="84" r="6" fill="#E2A33B" />
      <ellipse cx="100" cy="76" rx="9" ry="5" fill="#4E9E52" transform="rotate(-12 100 76)" />
      <ellipse cx="134" cy="96" rx="7" ry="4" fill="#4E9E52" transform="rotate(28 134 96)" />
      <circle cx="62" cy="98" r="5" fill="#E2A33B" />
    </g>
    {/* bowl */}
    <path d="M38 104h124c0 34-28 56-62 56s-62-22-62-56Z" fill="url(#bowlG)" />
    <ellipse cx="100" cy="104" rx="62" ry="10" fill="#EFF5F6" />
    <ellipse cx="100" cy="104" rx="54" ry="7" fill="#C6D5D9" opacity="0.8" />
    {/* turquoise rim accent — brand touch */}
    <path d="M38 104h124" stroke="#0CB79D" strokeOpacity="0.55" strokeWidth="3" strokeLinecap="round" />
    <path d="M52 132c8 14 26 24 48 24" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="4" fill="none" strokeLinecap="round" />
  </svg>
)

export const DeliveryBag = ({ className = '', style }) => (
  <svg viewBox="0 0 200 200" className={className} style={style} role="presentation" aria-hidden="true">
    <defs>
      <linearGradient id="bagFront" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#12C6A9" />
        <stop offset="55%" stopColor="#0CB79D" />
        <stop offset="100%" stopColor="#07695D" />
      </linearGradient>
      <linearGradient id="bagSide" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#0A9384" />
        <stop offset="100%" stopColor="#065B51" />
      </linearGradient>
      <linearGradient id="bagTop" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#3FE0C4" />
        <stop offset="100%" stopColor="#0FBAA0" />
      </linearGradient>
    </defs>

    <Shadow opacity={0.24} />

    {/* handle — sits proudly above the lid so the shape reads as a bag, not a box */}
    <path
      d="M79 52c0-15 9-24 21-24s21 9 21 24"
      stroke="#075E53"
      strokeWidth="8"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M79 52c0-15 9-24 21-24"
      stroke="#3FE0C4"
      strokeOpacity="0.55"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />
    {/* top face (isometric) */}
    <path d="M100 46 158 68 100 90 42 68Z" fill="url(#bagTop)" />
    {/* front face */}
    <path d="M42 68 100 90v66L42 134Z" fill="url(#bagSide)" />
    {/* right face */}
    <path d="M158 68 100 90v66l58-22Z" fill="url(#bagFront)" />
    {/* M badge on the large face */}
    <g transform="translate(112 100)">
      <rect x="0" y="0" width="34" height="34" rx="9" fill="#FFFFFF" opacity="0.93" />
      <text
        x="17"
        y="24"
        textAnchor="middle"
        fontFamily="Manrope, Inter, system-ui, sans-serif"
        fontSize="21"
        fontWeight="800"
        fill="#0CB79D"
      >
        M
      </text>
    </g>
    {/* strap detail */}
    <path d="M52 92v52" stroke="#053F38" strokeOpacity="0.45" strokeWidth="5" strokeLinecap="round" />
    {/* rim light */}
    <path d="M100 46 158 68" stroke="#FFFFFF" strokeOpacity="0.55" strokeWidth="3" strokeLinecap="round" />
  </svg>
)

export default { Burger, Pizza, BiryaniBowl, DeliveryBag }
