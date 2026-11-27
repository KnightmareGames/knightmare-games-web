import type { Download } from "@/content/games";

export function Downloads({ items, background }: { items: Download[]; background?: string }) {
  return (
    <div className="downloads">
      {items.map((d) => (
        <figure key={d.label} className="download">
          <div className="download__img" style={{ background }}>
            <img src={d.preview} alt={d.label} loading="lazy" />
          </div>
          <figcaption>
            <span>{d.label}</span>
            <a href={d.file} download>Download</a>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
