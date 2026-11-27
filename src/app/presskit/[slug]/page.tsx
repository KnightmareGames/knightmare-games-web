import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DISCORD_URL, PRESS_EMAIL, PRESS_UPDATED, TINCTURES, factsAsText, games, getGame } from "@/content/games";
import { Arms } from "@/components/Arms";
import { CopyButton } from "@/components/CopyButton";
import { Downloads } from "@/components/Downloads";
import { Ledger } from "@/components/Ledger";

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
  const style = { "--accent": game.accent, "--on-accent": game.accent === TINCTURES.or ? TINCTURES.sable : TINCTURES.argent } as CSSProperties;
  const steam = game.facts.find((f) => f.label === "Store")?.href;

  return (
    <div style={style}>
      <section className="section section--top">
        <div className="wrap presshead">
          <div>
            <div className="blazon">
              <Arms arms={game.arms} id={`press-${game.slug}`} size={56} />
              <span>Press kit</span>
            </div>
            <h1 className="page-title">{game.name}</h1>
            <p>
              <strong>Press contact:</strong>{" "}
              {PRESS_EMAIL ? <a href={`mailto:${PRESS_EMAIL}`}>{PRESS_EMAIL}</a> : <a href={DISCORD_URL} rel="noopener">Discord</a>}
              {" "}&middot; <Link href={`/games/${game.slug}/`}>Game page</Link>
            </p>
            {game.pressZip && (
              <div className="btns"><a className="btn btn--primary" href={game.pressZip} download>Download everything (.zip)</a></div>
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split split--facts-first">
          <div className="presstext">
            <div className="copyblock">
              <div className="copyblock__head"><h3>Short description</h3><CopyButton text={game.tagline} /></div>
              <p>{game.tagline}</p>
            </div>
            <div className="copyblock">
              <div className="copyblock__head"><h3>Description</h3><CopyButton text={game.description.join("\n\n")} /></div>
              {game.description.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="copyblock">
              <div className="copyblock__head"><h3>{game.featuresHeading}</h3></div>
              <ul className="list">
                {game.features.map((f) => <li key={f.title}><strong>{f.title}.</strong> {f.text}</li>)}
              </ul>
            </div>
            {game.pressPoints && (
              <div className="copyblock">
                <div className="copyblock__head"><h3>{game.pressPoints.heading}</h3></div>
                <ul className="list">{game.pressPoints.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            )}
          </div>
          <Ledger facts={game.facts} copyText={factsAsText(game)} seal={PRESS_UPDATED} />
        </div>
      </section>

      <section className="section section--lg">
        <div className="wrap">
          <div className="section-head"><div className="kicker">The armoury</div><h2>Art and downloads</h2></div>
          {game.downloads ? (
            <Downloads items={game.downloads} background={game.art?.background} />
          ) : (
            <p className="notice">
              Art for {game.name} is being gathered.{steam && <> Screenshots are on the <a href={steam} rel="noopener">Steam page</a> in the meantime.</>}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
