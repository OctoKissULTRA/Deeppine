# Deep Pine — Next.js + Tailwind (Vercel-ready)

Dark, pine-green theme. Sections include Hero, Tabs, Features, Assurance, Newsletter, FAQ, Contact, and Footer.
Images and logo are wired up under `/public/images`.

## Quickstart

```bash
pnpm i   # or npm i / yarn
pnpm dev # http://localhost:3000
```

## Deploy (Vercel)

1. Push to GitHub.
2. Import into Vercel → Framework: **Next.js**.
3. Build command: `next build` (default).

## Notes

- Colors live in `tailwind.config.ts` (the `pine` palette).
- Static policy pages at `/public/*.html`.
- Trust assets: `/.well-known/security.txt`, `/sitemap.xml`, `/robots.txt`, `/humans.txt`.
