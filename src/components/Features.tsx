import type { Feature } from "@/content/games";

const NUMERALS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

export function Features({ items }: { items: Feature[] }) {
  return (
    <div className="features">
      {items.map((f, i) => (
        <div key={f.title} className="feature">
          <span className="feature__num">{NUMERALS[i]}</span>
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </div>
      ))}
    </div>
  );
}
