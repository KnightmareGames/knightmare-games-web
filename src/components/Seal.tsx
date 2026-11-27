// A wax seal stamped with the date the press kits were last updated.
export function Seal({ date }: { date: string }) {
  const [month, year] = date.split(" ");
  // An uneven blob of pressed wax: radii vary per lump so it reads as poured, not stamped out.
  const radii = [55, 52, 57, 53, 50, 56, 54, 51, 57, 52, 55, 50];
  const pts = radii.map((r, i) => {
    const a = (i / radii.length) * Math.PI * 2;
    return [60 + Math.cos(a) * r, 60 + Math.sin(a) * r];
  });
  const blob = pts
    .map(([x, y], i) => {
      const [nx, ny] = pts[(i + 1) % pts.length];
      const mx = (x + nx) / 2, my = (y + ny) / 2;
      return `${i === 0 ? `M${(pts[pts.length - 1][0] + x) / 2} ${(pts[pts.length - 1][1] + y) / 2}` : ""} Q${x} ${y} ${mx} ${my}`;
    })
    .join(" ");
  return (
    <svg className="seal" width="124" height="124" viewBox="-2 -2 124 124" role="img" aria-label={`Press kit updated ${date}`}>
      <defs>
        <path id="seal-ring" d="M60 60 m-41 0 a41 41 0 1 1 82 0 a41 41 0 1 1 -82 0" />
      </defs>
      <path d={blob} fill="#9e0f15" stroke="#15110e" strokeWidth="3" />
      <circle cx="60" cy="60" r="46" fill="#c8161d" />
      <circle cx="60" cy="60" r="31" fill="none" stroke="#fffaf0" strokeWidth="2" strokeDasharray="3 3" />
      <text className="seal__ring">
        <textPath href="#seal-ring" textLength="257" lengthAdjust="spacing">UPDATED &#183; PRESS KIT &#183;&#160;</textPath>
      </text>
      <text x="60" y="59" textAnchor="middle" className="seal__month">{month.slice(0, 3)}</text>
      <text x="60" y="77" textAnchor="middle" className="seal__year">{year}</text>
    </svg>
  );
}
