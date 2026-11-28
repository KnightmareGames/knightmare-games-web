import Link from "next/link";

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
          <Link href="/presskit/">Press</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
