import type { Game } from "@/content/games";

export function GameArt({ game, className = "" }: { game: Game; className?: string }) {
  return (
    <div className={`plate plate--${game.art.fit} ${className}`} style={{ background: game.art.background }}>
      <img src={game.art.src} alt={game.art.alt} />
    </div>
  );
}
