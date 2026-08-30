/**
 * Single source of truth for the company's legal and contact details.
 *
 * These strings appear in the site footer, on the contact page, in the
 * pre-rendered legal pages under scripts/staticPages.js and in the Google Play
 * listing. Play review compares the support email and postal address printed on
 * the privacy policy page against the ones in the console, so they have to be
 * byte-identical everywhere — hence one module rather than a literal per file.
 *
 * Non-ASCII characters are written as \u escapes so the file cannot be
 * corrupted by an editor or toolchain that guesses the encoding wrong.
 */
export const companyData = {
  name: 'Mangaale',
  appName: 'Mangaale Partner',
  androidPackage: 'com.mangaale.restaurant',
  supportEmail: 'supportmangaale@gmail.com',
  phone: '+91 8193818203',
  siteUrl: 'https://www.mangaale.com',
  addressLines: [
    'Vill Kadrabad, P.O. Kadrabad',
    'Kadrabad, Nagina',
    'Bijnor – 246722',
    'Uttar Pradesh, India'
  ]
}

/** The postal address as one line, for places with no room to stack it. */
export const addressOneLine = companyData.addressLines.join(', ')

/**
 * The date the legal documents last changed. Bump both fields together when the
 * privacy policy or the deletion page is edited — the visible "Last updated"
 * line and the sitemap's <lastmod> both read from here.
 */
export const legalLastUpdated = {
  iso: '2026-08-30',
  label: 'August 30, 2026'
}
