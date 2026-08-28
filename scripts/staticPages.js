/**
 * Pre-rendered, JavaScript-free pages.
 *
 * Everything else on this site is a single-page app behind a catch-all rewrite:
 * every URL returns the same empty shell and the content is painted by React
 * afterwards. Google Play reviewers, privacy crawlers and search engines do not
 * run JavaScript, so for them the legal pages did not exist at all — which is
 * what blocked review of com.mangaale.restaurant.
 *
 * The pages below are therefore built as complete HTML documents with their
 * styles inlined: no bundle, no hydration, no second request. They are written
 * straight into the build output by the plugin in vite.config.js, and the same
 * strings are served in `vite dev`, so what a reviewer sees is what is tested.
 *
 * `renderStaticPages()` returns every generated file; the host configs
 * (vercel.json, nginx.conf) route these paths ahead of the SPA fallback.
 */
import { companyData, legalLastUpdated } from '../src/data/companyData.js'
import { siteRoutes } from '../src/data/siteRoutes.js'

const { name, appName, androidPackage, supportEmail, phone, siteUrl, addressLines } = companyData

/** Escapes a value for use in HTML text or a double-quoted attribute. */
const esc = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

/*
 * Inlined rather than linked so the document renders from a single response
 * even if the stylesheet request is blocked or the crawler fetches HTML only.
 * The palette is the Tailwind `mangaale` scale from tailwind.config.js.
 */
const STYLES = `
:root{--brand:#0CB79D;--brand-deep:#087F70;--ink:#10212B;--muted:#5E6B73;--border:#E7EEEC;--navy:#0A1A22;--tint:#F2FBF9}
*,*::before,*::after{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{margin:0;background:#fff;color:var(--ink);font-family:Manrope,Inter,"Segoe UI",system-ui,-apple-system,sans-serif;font-size:16px;line-height:1.7;-webkit-font-smoothing:antialiased}
a{color:var(--brand-deep)}
a:hover{color:var(--brand)}
.wrap{width:92%;max-width:820px;margin:0 auto}
.skip{position:absolute;left:-9999px}
.skip:focus{left:1rem;top:1rem;z-index:10;padding:.6rem 1rem;background:#fff;border:2px solid var(--brand)}
.head{border-bottom:1px solid var(--border)}
.head .wrap{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1.1rem 0}
.brand{display:inline-flex;align-items:center;gap:.6rem;font-weight:800;font-size:1.25rem;letter-spacing:-.02em;color:var(--ink);text-decoration:none}
.mark{display:inline-flex;align-items:center;justify-content:center;width:2.1rem;height:2.1rem;border-radius:.7rem;background:linear-gradient(135deg,#10C9AA,#087F70);color:#fff;font-weight:800;font-size:1.05rem}
.head nav a{margin-left:1.25rem;font-size:.92rem;text-decoration:none}
main{padding:3rem 0 4rem}
.eyebrow{margin:0;font-size:.75rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--brand-deep)}
h1{margin:.9rem 0 0;font-size:2.15rem;line-height:1.15;letter-spacing:-.025em}
h2{margin:2.75rem 0 .75rem;font-size:1.3rem;line-height:1.3;letter-spacing:-.01em}
.updated{margin:.75rem 0 0;font-size:.9rem;color:var(--muted)}
.intro{margin-top:1.5rem;font-size:1.05rem;color:var(--muted)}
p,li{margin:.75rem 0}
ul,ol{padding-left:1.35rem}
li::marker{color:var(--brand)}
.card{margin-top:2rem;padding:1.4rem 1.5rem;border:1px solid var(--border);border-radius:1rem;background:var(--tint)}
.card p:first-child{margin-top:0}
.card p:last-child{margin-bottom:0}
address{margin:.75rem 0 0;font-style:normal;color:var(--muted)}
address strong{color:var(--ink)}
.foot{background:var(--navy);color:rgba(255,255,255,.62);font-size:.9rem}
.foot .wrap{padding:2.75rem 0}
.foot a{color:rgba(255,255,255,.78)}
.foot a:hover{color:#10C9AA}
.foot h2{margin:0 0 .7rem;font-size:.78rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#fff}
.foot-cols{display:grid;gap:2rem;grid-template-columns:1fr}
.foot ul{margin:0;padding:0;list-style:none}
.foot li{margin:.45rem 0}
.foot address{color:rgba(255,255,255,.62)}
.foot address strong{color:#fff}
.legalbar{margin-top:2.25rem;padding-top:1.25rem;border-top:1px solid rgba(255,255,255,.12);font-size:.82rem;color:rgba(255,255,255,.45)}
@media(min-width:640px){h1{font-size:2.7rem}main{padding:4rem 0 5rem}.foot-cols{grid-template-columns:1fr 1fr}}
`.trim()

