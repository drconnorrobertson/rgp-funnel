# RGP Funnel

Original two-step Restoration Growth Partners funnel migrated from ChatGPT Sites.

- Source: https://restoration-growth-partners-funnel.doctorconnor.chatgpt.site
- Original source commit: 39261ae7e46d2fe1541a67f1096d581d7c87d88c
- Preserves the original design and two-step market-analysis/booking flow.
- Updated to qualify restoration companies generating $3M+ annually.
- Uses RGP's actual LeadConnector booking calendar in place of the original placeholder.

The first step stores contact details in browser session storage and opens the booking step. The calendar receives those details for prefilling; completing the booking is the actual submission. No separate lead database or unconnected form endpoint is implied.

## Development

Node 22+: `npm ci`, then `npm run dev`.

## Deploy

Import this repository into Vercel with the Next.js preset. No environment variables are required. Build command: `npm run build`.
