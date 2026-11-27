import type { Metadata } from "next";
import { games } from "@/content/games";
import { GameCard } from "@/components/GameCard";
import { Band } from "@/components/PageHead";

export const metadata: Metadata = { title: "Play", description: "Browser games from Knightmare Games." };

// HTML5 builds go in /public/play/<game>/index.html and are linked from here.
export default function Play() {
  return (
    <>
    <section className="band pagehead">
      <div className="wrap gate">
        <svg width="320" height="349" viewBox="0 0 220 240" aria-hidden="true">
          <path d="M10 236 V60 H30 V30 H60 V60 H90 V30 H130 V60 H160 V30 H190 V60 H210 V236 Z" fill="#e7d8b8" stroke="#15110e" strokeWidth="5" strokeLinejoin="round" />
          <path d="M50 236 V140 A60 60 0 0 1 170 140 V236 Z" fill="#15110e" />
          <g className="gate__grille"><g stroke="#e8ac1c" strokeWidth="6">
            <line x1="74" y1="96" x2="74" y2="214" /><line x1="98" y1="84" x2="98" y2="214" /><line x1="122" y1="84" x2="122" y2="214" /><line x1="146" y1="96" x2="146" y2="214" />
            <line x1="56" y1="130" x2="164" y2="130" /><line x1="52" y1="162" x2="168" y2="162" /><line x1="52" y1="194" x2="168" y2="194" />
          </g>
          <g fill="#e8ac1c">{[74, 98, 122, 146].map((x) => <path key={x} d={`M${x - 6} 214 L${x} 228 L${x + 6} 214 Z`} />)}</g></g>
        </svg>
        <div>
          <div className="kicker">In the browser</div>
          <h1 className="page-title">Play</h1>
          <p className="lede">The gate is down for now. When we ship a browser game, you&apos;ll be able to play it right here.</p>
        </div>
      </div>
    </section>
    <Band tone="deep" title="Until the gate opens">
        <div className="cards cards--pair">
          {games.filter((g) => g.slug !== "last-call-for-alcohol").map((g) => (
            <GameCard key={g.slug} game={g} href={`/games/${g.slug}/`} idPrefix="play" />
          ))}
        </div>
    </Band>
    </>
  );
}