/* Repeated verbatim on every generated page: Play review looks for a
 * discoverable route to these documents, not just a URL pasted into a form. */
const footer = () => `
    <footer class="foot">
      <div class="wrap">
        <div class="foot-cols">
          <div>
            <h2>Legal</h2>
            <ul>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/account-deletion">Account Deletion</a></li>
              <li><a href="/terms">Terms &amp; Conditions</a></li>
              <li><a href="/">Home</a></li>
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <p>
              <a href="mailto:${esc(supportEmail)}">${esc(supportEmail)}</a><br>
              <a href="tel:${esc(phone.replace(/\s/g, ''))}">${esc(phone)}</a>
            </p>
            <address>
              <strong>${esc(name)}</strong><br>
              ${addressLines.map(esc).join('<br>\n              ')}
            </address>
          </div>
        </div>
        <p class="legalbar">&copy; ${new Date().getFullYear()} ${esc(name)}. All rights reserved. &middot; ${esc(appName)} (${esc(androidPackage)})</p>
      </div>
    </footer>`

/** Wraps page content in the full document shell. */
const document_ = ({ path, title, description, noindex = false, body }) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}">
    <meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow'}">
${noindex ? '' : `    <link rel="canonical" href="${esc(siteUrl + path)}">
`}    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap">
    <style>${STYLES}</style>
  </head>
  <body>
    <a class="skip" href="#content">Skip to content</a>
    <header class="head">
      <div class="wrap">
        <a class="brand" href="/"><span class="mark">M</span>${esc(name)}</a>
        <nav aria-label="Legal">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/account-deletion">Account Deletion</a>
        </nav>
      </div>
    </header>
    <main id="content">
      <div class="wrap">
${body}
      </div>
    </main>
${footer()}
  </body>
</html>
`

/** The contact block closing both legal documents, with the full postal address. */
const contactBlock = () => `
        <div class="card">
          <p><strong>Email:</strong> <a href="mailto:${esc(supportEmail)}">${esc(supportEmail)}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${esc(phone.replace(/\s/g, ''))}">${esc(phone)}</a></p>
          <p><strong>Website:</strong> <a href="${esc(siteUrl)}">${esc(siteUrl)}</a></p>
          <address>
            <strong>${esc(name)}</strong><br>
            ${addressLines.map(esc).join('<br>\n            ')}
          </address>
        </div>`

/*
 * Google Play's Data safety section links straight here, so this page has to
 * stand on its own for a reviewer who arrives with JavaScript disabled and no
 * account: how to ask, what goes, what stays, and how long it takes.
 */
const accountDeletionPage = () => document_({
  path: '/account-deletion',
  title: `${appName} Account Deletion`,
  description: `How to request deletion of a ${appName} account and its data, what is deleted, what is retained for legal reasons, and how long processing takes.`,
  body: `        <p class="eyebrow">Legal</p>
        <h1>Account Deletion Request</h1>
        <p class="updated">Last updated: ${esc(legalLastUpdated.label)}</p>
        <p class="intro">
          This page explains how users of the ${esc(appName)} mobile application
          (<code>${esc(androidPackage)}</code>) can request deletion of their account and the
          data associated with it. No sign-in is required to read or act on these instructions.
        </p>

        <h2>How to request account deletion</h2>
        <ol>
          <li>
            Send an email to <a href="mailto:${esc(supportEmail)}">${esc(supportEmail)}</a>
            with the subject line <strong>Account Deletion Request</strong>.
          </li>
          <li>
            Include the account email address, the phone number, the restaurant name, and any
            other details needed to verify ownership of the account.
          </li>
          <li>
            We may contact you to verify your identity before processing the request.
          </li>
        </ol>

        <h2>What will be deleted</h2>
        <ul>
          <li>Account profile information and sign-in access.</li>
          <li>Stored authentication records associated with the account.</li>
          <li>Restaurant profile data managed through the app.</li>
          <li>Uploaded business images and verification documents.</li>
          <li>Menu, inventory, vendor, referral, staff and related settings data.</li>
          <li>Notification tokens and in-app preferences.</li>
        </ul>

        <h2>What may be retained</h2>
        <p>
          Invoice, payment, order, audit and compliance records may be retained where we are
          required to keep them for legal, regulatory, tax, accounting, fraud-prevention,
          dispute-resolution or security purposes.
        </p>

        <h2>Processing time</h2>
        <p>
          We process verified deletion requests within 30 days. Backup or archived copies may
          persist for a limited period afterwards before they are automatically deleted or
          overwritten.
        </p>

        <h2>Partial data deletion</h2>
        <p>
          There is no separate self-service process for deleting only selected categories of data
          without requesting full account deletion, unless required by law.
        </p>

        <h2>Contact</h2>
        <p>For deletion requests or any question about this page, contact us at:</p>
