import Link from "next/link";
import type { CSSProperties } from "react";
import { TINCTURES, type Game } from "@/content/games";
import { Arms } from "./Arms";
import { GameArt } from "./GameArt";

// The home page's games, hung as heraldic banners from one rod. Each cloth is the game's tincture.
export function BannerHall({ games }: { games: Game[] }) {
  return (
    <div className="hall">
      <div className="hall__rod" aria-hidden="true" />
      <div className="hall__banners">
        {games.map((g) => {
          const style = {
            "--cloth": g.accent,
            "--on-cloth": g.accent === TINCTURES.or ? TINCTURES.sable : TINCTURES.argent,
          } as CSSProperties;
          return (
            <Link key={g.slug} href={`/games/${g.slug}/`} className="flag" style={style}>
              <span className="flag__loops" aria-hidden="true"><span /><span /><span /></span>
              <span className="flag__edge">
                <span className="flag__cloth">
                  <GameArt game={g} className="flag__art" />
                  <span className="flag__arms"><Arms arms={g.arms} id={`flag-${g.slug}`} size={84} /></span>
                  <span className="flag__name">{g.name}</span>
                  <span className="flag__tagline">{g.tagline}</span>
                  <span className="flag__status">{g.status}</span>
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
