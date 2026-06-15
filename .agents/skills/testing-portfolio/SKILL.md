---
name: testing-portfolio
description: How to run and runtime-test the Diablo CRO portfolio (Next.js) — dev/prod server, the Telegram booking form, theme persistence, and Firebase Analytics. Use when testing or verifying site behavior.
---

# Testing the Diablo portfolio

Next.js 16 (App Router) + Tailwind 4 + Framer Motion single-page site.

## Run it
- Dev: `npm run dev` (http://localhost:3000)
- Prod: `npm run build && npm run start -- -p 3000`
- Lint: `npm run lint`

## Secrets needed (Devin Secrets, loaded from `.env.local`)
The booking form posts to the server route `src/app/api/send-telegram/route.ts`, which needs:
- `TELEGRAM_BOT_TOKEN` — Telegram bot token (route returns 500 if missing)
- `TELEGRAM_CHAT_ID` — destination chat ID

`.env.local` is gitignored; `.env.example` documents the keys. Because of the API route, the site needs a Node server host (Firebase **App Hosting** or Vercel) — plain static hosting will not run the form.

## Booking form (primary flow)
Contact section (`#contact`, `src/components/Contact.tsx`). Fill Full Name, Brand/Project Name, Email (all required) + optional WhatsApp, then click "Book My Session Now". On success the form swaps to a "Session Booked!" state. Verify server logs show `POST /api/send-telegram 200`. Empty required fields are blocked by native HTML validation (no POST fired).

## Theme persistence
Theme is controlled by a pre-hydration inline script in `src/app/layout.tsx` that reads `localStorage.theme` and toggles the `dark` class on `<html>`; the navbar toggle writes `localStorage.theme`. `<html>` must NOT hardcode `className="dark"` (that causes light mode to flip back to dark on reload). To verify: toggle theme, reload, confirm it persists; in light mode `document.documentElement.className` should be empty.

## Firebase Analytics
`src/components/Analytics.tsx` initializes Firebase client-side via `isSupported()` (no-ops during SSR). To verify it loaded: `window.gtag` is a function and a `_ga_<MEASUREMENT_ID>` cookie is set matching the project's measurementId.
