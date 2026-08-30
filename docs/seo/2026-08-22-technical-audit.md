# Technical SEO audit — saritashakti.com

**Date:** 2026-08-22
**Scope:** Design-independent technical layer only. Content, page structure, internal linking and money-page strategy are deliberately excluded — they belong to the redesign.
**Baseline data:** `saritashakti.com-Performance-on-Search-2026-08-22.xlsx` (GSC, last 6 months)

---

## 0. Context that frames everything

The domain was migrated from **youryogapills.org** (see `next.config.ts`). Google's understanding of the site is still almost entirely inherited from that yoga brand:

| | |
|---|---|
| Queries in export | 342 |
| Yoga / retreat / meditation queries | ~320 (94%) |
| Astrology-related queries | 22 (~130 impressions total) |
| Clicks (query sheet) | 19 |
| Impressions (query sheet) | 6,092 |

Top queries by impressions: `retiro espiritual` (375, pos 6.1), `retiros de yoga` (200, pos 7.2), `retiro espiritual barcelona` (187), `shakti` (182), `retiro de yoga` (157).

Where she *does* surface for astrology she ranks well — `astrología psicologica` pos 1, `astrologia terapeutica` pos 1, `astrologa barcelona` pos 1, `astrologo barcelona` pos 3.5 — but on negligible volume. The ranking ability exists; the content behind it does not.

**Caveat on the export:** the Queries sheet totals 19 clicks while the Pages sheet totals ~80. GSC anonymises rare queries, so roughly 75% of click data is missing from the query list. Re-export at **16 months** before the oldest data ages out.

---

## P0 — Actively costing traffic

### 1. Root redirect is temporary (307), not permanent

`proxy.ts` redirects `/` to `/es` with `NextResponse.redirect()`, which defaults to **307 Temporary Redirect**. Verified live:

```
HTTP/1.1 307 Temporary Redirect
Location: /es
```

A 307 tells Google the root URL is the canonical one and `/es` is a temporary detour, so Google keeps indexing `/`. The GSC Pages sheet shows exactly that:

| URL | Clicks | Impressions |
|---|---|---|
| `https://saritashakti.com/` | 61 | 7,985 |
| `https://saritashakti.com/es` | 12 | 150 |

All authority is accruing to a URL that serves no content. **Fix:** return 308 (or 301) from the root branch in `proxy.ts`.

### 2. Homepage title/query mismatch — the CTR collapse

`/es` ranks at position 6.1 for `retiro espiritual` with **375 impressions and 3 clicks (0.8% CTR)**. Expected CTR at position 6 is roughly 4–6%. The pattern repeats across the whole yoga cluster: `retiros de yoga` 200 impressions / 0 clicks, `retiro de yoga` 157 / 0.

The cause is visible in the rendered title:

- **Query:** `retiro espiritual`
- **Title shown:** `Sarita Shakti | Astrología Psicológica Barcelona | Sarita Shakti`
- **Description:** `Astrología psicológica Barcelona, yoga terapéutico y carta natal con Sarita Shakti.`

Nothing in the snippet matches what the searcher typed. This is not a ranking problem and does not need a redesign to fix — it is the cheapest available win.

### 3. Brand name duplicated in every homepage title

`app/layout.tsx` sets `title.template = "%s | Sarita Shakti"`, and the `homeSeo` entries in `lib/site.ts` *already* start with "Sarita Shakti". Result on all three homepages:

```
Sarita Shakti | Astrología Psicológica Barcelona | Sarita Shakti
Sarita Shakti | Psychological Astrology Online | Sarita Shakti
Sarita Shakti | Astrologia psicologica Milano | Sarita Shakti
```

Roughly 16 characters of SERP title burned on a repeat. Interior pages are unaffected — their titles omit the brand and the template supplies it correctly.

---

## P1 — Broken URLs and lost link equity

### 4. `/retirosyogastrologia` returns 404

GSC records 28 impressions at average position 10.6 for `https://saritashakti.com/retirosyogastrologia/`. The redirect map in `lib/legacy-redirects.ts` contains `/retirosyogayastrologia` — a **different string** (`yoga-y-astrologia` vs `yog-astrologia`). Verified live:

