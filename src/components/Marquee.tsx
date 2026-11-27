// A proclamation ribbon that scrolls forever. The text is doubled so the loop is seamless.
export function Marquee({ items }: { items: string[] }) {
  const run = items.map((t, i) => (
    <span key={i} className="marquee__item">
      {t}
      <span className="marquee__sep" aria-hidden="true">&#10022;</span>
    </span>
  ));
  return (
    <div className="marquee" aria-label={items.join(". ")}>
      <div className="marquee__track" aria-hidden="true">
        {run}
        {run}
      </div>
    </div>
  );
}
