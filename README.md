# Mangaale Static Marketing Website

A premium React + Vite + Tailwind website for **mangaale.com**.

## Features included
- Premium static marketing website with React Router pages
- Contact form wired to an external backend API
- Tailwind CSS luxury dark theme and Framer Motion reveals
- Responsive layout, legal pages, pricing, testimonials, and FAQs

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Pre-rendered pages (no JavaScript required)

Everything else here is a single-page app: the server returns one empty shell
for every URL and React paints the content afterwards. Google Play reviewers,
privacy crawlers and search engines do not run JavaScript, so for them those
pages are blank — which is what blocked review of `com.mangaale.restaurant`.

Five files are therefore generated as complete documents at build time by
[`scripts/staticPages.js`](scripts/staticPages.js), wired in through a small
plugin in [`vite.config.js`](vite.config.js):

| URL | Output file | Notes |
| --- | --- | --- |
| `/privacy-policy` | `privacy-policy.html` | full policy, styles inlined |
| `/account-deletion` | `account-deletion.html` | the URL given to Play |
| unknown paths | `404.html` | served with a real HTTP 404 |
| `/robots.txt` | `robots.txt` | `text/plain`, points at the sitemap |
| `/sitemap.xml` | `sitemap.xml` | `application/xml` |

They are built rather than dropped into `public/` so they can share one
stylesheet, one footer and one copy of the company's contact details with the
rest of the site — legal text that exists in two places drifts, and the address
and support email here have to match the Play Console entry exactly. Edit the
copy in `scripts/staticPages.js` and the contact details in
[`src/data/companyData.js`](src/data/companyData.js); nothing else needs to
change. Bump `legalLastUpdated` in the same file whenever the documents change:
it drives both the visible "Last updated" line and the sitemap's `<lastmod>`.

`vite dev` serves the identical strings, so the pages can be checked with
JavaScript disabled before they ship.

### Four places that must agree about routes

[`src/data/siteRoutes.js`](src/data/siteRoutes.js) is the list. Add a page and
update all four:

1. `src/data/siteRoutes.js` — the list itself, and the sitemap built from it.
2. `src/routes/AppRoutes.jsx` — the SPA routes.
3. `vercel.json` — `rewrites` sends exactly these paths to the app shell.
4. `nginx.conf` — the same allow-list, as a regex `location`.

The rewrite lists are allow-lists, not a catch-all, so that an unknown path can
return a genuine 404 instead of HTTP 200 and the home page.

Routes marked `static: true` are pre-rendered and **must not** be added to
`AppRoutes.jsx`: react-router would intercept the navigation and render its own
404 instead of the document. Link to them with
[`SiteLink`](src/components/ui/SiteLink.jsx), which emits a real `<a href>` for
those paths and a client-side `<Link>` for everything else.

### Verifying a deploy

With JavaScript disabled, all five must pass:

```bash
curl -s  https://www.mangaale.com/account-deletion      | grep -i "supportmangaale"
curl -s  https://www.mangaale.com/privacy-policy         | grep -i "Bijnor"
curl -sI https://www.mangaale.com/robots.txt             | grep -i "text/plain"
curl -s  https://www.mangaale.com/sitemap.xml            | grep -i "<urlset"
curl -sI https://www.mangaale.com/nonexistent-path-test  | grep "404"
```


## Environment variables

Create a local `.env.local` file if needed:

```bash
VITE_API_BASE_URL=http://localhost:8082
VITE_ORDER_APP_URL=https://food.mangaale.com
```

### `VITE_ORDER_APP_URL` — the Mangaale Food Ordering app

The origin of the separate Next.js ordering app that customers actually order
from. **Every** ordering link on this site — the Order Now button in the header,
hero and footer, the restaurant cards, the cuisine links and the footer's
ordering entries — is built from this single value in
[`src/config/orderApp.js`](src/config/orderApp.js). The hostname appears nowhere
else in the codebase, and it must not.

That is not tidiness: the ordering app keeps the cart and the login session in
`localStorage`, which is scoped per origin. If some links pointed at
`food.mangaale.com` and others at a staging host, a customer would build a cart
on one origin and arrive logged out with an empty cart on the other.

Vite inlines `VITE_*` at **build** time, so this is a build input, not a runtime
one — it has to be set before `npm run build` in each environment:

| Environment | Where to set it |
| --- | --- |
| Local dev | `.env.local` (falls back to the committed `.env`) |
| Vercel | Project → Settings → Environment Variables → `VITE_ORDER_APP_URL`, then redeploy |
| Docker / nginx | `docker build --build-arg VITE_ORDER_APP_URL=https://food.mangaale.com .` |

No trailing slash (one is stripped anyway). If the variable is unset the module
falls back to `https://food.mangaale.com` so links never render as
`undefined/restaurants`.

Add a new ordering link by importing a builder from `src/config/orderApp.js`
(`restaurantUrl`, `categoryUrl`, `trendingUrl`, `searchUrl`, `orderTrackingUrl`,
…) and rendering it through `src/components/ui/OrderAppLink.jsx`, which is a
real `<a href>` in the same tab and reports the click surface to analytics.

## Demo form integration

The website contact form posts to your backend API:

```text
POST {VITE_API_BASE_URL}/api/v1/demo-requests
```

Expected payload:

```json
{
  "name": "Aman Kapoor",
  "email": "aman@example.com",
  "phone": "+919876543210",
  "businessName": "Cafe Mango",
  "message": "Looking for a product walkthrough",
  "source": "website",
  "pagePath": "/contact"
}
```

## Main files

- `src/components/forms/ContactForm.jsx`
- `.env.example`

## 📱 Mobile App Download System

The website includes a complete app download system for Mangaale Android app:

### Features
- **Homepage Download Section** - Featured on homepage with modern UI
- **Download Page** - Dedicated page at `/download` with comprehensive information
- **Installation Guide** - Step-by-step instructions popup
- **Version Management** - Automatic version checking and update notifications
- **APK Hosting** - Docker/Nginx configured to serve APK files securely
- **Analytics Ready** - Framework for tracking downloads and user metrics

### Quick Start - Adding APK Files

1. **Upload APK files** to `public/downloads/mangaale/`:
   ```bash
   cp your-app.apk public/downloads/mangaale/mangaale-v1.0.apk
   cp your-app.apk public/downloads/mangaale/mangaale-latest.apk
   ```

2. **Generate hash** for integrity verification:
   ```bash
   sha256sum public/downloads/mangaale/mangaale-latest.apk
   ```

3. **Update version info** in `public/downloads/mangaale/version-info.json`

4. **Deploy** using Docker:
   ```bash
   docker build -t mangaale-web:1.0 .
   docker run -p 80:80 mangaale-web:1.0
   ```

### Documentation
- **Download System Guide:** `DOWNLOAD_APP_SYSTEM.md`
- **API Integration Guide:** `API_INTEGRATION_GUIDE.md`
- **APK Setup Instructions:** `public/downloads/mangaale/README.md`

### Key Routes
- `/` - Homepage (includes download section)
- `/download` - Dedicated download page
- `/downloads/mangaale/mangaale-latest.apk` - Direct APK download

### Components
- `DownloadAppSection.jsx` - Homepage featured section
- `DownloadPage.jsx` - Dedicated download page
- `InstallationInstructionsPopup.jsx` - Installation guide modal
- `AppUpdateNotification.jsx` - Update notification banner
- `useAppVersionCheck.js` - Version checking hook
- `appData.js` - App metadata and configuration
