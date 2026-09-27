# Sabyasachi Sahoo — Portfolio

A Next.js 16 (App Router) portfolio for a Senior Front-End Developer, built around
a trading-terminal visual identity — real career metrics as scrolling ticker data,
a career-trajectory chart, and a project "watchlist" table.

## Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- next/font (Space Grotesk, Inter, IBM Plex Mono)
- Dynamic Open Graph image via `next/og`

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing your content

All resume content lives in one place: `data/resume.ts`. Edit that file to
update your name, summary, metrics, experience, projects, skills, and
education — every section on the page reads from it.

## SEO included

- Per-page `<title>` / meta description via `app/layout.tsx`
- Open Graph + Twitter card metadata, with a dynamically generated share image
  at `app/opengraph-image.tsx`
- JSON-LD `Person` structured data in the page `<head>`
- `app/sitemap.ts` and `app/robots.ts` (served at `/sitemap.xml` and `/robots.txt`)
- Semantic HTML, alt text, and visible focus states throughout

Before deploying, update the `siteUrl` constant in `app/layout.tsx`,
`app/sitemap.ts`, and `app/robots.ts` to your real domain.

## Deploying

The fastest path is [Vercel](https://vercel.com/new): push this folder to a
GitHub repo and import it, or run `npx vercel` from this directory.

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata, JSON-LD
  page.tsx           Assembles the page from components
  opengraph-image.tsx Dynamic OG image
  sitemap.ts / robots.ts
components/
  Nav.tsx, Ticker.tsx, Hero.tsx, CareerChart.tsx,
  Experience.tsx, Projects.tsx, Skills.tsx, Contact.tsx
data/
  resume.ts          All content — edit this to update the site
```
