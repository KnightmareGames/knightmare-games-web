import type { Fact } from "@/content/games";
import { CopyButton } from "./CopyButton";
import { Seal } from "./Seal";

export function Ledger({ title = "Fact sheet", facts, copyText, seal }: { title?: string; facts: Fact[]; copyText?: string; seal?: string }) {
  return (
    <aside className="ledger">
      {seal && <Seal date={seal} />}
      <div className="ledger__title">
        <span>{title}</span>
        {copyText && <CopyButton text={copyText} label="Copy" />}
      </div>
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
