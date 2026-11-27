import type { Metadata } from "next";
import { DISCORD_URL, PRESS_EMAIL, PRESS_UPDATED, games, pressKitHref } from "@/content/games";
import { GameCard } from "@/components/GameCard";
import { Ledger } from "@/components/Ledger";

export const metadata: Metadata = {
  title: "Press kits",
  description: "Press kits for Knightmare Games and its games: facts, descriptions, logos, and art.",
};

export default function PressKitIndex() {
  return (
    <>
      <section className="section section--top">
        <div className="wrap presshead">
          <div>
            <div className="kicker">Press kits</div>
            <h1 className="page-title">For press &amp; creators</h1>
            <div className="prose">
              <p className="lede">
                Knightmare Games is an independent game studio making video games and tabletop games. Pick a game below
                for its fact sheet, descriptions you can copy, and art you can download.
              </p>
              <p>
                <strong>Press contact:</strong>{" "}
                {PRESS_EMAIL ? <a href={`mailto:${PRESS_EMAIL}`}>{PRESS_EMAIL}</a> : <a href={DISCORD_URL} rel="noopener">Discord</a>}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head"><div className="kicker">By game</div><h2>Game press kits</h2></div>
          <div className="cards">
            {games.map((g) => (
              <GameCard key={g.slug} game={g} href={pressKitHref(g)} idPrefix="press" />
            ))}
          </div>
        </div>
      </section>
      <section className="section section--lg">
        <div className="wrap">
          <div className="section-head"><div className="kicker">The studio</div><h2>Logo and facts</h2></div>
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
        </div>
      </section>
    </>
  );
}
