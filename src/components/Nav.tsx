"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/#games", label: "Games", match: "/games" },
  { href: "/presskit/", label: "Press", match: "/presskit" },
  { href: "/#about", label: "About", match: null, className: "pennant--about" },
];

export function Nav() {
  const path = usePathname();
  return (
    <nav className="nav" aria-label="Main">
      {LINKS.map((l) => {
        const current = l.match !== null && path.startsWith(l.match);
        return (
          <span key={l.href} className={`pennant ${l.className ?? ""}`}>
            <Link href={l.href} aria-current={current ? "page" : undefined}><span>{l.label}</span></Link>
          </span>
        );
      })}
      <span className="pennant pennant--cta">
        <Link href="/#contact"><span>Contact</span></Link>
      </span>
    </nav>
  );
}
