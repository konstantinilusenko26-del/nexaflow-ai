# NexaFlow AI — Landing Page

Premium one-page landing for an AI automation agency. Built from scratch as an original
portfolio project. Dark premium SaaS aesthetic, fully responsive, animated, production-ready.

## Tech stack
Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide React ·
React Hook Form · Zod. Deployable to Vercel.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (passes clean)
npm run start    # serve production build
npm run lint     # ESLint (clean)
```

## Sections
Header (sticky, blur on scroll, mobile burger) · Hero (animated automation flow) ·
Integrations · Problems · Services · Interactive Workflow tabs (Sales/Support/Operations) ·
Process timeline · Results · Demo Dashboard · FAQ accordion · Contact (validated form) · Footer.

## Where to customize
| What | File | Field |
|---|---|---|
| Brand name, email, LinkedIn, Upwork links, tagline | `src/lib/site-data.ts` | `BRAND` |
| All copy (services, problems, FAQ, workflows, results) | `src/lib/site-data.ts` | exported arrays |
| Site URL / SEO title / description / OG | `src/app/layout.tsx` | `SITE_URL`, `TITLE`, `DESCRIPTION` |
| Colors / theme tokens | `src/app/globals.css` | `@theme` block |

## Deploy to Vercel
**Option A — Dashboard (easiest):**
1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new → Import the repo.
3. Framework preset auto-detects **Next.js** → click **Deploy**. No config needed.
4. After deploy, copy the live URL and update `SITE_URL` in `src/app/layout.tsx`, then redeploy.

**Option B — CLI:**
```bash
npm i -g vercel
vercel          # follow prompts (first deploy = preview)
vercel --prod   # production deploy
```

## Notes
- The contact form is front-end only (React Hook Form + Zod validation, animated success state).
  To make it send real emails, connect an API route or a service like Resend/Formspree.
- The dashboard section is a visual demo, not a real backend.
- Respects `prefers-reduced-motion`. One `<h1>`, semantic `<section>`s, SEO metadata included.

## File list (created)
```
src/app/globals.css            (theme, utilities)
src/app/layout.tsx             (SEO metadata, fonts)
src/app/page.tsx               (page composition)
src/lib/utils.ts               (cn helper)
src/lib/site-data.ts           (all content + icons)
src/components/ui/button.tsx
src/components/ui/input.tsx
src/components/ui/textarea.tsx
src/components/ui/label.tsx
src/components/Reveal.tsx
src/components/BackgroundEffects.tsx
src/components/SectionHeading.tsx
src/components/CTAButton.tsx
src/components/AnimatedWorkflow.tsx
src/components/ServiceCard.tsx
src/components/sections/Header.tsx
src/components/sections/Hero.tsx
src/components/sections/Integrations.tsx
src/components/sections/Problems.tsx
src/components/sections/Services.tsx
src/components/sections/WorkflowDemo.tsx
src/components/sections/Process.tsx
src/components/sections/Results.tsx
src/components/sections/DashboardDemo.tsx
src/components/sections/FAQ.tsx
src/components/sections/Contact.tsx
src/components/sections/Footer.tsx
```

---

## Upwork portfolio copy

**Short title (project card):**
`AI Automation Agency Landing Page — Next.js, TypeScript, Framer Motion`

**Description:**
A high-end, fully responsive landing page for an AI automation agency, designed and built
from scratch. Features an animated hero workflow visualization, interactive solution tabs,
a live-style demo dashboard, a validated contact form, smooth scroll-reveal animations and a
polished dark SaaS aesthetic. Built with Next.js (App Router), TypeScript, Tailwind CSS and
Framer Motion — production-ready and deployed on Vercel. Clean, component-based architecture
that is easy to extend and rebrand.

**Skills / tech for the card:**
Next.js · React · TypeScript · Tailwind CSS · Framer Motion · Responsive Web Design ·
UI/UX Design · Landing Page · Web Development · Vercel
