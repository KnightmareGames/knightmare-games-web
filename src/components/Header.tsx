import Link from "next/link";
import { Nav } from "./Nav";

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <Link href="/" className="brand">
          <img src="/assets/img/brand/knightmare-logo-256.webp" alt="" aria-hidden="true" width={52} height={47} />
          <span className="brand__name">Knightmare Games</span>
        </Link>
        <Nav />
      </div>
    </header>
  );
}
