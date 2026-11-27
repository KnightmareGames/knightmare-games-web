import Link from "next/link";
import { DISCORD_URL } from "@/content/games";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <div>
          <div className="site-footer__mark">Knightmare Games</div>
          <div className="small">&copy; {new Date().getFullYear()} Knightmare Games, Limited</div>
        </div>
        <nav className="site-footer__nav" aria-label="Footer">
          <Link href="/#games">Games</Link>
          <Link href="/presskit/">Press kits</Link>
          <Link href="/play/">Play</Link>
          <a href={DISCORD_URL} rel="noopener">Discord</a>
        </nav>
      </div>
    </footer>
  );
}
