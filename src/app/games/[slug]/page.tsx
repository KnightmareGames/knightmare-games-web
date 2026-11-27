import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TINCTURES, games, getGame, pressKitHref } from "@/content/games";
import { GameArt } from "@/components/GameArt";
import { Ledger } from "@/components/Ledger";
import { Features } from "@/components/Features";
import { GameCard } from "@/components/GameCard";
import { Band, PageHead } from "@/components/PageHead";
import { Status } from "@/components/Status";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return games.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const game = getGame((await params).slug);
  return game ? { title: game.name, description: game.tagline } : {};
}

export default async function GamePage({ params }: Params) {
  const game = getGame((await params).slug);
  if (!game) notFound();
  const style = { "--accent": game.accent, "--on-accent": game.accent === TINCTURES.or ? TINCTURES.sable : TINCTURES.argent } as CSSProperties;
  const [lede, ...rest] = game.description;

  return (
    <div style={style}>
      <PageHead kicker={game.tags[0]} title={game.name} lede={lede} art={<GameArt game={game} className="pagehead__plate" />}>
        <p className="pagehead__meta"><Status>{game.status}</Status></p>
        <div className="btns">
          <a className="btn btn--primary" href={game.primaryLink.href} rel="noopener">{game.primaryLink.label}</a>
          <Link className="btn" href={pressKitHref(game)}>Press kit</Link>
        </div>
      </PageHead>

      <Band tone="deep" title={game.featuresHeading}>
        <Features items={game.features} />
      </Band>

      <Band title="The details">
        <div className="split">
          <div className="prose">{rest.map((p, i) => <p key={i}>{p}</p>)}</div>
          <Ledger facts={game.facts} />
        </div>
      </Band>

      <Band tone="deep" title="Other games">
        <div className="cards cards--pair">
          {games.filter((g) => g.slug !== game.slug).map((g) => (
            <GameCard key={g.slug} game={g} href={`/games/${g.slug}/`} idPrefix="more" />
          ))}
        </div>
      </Band>
    </div>
  );
}
