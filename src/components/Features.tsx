import type { Feature } from "@/content/games";

// Four go two by two; anything else three across.
export function Features({ items }: { items: Feature[] }) {
  return (
    <ul className={`features${items.length === 4 ? " features--halves" : ""}`}>
      {items.map((f) => (
        <li key={f.title} className="feature">
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </li>
      ))}
    </ul>
  );
}
