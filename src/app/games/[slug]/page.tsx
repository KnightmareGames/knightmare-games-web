import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TINCTURES, games, getGame, pressKitHref } from "@/content/games";
import { Arms } from "@/components/Arms";
import { GameArt } from "@/components/GameArt";
import { Ledger } from "@/components/Ledger";
import { Features } from "@/components/Features";
import { GameCard } from "@/components/GameCard";
import { Ornament } from "@/components/Ornament";

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

  return (
    <div style={style}>
      <section className="section section--top">
        <div className="wrap">
          <GameArt game={game} className="banner" />
        </div>
      </section>
      <section className="section">
        <div className="wrap split">
          <div>
            <div className="blazon">
              <Arms arms={game.arms} id={`page-${game.slug}`} size={56} />
              <span>{game.arms.blazon}</span>
            </div>
            <h1 className="page-title">{game.name}</h1>
            <div className="prose">
              {game.description.map((p, i) => <p key={i} className={i === 0 ? "lede" : undefined}>{p}</p>)}
            </div>
            <div className="btns">
              <a className="btn btn--primary" href={game.primaryLink.href} rel="noopener">{game.primaryLink.label}</a>
              <Link className="btn" href={pressKitHref(game)}>Press kit</Link>
            </div>
          </div>
          <Ledger title={game.status} facts={game.facts} />
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head"><div className="kicker">At a glance</div><h2>{game.featuresHeading}</h2></div>
          <Features items={game.features} arms={game.arms} />
        </div>
      </section>
      <div className="wrap"><Ornament /></div>
      <section className="section section--lg">
        <div className="wrap">
          <div className="section-head"><div className="kicker">More from the keep</div><h2>Other games</h2></div>
          <div className="cards">
            {games.filter((g) => g.slug !== game.slug).map((g) => (
              <GameCard key={g.slug} game={g} href={`/games/${g.slug}/`} idPrefix="more" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
