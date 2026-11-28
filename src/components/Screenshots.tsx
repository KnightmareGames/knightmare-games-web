import type { Screenshot } from "@/content/games";

// Each thumbnail opens the full-size file. `details` are per-shot file facts, for press kits.
export function Screenshots({ game, items, details }: { game: string; items: Screenshot[]; details?: string[] }) {
  return (
    <div className="shots">
      {items.map((s, i) => (
        <figure key={s.file} className="shot">
          <a href={s.file} target="_blank" rel="noopener">
            <img src={s.preview} alt={s.caption ?? `${game} screenshot ${i + 1}`} loading="lazy" />
          </a>
          {(s.caption || details) && (
            <figcaption>
              {s.caption && <span className="shot__caption">{s.caption}</span>}
              {details && <span className="download__detail">{details[i]}</span>}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
