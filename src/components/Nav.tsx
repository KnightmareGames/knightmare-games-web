"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/#games", label: "Games", match: "/games" },
  { href: "/presskit/", label: "Press", match: "/presskit" },
  { href: "/play/", label: "Play", match: "/play" },
];

export function Nav() {
  const path = usePathname();
  return (
    <nav className="nav" aria-label="Main">
      {LINKS.map((l) => {
        const current = path.startsWith(l.match);
        return (
          <span key={l.href} className="pennant">
            <Link href={l.href} aria-current={current ? "page" : undefined}><span>{l.label}</span></Link>
          </span>
        );
      })}
    </nav>
  );
}
