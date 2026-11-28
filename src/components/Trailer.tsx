import type { Trailer as TrailerData } from "@/content/games";

// `detail` adds the file facts and a download button, for press kits.
export function Trailer({ trailer, detail }: { trailer: TrailerData; detail?: string }) {
  return (
    <figure className="trailer">
      <video className="trailer__video" controls preload="none" playsInline poster={trailer.poster} aria-label={trailer.title}>
        <source src={trailer.file} type="video/mp4" />
      </video>
      {detail && (
        <figcaption className="trailer__meta">
          <div>
            <div className="download__label">{trailer.title}</div>
            <div className="download__detail">{detail}</div>
          </div>
          <a className="btn btn--small" href={trailer.file} download>Download</a>
        </figcaption>
      )}
    </figure>
  );
}
