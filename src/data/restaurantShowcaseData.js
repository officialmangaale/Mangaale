/**
 * Showcase content for the home page.
 *
 * NOTE: these are representative pilot-phase examples used for the marketing
 * page only. They are intentionally kept in one place so they are easy to
 * swap for real partner data (and real photography) at launch.
 *
 * ORDERING-APP LINK FIELDS
 * ------------------------
 * `slug`         -> the ordering app's /r/<slug> route (single-restaurant mode)
 * `categoryKey`  -> the ordering app's /categories/<categoryKey> route
 * `categoryName` -> passed as ?name= so the category page has a display heading
 *
 * ⚠ These are derived from the placeholder names above and MUST be reconciled
 * with the real slugs and category keys in the ordering app before launch — a
 * slug that does not exist there lands the customer on the app's 404. They are
 * held here rather than built at render time precisely so they are easy to find
 * and correct in one pass.
 */

export const popularRestaurants = [
  {
    name: 'The Tandoor House',
    slug: 'the-tandoor-house',
    cuisine: 'North Indian · Chinese',
    categoryKey: 'north-indian',
    categoryName: 'North Indian',
    rating: '4.6',
    time: '30–40 mins',
    priceForTwo: '₹400 for two',
    offer: '20% OFF',
    emoji: '🍗',
    from: '#FFE0CB',
    to: '#FFB088'
  },
  {
    name: 'Foodies Corner',
    slug: 'foodies-corner',
    cuisine: 'Italian · Continental',
    categoryKey: 'italian',
    categoryName: 'Italian',
    rating: '4.5',
    time: '25–35 mins',
    priceForTwo: '₹300 for two',
    offer: 'Free delivery',
    emoji: '🍕',
    from: '#FFEFD2',
    to: '#FFCE82'
  },
  {
    name: 'Biryani Junction',
    slug: 'biryani-junction',
    cuisine: 'Hyderabadi · Mughlai',
    categoryKey: 'hyderabadi',
    categoryName: 'Hyderabadi',
    rating: '4.7',
    time: '35–45 mins',
    priceForTwo: '₹350 for two',
    offer: '₹100 OFF',
    emoji: '🍛',
    from: '#FFF3CE',
    to: '#F7D174'
  },
  {
    name: 'Green Bowl Cafe',
    slug: 'green-bowl-cafe',
    cuisine: 'Healthy · Salads · Bowls',
    categoryKey: 'healthy',
    categoryName: 'Healthy',
    rating: '4.4',
    time: '20–30 mins',
    priceForTwo: '₹280 for two',
    offer: null,
    emoji: '🥗',
    from: '#DDF3EC',
    to: '#9FDFC9'
  }
]

export const partnerLogos = [
  'Tandoor House',
  'Foodies Corner',
  'Biryani Junction',
  'Green Bowl Cafe',
  'Urban Tiffin',
  'Spice Route',
  'Cafe Mocha',
  'Curry Leaf'
]

export const homeTestimonials = [
  {
    name: 'Aarav Menon',
    role: 'Owner, Saffron Lane Bistro',
    quote:
      'Mangaale brought billing, kitchen flow and orders into one clear system. Our team felt the difference in the first week.',
    rating: 5,
    avatar: '👨‍🍳',
    from: '#FFE0C4',
    to: '#F6A75F'
  },
  {
    name: 'Niharika Rao',
    role: 'Ops Head, The Urban Tiffin',
    quote:
      'Service became faster and the kitchen stayed calmer. Having every outlet on the same rhythm changed how we plan our day.',
    rating: 5,
    avatar: '👩‍💼',
    from: '#D9F0EA',
    to: '#7FCFB8'
  },
  {
    name: 'Rohit Das',
    role: 'Customer, Roorkee',
    quote:
      'Ordering is genuinely quick and I can see exactly where my food is. It feels good knowing the restaurant keeps more of what I pay.',
    rating: 5,
    avatar: '🧑',
    from: '#DCE7FB',
    to: '#93B4E9'
  },
  {
    name: 'Meera Iyer',
    role: 'General Manager, City Grill',
    quote:
      'For multi-location operations the biggest win was consistency. Every outlet now works exactly the same way.',
    rating: 5,
    avatar: '👩',
    from: '#FBDFE9',
    to: '#EDA0BE'
  },
  {
    name: 'Vikram Singh',
    role: 'Delivery Partner, Mangaale',
    quote:
      'Routes are planned well and earnings are clear at the end of every trip. No guessing what I made that day.',
    rating: 5,
    avatar: '🛵',
    from: '#D6F1EC',
    to: '#69CDB6'
  }
]
