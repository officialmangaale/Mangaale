import {
  Bell,
  ChevronRight,
  Home,
  MapPin,
  Navigation,
  Percent,
  Receipt,
  Search,
  ShieldCheck,
  Star,
  User,
  Wallet
} from 'lucide-react'

/**
 * The Mangaale customer-app UI, rendered as real DOM inside PhoneFrame.
 *
 * Four screens map 1:1 to the four steps of "How Mangaale Works", so the
 * scroll story can cross-fade between them.
 */

const StatusBar = () => (
  <div className="flex items-center justify-between px-6 pb-1 pt-3 text-[10px] font-semibold text-mangaale-text">
    <span>9:41</span>
    <span className="flex items-center gap-1">
      <span className="inline-block h-2 w-3 rounded-[2px] bg-mangaale-text/80" />
      <span className="inline-block h-2 w-2 rounded-[2px] bg-mangaale-text/60" />
      <span className="inline-block h-2 w-4 rounded-[2px] border border-mangaale-text/60" />
    </span>
  </div>
)

const TabBar = ({ active = 'Home' }) => {
  const tabs = [
    { label: 'Home', Icon: Home },
    { label: 'Search', Icon: Search },
    { label: 'Orders', Icon: Receipt },
    { label: 'Offers', Icon: Percent },
    { label: 'Profile', Icon: User }
  ]

  return (
    <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between border-t border-mangaale-border bg-white/95 px-4 pb-4 pt-2 backdrop-blur">
      {tabs.map(({ label, Icon }) => {
        const isActive = label === active
        return (
          <div key={label} className="flex flex-1 flex-col items-center gap-1">
            <Icon
              className={`h-[15px] w-[15px] ${isActive ? 'text-mangaale-primary' : 'text-mangaale-subtext/60'}`}
              strokeWidth={isActive ? 2.4 : 1.9}
            />
            <span
              className={`text-[7.5px] font-semibold ${
                isActive ? 'text-mangaale-primary' : 'text-mangaale-subtext/60'
              }`}
            >
              {label}
            </span>
          </div>
        )
      })}
    </div>
  )
}

/* Tiny food thumbnails — gradient discs so no image assets are required */
const Thumb = ({ from, to, emoji, className = '' }) => (
  <div
    className={`flex items-center justify-center rounded-xl text-base ${className}`}
    style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
  >
    <span>{emoji}</span>
  </div>
)

