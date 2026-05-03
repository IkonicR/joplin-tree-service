# Master Tracking & Handover To-Do List

**Project:** Joplin Tree Service (Rank & Rent)
**Status:** ✅ LIVE & TRACKING
**Last Updated:** January 15, 2026

---

## Current Tracking Status

| Service | ID | Status |
|---------|-----|--------|
| Google Analytics 4 | `G-P1D65SCQDD` | ✅ Active |
| Google Tag Manager | `GTM-5RDQFS6B` | ✅ Active |
| Google Search Console | Verified | ✅ Sitemap submitted |

### Conversion Events (Code-Based)
Conversion tracking is handled via `src/lib/analytics.ts`. It sends GA4 events through `gtag` and also pushes the same event names to `dataLayer` for GTM visibility.

| Event Name | Trigger | File |
|------------|---------|------|
| `phone_click` | Any phone link clicked | `PhoneLink` component |
| `generate_lead` | Quote form submitted | `quote-form.tsx` |
| `chat_widget_open` | Chat widget opened | `chat-widget.tsx` |

---

## 1. Domain & Hosting ✅ COMPLETE
- [x] Domain purchased: `joplinmotreeservice.com`
- [x] Connected to Vercel

## 2. Google Analytics ✅ COMPLETE
- [x] GA4 Property created
- [x] Measurement ID installed in `layout.tsx`
- [x] Conversion events firing via code

## 3. Google Search Console ✅ COMPLETE
- [x] Property verified
- [x] Sitemap submitted (31 URLs)

## 4. Google Business Profile
- [ ] Create GBP profile (requires verification address from renter)
- [ ] Add website URL
- [ ] Upload photos

---

## Future Enhancements (Optional)
- [ ] **Microsoft Clarity** — Free heatmaps & session recordings. Just need to add script to `layout.tsx`.
- [ ] **Scroll Depth Tracking** — Already prepped in `analytics.ts`, just needs implementation.

---

## Code Reference

| Task | How to Do It |
|------|--------------|
| Change phone number | Edit `src/lib/constants.ts` |
| Add new tracked event | Use `trackEvent()` from `src/lib/analytics.ts` |
| Edit page content | Modify files in `src/app/` |
| Images | Located in `public/assets/` |
