# Sarita Shakti — Website Rebuild

## Current project state
Custom rebuild of the Sarita Shakti website, replacing the old Wix site at
youryogapills.org.

Sarita Shakti offers:
- Psychological astrology readings
- Astrological coaching
- Therapeutic yoga
- Holistic/personal accompaniment

Important current decision: retreats are no longer offered. Remove public
mentions of retreats, "retiros", "ritiri", and Sant Pol de Mar. The client used
to live/work there, but it is no longer part of the current site positioning.
Old retreat URLs should redirect to an active service page instead of becoming
dead links.

Latest implemented direction: make the site extremely clear for visitors:
who Sarita is, what services she offers, how to book/contact, and how the
separate astrology site fits into the funnel.

## Stack
- Next.js App Router + TypeScript
- Tailwind/CSS in `app/globals.css`
- Sanity planned for the blog
- Booking via swappable embed, not chosen yet
- Deployment target: Vercel assumed, confirm before launch

Important Next.js note: this repo is on Next.js 16. APIs and conventions may
differ from older training data. When touching framework-sensitive behavior,
check the relevant local docs in `node_modules/next/dist/docs/` first.

## Languages
The site is trilingual:
- Italian: `/it`
- Spanish: `/es`
- English: `/en`

Every active main page should exist in all three languages.

Active pages:
- Home
- About/Contact
- Booking
- Coaching
- Training
- Blog

Removed page:
- Retreats

The blog is per-language. A blog post may exist in one, two, or three languages;
do not assume every post has all translations.

## Current navigation
Top/mobile nav currently includes:
- Home
- Coaching
- Training
- Blog
- Contact/About

Do not re-add Retreats/Retiros/Ritiri unless the client explicitly reverses the
decision.

## Current services and order
The Coaching page should present services in this order in all three languages:

1. Psychological astrology reading / Lectura de astrología psicológica
2. Synastry / Sinastría
3. Solar revolution / Revolución solar
4. Online astrological coaching / Coaching astrológico online
5. Monthly 30 min session / Sesión mensual
6. Astrological coaching pack — 3 sessions
7. Astrological coaching pack — 5 sessions
8. Intestinal wash / Lavado intestinal
9. Intestinal wash + astrological coaching

Confirmed pricing:
- Psychological astrology reading: 90 min, €150
- Synastry: 90 min, €150
- Solar revolution: 60 min, €110
- Online astrological coaching: 60 min, €110
- Monthly session: 30 min, €50
- Pack 3 sessions: 3 x 30 min, pack price €135, individual price €150
- Pack 5 sessions: 5 x 30 min, pack price €220, individual price €250
- Intestinal wash: €110
- Intestinal wash + astrological coaching: 120 min, €210

## Other website funnel
Sarita also has a separate astrology service website:
`https://saritaastrology.com`

The personal site should link to it as a clear, designed part of the funnel,
especially from Home. Treat it as: personal site → understand Sarita/services →
dedicated astrology site for astrology-specific readings.

## Design direction
Dark celestial "observatory":
- Deep midnight-blue background
- Soft blue glow
- Warm gold accents
- Elegant serif headings
- Restrained mystical/astrological UI
- Native-looking social/review/booking components, not cheap widgets

Use real client photos where possible. Be careful with mobile crops; the user
has been sensitive to images feeling badly cropped. Mobile text generally looks
better centered in this project unless a component clearly calls for scanning.

Current brand/logo:
- Header uses `public/brand/sarita-logo-transparent.png`
- Favicon/app icon uses the new S logo
- Mobile drawer uses an S mark

## SEO
SEO is critical.
- Preserve existing search ranking.
- Every old/current indexed URL needs a 301 redirect to the best active
  equivalent.
- Removed retreat URLs should redirect to Coaching, not 404.
- Domain may change; if it does, add domain-level 301 from the old domain.
- Generate sitemap and hreflang alternates.
- Never ship a build that breaks an indexed URL without a redirect plan.

Current redirect detail:
- Legacy retreat paths remain in `lib/legacy-redirects.ts` only as redirect
  sources.
- Public retreat route/content has been removed.

## Blog
Use Sanity for the blog because the client is non-technical and needs to publish
without a developer.

Requirements:
- Friendly editor
- Language field per post
- Visitors browsing a locale see only that locale's posts
- Preserve/import old Wix blog content later

## Booking
Booking starts fresh. Nothing migrates from Wix.

Unresolved:
- Google Appointment Schedules vs Calendly
- Whether payments happen on the site
- Whether Stripe is needed

Build the Booking page with a swappable embed abstraction once the booking tool
is chosen. Do not assume payments.

## Google Reviews
Client wants Google reviews integrated into the site design, not a generic
carousel/widget.

Plan:
- Use Google Places API if possible
- Render a small number of recent reviews in the site's own celestial style
- Places API returns only a handful of recent reviews, not full history

Needed later:
- Google Business Profile / Place ID or enough business info to identify it
- API key setup decision

## Source material
- Client photos: `public/images/`
- Client screenshots/source docs: `docs/client-source/`
- Brief PDF and other local docs may exist in `docs/` or user Downloads

Use client source material for pricing/services/training details. Do not invent
prices or service details. If unclear, flag it.

## Current code landmarks
- Home content: `lib/home-content.ts`
- Coaching services: `lib/coaching-content.ts`
- About content: `lib/about-content.ts`
- Page list/meta copy: `lib/page-content.ts`
- SEO/site helpers: `lib/site.ts`
- Legacy redirects: `lib/legacy-redirects.ts`
- Shell/nav: `components/site-shell.tsx`, `components/nav-menu.tsx`
- Home page rendering: `app/[locale]/page.tsx`
- Dynamic page rendering: `app/[locale]/[slug]/page.tsx`
- Global styling: `app/globals.css`

## Recent completed work
Commit `c824ed0 Refocus site on current services`:
- Removed Retreats from nav/routing/sitemap content
- Deleted retreat page/content files
- Removed visible Sant Pol de Mar references
- Redirected old retreat URLs to Coaching
- Updated Coaching page to the client's current service order
- Added 3-session and 5-session coaching packs
- Made Home more service-led
- Gave About/Sarita more importance on Home
- Updated SEO descriptions away from retreat/location language
- Verified with `npm.cmd run lint` and `npm.cmd run build`

## Open items
- Final domain name
- Domain registrar/Wix/Search Console/Analytics access
- Booking tool: Google Appointment Schedules vs Calendly
- Payments: whether money changes hands on-site
- Sanity setup and blog migration
- Google Reviews Place ID/API key
- Final contact details
- Full crawl of old Wix site for final redirect map
- Final client copy review in IT/ES/EN

## Working rules
- Work in chunks and commit after each working chunk.
- Review diffs before committing.
- Do not let long agent stretches run unreviewed.
- Do not reintroduce old Wix offerings just because they appear in screenshots.
  The current client instruction overrides old source material: no retreats,
  no Sant Pol positioning.
- Before launch-related work, protect SEO first: redirects, sitemap, hreflang,
  metadata, and old URL coverage.