/* ------------------------------------------------------------------ */
/* 1. HOME                                                             */
/* ------------------------------------------------------------------ */
export const HomeScreen = () => (
  <div className="relative h-full bg-[#F7FBFA] pb-16">
    <StatusBar />

    {/* header */}
    <div className="flex items-center justify-between rounded-b-[1.4rem] bg-white px-5 pb-3 pt-2 shadow-sm">
      <div className="flex items-start gap-2">
        <MapPin className="mt-0.5 h-4 w-4 text-mangaale-primary" fill="currentColor" strokeWidth={0} />
        <div>
          <p className="text-[8px] font-medium text-mangaale-subtext">Deliver to</p>
          <p className="flex items-center gap-0.5 whitespace-nowrap text-[11px] font-bold text-mangaale-text">
            Roorkee, UP <ChevronRight className="h-3 w-3 text-mangaale-subtext" />
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Bell className="h-4 w-4 text-mangaale-subtext" />
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-mangaale-tint ring-1 ring-mangaale-primary/25">
          <User className="h-3.5 w-3.5 text-mangaale-primary" />
        </div>
      </div>
    </div>

    <div className="space-y-3 px-4 pt-3">
      {/* search */}
      <div className="flex items-center gap-2 rounded-full border border-mangaale-border bg-white px-3 py-2 shadow-sm">
        <Search className="h-3.5 w-3.5 text-mangaale-primary" />
        <span className="text-[9.5px] font-medium text-mangaale-subtext">Search for dishes or restaurants</span>
      </div>

      {/* offer banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-mangaale-primary to-mangaale-secondary p-3.5 text-white">
        <div className="absolute -right-5 -top-6 h-20 w-20 rounded-full bg-white/15" />
        <div className="absolute -bottom-8 right-6 h-16 w-16 rounded-full bg-white/10" />
        <p className="relative text-[7.5px] font-bold uppercase tracking-[0.14em] text-white/85">Limited offer</p>
        <p className="relative mt-1 text-[17px] font-extrabold leading-none">Get ₹100 OFF</p>
        <p className="relative mt-1 text-[9px] text-white/85">on your first food order</p>
        <span className="relative mt-2.5 inline-flex rounded-full bg-white px-3 py-1 text-[8.5px] font-bold text-mangaale-primary">
          Grab Offer
        </span>
      </div>

      {/* categories */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[10.5px] font-extrabold text-mangaale-text">Top Categories</p>
          <span className="text-[8.5px] font-bold text-mangaale-primary">See all</span>
        </div>
        <div className="flex justify-between gap-1.5">
          {[
            { label: 'Pizza', emoji: '🍕', from: '#FFE7C7', to: '#FFC98A' },
            { label: 'Biryani', emoji: '🍛', from: '#FFF0C9', to: '#FBD87F' },
            { label: 'Burger', emoji: '🍔', from: '#FFE1CE', to: '#FFBE96' },
            { label: 'Chinese', emoji: '🍜', from: '#DCF3EE', to: '#A5E4D6' },
            { label: 'Sweets', emoji: '🧁', from: '#FBE0EC', to: '#F5B9D2' }
          ].map((cat) => (
            <div key={cat.label} className="flex flex-1 flex-col items-center gap-1">
              <Thumb from={cat.from} to={cat.to} emoji={cat.emoji} className="h-9 w-9" />
              <span className="text-[7.5px] font-semibold text-mangaale-text">{cat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* popular restaurants */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[10.5px] font-extrabold text-mangaale-text">Popular Restaurants</p>
          <span className="text-[8.5px] font-bold text-mangaale-primary">See all</span>
        </div>
        <div className="space-y-2">
          {[
            {
              name: 'The Tandoor House',
              rating: '4.6',
              cuisine: 'North Indian, Chinese',
              time: '30–40 mins',
              offer: '₹200 for one',
              emoji: '🍗',
              from: '#FFE0CB',
              to: '#FFBB8E'
            },
            {
              name: 'Foodies Corner',
              rating: '4.5',
              cuisine: 'Italian, Continental',
              time: '25–35 mins',
              offer: '₹150 for one',
              emoji: '🍕',
              from: '#FFEFD2',
              to: '#FFD08A'
            }
          ].map((r) => (
            <div
              key={r.name}
              className="flex items-center gap-2.5 rounded-xl border border-mangaale-border bg-white p-2 shadow-sm"
            >
              <Thumb from={r.from} to={r.to} emoji={r.emoji} className="h-11 w-11 shrink-0 text-lg" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[10px] font-bold text-mangaale-text">{r.name}</p>
                <div className="mt-0.5 flex items-center gap-1.5">
                  <span className="flex items-center gap-0.5 rounded bg-mangaale-primary px-1 py-[1px] text-[7px] font-bold text-white">
                    <Star className="h-2 w-2" fill="currentColor" strokeWidth={0} />
                    {r.rating}
                  </span>
                  <span className="text-[7.5px] text-mangaale-subtext">{r.time}</span>
                  <span className="text-[7.5px] text-mangaale-subtext">{r.offer}</span>
                </div>
                <p className="mt-0.5 truncate text-[7.5px] text-mangaale-subtext">{r.cuisine}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <TabBar active="Home" />
  </div>
)

/* ------------------------------------------------------------------ */
/* 2. LOCATION                                                         */
/* ------------------------------------------------------------------ */
export const LocationScreen = () => (
  <div className="relative h-full bg-[#F7FBFA] pb-16">
    <StatusBar />
    <div className="px-5 pb-3 pt-1">
      <p className="text-[13px] font-extrabold text-mangaale-text">Choose your location</p>
      <p className="mt-0.5 text-[9px] text-mangaale-subtext">We&apos;ll show restaurants that deliver to you</p>
    </div>

    {/* map */}
    <div className="relative mx-4 h-[190px] overflow-hidden rounded-2xl border border-mangaale-border bg-[#E8F3F1]">
      {/* street grid */}
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <rect width="200" height="200" fill="#E6F2EF" />
        <g stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round">
          <path d="M-10 60 H210" />
          <path d="M-10 130 H210" />
          <path d="M55 -10 V210" />
          <path d="M140 -10 V210" />
        </g>
        <g fill="#D3E7E2">
          <rect x="8" y="12" width="38" height="38" rx="5" />
          <rect x="66" y="12" width="62" height="38" rx="5" />
          <rect x="150" y="72" width="42" height="48" rx="5" />
          <rect x="8" y="142" width="38" height="48" rx="5" />
        </g>
        {/* route */}
        <path
          d="M55 130 L55 95 L100 95"
          stroke="#0CB79D"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="7 6"
        />
      </svg>

      {/* pin */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
        <span className="absolute left-1/2 top-full h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mangaale-primary/25 blur-[2px]" />
        <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-mangaale-primary shadow-glow ring-4 ring-white">
          <MapPin className="h-4 w-4 text-white" fill="currentColor" strokeWidth={0} />
        </div>
      </div>
    </div>

    <div className="mt-3 space-y-2 px-4">
      <div className="flex items-center gap-2.5 rounded-xl border-2 border-mangaale-primary bg-white p-2.5">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-mangaale-tint">
          <Navigation className="h-3.5 w-3.5 text-mangaale-primary" />
        </div>
        <div className="flex-1">
          <p className="text-[10px] font-bold text-mangaale-text">Use current location</p>
          <p className="text-[8px] text-mangaale-subtext">Roorkee, Uttarakhand</p>
        </div>
        <span className="h-3.5 w-3.5 rounded-full border-[4px] border-mangaale-primary" />
      </div>

      {['Home · Civil Lines', 'Work · IIT Roorkee'].map((label) => (
        <div key={label} className="flex items-center gap-2.5 rounded-xl border border-mangaale-border bg-white p-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-mangaale-tint">
            <MapPin className="h-3.5 w-3.5 text-mangaale-subtext" />
          </div>
          <p className="flex-1 text-[10px] font-semibold text-mangaale-text">{label}</p>
          <ChevronRight className="h-3.5 w-3.5 text-mangaale-subtext" />
        </div>
      ))}

      <div className="mt-1 rounded-xl bg-mangaale-primary py-2.5 text-center text-[10px] font-bold text-white">
        Confirm Location
      </div>
    </div>

    <TabBar active="Home" />
  </div>
)

/* ------------------------------------------------------------------ */
/* 3. CART / PAYMENT                                                   */
/* ------------------------------------------------------------------ */
export const CartScreen = () => (
  <div className="relative h-full bg-[#F7FBFA] pb-16">
    <StatusBar />
    <div className="px-5 pb-3 pt-1">
      <p className="text-[13px] font-extrabold text-mangaale-text">Your order</p>
      <p className="mt-0.5 text-[9px] text-mangaale-subtext">The Tandoor House · 30–40 mins</p>
    </div>

    <div className="space-y-2 px-4">
      {[
        { name: 'Paneer Butter Masala', qty: 1, price: '₹240', emoji: '🍲', from: '#FFE3CD', to: '#FFC091' },
        { name: 'Hyderabadi Biryani', qty: 1, price: '₹180', emoji: '🍛', from: '#FFF1CC', to: '#FBD87F' },
        { name: 'Butter Naan ×2', qty: 2, price: '₹60', emoji: '🫓', from: '#FFF4DE', to: '#F2DDAE' }
      ].map((item) => (
        <div
          key={item.name}
          className="flex items-center gap-2.5 rounded-xl border border-mangaale-border bg-white p-2 shadow-sm"
        >
          <Thumb from={item.from} to={item.to} emoji={item.emoji} className="h-9 w-9 shrink-0" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-[9.5px] font-bold text-mangaale-text">{item.name}</p>
            <p className="text-[8px] text-mangaale-subtext">Qty {item.qty}</p>
          </div>
          <p className="text-[10px] font-extrabold text-mangaale-text">{item.price}</p>
        </div>
      ))}

      {/* bill */}
      <div className="rounded-xl border border-mangaale-border bg-white p-3">
        {[
          ['Item total', '₹480'],
          ['Delivery fee', '₹29'],
          ['Taxes', '₹25']
        ].map(([label, value]) => (
          <div key={label} className="flex items-center justify-between py-[3px]">
            <span className="text-[8.5px] text-mangaale-subtext">{label}</span>
            <span className="text-[8.5px] font-semibold text-mangaale-text">{value}</span>
          </div>
        ))}
        <div className="mt-1.5 flex items-center justify-between border-t border-dashed border-mangaale-border pt-1.5">
          <span className="text-[10px] font-extrabold text-mangaale-text">To pay</span>
          <span className="text-[12px] font-extrabold text-mangaale-primary">₹534</span>
        </div>
      </div>

      {/* payment */}
      <div className="flex items-center gap-2.5 rounded-xl border-2 border-mangaale-primary bg-white p-2.5">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-mangaale-tint">
          <Wallet className="h-3.5 w-3.5 text-mangaale-primary" />
        </div>
        <div className="flex-1">
          <p className="text-[9.5px] font-bold text-mangaale-text">UPI · Pay on delivery</p>
          <p className="text-[8px] text-mangaale-subtext">Secure checkout</p>
        </div>
        <ShieldCheck className="h-3.5 w-3.5 text-mangaale-primary" />
      </div>

      <div className="rounded-xl bg-mangaale-primary py-2.5 text-center text-[10px] font-bold text-white">
        Place Order · ₹534
      </div>
    </div>

    <TabBar active="Orders" />
  </div>
)

/* ------------------------------------------------------------------ */
/* 4. LIVE TRACKING                                                    */
/* ------------------------------------------------------------------ */
export const TrackingScreen = () => (
  <div className="relative h-full bg-[#F7FBFA] pb-16">
    <StatusBar />
    <div className="px-5 pb-2 pt-1">
      <p className="text-[13px] font-extrabold text-mangaale-text">Arriving in 12 mins</p>
      <p className="mt-0.5 text-[9px] text-mangaale-subtext">Order #2387 · The Tandoor House</p>
    </div>

    {/* live map */}
    <div className="relative mx-4 h-[168px] overflow-hidden rounded-2xl border border-mangaale-border">
      <svg viewBox="0 0 200 170" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <rect width="200" height="170" fill="#E6F2EF" />
        <g stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round">
          <path d="M-10 50 H210" />
          <path d="M-10 118 H210" />
          <path d="M60 -10 V180" />
          <path d="M148 -10 V180" />
        </g>
        <g fill="#D3E7E2">
          <rect x="10" y="8" width="40" height="34" rx="5" />
          <rect x="160" y="60" width="34" height="50" rx="5" />
          <rect x="72" y="128" width="62" height="36" rx="5" />
        </g>
        {/* travelled + remaining route */}
        <path d="M40 145 L60 145 L60 118 L148 118 L148 62" stroke="#0CB79D" strokeWidth="4.5" fill="none" strokeLinecap="round" />
        <path d="M148 62 L148 30 L172 30" stroke="#0CB79D" strokeOpacity="0.3" strokeWidth="4.5" fill="none" strokeLinecap="round" strokeDasharray="6 6" />
        {/* rider marker */}
        <circle cx="148" cy="62" r="11" fill="#0CB79D" opacity="0.2" />
        <circle cx="148" cy="62" r="6.5" fill="#0CB79D" stroke="#FFFFFF" strokeWidth="2.5" />
        {/* destination */}
        <circle cx="172" cy="30" r="5" fill="#10212B" stroke="#FFFFFF" strokeWidth="2.5" />
      </svg>

      <div className="absolute bottom-2 left-2 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 shadow-sm backdrop-blur">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mangaale-primary" />
        <span className="text-[8px] font-bold text-mangaale-text">Live tracking</span>
      </div>
    </div>

    {/* rider card */}
    <div className="mx-4 mt-3 flex items-center gap-2.5 rounded-xl border border-mangaale-border bg-white p-2.5 shadow-sm">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-mangaale-primary to-mangaale-secondary text-sm">
        🛵
      </div>
      <div className="flex-1">
        <p className="text-[10px] font-bold text-mangaale-text">Vikram is on the way</p>
        <p className="flex items-center gap-1 text-[8px] text-mangaale-subtext">
          <Star className="h-2 w-2 text-mangaale-primary" fill="currentColor" strokeWidth={0} />
          4.9 · Mangaale Rider
        </p>
      </div>
      <span className="rounded-lg bg-mangaale-tint px-2 py-1 text-[8px] font-bold text-mangaale-primary">Call</span>
    </div>

    {/* progress steps */}
    <div className="mx-4 mt-2.5 rounded-xl border border-mangaale-border bg-white p-3">
      {[
        ['Order confirmed', true],
        ['Food is being prepared', true],
        ['Picked up by rider', true],
        ['Out for delivery', false]
      ].map(([label, done], i, arr) => (
        <div key={label} className="flex gap-2">
          <div className="flex flex-col items-center">
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                done ? 'bg-mangaale-primary' : 'border-2 border-mangaale-primary bg-white'
              }`}
            />
            {i < arr.length - 1 && (
              <span className={`h-4 w-[2px] ${done ? 'bg-mangaale-primary' : 'bg-mangaale-border'}`} />
            )}
          </div>
          <p
            className={`-mt-[3px] text-[8.5px] ${
              done ? 'font-semibold text-mangaale-text' : 'font-bold text-mangaale-primary'
            }`}
          >
            {label}
          </p>
        </div>
      ))}
    </div>

    <TabBar active="Orders" />
  </div>
)

/**
 * Order matches the four "How Mangaale Works" steps:
 * 01 Choose Location -> 02 Pick Your Food -> 03 Place Your Order -> 04 Fast Delivery
 */
export const screensByStep = [LocationScreen, HomeScreen, CartScreen, TrackingScreen]
