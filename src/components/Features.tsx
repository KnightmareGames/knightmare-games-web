import type { Arms as ArmsT, Feature } from "@/content/games";

const NUMERALS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

// Three across; four go two by two; five or other leftovers give the first a double-width "lead" card bearing the arms.
export function Features({ items, arms }: { items: Feature[]; arms?: ArmsT }) {
  const layout = items.length % 3 === 0 ? "thirds" : items.length === 4 ? "halves" : "lead";
  return (
    <ol className={`features features--${layout}`}>
      {items.map((f, i) => (
        <li key={f.title} className="feature">
          <span className="feature__num" aria-hidden="true">{NUMERALS[i]}</span>
          <h3>{f.title}</h3>
          <p>{f.text}</p>
          {i === 0 && layout === "lead" && arms?.charge === "cursor" && (
            <svg className="feature__charge" width="96" height="140" viewBox="-4 -4 36 50" aria-hidden="true">
              <path d="M0 0 V36 L9 27.5 L15.5 41.5 L22 38.5 L15.5 25 H27 Z" fill="var(--or)" stroke="var(--sable)" strokeWidth="2.5" strokeLinejoin="round" />
            </svg>
          )}
        </li>
      ))}
    </ol>
  );
}
