import { TINCTURES, type Arms as ArmsT } from "@/content/games";

const SHIELD = "M4 4 H96 V58 C96 88 74 106 50 116 C26 106 4 88 4 58 Z";

/** A game's coat of arms as an inline SVG shield. */
export function Arms({ arms, id, size = 64 }: { arms: ArmsT; id: string; size?: number }) {
  const [first, second] = arms.field;
  const charge = TINCTURES[arms.chargeTincture];
  const ink = TINCTURES.sable;
  const clip = `arms-clip-${id}`;
  return (
    <svg className="arms" width={size} height={size * 1.2} viewBox="-4 -4 108 128" role="img" aria-label={arms.blazon}>
      <defs>
        <clipPath id={clip}><path d={SHIELD} /></clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <rect width="100" height="120" fill={TINCTURES[first]} />
        {second && <polygon points="0,0 100,120 0,120" fill={TINCTURES[second]} />}
      </g>
      {arms.charge === "cursor" && (
        <path d="M0 0 V36 L9 27.5 L15.5 41.5 L22 38.5 L15.5 25 H27 Z" transform="translate(37 32) scale(1.05)"
          fill={charge} stroke={arms.chargeTincture === "sable" ? TINCTURES.argent : ink} strokeWidth="4" strokeLinejoin="round" />
      )}
      {arms.charge === "bezants" && (
        <g fill={charge}>
          <circle cx="50" cy="30" r="10" />
          <circle cx="28" cy="56" r="10" />
          <circle cx="72" cy="56" r="10" />
          <circle cx="50" cy="82" r="10" />
        </g>
      )}
      {arms.charge === "tankard" && (
        <g fill={charge}>
          <rect x="32" y="44" width="30" height="40" rx="3" />
          <path d="M62 52 h7 a7 7 0 0 1 7 7 v10 a7 7 0 0 1 -7 7 h-7" fill="none" stroke={charge} strokeWidth="6" />
          <circle cx="36" cy="42" r="7" /><circle cx="47" cy="39" r="8" /><circle cx="58" cy="42" r="7" />
          <rect x="38" y="52" width="4" height="24" fill={TINCTURES.azure} opacity=".55" />
        </g>
      )}
      <path d={SHIELD} fill="none" stroke={TINCTURES.argent} strokeWidth="11" strokeLinejoin="round" />
      <path d={SHIELD} fill="none" stroke={ink} strokeWidth="5" strokeLinejoin="round" />
    </svg>
  );
}
