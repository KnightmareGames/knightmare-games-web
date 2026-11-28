# knightmare.games

The Knightmare Games studio site. Next.js (App Router) with static export, hosted free on GitHub Pages.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # writes the static site to out/
```

## Where things are

- `src/content/games.ts`: every game's text, facts, features, links and press downloads. The first game is featured on the home page; the rest are cards. Each gets a page at `/games/<slug>/` and a press kit at `/presskit/<slug>/`.
- `src/app/`: the pages (home, `games/[slug]`, `presskit`, `presskit/[slug]`, 404).
- `src/components/`: header, footer, cards, the ledger (fact sheet), features, downloads.
- `src/app/globals.css`: the whole look. Neobrutalist (thick ink borders, hard offset shadows) with manuscript and heraldry touches (blackletter titles, illuminated initials, a crest).
- `public/`: images, press downloads (`assets/press/<game>/`, zipped at build), and `CNAME`.

## Deploying

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `master`. One-time setup in the repo: Settings > Pages > Source: **GitHub Actions**, custom domain `knightmare.games`.
