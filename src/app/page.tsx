import Link from "next/link";
import { DISCORD_URL, PRESS_EMAIL, games } from "@/content/games";
import { Crest } from "@/components/Crest";
import { Email } from "@/components/Email";
import { GameArt } from "@/components/GameArt";
import { GameCard } from "@/components/GameCard";
import { Band, PageHead } from "@/components/PageHead";
import { Status } from "@/components/Status";
import { Trailer } from "@/components/Trailer";

export default function Home() {
  const [featured, ...others] = games;

  return (
    <>
      <PageHead
        hero
        kicker="Independent game studio"
        title="Here be games."
        lede="Video games and tabletop games, made in Denver, Colorado."
        art={<Crest />}
      />

      <Band id="games" tone="deep" title={featured.name}>
        <div className="split split--center">
          {featured.trailer ? <Trailer trailer={featured.trailer} /> : <GameArt game={featured} className="pagehead__plate" />}
          <div>
            <p className="lede">{featured.shortDescription ?? featured.description[0]}</p>
            <p><Status>{featured.status}</Status></p>
            <div className="btns">
              <a className="btn btn--primary" href={featured.primaryLink.href} rel="noopener">{featured.primaryLink.label}</a>
              <Link className="btn" href={`/games/${featured.slug}/`}>Game page</Link>
            </div>
          </div>
        </div>
      </Band>

      <Band title="More games">
        <div className="cards cards--pair">
          {others.map((g) => <GameCard key={g.slug} game={g} href={`/games/${g.slug}/`} idPrefix="home" />)}
        </div>
      </Band>

      <Band id="about" tone="deep" title="About the studio">
        <div className="charter">
          <div className="prose">
            <p className="illuminated">
              We&apos;re a small, independent studio making video games, tabletop games, and the odd game jam
              experiment. We&apos;re drawn to ideas that sound a little strange at first, like playing an RPG as your
              mouse cursor, and we keep going until they feel obvious.
            </p>
          </div>
        </div>
      </Band>

      <Band id="contact" tone="gules" title="Press and contact" intro={<>Every game has a press kit with facts, copy, and art. For anything else, write to <Email address={PRESS_EMAIL} />.</>}>
        <div className="btns">
          <a className="btn btn--ink" href={`mailto:${PRESS_EMAIL}`}>Email us</a>
          <Link className="btn btn--ghost" href="/presskit/">Press kits</Link>
          <a className="btn btn--ghost" href={DISCORD_URL} rel="noopener">Join the Discord</a>
        </div>
      </Band>
    </>
  );
}