${contactBlock()}

        <p>
          See also our <a href="/privacy-policy">Privacy Policy</a> for what we collect and
          how long we keep it.
        </p>`
})

/*
 * The copy is carried over from the React page this replaces; the changes are
 * the corrected support address, the full postal address and phone number in
 * the contact section, and section 5 now linking to the deletion page rather
 * than telling the reader to "contact us using the details below".
 */
const privacyPolicyPage = () => document_({
  path: '/privacy-policy',
  title: `Privacy Policy | ${name}`,
  description: `Privacy Policy for the ${appName} mobile application: what information is collected, how it is used and shared, how long it is retained, and how to request deletion.`,
  body: `        <p class="eyebrow">Legal</p>
        <h1>Privacy Policy</h1>
        <p class="updated">Last updated: ${esc(legalLastUpdated.label)}</p>
        <p class="intro">
          This Privacy Policy explains how ${esc(name)} ("${esc(name)}", "we", "us", or "our")
          collects, uses, stores and shares information when you use the ${esc(appName)} mobile
          application (<code>${esc(androidPackage)}</code>, the "App") and this website. The App is
          built for restaurant owners and staff to manage restaurant operations, orders, menus,
          inventory, reports and related services.
        </p>

        <h2>1. Information we collect</h2>
        <ul>
          <li><strong>Account and profile information:</strong> name, email address, phone number, password, business name, role, and related sign-in or verification details.</li>
          <li><strong>Restaurant and business information:</strong> restaurant name, owner name, restaurant type, address, city, state, postal code, UPI ID, GST number, FSSAI number, and similar business or compliance details.</li>
          <li><strong>Verification documents and uploaded media:</strong> Aadhaar card, PAN card, FSSAI license, GST certificate, business logo, background images, menu or item images, and other files you choose to upload.</li>
          <li><strong>Operational data:</strong> menu items, orders, invoices, receipts, analytics, reports, inventory records, recipe data, printer preferences, vendor records, staff details, referrals, and other information entered or generated while using the App.</li>
          <li><strong>Customer and order-related information:</strong> order details, item selections, payment status, delivery information, invoice records, and related transaction data available to your restaurant account.</li>
          <li><strong>Location information:</strong> precise location may be collected when you grant permission, so your restaurant can be placed accurately for location-based features such as nearby restaurant discovery.</li>
          <li><strong>Nearby device and Bluetooth information:</strong> the App may access Bluetooth and nearby device permissions to scan for and connect to compatible printers. On some Android versions the operating system also requires location permission for printer discovery.</li>
          <li><strong>Notification data:</strong> push notification tokens and related messaging identifiers used to send order alerts and other service notifications.</li>
          <li><strong>Voice and AI inputs:</strong> if you use voice typing or AI-powered features, your device or its speech recognition provider may process microphone input to convert speech into text. We may receive and process the resulting transcript, along with related business context, to provide assistant responses.</li>
          <li><strong>Technical and usage information:</strong> device type, operating system, app version, IP address, logs, and general usage information needed to operate, secure and improve the App.</li>
        </ul>

        <h2>2. How we use information</h2>
        <ul>
          <li>To create and manage your account and authenticate users.</li>
          <li>To register, manage and verify restaurant profiles.</li>
          <li>To process and display orders, invoices, receipts and reports.</li>
          <li>To manage inventory, menu items, vendors, staff and referrals.</li>
          <li>To enable printer pairing and printing workflows.</li>
          <li>To send push notifications and important operational alerts.</li>
          <li>To update restaurant location and support location-based discovery.</li>
          <li>To power AI or assistant features, including business insights based on your submitted queries.</li>
          <li>To maintain security, prevent misuse, troubleshoot issues, and improve the App and related services.</li>
          <li>To comply with legal, tax, accounting and regulatory obligations.</li>
        </ul>

        <h2>3. How we share information</h2>
        <p>We do not sell your personal information. We share information only in these limited circumstances:</p>
        <ul>
          <li><strong>Service providers and infrastructure partners</strong> that help us operate the App, such as hosting, storage, notifications, maps or location services, speech recognition and support tools.</li>
          <li><strong>Technology platforms integrated with the App,</strong> such as Firebase Cloud Messaging for notifications, map or geolocation providers, and device-level speech recognition services.</li>
          <li><strong>Your authorized users or staff</strong> within your restaurant account, based on the access you grant them.</li>
          <li><strong>Legal or compliance disclosures</strong> when required by law, regulation or court order, or to protect rights, safety and the integrity of the service.</li>
          <li><strong>Business transfers</strong> in connection with a merger, acquisition, restructuring, financing or sale of assets.</li>
        </ul>

        <h2>4. Data retention</h2>
        <p>
          We retain information for as long as needed to provide the App, maintain your account,
          comply with legal and accounting obligations, resolve disputes and enforce our
          agreements. Invoice, payment, tax, audit and compliance records may be retained longer
          where required by law or a legitimate business need, including after an account is
          deleted.
        </p>

        <h2>5. Your choices and deletion rights</h2>
        <ul>
          <li>You can update profile, restaurant, menu and operational information directly within the App.</li>
          <li>You can disable location, microphone, Bluetooth, camera or notification permissions in your device settings, though some App features will stop working.</li>
          <li>
            <strong>You can request deletion of your account and its data at any time.</strong>
            Full instructions, along with what is deleted and what is retained, are on our
            <a href="/account-deletion">Account Deletion</a> page. You may also email
            <a href="mailto:${esc(supportEmail)}">${esc(supportEmail)}</a> with the subject line
            "Account Deletion Request".
          </li>
        </ul>

        <h2>6. Security</h2>
        <p>
          We use reasonable technical, administrative and organizational safeguards to protect
          information. No method of electronic storage or transmission is completely secure,
          however, and we cannot guarantee absolute security.
        </p>

        <h2>7. Children's privacy</h2>
        <p>
          The App is intended for business use by restaurant owners and staff and is not directed
          to children under 13. We do not knowingly collect personal information from children
          under 13 through the App. If you believe a child has provided us with personal
          information, contact us at <a href="mailto:${esc(supportEmail)}">${esc(supportEmail)}</a>
          and we will delete it.
        </p>

        <h2>8. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we will revise the
          "Last updated" date above. Continued use of the App after an update means the updated
          policy applies.
        </p>

        <h2>9. Contact us</h2>
        <p>For any question, privacy request or concern about this Privacy Policy, contact us at:</p>
