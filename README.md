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
