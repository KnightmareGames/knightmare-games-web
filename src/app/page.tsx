import Link from "next/link";
import { DISCORD_URL, games } from "@/content/games";
import { GameCard } from "@/components/GameCard";
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
          <div className="cards">
            {games.map((g) => (
              <GameCard key={g.slug} game={g} href={`/games/${g.slug}/`} />
            ))}
          </div>
        </div>
      </section>

      <div className="wrap"><Ornament /></div>

      <section id="about" className="section">
        <div className="wrap split">
          <div>
            <div className="section-head">
              <div className="kicker">The studio</div>
              <h2>About us</h2>
            </div>
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
          </div>
          <aside className="ledger">
            <div className="ledger__title"><span>The studio</span></div>
            <dl>
              <div className="ledger__row"><dt>Name</dt><dd>Knightmare Games, Limited</dd></div>
              <div className="ledger__row"><dt>Games</dt><dd>{games.map((g) => g.name).join(", ")}</dd></div>
              <div className="ledger__row"><dt>Platforms</dt><dd>PC, Mac, Linux, tabletop</dd></div>
              <div className="ledger__row"><dt>Web</dt><dd>knightmare.games</dd></div>
            </dl>
          </aside>
        </div>
      </section>
    </>
  );
}