```
/retirosyogastrologia/   308 -> /retirosyogastrologia   404
/retirosyogayastrologia  301 -> /es/coaching            200
```

The URL Google actually knows about dead-ends. The one that works is not indexed.

### 5. The rest of the legacy map needs the same verification

The typo above indicates the map was transcribed by hand. There are **54 entries in `legacy-redirects.ts`** and **80 in `blog-redirects.ts`**, none verified against a real source list. Every one should be checked against the old Wix URL inventory and GSC before the redesign, because a redesign is when redirect errors become permanent.

---

## P2 — Quality and guideline risk

### 6. `AggregateRating` is hardcoded and can drift from reality

`lib/structured-data.ts:72-77` emits a fixed `ratingValue: "5.0"` / `reviewCount: 170` on every page. Meanwhile `lib/google-reviews.ts` fetches the *live* rating and count from the Google Places API (using the hardcoded 170/5.0 only as a fallback). The schema therefore asserts a rating that is never re-checked against the source of truth. Structured data that misstates review counts is a guidelines violation and a manual-action risk. Feed the JSON-LD from the live summary instead.

### 7. Internal working language leaking into a public meta description

`/es/coaching` renders:

> Lecturas astrológicas, coaching online, packs breves y prácticas yóguicas con precios y duraciones **confirmados por la clienta**.

"Confirmed by the client" is an internal note. It is visible in Google results today.

### 8. Homepage description is too short

`/es` description is 83 characters — under half the usable SERP width — and mentions nothing the page actually ranks for.

### 9. Dead code that would break hreflang if used

`buildAlternates()` in `lib/site.ts:57` hardcodes `canonical: buildLocalizedPath("es", path)` for **every** locale. It is currently never called, so production is unaffected. If anyone wires it up, `/en` and `/it` would canonicalise to `/es` and drop out of the index. Delete it.

---

## P3 — Coverage and GEO

10. **No `llms.txt`** — returns 404. Relevant for AI-answer visibility (GEO).
11. **Locale imbalance.** Sitemap blog posts: **es 58, it 32, en 5**. The English tree is thin enough that `/en` has little reason to rank.
12. **Inconsistent slug localisation.** Special pages use localised slugs (`/es/formacion-astrologia-psicologica-barcelona`) but standard pages do not (`/es/about`, `/es/training`, `/es/booking`). Pick one convention before the redesign, since changing it later costs another redirect round.

---

## What is already correct

Worth recording, because it is a meaningful part of the baseline and it is more than most sites this size have:

- **hreflang is correct and reciprocal** across es/en/it on every page tested, including `x-default` to `/es`.
- **Canonicals are self-referencing and accurate** on every page tested.
- **JSON-LD is genuinely good:** `LocalBusiness`, `Person`, `Service`, `FAQPage`, `BreadcrumbList`, `ItemList`, `PostalAddress`, `GeoCoordinates`, `OpeningHoursSpecification`.
- **`robots.txt` and `sitemap.xml` are clean**, and the sitemap emits hreflang alternates per entry.
- **`youryogapills.org` to `saritashakti.com` domain redirects** are properly configured for apex, www, and the en/es/it subdomains.
- OG images and favicons resolve.

---

## URL inventory (pre-redesign baseline)

| Set | Count |
|---|---|
| Sitemap URLs total | 128 |
| — non-blog pages (11 × 3 locales) | 33 |
| — blog posts (es 58 / it 32 / en 5) | 95 |
| Legacy redirect sources | 54 |
| Blog-post redirect sources | 80 |

**Rule for the redesign: every URL above either survives at the same path or gets a 301.** This is the single realistic way a redesign makes rankings worse, and it is entirely preventable.

---

## Recommended order

1. Fix the 307 to 308 root redirect *(one line; unblocks correct attribution for everything measured afterwards)*
2. Fix `/retirosyogastrologia`
3. Rewrite homepage titles/descriptions to match the queries the pages actually rank for
4. Remove the duplicated brand suffix
5. Fix the `/es/coaching` description leak
6. Wire `AggregateRating` to live review data
7. Delete `buildAlternates()`
8. Verify the full legacy redirect map against the old URL inventory
9. Add `llms.txt`

Items 1–7 are independent of the redesign and safe to ship now. Items 8–9 should land before the redesign starts.
