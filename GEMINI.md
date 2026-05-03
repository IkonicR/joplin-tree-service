# Project Context: Joplin Tree Service (Rank & Rent Pilot)

## 1. Project Overview
**Goal:** Create a high-performance, hyper-local lead generation website for tree services in Joplin, MO. This is a "Rank & Rent" digital real estate pilot.
**Domain:** `joplinmotreeservice.com` (Purchased on Vercel)
**Phone:** `(417) 238-1333` (GoHighLevel - Forwarded)
**Strategy:** "Hub & Spoke" content architecture, maximizing local relevance (e.g., specific city ordinances, local pricing) and technical speed (100/100 Lighthouse).
**Current Status:** ✅ LIVE & TRACKING — Deployed, GA4 confirmed working, GSC verified, sitemap submitted.

## 2. Tracking & Analytics
| Service | ID | Status |
|---------|-----|--------|
| Google Analytics 4 | `G-P1D65SCQDD` | ✅ Active |
| Google Tag Manager | `GTM-5RDQFS6B` | ✅ Active |
| Google Search Console | Verified | ✅ Sitemap submitted (31 URLs) |

> **IMPORTANT:** Joplin currently uses direct GA4 in `layout.tsx` plus GTM. For future sites, keep one GA4 pageview source of truth: either direct GA4 or GTM, but do not double-load the same measurement ID.

## 3. User Preferences & Critical Rules
*   **Persona:** "Vibe Coder." The user understands high-level concepts (SEO, AI, Architecture) but relies on the agent for technical implementation (syntax, code structure).
*   **Deployment:** **STRICTLY FORBIDDEN** to deploy to Vercel or run build commands that trigger external deployments without explicit, written confirmation from the user.
*   **Content Constraints:**
    *   **NO Fireplaces:** The service does not offer firewood or fireplace services. Remove/avoid all references.
    *   **Local Only:** Content must remain hyper-specific to Joplin, MO and surrounding areas (Jasper/Newton counties).
*   **Interaction Style:** Explain *why* technical choices are made, but handle the *how* autonomously. Keep the "To-Do" list updated religiously.

## 4. Tech Stack & Architecture
*   **Framework:** Next.js 16.2.4 (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS v4 (using `@tailwindcss/postcss`)
*   **UI Library:** Shadcn/UI (Radix Primitives), Lucide React Icons
*   **Animation:** CSS Transitions & Tailwind Animate (Zero-runtime, high performance). NO Framer Motion.
*   **Content:** MDX (via `next-mdx-remote`) for blog posts.
*   **Fonts:** Geist & Geist Mono (via `next/font`).
*   **Deployment:** Vercel (direct CLI deploy, no GitHub remote configured)

## 5. Key Files & Directories
*   `src/app/`: Main application routes (Home, Services, Blog).
    *   `layout.tsx`: Root layout with GTM (`GTM-5RDQFS6B`) and GA4 (`G-P1D65SCQDD`).
*   `src/components/`: Reusable UI components (Navbar, Footer, Shadcn UI).
*   `src/content/blog/`: Markdown files for the "Knowledge Moat" (SEO articles).
*   `src/lib/constants.ts`: Global project variables (Phone, Service areas).
*   `Master_SEO_Design_Blueprint.md`: The strategic "Bible" for this project.
*   `SITE_LAUNCH_CHECKLIST.md`: Checklist for launching future Rank & Rent sites.

## 6. Development Workflow
*   **Start Server:** `npm run dev` (Runs on http://localhost:3000)
*   **Build (Local Test):** `npm run build` (Checks for compile errors)
*   **Lint:** `npm run lint`
*   **Deploy:** `npx vercel deploy --prod --yes` (requires explicit user approval)

## 7. Current SEO Hooks (Do Not Forget)
*   **Ordinance:** City of Joplin Ordinance No. 2008-212 (Hazardous trees).
*   **Threats:** Oak Wilt, Emerald Ash Borer.
*   **Service Area:** Joplin, Webb City, Carl Junction, Carterville, Oronogo.

> **Note:** Do NOT include specific pricing — this is a lead gen site. Pricing is determined by the renter.

## 8. Lessons Learned (Dec 2025)
1. **Use one GA4 source of truth** — direct GA4 is fine and GTM is fine, but avoid loading the same measurement ID twice.
2. **Keep Next.js updated** — Vercel blocks deploys for vulnerable versions.
3. **Submit sitemap to GSC immediately** — Don't wait; indexing takes weeks without it.
4. **Verify with Realtime** — Only way to confirm GA4 is actually working.
