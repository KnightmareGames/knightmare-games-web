import Link from "next/link";
import { DISCORD_URL } from "@/content/games";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <div>
          <div className="site-footer__mark">Knightmare Games</div>
          <div className="mono">&copy; {new Date().getFullYear()} Knightmare Games, Limited</div>
        </div>
        <nav className="site-footer__nav mono" aria-label="Footer">
          <a href={DISCORD_URL} rel="noopener">Discord</a>
          <Link href="/presskit/">Press kit</Link>
          <Link href="/play/">Play</Link>
        </nav>
      </div>
    </footer>
  );
}
