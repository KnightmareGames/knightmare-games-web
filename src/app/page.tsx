import Link from "next/link";
import { DISCORD_URL, games } from "@/content/games";
import { BannerHall } from "@/components/BannerHall";
import { GameCard } from "@/components/GameCard";
import { Seal } from "@/components/Seal";
import { Crest } from "@/components/Crest";
import { Band, PageHead } from "@/components/PageHead";

export default function Home() {
  return (
    <>
      <PageHead
        hero
        kicker="Independent game studio"
        title="Here be games."
        lede="We make video games and tabletop games: an action RPG you play as your mouse cursor, a free arcade shooter, and a drinking card game."
        art={<Crest />}
      >
        <div className="btns">
          <Link className="btn btn--primary" href="#games">See the games</Link>
          <Link className="btn" href="#about">About the studio</Link>
        </div>
      </PageHead>

      <Band id="games" tone="deep" title="Our games" intro="Three games, three very different evenings.">
        <div className="hall-wrap"><BannerHall games={games} /></div>
        <div className="game-rows">
          {games.map((g) => <GameCard key={g.slug} game={g} href={`/games/${g.slug}/`} idPrefix="row" row />)}
        </div>
      </Band>

      <Band id="about" title="About the studio">
        <div className="split">
          <div className="charter">
            <div className="prose">
              <p className="illuminated">
                We&apos;re a small, independent studio making video games, tabletop games, and the odd game jam
                experiment. We&apos;re drawn to ideas that sound a little strange at first, like playing an RPG as your
                mouse cursor, and we keep going until they feel obvious.
              </p>
            </div>
            <span className="charter__ribbon" aria-hidden="true" />
            <Seal ring={"KNIGHTMARE GAMES · SEALED · "} lines={["KG", ""]} />
          </div>
          <aside className="ledger">
            <div className="ledger__title"><span>The studio</span></div>
            <dl>
              <div className="ledger__row"><dt>Name</dt><dd>Knightmare Games, Limited</dd></div>
              <div className="ledger__row"><dt>Now making</dt><dd><Link href="/games/cursor-quest/">Cursor Quest</Link>, out in 2027</dd></div>
              <div className="ledger__row"><dt>Press</dt><dd><Link href="/presskit/">Press kits</Link> for every game</dd></div>
              <div className="ledger__row"><dt>Community</dt><dd><a href={DISCORD_URL} rel="noopener">Discord</a></dd></div>
            </dl>
          </aside>
        </div>
      </Band>

      <Band id="contact" tone="gules" title="Press and contact" intro="Every game has a press kit with facts, copy, and art. For anything else, find us on Discord.">
        <div className="btns">
          <a className="btn btn--ink" href={DISCORD_URL} rel="noopener">Join the Discord</a>
          <Link className="btn btn--ghost" href="/presskit/">Press kits</Link>
        </div>
      </Band>
    </>
  );
}
