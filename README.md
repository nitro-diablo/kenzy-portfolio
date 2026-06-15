# Diablo — Portfolio

High-converting portfolio website for Diablo — a software engineer specializing in Conversion Rate Optimization (CRO).

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Getting Started

```bash
npm install
cp .env.example .env.local   # fill in your Telegram credentials
npm run dev
```

## Environment Variables

| Variable | Description |
| --- | --- |
| `TELEGRAM_BOT_TOKEN` | Telegram bot token (from @BotFather) |
| `TELEGRAM_CHAT_ID` | Chat ID that receives booking notifications |

The contact form posts to `/api/send-telegram`, which forwards the booking to your Telegram chat.

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — lint
