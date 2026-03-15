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
```

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
