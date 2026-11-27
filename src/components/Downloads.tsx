import type { Download } from "@/content/games";

export function Downloads({ items, background }: { items: Download[]; background?: string }) {
  return (
    <div className="downloads">
      {items.map((d) => (
        <figure key={d.label} className="download">
          <div className="download__img" style={{ background }}>
            <img src={d.preview} alt="" loading="lazy" />
          </div>
          <figcaption>
            <div>
              <div className="download__label">{d.label}</div>
              <div className="download__detail">{d.detail}</div>
            </div>
            <a className="btn btn--small" href={d.file} download>Download</a>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
