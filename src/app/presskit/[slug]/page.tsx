import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { statSync } from "node:fs";
import { join } from "node:path";
import { notFound } from "next/navigation";
import { PRESS_EMAIL, SOCIALS, STUDIO_BLURB, TINCTURES, factsAsText, games, getGame } from "@/content/games";
import { GameArt } from "@/components/GameArt";
import { Band, PageHead } from "@/components/PageHead";
import { CopyButton } from "@/components/CopyButton";
import { Downloads } from "@/components/Downloads";
import { Email } from "@/components/Email";
import { Ledger } from "@/components/Ledger";
import { Screenshots } from "@/components/Screenshots";
import { Trailer } from "@/components/Trailer";

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

const withSize = (detail: string, href: string) => [detail, sizeOf(href)].filter(Boolean).join(", ");

export function generateStaticParams() {
  return games.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const game = getGame((await params).slug);
  if (!game) return {};
  const title = `${game.name} press kit`;
  return { title, description: game.tagline, openGraph: { title, description: game.tagline, images: [{ url: game.art.src, alt: game.art.alt }] } };
}

export default async function GamePressKit({ params }: Params) {
  const game = getGame((await params).slug);
  if (!game) notFound();
  const style = { "--accent": game.accent, "--on-accent": game.accent === TINCTURES.or ? TINCTURES.sable : TINCTURES.argent } as CSSProperties;
  const steam = game.facts.find((f) => f.label === "Store")?.href;
  const short = game.shortDescription ?? game.tagline;

  const sections: { id?: string; title: string; intro?: string; body: React.ReactNode }[] = [
    {
      title: "Facts and copy",
      intro: "Copy anything here as-is.",
      body: (
        <div className="split">
          <div className="presstext">
            <div className="copyblock">
              <div className="copyblock__head"><h3>Short description</h3><CopyButton text={short} /></div>
              <p>{short}</p>
            </div>
            <div className="copyblock">
              <div className="copyblock__head"><h3>Description</h3><CopyButton text={game.description.join("\n\n")} /></div>
              {game.description.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="copyblock">
              <div className="copyblock__head"><h3>{game.featuresHeading}</h3><CopyButton text={game.features.map((f) => `${f.title}\n${f.text}`).join("\n\n")} /></div>
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
            <div className="copyblock">
              <div className="copyblock__head"><h3>About Knightmare Games</h3><CopyButton text={STUDIO_BLURB} /></div>
              <p>{STUDIO_BLURB}</p>
              <p className="copyblock__links">
                {SOCIALS.map((s) => <a key={s.label} href={s.href} rel="noopener">{s.label}</a>)}
              </p>
            </div>
          </div>
          <Ledger facts={game.facts} copyText={factsAsText(game)} />
        </div>
      ),
    },
  ];
  if (game.trailer) {
    sections.push({ id: "trailer", title: "Trailer", body: <Trailer trailer={game.trailer} detail={withSize(game.trailer.detail, game.trailer.file)} /> });
  }
  if (game.screenshots) {
    sections.push({
      id: "screenshots",
      title: "Screenshots",
      intro: "Each one opens at full size.",
      body: <Screenshots game={game.name} items={game.screenshots} details={game.screenshots.map((s) => withSize(s.detail, s.file))} />,
    });
  }
  sections.push({
    id: "art",
    title: "Art and downloads",
    intro: `Free to use in coverage of ${game.name}.`,
    body: game.downloads ? (
      <Downloads items={game.downloads.map((d) => ({ ...d, detail: withSize(d.detail, d.file) }))} background={game.art.background} />
    ) : (
      <p className="notice">
        Art for {game.name} is being gathered.{steam && <> Screenshots are on the <a href={steam} rel="noopener">Steam page</a> in the meantime.</>}
      </p>
    ),
  });

  return (
    <div style={style}>
      <PageHead kicker="Press kit" title={game.name} lede={game.tagline} art={<GameArt game={game} className="pagehead__plate" />}>
        <p className="pagehead__meta">
          <strong>Press contact:</strong>{" "}
          <Email address={PRESS_EMAIL} />
        </p>
        <div className="btns">
          {game.pressZip && <a className="btn btn--primary" href={game.pressZip} download>Download all&nbsp;<span className="nowrap">(ZIP{sizeOf(game.pressZip) ? `, ${sizeOf(game.pressZip)}` : ""})</span></a>}
          <a className={`btn${game.pressZip ? "" : " btn--primary"}`} href={game.primaryLink.href} rel="noopener">{game.primaryLink.label}</a>
        </div>
      </PageHead>

      {sections.map((s, i) => (
        <Band key={s.title} id={s.id} tone={i % 2 ? "light" : "deep"} title={s.title} intro={s.intro}>{s.body}</Band>
      ))}
    </div>
  );
}
