// The studio crest: a shield per pale Gules and Or, inked, with the mascot on a parchment plate.
const OUTER = "M8 8 H392 V282 C392 386 300 444 200 472 C100 444 8 386 8 282 Z";
const INNER = "M36 36 H364 V272 C364 362 284 412 200 436 C116 412 36 362 36 272 Z";

export function Crest() {
  return (
    <svg className="crest" viewBox="0 0 400 480" aria-hidden="true">
      <defs>
        <clipPath id="crest-clip"><path d={OUTER} /></clipPath>
      </defs>
      <g clipPath="url(#crest-clip)">
        <rect width="400" height="480" fill="var(--or)" />
        <rect width="200" height="480" fill="var(--gules)" />
      </g>
      <path d={OUTER} fill="none" stroke="var(--sable)" strokeWidth="7" strokeLinejoin="round" />
      <path d={INNER} fill="var(--parchment)" stroke="var(--sable)" strokeWidth="5" strokeLinejoin="round" />
      <image href="/assets/img/brand/knightmare-logo-512.webp" x="64" y="62" width="272" height="248" />
    </svg>
  );
}
