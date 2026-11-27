// A scrolling ribbon of news under the hero. Doubled so the loop is seamless.
export function Proclamation({ items }: { items: string[] }) {
  const run = items.map((t, i) => (
    <span key={i} className="proclamation__item">
      {t}
      <svg className="proclamation__sep" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
        <rect x="3" y="3" width="8" height="8" transform="rotate(45 7 7)" fill="currentColor" />
      </svg>
    </span>
  ));
  return (
    <div className="proclamation">
      <p className="sr-only">{items.join(". ")}.</p>
      <div className="proclamation__track" aria-hidden="true">
        {run}
        {run}
      </div>
    </div>
  );
}
