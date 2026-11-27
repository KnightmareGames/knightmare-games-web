import Link from "next/link";
import { DISCORD_URL, games } from "@/content/games";
import { GameCard } from "@/components/GameCard";
import { Marquee } from "@/components/Marquee";
import { Ornament } from "@/components/Ornament";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero__inner">
          <div className="hero__text">
            <div className="kicker">Independent game works &middot; Video &amp; tabletop</div>
            <h1 className="hero__title">
              Knightmare <span>Games</span>
            </h1>
            <p className="hero__lede">
              Strange little games, forged with care. We make action RPGs you play as your mouse cursor, arcade
              shooters, and card games for the last round of the night.
            </p>
            <div className="btns">
              <Link className="btn btn--blood" href="#games">See the games</Link>
              <Link className="btn" href="/presskit/">Press kits</Link>
            </div>
          </div>
          <div className="hero__crest">
            <div className="crest">
              <img src="/assets/img/brand/knightmare-logo-512.webp" alt="Knightmare Games crest" width={512} height={466} />
            </div>
            <div className="seal" aria-hidden="true"><span>KG</span></div>
          </div>
        </div>
      </section>

      <Marquee items={["Hear ye, hear ye", "Cursor Quest: coming 2027", "Spark: free on Steam", "Last Call for Alcohol: 3 to 12 players"]} />

      <section id="games" className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">Folio I</div>
            <h2>The Works</h2>
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
              <div className="kicker">Folio II</div>
              <h2>Of the Studio</h2>
            </div>
            <div className="prose">
              <p className="illuminated">
                Knightmare Games is an independent game studio. We make video games, tabletop games, and the occasional
                game jam experiment, and we like ideas that sound a little strange at first, like playing an RPG as your
                mouse cursor.
              </p>
              <p>Press and creators: every game has a press kit with facts, descriptions, and downloadable art.</p>
            </div>
            <div className="btns">
              <Link className="btn btn--gold" href="/presskit/">Press kits</Link>
              <a className="btn" href={DISCORD_URL} rel="noopener">Join the Discord</a>
            </div>
          </div>
          <aside className="ledger">
            <div className="ledger__title">The ledger</div>
            <dl>
              <div className="ledger__row"><dt>Studio</dt><dd>Knightmare Games, Limited</dd></div>
              <div className="ledger__row"><dt>Works</dt><dd>{games.map((g) => g.name).join(", ")}</dd></div>
              <div className="ledger__row"><dt>Realms</dt><dd>PC, Mac, Linux, tabletop</dd></div>
              <div className="ledger__row"><dt>Web</dt><dd>knightmare.games</dd></div>
            </dl>
          </aside>
        </div>
      </section>
    </>
  );
}
