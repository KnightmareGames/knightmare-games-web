import Link from "next/link";
import type { CSSProperties } from "react";
import type { Game } from "@/content/games";
import { Arms } from "./Arms";
import { GameArt } from "./GameArt";
import { Status } from "./Status";

// A game as a card. `row` is the compact form: art beside the name, for phones.
export function GameCard({ game, href, idPrefix = "card", row = false }: { game: Game; href: string; idPrefix?: string; row?: boolean }) {
  return (
    <Link href={href} className={`card${row ? " card--row" : ""}`} style={{ "--accent": game.accent } as CSSProperties}>
      {!row && <div className="card__arms"><Arms arms={game.arms} id={`${idPrefix}-${game.slug}`} size={58} /></div>}
      <GameArt game={game} className="card__art" />
      <div className="card__body">
        <h3 className="card__title">{game.name}</h3>
        {!row && <p>{game.tagline}</p>}
        <div className="card__meta">
          <Status>{game.status}</Status>
          {!row && game.tags[0] && <span className="tag">{game.tags[0]}</span>}
        </div>
      </div>
    </Link>
  );
}