${contactBlock()}`
})

/*
 * Served with a real 404 status for any path that is neither a static file nor
 * one of the SPA routes enumerated in vercel.json / nginx.conf. Previously every
 * unknown URL returned 200 with the app shell, which tells a crawler that every
 * typo is a real page.
 */
const notFoundPage = () => document_({
  path: '/404.html',
  title: `Page not found | ${name}`,
  description: 'The page you are looking for does not exist.',
  noindex: true,
  body: `        <p class="eyebrow">404</p>
        <h1>Page not found</h1>
        <p class="intro">
          The page you are looking for does not exist or has moved. The links below cover the
          pages people most often arrive here looking for.
        </p>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/account-deletion">Account Deletion</a></li>
          <li><a href="/contact">Contact us</a></li>
        </ul>`
})

const robotsTxt = () => `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`

/*
 * A real sitemap: /sitemap.xml used to fall through to the SPA rewrite and
 * return HTML, which crawlers report as a parse error rather than ignoring.
 */
const sitemapXml = () => {
  const urls = siteRoutes
    .map(
      (route) => `  <url>
    <loc>${siteUrl}${route.path === '/' ? '/' : route.path}</loc>
    <lastmod>${legalLastUpdated.iso}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}

/**
 * Every pre-rendered file, as { path, file, contentType, body }.
 *
 * `path` is the URL it answers, `file` its location inside the build output.
 * The two legal documents are extensionless URLs backed by `<name>.html` files:
 * vercel.json maps one to the other with `cleanUrls`, and nginx.conf with an
 * exact-match location. Both are explicit rules rather than a host's implicit
 * directory-index behaviour, so neither can quietly stop resolving.
 */
export const renderStaticPages = () => [
  {
    path: '/privacy-policy',
    file: 'privacy-policy.html',
    contentType: 'text/html; charset=utf-8',
    body: privacyPolicyPage()
  },
  {
    path: '/account-deletion',
    file: 'account-deletion.html',
    contentType: 'text/html; charset=utf-8',
    body: accountDeletionPage()
  },
  {
    path: '/404.html',
    file: '404.html',
    contentType: 'text/html; charset=utf-8',
    body: notFoundPage()
  },
  {
    path: '/robots.txt',
    file: 'robots.txt',
    contentType: 'text/plain; charset=utf-8',
    body: robotsTxt()
  },
  {
    path: '/sitemap.xml',
    file: 'sitemap.xml',
    contentType: 'application/xml; charset=utf-8',
    body: sitemapXml()
  }
]
