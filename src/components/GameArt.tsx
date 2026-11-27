import type { Game } from "@/content/games";
import { SparkPlate } from "./SparkPlate";

// The game's picture, or a drawn plate when there is no art yet.
export function GameArt({ game, className = "" }: { game: Game; className?: string }) {
  if (!game.art) {
    return (
      <div className={`plate ${className}`}>
        <SparkPlate />
      </div>
    );
  }
  return (
    <div className={`plate plate--${game.art.fit} ${className}`} style={{ background: game.art.background }}>
      <img src={game.art.src} alt={game.art.alt} />
    </div>
  );
}
