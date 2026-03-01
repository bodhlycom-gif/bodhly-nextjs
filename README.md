## Bodhly Public Website

Next.js + TypeScript public marketing site for Bodhly.

## Getting Started

1) Create your environment file:

```bash
cp .env.example .env.local
```

2) Configure at least one lead destination in `.env.local`:

- Google Sheets webhook using `LEADS_GOOGLE_SHEETS_WEBHOOK_URL`
- Email notifications using `RESEND_API_KEY` + `LEADS_NOTIFICATION_EMAIL`

3) Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

Lead form submissions are posted to `/api/leads` and forwarded to configured destinations.

## Lead Destinations

### Google Sheets

Set `LEADS_GOOGLE_SHEETS_WEBHOOK_URL` to a deployed Google Apps Script Web App URL that accepts a JSON POST payload.

### Email

Set:

- `RESEND_API_KEY`
- `LEADS_NOTIFICATION_EMAIL`
- optional `LEADS_FROM_EMAIL`

### Analytics

Set `NEXT_PUBLIC_GA_ID` for Google Analytics page/event tracking.

## Build

```bash
npm run build
```
