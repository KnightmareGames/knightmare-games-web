import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { statSync } from "node:fs";
import { join } from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DISCORD_URL, PRESS_EMAIL, PRESS_UPDATED, TINCTURES, factsAsText, games, getGame } from "@/content/games";
import { GameArt } from "@/components/GameArt";
import { Band, PageHead } from "@/components/PageHead";
import { CopyButton } from "@/components/CopyButton";
import { Downloads } from "@/components/Downloads";
import { Ledger } from "@/components/Ledger";

type Params = { params: Promise<{ slug: string }> };

// The size of a file under /public, for download labels. Runs at build time only.
function sizeOf(href: string): string | null {
  try {
    const mb = statSync(join(process.cwd(), "public", href)).size / 1e6;
    return mb >= 1 ? `${mb.toFixed(1)}\u00a0MB` : `${Math.max(1, Math.round(mb * 1000))}\u00a0KB`;
  } catch {
    return null;
  }
}

// Games whose press kit is a standalone page in /public are skipped here.
export function generateStaticParams() {
  return games.filter((g) => !g.pressKitHref).map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const game = getGame((await params).slug);
  if (!game) return {};
  const image = game.art?.src ?? `/assets/img/${game.slug}/title-plate.webp`;
  const title = `${game.name} press kit`;
  return { title, description: game.tagline, openGraph: { title, description: game.tagline, images: [{ url: image, alt: game.art?.alt ?? `${game.name} title art` }] } };
}

export default async function GamePressKit({ params }: Params) {
  const game = getGame((await params).slug);
  if (!game || game.pressKitHref) notFound();
  const style = { "--accent": game.accent, "--on-accent": game.accent === TINCTURES.or ? TINCTURES.sable : TINCTURES.argent } as CSSProperties;
  const steam = game.facts.find((f) => f.label === "Store")?.href;

  return (
    <div style={style}>
      <PageHead kicker="Press kit" title={game.name} lede={game.tagline} art={<GameArt game={game} className="pagehead__plate" />}>
        <p className="pagehead__meta">
          <strong>Press contact:</strong>{" "}
          {PRESS_EMAIL ? <a href={`mailto:${PRESS_EMAIL}`}>{PRESS_EMAIL}</a> : <a href={DISCORD_URL} rel="noopener">Discord</a>}
        </p>
        <div className="btns">
          {game.pressZip && <a className="btn btn--primary" href={game.pressZip} download>Download all&nbsp;<span className="nowrap">(ZIP{sizeOf(game.pressZip) ? `, ${sizeOf(game.pressZip)}` : ""})</span></a>}
          <Link className={`btn${game.pressZip ? "" : " btn--primary"}`} href={`/games/${game.slug}/`}>Game page</Link>
        </div>
      </PageHead>

      <Band tone="deep" title="Facts and copy" intro="Copy anything here as-is.">
        <div className="split">
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
      </Band>

      <Band title="Art and downloads">
        {game.downloads ? (
          <Downloads items={game.downloads.map((d) => ({ ...d, detail: [d.detail, sizeOf(d.file)].filter(Boolean).join(", ") }))} background={game.art?.background} />
        ) : (
          <p className="notice">
            Art for {game.name} is being gathered.{steam && <> Screenshots are on the <a href={steam} rel="noopener">Steam page</a> in the meantime.</>}
          </p>
        )}
      </Band>
    </div>
  );
}
