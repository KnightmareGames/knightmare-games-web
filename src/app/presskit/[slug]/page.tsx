import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DISCORD_URL, games, getGame } from "@/content/games";
import { FactSheet } from "@/components/FactSheet";
import { Downloads } from "@/components/Downloads";
import { Prose } from "@/components/Prose";

type Params = { params: Promise<{ slug: string }> };

// Games whose press kit is a standalone page in /public are skipped here.
export function generateStaticParams() {
  return games.filter((g) => !g.pressKitHref).map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const game = getGame((await params).slug);
  return game ? { title: `${game.name} press kit`, description: game.tagline } : {};
}

export default async function GamePressKit({ params }: Params) {
  const game = getGame((await params).slug);
  if (!game || game.pressKitHref) notFound();

  return (
    <>
      <section className="section">
        <div className="wrap split">
          <div>
            <div className="kicker">Press kit &middot; No. {game.numeral}</div>
            <h1 className="page-title">{game.name}</h1>
            <h3>Description</h3>
            <Prose paragraphs={game.description} />
            <h3>{game.featuresHeading}</h3>
            <ul className="list">
              {game.features.map((f) => (
                <li key={f.title}><strong>{f.title}:</strong> {f.text}</li>
              ))}
            </ul>
            {game.pressPoints && (
              <>
                <h3>{game.pressPoints.heading}</h3>
                <ul className="list">
                  {game.pressPoints.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </>
            )}
            <p>
              For press, review copies, or interviews, reach us on <a href={DISCORD_URL} rel="noopener">Discord</a>.
              {" "}<Link href={`/games/${game.slug}/`}>Back to the game page</Link>.
            </p>
          </div>
          <FactSheet title="Fact sheet" facts={game.facts} />
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head"><h2>Art and downloads</h2></div>
          {game.downloads ? (
            <Downloads items={game.downloads} background={game.art?.background} />
          ) : (
            <p className="notice">Key art and screenshots are on the way.</p>
          )}
        </div>
      </section>
    </>
  );
}
