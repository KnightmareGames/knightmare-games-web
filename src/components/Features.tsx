import type { Feature } from "@/content/games";

const NUMERALS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

// Four go two by two; anything else three across.
export function Features({ items }: { items: Feature[] }) {
  return (
    <ol className={`features${items.length === 4 ? " features--halves" : items.length === 5 ? " features--five" : ""}`}>
      {items.map((f, i) => (
        <li key={f.title} className="feature">
          <span className="feature__num" aria-hidden="true">{NUMERALS[i]}</span>
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </li>
      ))}
    </ol>
  );
}
