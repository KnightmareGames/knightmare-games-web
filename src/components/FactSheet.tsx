import type { Fact } from "@/content/games";

export function FactSheet({ title = "The ledger", facts }: { title?: string; facts: Fact[] }) {
  return (
    <aside className="ledger">
      <div className="ledger__title">{title}</div>
      <dl>
        {facts.map((f) => (
          <div key={f.label} className="ledger__row">
            <dt>{f.label}</dt>
            <dd>{f.href ? <a href={f.href} rel="noopener">{f.value}</a> : f.value}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
