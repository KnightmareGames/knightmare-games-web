import Link from "next/link";
import type { CSSProperties } from "react";
import type { Game } from "@/content/games";
import { Arms } from "./Arms";
import { GameArt } from "./GameArt";

export function GameCard({ game, href, idPrefix = "card" }: { game: Game; href: string; idPrefix?: string }) {
  return (
    <Link href={href} className="card" style={{ "--accent": game.accent } as CSSProperties}>
      <div className="card__arms"><Arms arms={game.arms} id={`${idPrefix}-${game.slug}`} size={58} /></div>
      <GameArt game={game} className="card__art" />
      <div className="card__body">
        <h3 className="card__title">{game.name}</h3>
        <p>{game.tagline}</p>
        <div className="tags">
          <span className="tag tag--status">{game.status}</span>
          {game.tags.slice(0, 1).map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
