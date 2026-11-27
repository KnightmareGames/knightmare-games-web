import { getGame } from "@/content/games";
import { Arms } from "./Arms";

// Spark has no art on hand: its arms, large, beside a blackletter wordmark, with two sparks as small charges.
const SPARKS = ["#e8ac1c", "#fffaf0"];

export function SparkPlate() {
  const arms = getGame("spark")!.arms;
  return (
    <div className="spark-plate">
      {SPARKS.map((sp, i) => (
        <svg key={i} className={`spark-plate__ring spark-plate__ring--${i}`} viewBox="-12 -12 24 24" aria-hidden="true">
          <path d="M0 -11 L2.6 -2.6 L11 0 L2.6 2.6 L0 11 L-2.6 2.6 L-11 0 L-2.6 -2.6 Z" fill={sp} />
        </svg>
      ))}
      <div className="spark-plate__lockup">
        <Arms arms={arms} id="spark-plate" size={120} />
        <span className="spark-plate__word">Spark</span>
      </div>
    </div>
  );
}
