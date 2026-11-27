import type { Game } from "@/content/games";

// The game's picture, or a typeset plate when there is no art yet (Spark).
export function GameArt({ game, className = "" }: { game: Game; className?: string }) {
  if (!game.art) {
    return (
      <div className={`plate plate--type ${className}`}>
        <span className="plate__word">{game.name}</span>
      </div>
    );
  }
  return (
    <div className={`plate plate--${game.art.fit ?? "cover"} ${className}`} style={{ background: game.art.background }}>
      <img src={game.art.src} alt={game.art.alt} />
    </div>
  );
}
