import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <Link href="/" className="brand">
          <span className="brand__badge">
            <img src="/assets/img/brand/knightmare-logo-256.webp" alt="" width={44} height={40} />
          </span>
          <span className="brand__name">Knightmare Games</span>
        </Link>
        <nav className="nav" aria-label="Main">
          <Link href="/#games">Games</Link>
          <Link href="/presskit/">Press</Link>
          <Link href="/#about">About</Link>
        </nav>
      </div>
    </header>
  );
}
