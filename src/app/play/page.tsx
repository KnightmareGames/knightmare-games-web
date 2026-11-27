import type { Metadata } from "next";

export const metadata: Metadata = { title: "Play", description: "Browser games from Knightmare Games." };

// HTML5 builds go in /public/play/<game>/index.html and are linked from here.
export default function Play() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">Folio III</div>
        <h1 className="page-title">The Arcade</h1>
        <p className="notice">Browser games will be playable here soon.</p>
      </div>
    </section>
  );
}
