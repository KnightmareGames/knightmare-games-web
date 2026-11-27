import type { Metadata } from "next";
import { DISCORD_URL, PRESS_EMAIL, PRESS_UPDATED, games, pressKitHref } from "@/content/games";
import { GameCard } from "@/components/GameCard";
import { Ledger } from "@/components/Ledger";
import { Band, PageHead } from "@/components/PageHead";

export const metadata: Metadata = {
  title: "Press kits",
  description: "Press kits for Knightmare Games and its games: facts, descriptions, logos, and art.",
};

export default function PressKitIndex() {
  return (
    <>
      <PageHead
        kicker="Press kits"
        title="For press &amp; creators"
        lede="Knightmare Games is an independent studio making video games and tabletop games. Each kit has a fact sheet, descriptions you can copy, and art to download."
      >
        <p className="pagehead__meta">
          <strong>Press contact:</strong>{" "}
          {PRESS_EMAIL ? <a href={`mailto:${PRESS_EMAIL}`}>{PRESS_EMAIL}</a> : <a href={DISCORD_URL} rel="noopener">Discord</a>}
        </p>
      </PageHead>

      <Band tone="deep" title="Game press kits">
        <div className="cards">
          {games.map((g) => (
            <GameCard key={g.slug} game={g} href={pressKitHref(g)} idPrefix="press" />
          ))}
        </div>
      </Band>

      <Band title="Studio logo and facts">
        <div className="split">
          <figure className="crest-download">
            <div className="crest-download__img">
              <img src="/assets/img/brand/knightmare-logo-512.webp" alt="Knightmare Games logo" width={512} height={466} />
            </div>
            <figcaption>
              <div className="download__label">Knightmare Games logo</div>
              <div className="download__detail">Transparent PNG</div>
              <div className="btns">
                <a className="btn btn--small" href="/assets/press/studio/crest-2048.png" download>2048 px</a>
                <a className="btn btn--small" href="/assets/press/studio/crest-1024.png" download>1024 px</a>
              </div>
              <div className="swatches" aria-label="Studio colours">
                {[["Ink", "#15110E"], ["Red", "#C8161D"], ["Gold", "#E8AC1C"], ["Parchment", "#F1E6CF"]].map(([name, hex]) => (
                  <span key={hex}>
                    <span className="swatch" style={{ background: hex }} />
                    {name}
                    <small>{hex}</small>
                  </span>
                ))}
              </div>
            </figcaption>
          </figure>
          <Ledger
            title="The studio"
            seal={PRESS_UPDATED}
            facts={[
              { label: "Name", value: "Knightmare Games, Limited" },
              { label: "Games", value: games.map((g) => g.name).join(", ") },
              { label: "Platforms", value: "PC, Mac, Linux, tabletop" },
              { label: "Web", value: "knightmare.games", href: "https://knightmare.games" },
              PRESS_EMAIL ? { label: "Press", value: PRESS_EMAIL, href: `mailto:${PRESS_EMAIL}` } : { label: "Contact", value: "Discord", href: DISCORD_URL },
            ]}
          />
        </div>
      </Band>
    </>
  );
}
