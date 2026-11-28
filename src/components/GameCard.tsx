import Link from "next/link";
import type { CSSProperties } from "react";
import type { Game } from "@/content/games";
import { Arms } from "./Arms";
import { GameArt } from "./GameArt";
import { Status } from "./Status";

export function GameCard({ game, href, idPrefix = "card" }: { game: Game; href: string; idPrefix?: string }) {
  return (
    <Link href={href} className="card" style={{ "--accent": game.accent } as CSSProperties}>
      <GameArt game={game} className="card__art" />
      <div className="card__body">
        <div className="card__head">
          <Arms arms={game.arms} id={`${idPrefix}-${game.slug}`} size={36} />
          <h3 className="card__title">{game.name}</h3>
        </div>
        <p>{game.tagline}</p>
        <div className="card__meta">
          <Status>{game.status}</Status>
          {game.tags[0] && <span className="tag">{game.tags[0]}</span>}
        </div>
      </div>
    </Link>
  );
}
