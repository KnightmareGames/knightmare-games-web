import Link from "next/link";
import type { Game } from "@/content/games";
import { GameArt } from "./GameArt";

export function GameCard({ game, href }: { game: Game; href: string }) {
  return (
    <Link href={href} className="card">
      <div className="card__numeral">No. {game.numeral}</div>
      <GameArt game={game} className="card__art" />
      <div className="card__body">
        <h3 className="card__title">{game.name}</h3>
        <p>{game.tagline}</p>
        <div className="tags">
          <span className="tag tag--status">{game.status}</span>
          {game.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
