import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { games, getGame, pressKitHref } from "@/content/games";
import { GameArt } from "@/components/GameArt";
import { FactSheet } from "@/components/FactSheet";
import { Features } from "@/components/Features";
import { Prose } from "@/components/Prose";

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

  return (
    <>
      <section className="section section--tight">
        <div className="wrap">
          <GameArt game={game} className="banner" />
        </div>
      </section>
      <section className="section section--tight">
        <div className="wrap split">
          <div>
            <div className="kicker">No. {game.numeral} &middot; {game.status}</div>
            <h1 className="page-title">{game.name}</h1>
            <Prose paragraphs={game.description} />
            <div className="btns">
              <a className="btn btn--blood" href={game.primaryLink.href} rel="noopener">{game.primaryLink.label}</a>
              <Link className="btn" href={pressKitHref(game)}>Press kit</Link>
            </div>
          </div>
          <FactSheet facts={game.facts} />
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head"><h2>{game.featuresHeading}</h2></div>
          <Features items={game.features} />
        </div>
      </section>
    </>
  );
}
