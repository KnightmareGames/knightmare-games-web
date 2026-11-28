import type { Metadata } from "next";
import { PRESS_EMAIL, games, pressKitHref } from "@/content/games";
import { GameCard } from "@/components/GameCard";
import { Band, PageHead } from "@/components/PageHead";
import { Crest } from "@/components/Crest";
import { Email } from "@/components/Email";

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
        art={<Crest />}
      >
        <p className="pagehead__meta">
          <strong>Press contact:</strong>{" "}
          <Email address={PRESS_EMAIL} />
        </p>
      </PageHead>

      <Band tone="deep" title="Game press kits">
        <div className="cards">
          {games.map((g) => (
            <GameCard key={g.slug} game={g} href={pressKitHref(g)} idPrefix="press" />
          ))}
        </div>
      </Band>

      <Band title="Studio logo">
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
          </figcaption>
        </figure>
      </Band>
    </>
  );
}
