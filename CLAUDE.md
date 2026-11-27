# knightmare.games — handoff notes

The Knightmare Games studio site. It shows the studio's games, hosts a press kit per game, and will later host HTML5 builds. Its job is to give the studio another presence online. Open PR: branch `static-site-rebuild` into `master` (PR #1). It replaces the old Nuxt site.

## Stack

- Next.js 16 App Router, React 19, TypeScript 5.9. Static export (`output: "export"`, `trailingSlash: true`, `images.unoptimized`), so it runs with no server.
- Fonts come from `next/font/google`: Grenze Gotisch (blackletter, h1/h2 and the wordmark only), Grenze (labels, h3, card titles, buttons, nav), Spectral (body).
- `npm run dev` serves http://localhost:3000. `npm run build` writes `out/`, and its `prebuild` (`scripts/press-zips.mjs`) zips each folder in `public/assets/press/` with the `zip` CLI. The zips are gitignored. `npm run typecheck` runs tsc.
- Preview the export with `npx serve out`.

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` builds and deploys on every push to `master`. Before the first deploy:
1. Repo Settings > Pages > Source: **GitHub Actions**.
2. Merge PR #1.
3. Custom domain `knightmare.games` (`public/CNAME` already says so). DNS at the registrar:
   - apex A records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www` CNAME `knightmaregames.github.io`

   Then tick "Enforce HTTPS" once the certificate issues.

## Where things live

- `src/content/games.ts`: all game content (name, status, accent tincture, arms, tagline, description, tags, art, primary link, facts, features, press points, downloads, press zip) plus `DISCORD_URL`, `PRESS_EMAIL` (null for now; set it and every press contact line switches to the email), and `PRESS_UPDATED`. A new entry gets a home banner, `/games/<slug>/` and `/presskit/<slug>/` with no other changes.
- `src/app/`: `page.tsx` (home), `games/[slug]`, `presskit` (index), `presskit/[slug]`, `play` (built but unlinked until a browser game exists), `not-found.tsx`, `layout.tsx` (metadata, OG card).
- `src/components/`:
  - `PageHead` (the one page header) and `Band` (the one section).
  - `GameCard` (with a `row` variant for phones), `BannerHall` (the home banners on desktop), `Ledger` (fact sheet, with a `wide` variant), `Status`.
  - `Features`, `Downloads`, `Seal`, `Crest`, `Arms`, `SparkPlate`, `Nav`, `Header`, `Footer`, `CopyButton`.
- `src/app/globals.css`: the whole design system. Its header comment states the rules.
- `public/`:
  - `assets/img` (site images) and `assets/press/<game>/` (press downloads, zipped at build).
  - `presskit/cursor-quest/`, a standalone press kit made elsewhere, linked through `pressKitHref`.
  - `CNAME`, `.nojekyll`, the favicons.
  - `assets/img/brand/og-card.png` (the 1200×630 share card).

## Design direction and rules

Neobrutalism plus heraldry, meant to feel like the studio's own work, not generic AI output. **Fundamentals come before ornament.** The owner's main criticism of an earlier version was that sections didn't separate and basic web design principles weren't followed. Keep these rules:

- **Structure.** Every page is a stack of full-width bands: a `PageHead`, then `Band`s alternating light (parchment `#f1e6cf`) and deep (parchment-2 `#e7d8b8`), split by a 3px ink rule.
  - Each band has one h2 and at most a one-line intro.
  - Kickers (the notched ribbons) belong to page heads only.
  - The home page ends on a red (gules) "Press and contact" band.
- **Spacing.** Use only the `--s1`…`--s9` scale (4 to 96px).
  - Band padding is `--s9`, then `--s8` under 900px and `--s7` under 600px.
  - Heading to content is `--s6`.
  - Two-column splits are `7fr 5fr` with an `--s8` gap.
