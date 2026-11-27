import type { Metadata } from "next";
import { DISCORD_URL, games, pressKitHref } from "@/content/games";
import { GameCard } from "@/components/GameCard";
import { Downloads } from "@/components/Downloads";

export const metadata: Metadata = {
  title: "Press kit",
  description: "Press kits for Knightmare Games and its games: facts, descriptions, logos, and art.",
};

export default function PressKitIndex() {
  return (
    <>
      <section className="section">
        <div className="wrap split">
          <div>
            <div className="kicker">Press kit</div>
            <h1 className="page-title">Knightmare Games</h1>
            <div className="prose">
              <p className="illuminated">
                Knightmare Games is an independent game studio making video games and tabletop games. Our games include
                Cursor Quest, an action RPG where you play as your mouse cursor; Spark, a free combo-driven shoot
                &apos;em up; and Last Call for Alcohol, a fast drinking card game.
              </p>
              <p>
                For press, review copies, or interviews, reach us on <a href={DISCORD_URL} rel="noopener">Discord</a>.
              </p>
            </div>
          </div>
          <aside className="ledger">
            <div className="ledger__title">The ledger</div>
            <dl>
              <div className="ledger__row"><dt>Studio</dt><dd>Knightmare Games, Limited</dd></div>
              <div className="ledger__row"><dt>Web</dt><dd>knightmare.games</dd></div>
            </dl>
          </aside>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head"><h2>Game press kits</h2></div>
          <div className="cards">
            {games.map((g) => (
              <GameCard key={g.slug} game={g} href={pressKitHref(g)} />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head"><h2>Studio crest</h2></div>
          <Downloads
            background="var(--parchment-2)"
            items={[
              { label: "Crest, transparent PNG (2048 px)", preview: "/assets/img/brand/knightmare-logo-512.webp", file: "/assets/press/knightmare-logo-2048.png" },
              { label: "Crest, transparent PNG (1024 px)", preview: "/assets/img/brand/knightmare-logo-512.webp", file: "/assets/img/brand/knightmare-logo-1024.png" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
