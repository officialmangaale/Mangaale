/**
 * Referral programme metadata for the /r/:code landing page.
 *
 * The server is the authority on whether a code is valid and which programme
 * it belongs to (GET /referrals/resolve/:code in restaurant-service). This
 * file only maps the programme it returns onto the wording and the download
 * this site should offer, so the page can present a rider invite differently
 * from a customer one.
 */

/** Prefixes minted by restaurant-service (internal/referralcore/codes.go). */
export const referralCodeShape = /^(MG|MR|MD)[A-Z0-9]{8}$/

/**
 * Normalises what a person may paste. Only trims and upper-cases — it does
 * not strip punctuation, so unrelated text cannot be squashed into a
 * valid-looking code.
 */
export const normalizeReferralCode = (value) =>
  typeof value === 'string' ? value.trim().toUpperCase() : ''

/** Shape check only, for a friendly message before the request is made. */
export const looksLikeReferralCode = (value) =>
  referralCodeShape.test(normalizeReferralCode(value))

/**
 * Per-programme copy. `program` comes from the resolve response; the fallback
 * covers a programme this build does not know about yet, so a newer backend
 * cannot break this page.
 */
export const referralPrograms = {
  customer_referral: {
    audience: 'customer',
    heading: 'Order with Mangaale',
    blurb: 'Your friend is inviting you to order from restaurants near you.',
    ctaLabel: 'Get the Mangaale app',
    learnMore: '/for-customers'
  },
  restaurant_referral: {
    audience: 'restaurant',
    heading: 'Grow your restaurant with Mangaale',
    blurb: 'A restaurant owner is inviting you to partner with Mangaale.',
    ctaLabel: 'Register your restaurant',
    learnMore: '/for-restaurants'
  },
  rider_referral: {
    audience: 'rider',
    heading: 'Ride with Mangaale',
    blurb: 'A Mangaale rider is inviting you to start earning with deliveries.',
    ctaLabel: 'Get the rider app',
    learnMore: '/for-riders'
  }
}

export const referralProgramCopy = (program) =>
  referralPrograms[program] ?? {
    audience: 'general',
    heading: 'Join Mangaale',
    blurb: 'You have been invited to Mangaale.',
    ctaLabel: 'Get the app',
    learnMore: '/download'
  }
