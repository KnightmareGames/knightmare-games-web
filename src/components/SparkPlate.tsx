import { getGame } from "@/content/games";
import { Arms } from "./Arms";

// Spark has no art on hand: its arms, large, beside a blackletter wordmark, with bullet rings as small charges.
const RINGS = [
  { r: 20, n: 10, dot: 4, color: "#e8ac1c" },
  { r: 22, n: 14, dot: 3, color: "#fffaf0" },
];

export function SparkPlate() {
  const arms = getGame("spark")!.arms;
  return (
    <div className="spark-plate">
      {RINGS.map((ring, i) => (
        <svg key={i} className={`spark-plate__ring spark-plate__ring--${i}`} viewBox="-30 -30 60 60" aria-hidden="true">
          <g fill={ring.color}>
            {Array.from({ length: ring.n }, (_, k) => {
              const a = (k / ring.n) * Math.PI * 2;
              return <circle key={k} cx={Math.cos(a) * ring.r} cy={Math.sin(a) * ring.r} r={ring.dot} />;
            })}
          </g>
        </svg>
      ))}
      <div className="spark-plate__lockup">
        <Arms arms={arms} id="spark-plate" size={120} />
        <span className="spark-plate__word">Spark</span>
      </div>
    </div>
  );
}
