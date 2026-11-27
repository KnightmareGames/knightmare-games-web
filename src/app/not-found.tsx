import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap center">
        <div className="kicker">Error 404</div>
        <h1 className="page-title">Thou art lost</h1>
        <p>This page does not exist, or has been banished.</p>
        <div className="btns btns--center"><Link className="btn btn--blood" href="/">Return to the keep</Link></div>
      </div>
    </section>
  );
}