- **Type scale.** Hero h1 > page h1 > h2 > h3, each a clear step down. Nothing a person must read is under 14px. Text measure is 64ch.
- **Elevation.** Only two shadow levels: `--shadow-sm` (4px, controls and cards) and `--shadow` (8px, the one object a band is about). Features and downloads get borders only.
- **Tinctures.** These double as the contrast rule. Metals (or `#e8ac1c`, argent `#fffaf0`) go on colours (sable `#15110e`, gules `#c8161d`, azure `#2a45a8`, vert `#2f7d3b`), never metal on metal.
  - Links are gules on parchment, but sable on parchment-2, because gules there is 4.16:1 and fails WCAG AA.
  - Headings on the gules band are argent, because or on gules is 2.9:1.
- **Components are used one way everywhere.**
  - Status is always the `Status` ribbon.
  - Copy buttons are `.btn--small` labelled "Copy".
  - There is one primary (red) button per group.
- **Mobile.**
  - Touch targets are at least 44px.
  - The home page shows the games as compact rows instead of banners.
  - The press kit puts the fact sheet first.
  - The nav shows Games, Press and Contact (About moves to the footer).
- **Ornament** (banners, seal, charter, crest, pennant nav, battlement footer, gold-arrow cursor) is welcome, but only where it doesn't fight the rules above.

## How design work was reviewed

Changes went through a loop:
1. Build.
2. Screenshot every page at 1440 and 390 wide (headless Chrome against `out/`).
3. Have a separate reviewer agent grade the screenshots and source. The reviewer gets the code, not our conclusions.
4. Fix, then re-review.

Reviews graded **fundamentals explicitly**: section separation, hierarchy, spacing rhythm, grid and alignment, readability and WCAG contrast, scannability and IA, consistency, and mobile. They also graded copy and craft, not just the theme. The last pass scored 8/10, and its findings are fixed. Check any new section against the rules above before adding decoration.

## Open items

- **Press email.** Set `PRESS_EMAIL` in `games.ts`. Press contact is Discord only for now, which reads as weak to journalists. The Discord invite dates from 2021; confirm it still works.
- **Studio facts.** Founding year and location for the home "The studio" ledger and the press kit, and the seal ring text could then read "EST. <year>".
- **Spark screenshots and header.** This sandbox couldn't download from Steam's CDN, and the upload-or-link question wasn't answered. From a normal machine, download these and add them to `public/assets/press/spark/` (with `.webp` previews in `public/assets/img/spark/`) and to Spark's `downloads` in `games.ts`:
  - The header (`header.jpg`) could also become Spark's `art`, replacing the drawn `SparkPlate`.
  - URLs (Steam app 601130):
    - https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/601130/header.jpg
    - https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/601130/ss_ebca0b2c4e38c972b840dd47a54b564cde03b370.1920x1080.jpg
    - https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/601130/ss_5f613e68a0dabecb2e85b3a1831e4e4113589503.1920x1080.jpg
    - https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/601130/ss_41921964ddf103bdc218c2d833c39fb8d6fec1f2.1920x1080.jpg
    - https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/601130/ss_05b73ff8e41d011b979b2a11113024026af00bd9.1920x1080.jpg
    - https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/601130/ss_fe20dc9015f92fee81d247734dd7a1d53468318b.1920x1080.jpg
    - https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/601130/ss_d61fbb82e4f72d8722d76feef49fde7b7852a552.1920x1080.jpg
    - https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/601130/ss_64090c8cbc98892e1c0a11f5f4e389adae617cec.1920x1080.jpg
- **LC4A sell sheet.** `public/assets/press/last-call-for-alcohol/sell-sheet.pdf` (and its preview) includes a personal name. Decide whether it ships as-is or gets a studio-only version.
- **Cursor Quest pitch line.** The game page lede (first `description` paragraph in `games.ts`) was rewritten in review: "Your mouse cursor is the hero. Swing a sword with a flick of the wrist, dodge on reflex, and level up by chopping, mining, and fishing with real cursor movement." The owner should confirm or replace it.
- **Cursor Quest screenshots or trailer.** None on the site yet beyond the capsule art.
- **Go live.** Pages source, merge, DNS (see Deploy above), then check the 404 page on the live host. The local screenshot server never served it, so no review graded it.
