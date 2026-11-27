import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section section--top section--lg">
      <div className="wrap center">
        <div className="kicker">404</div>
        <h1 className="page-title">Here be dragons.</h1>
        <p>The page you were looking for doesn&apos;t exist.</p>
        <div className="btns btns--center"><Link className="btn btn--primary" href="/">Back to the home page</Link></div>
      </div>
    </section>
  );
}
