import type { Fact } from "@/content/games";
import { CopyButton } from "./CopyButton";
import { Seal } from "./Seal";

// `wide` lays the facts out as a row of cells, for a band of its own.
export function Ledger({ title = "Fact sheet", facts, copyText, seal, wide = false }: { title?: string; facts: Fact[]; copyText?: string; seal?: string; wide?: boolean }) {
  return (
    <aside className={`ledger${wide ? " ledger--wide" : ""}`}>
      {seal && <Seal date={seal} />}
      {!wide && (
        <div className="ledger__title">
          <span>{title}</span>
          {copyText && <CopyButton text={copyText} label="Copy" />}
        </div>
      )}
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
