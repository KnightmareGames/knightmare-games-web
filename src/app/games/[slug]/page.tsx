import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TINCTURES, games, getGame, pressKitHref } from "@/content/games";
import { GameArt } from "@/components/GameArt";
import { Features } from "@/components/Features";
import { GameCard } from "@/components/GameCard";
import { Screenshots } from "@/components/Screenshots";
import { Trailer } from "@/components/Trailer";
import { Band, PageHead } from "@/components/PageHead";
import { Status } from "@/components/Status";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return games.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const game = getGame((await params).slug);
  if (!game) return {};
  return { title: game.name, description: game.tagline, openGraph: { title: game.name, description: game.tagline, images: [{ url: game.art.src, alt: game.art.alt }] } };
}

export default async function GamePage({ params }: Params) {
  const game = getGame((await params).slug);
  if (!game) notFound();
  const style = { "--accent": game.accent, "--on-accent": game.accent === TINCTURES.or ? TINCTURES.sable : TINCTURES.argent } as CSSProperties;

  const sections: { id?: string; title: string; body: React.ReactNode }[] = [
    ...(game.trailer ? [{ id: "trailer", title: "Trailer", body: <Trailer trailer={game.trailer} /> }] : []),
    ...(game.screenshots ? [{ id: "screenshots", title: "Screenshots", body: <Screenshots game={game.name} items={game.screenshots} /> }] : []),
    { title: game.featuresHeading, body: <Features items={game.features} /> },
    {
      title: "Other games",
      body: (
        <div className="cards cards--pair">
          {games.filter((g) => g.slug !== game.slug).map((g) => (
            <GameCard key={g.slug} game={g} href={`/games/${g.slug}/`} idPrefix="more" />
          ))}
        </div>
      ),
    },
  ];

  return (
    <div style={style}>
      <PageHead kicker={game.tags[0]} title={game.name} lede={game.description[0]} art={<GameArt game={game} className="pagehead__plate" />}>
        <p className="pagehead__meta">
          <Status>{game.status}</Status>
          <span className="pagehead__facts">{game.tags.slice(1).join(" · ")}</span>
        </p>
        <div className="btns">
          <a className="btn btn--primary" href={game.primaryLink.href} rel="noopener">{game.primaryLink.label}</a>
          <Link className="btn" href={pressKitHref(game)}>Press kit</Link>
        </div>
      </PageHead>

      {sections.map((s, i) => (
        <Band key={s.title} id={s.id} tone={i % 2 ? "light" : "deep"} title={s.title}>{s.body}</Band>
      ))}
    </div>
  );
}
