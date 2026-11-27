// The one page header: kicker, title, lede, extra lines and buttons, with art on the right when there is any.
export function PageHead({ kicker, title, lede, children, art, hero = false }: {
  kicker: React.ReactNode; title: React.ReactNode; lede?: React.ReactNode; children?: React.ReactNode; art?: React.ReactNode; hero?: boolean;
}) {
  return (
    <section className={`band pagehead${hero ? " pagehead--hero" : ""}`}>
      <div className={`wrap pagehead__inner${art ? " pagehead__inner--art" : ""}`}>
        <div className="pagehead__text">
          <div className="kicker">{kicker}</div>
          <h1 className={hero ? "hero__title" : "page-title"}>{title}</h1>
          {lede && <p className="lede pagehead__lede">{lede}</p>}
          {children}
        </div>
        {art && <div className="pagehead__art">{art}</div>}
      </div>
    </section>
  );
}

// A section: a full-width band with a heading and an optional one-line intro.
export function Band({ id, tone = "light", title, intro, children }: {
  id?: string; tone?: "light" | "deep" | "gules"; title: React.ReactNode; intro?: React.ReactNode; children?: React.ReactNode;
}) {
  return (
    <section id={id} className={`band band--${tone}`}>
      <div className="wrap">
        <div className="band__head">
          <h2>{title}</h2>
          {intro && <p>{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
