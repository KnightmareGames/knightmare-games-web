import Link from "next/link";
import { DISCORD_URL, games } from "@/content/games";
import { BannerHall } from "@/components/BannerHall";
import { Seal } from "@/components/Seal";
import { Proclamation } from "@/components/Proclamation";
import { Ornament } from "@/components/Ornament";
import { Crest } from "@/components/Crest";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero__inner">
          <div className="hero__text">
            <div className="kicker">Independent game studio</div>
            <h1 className="hero__title">Here be games.</h1>
            <p className="hero__lede">
              We make <strong className="nowrap">Cursor Quest</strong>, an action RPG you play as your mouse cursor; <strong className="nowrap">Spark</strong>, a
              free arcade shoot &apos;em up; and <strong>Last Call for Alcohol</strong>, a drinking card game.
            </p>
            <div className="btns">
              <Link className="btn btn--primary" href="#games">See the games</Link>
              <Link className="btn" href="/presskit/">Press kits</Link>
            </div>
          </div>
          <div className="hero__crest-wrap"><Crest /></div>
        </div>
      </section>

      <Proclamation items={["Cursor Quest: wishlist now on Steam", "Spark: free on Steam", "Last Call for Alcohol: 3 to 12 players, 21+", "Press kits for every game"]} />

      <section id="games" className="section section--lg">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">The games</div>
            <h2>What we&apos;ve made</h2>
          </div>
          <BannerHall games={games} />
        </div>
      </section>

      <div className="wrap"><Ornament /></div>

      <section id="about" className="section section--lg">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">The studio</div>
            <h2>About us</h2>
          </div>
          <div className="split">
            <div className="charter">
              <div className="prose">
                <p className="illuminated">
                  Small and independent, Knightmare Games makes video games, tabletop games, and the odd game jam
                  experiment. We&apos;re drawn to ideas that sound a little strange at first, like playing an RPG as your
                  mouse cursor.
                </p>
                <p>Writing about one of our games? Every game has a press kit with facts, descriptions, and art to download.</p>
              </div>
              <div className="btns">
                <Link className="btn btn--primary" href="/presskit/">Press kits</Link>
                <a className="btn" href={DISCORD_URL} rel="noopener">Join the Discord</a>
              </div>
              <span className="charter__ribbon" aria-hidden="true" />
              <Seal ring={"KNIGHTMARE GAMES \u00b7 SEALED \u00b7\u00a0"} lines={["KG", ""]} />
            </div>
            <aside className="ledger">
              <div className="ledger__title"><span>At a glance</span></div>
              <dl>
                <div className="ledger__row"><dt>Studio</dt><dd>Knightmare Games, Limited</dd></div>
                <div className="ledger__row"><dt>Makes</dt><dd>Video games and tabletop games</dd></div>
                <div className="ledger__row"><dt>On sale</dt><dd>Spark (free, Steam), Last Call for Alcohol (tabletop)</dd></div>
                <div className="ledger__row"><dt>Coming</dt><dd>Cursor Quest, 2027</dd></div>
                <div className="ledger__row"><dt>Contact</dt><dd><a href={DISCORD_URL} rel="noopener">Discord</a></dd></div>
              </dl>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
