# knightmare.games — handoff notes

The Knightmare Games studio site. It shows the studio's games and hosts a press kit per game. Its job is to give the studio another presence online. Open PR: branch `static-site-rebuild` into `master` (PR #1). It replaces the old Nuxt site.

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

- `src/content/games.ts`: all game content (name, status, accent tincture, arms, tagline, description, tags, art, primary link, facts, features, press points, trailer, screenshots, downloads, press zip) plus `PRESS_EMAIL` (the one contact address, used on the home page and every press kit), `PRESS_UPDATED`, and `STUDIO_BLURB` (the studio boilerplate on each game's press kit). The first entry is the featured game on the home page; the rest are cards under "More games". A new entry gets `/games/<slug>/` and `/presskit/<slug>/` with no other changes.
- `src/app/`: `page.tsx` (home), `games/[slug]`, `presskit` (index), `presskit/[slug]`, `not-found.tsx`, `layout.tsx` (metadata, OG card).
- `src/components/`:
  - `PageHead` (the one page header) and `Band` (the one section).
  - `GameCard` (the game's shield sits beside its name, never over the art), `Ledger` (fact sheet, press kits only), `Status`.
  - `Trailer` (self-hosted MP4 with a poster) and `Screenshots` (thumbnails that open the full file). A game with a `trailer` or `screenshots` gets those bands on its game page and press kit; band tones alternate by position.
  - `Features`, `Downloads`, `Seal`, `Crest`, `Arms`, `Email`, `Nav`, `Header`, `Footer`, `CopyButton`.
- `src/app/globals.css`: the whole design system. Its header comment states the rules.
- `public/`:
  - `assets/img` (site images) and `assets/press/<game>/` (press downloads, zipped at build).
  - `CNAME`, `.nojekyll`, the favicons.
  - `assets/img/brand/og-card.png` (the 1200×630 share card).

## Design direction and rules

Neobrutalism plus heraldry, meant to feel like the studio's own work, not generic AI output. **Fundamentals come before ornament, and less content beats more.** The owner would rather the site say less and be clean and clear than carry anything that repeats itself or isn't useful. A 2026-11-27 audit against ten indie studio sites (Supergiant, Team Cherry, Klei, Mega Crit, Extremely OK, Aggro Crab, Landfall, Innersloth, Yacht Club, Lucas Pope) cut the home fact table, the game pages' fact wall, numbered feature cards, colour swatches, the hanging banners and the Play page. The owner then removed the ribbon and wax seal under the home page's About box, and asked for the yellow Q icon (the game's current one), not the earlier green. Don't add them back. Before adding a section, check that it says something no other section on the page already says.

- **Pages.**
  - Home: a one-line hero, the featured game with its trailer and store button, the other games as cards, a short About, then contact.
  - Game page: head (lede, status, platforms, store button), trailer, screenshots, three or four features, other games. Facts tables belong to the press kit only.
  - Never ship invented art as a game's own. Spark's earlier "logo" and "title plate" were drawn for the site, not the game's, and were removed. The owner's main criticism of an earlier version was that sections didn't separate and basic web design principles weren't followed. Keep these rules:

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
  - The press kit puts the fact sheet first.
  - The nav shows Games, Press and Contact (About moves to the footer).
- **Ornament** (seal, charter, crest, pennant nav, battlement footer, gold-arrow cursor) is welcome, but only where it doesn't fight the rules above and never on top of a game's art.

## How design work was reviewed

Changes went through a loop:
1. Build.
2. Screenshot every page at 1440 and 390 wide (headless Chrome against `out/`).
3. Have a separate reviewer agent grade the screenshots and source. The reviewer gets the code, not our conclusions.
4. Fix, then re-review.

Reviews graded **fundamentals explicitly**: section separation, hierarchy, spacing rhythm, grid and alignment, readability and WCAG contrast, scannability and IA, consistency, and mobile. They also graded copy and craft, not just the theme. The last pass scored 8/10, and its findings are fixed. Check any new section against the rules above before adding decoration.

## Open items

- **Contact and socials.** `PRESS_EMAIL` is `contact@knightmare.games` (the domain's mail is on Google; the owner believes the address aliases to him but hadn't tested it as of 2026-11-27). `DISCORD_URL` and `SOCIALS` in `games.ts` hold the Discord invite (permanent, supplied 2026-11-27), X and YouTube links; they show in the footer, the home contact band and each press kit's About block.
- **Studio facts.** The hero and `STUDIO_BLURB` say Denver, Colorado, which the owner confirmed on 2026-11-27. The founding year is unknown.
- **Spark art.** The capsule, header and six screenshots came from Steam's CDN (app 601130) on 2026-11-27. Steam only serves the screenshots at 920 × 459, and the game has no logo file there.
- **LC4A sell sheet.** `public/assets/press/last-call-for-alcohol/sell-sheet.pdf` (and its preview) includes a personal name. Decide whether it ships as-is or gets a studio-only version.
- **Cursor Quest copy comes from its Steam page.** On 2026-11-27 the owner asked for the press kit's copy and facts to be the Steam page's, verbatim: short description, the About intro and its four sections, developer, publisher, genres, tags, languages. Don't rewrite it here; when the Steam page changes, copy the change across (`https://store.steampowered.com/api/appdetails?appids=5297900`). Price is the one fact Steam doesn't state.
- **Cursor Quest press assets.** Copied on 2026-11-27 from the cursor-quest repo's gitignored `.art-shots/`: the six Steam screenshots (`steam/screenshots/picks/`), the capsules (`steam/capsule/upload/`), and the trailer live on Steam (`trailer/search-cut/cursor-quest-trailer-stinger.mp4`, 80.3 s). Re-copy them when the Steam page's assets change. WebP previews in `public/assets/img/cursor-quest/` were made with `cwebp`.
- **Usage line.** Every press kit's art band says "Free to use in coverage of <game>." The owner hasn't confirmed that wording, or whether to add a video monetization permission for creators.
- **Go live.** Pages source, merge, DNS (see Deploy above), then check the 404 page on the live host. The local screenshot server never served it, so no review graded it.
