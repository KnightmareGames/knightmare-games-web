import Link from "next/link";
import { SOCIALS } from "@/content/games";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <div>
          <div className="site-footer__mark">Knightmare Games</div>
          <div className="small">&copy; {new Date().getFullYear()} Knightmare Games, Limited</div>
        </div>
        <div className="site-footer__navs">
          <nav className="site-footer__nav" aria-label="Footer">
            <Link href="/#games">Games</Link>
            <Link href="/presskit/">Press</Link>
            <Link href="/#about">About</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
          <nav className="site-footer__nav" aria-label="Social">
            {SOCIALS.map((s) => <a key={s.label} href={s.href} rel="noopener">{s.label} ↗</a>)}
          </nav>
        </div>
      </div>
    </footer>
  );
}
