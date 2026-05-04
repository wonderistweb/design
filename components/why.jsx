/* ---------- Why Forever Smiles is different ---------- */
function Why() {
  const cards = [
    {
      n: "I",
      title: <>Surgeon-led, not<br />sales-led</>,
      body: "ClearChoice and Nuvia send patients to salespeople. Here, you sit with the doctor performing your surgery — for up to an hour — at every consultation.",
      tag: "Surgical specialty",
      img: "assets/dr-young.jpg"
    },
    {
      n: "II",
      title: "MD anesthesiologist on staff",
      body: "Most centers use a CRNA or nurse for IV sedation. We have a full MD anesthesiologist — Dr. Awoniyi — monitoring every procedure.",
      tag: "Safety",
      img: "assets/step-surgery.jpg"
    },
    {
      n: "III",
      title: "Solutions when others say no",
      body: "Severe bone loss? Told you aren't a candidate? Zygomatic, pterygoid, and transnasal implants let us restore patients without grafts or 12-month waits.",
      tag: "Advanced techniques",
      img: "assets/step-consultation.jpg"
    },
    {
      n: "IV",
      title: "All under one roof",
      body: "Surgery, restoration, anesthesia, and lab — coordinated as a single surgical team in a single building. No referrals across town. No handoffs.",
      tag: "Single facility",
      img: "assets/step-lab.jpg"
    },
  ];

  return (
    <section className="why dark sec">
      <style>{`
        .why {
          background: var(--ink);
          color: var(--porcelain);
          position: relative;
          overflow: hidden;
        }
        .why::before {
          content: ""; position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 80% 0%, color-mix(in oklch, var(--accent) 18%, transparent) 0%, transparent 50%);
          pointer-events: none;
        }
        .why-head {
          margin-bottom: 80px;

        }
        .why-h {
          font-family: var(--display);
          font-weight: 300;
          font-size: clamp(40px, 6vw, 96px);
          line-height: 0.95;
          letter-spacing: -0.03em;
          margin-top: 24px;

        }
        .why-h em { font-style: italic; color: var(--accent-soft); }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0;
          border-top: 1px solid color-mix(in oklch, var(--porcelain) 18%, transparent);
        }
        .why-card {
          padding: 48px 0;
          padding-right: 32px;
          border-bottom: 1px solid color-mix(in oklch, var(--porcelain) 18%, transparent);
          position: relative;
          transition: background var(--t-base) var(--ease-out);
          display: flex;
          gap: 24px;
          align-items: stretch;
        }
        .why-card:nth-child(odd) { padding-right: 32px; border-right: 1px solid color-mix(in oklch, var(--porcelain) 18%, transparent); }
        .why-card:nth-child(even) { padding-left: 32px; }
        .why-card-img {
          width: 220px;
          flex-shrink: 0;
          border-radius: 3px;
          overflow: hidden;
          align-self: stretch;
        }
        .why-card-img img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }
        .why-card-content { flex: 1; min-width: 0; }
        .why-card .roman {
          font-family: var(--display);
          font-size: 14px;
          font-style: italic;
          font-weight: 400;
          color: var(--accent-soft);
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 28px;
        }
        .why-card .tag {
          font-family: var(--mono);
          font-size: 10.5px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: color-mix(in oklch, var(--porcelain) 55%, transparent);
          margin-bottom: 18px;
          display: block;
        }
        .why-card .title {
          font-family: var(--display);
          font-weight: 400;
          font-size: clamp(24px, 2.4vw, 36px);
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
          max-width: 18ch;
        }
        .why-card .body {
          font-size: 16px;
          line-height: 1.55;
          color: color-mix(in oklch, var(--porcelain) 75%, transparent);
          max-width: 38ch;
        }
        @media (max-width: 880px) {
          .why-grid { grid-template-columns: 1fr; }
          .why-card:nth-child(odd) { border-right: none; padding-right: 0; }
          .why-card:nth-child(even) { padding-left: 0; }
          .why-card { flex-direction: column; }
          .why-card-img { width: 100%; height: 220px; }
        }
      `}</style>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="why-head">
          <Reveal>
            <div className="eyebrow" style={{ color: "color-mix(in oklch, var(--porcelain) 60%, transparent)" }}>
              <span className="dot" />Different by design
            </div>
          </Reveal>
          <SplitText className="why-h" delayBase={45}>
            We are not a general dental office that does implants.{" "}
          </SplitText>
          <SplitText className="why-h" delayBase={45} startDelay={450} style={{ fontStyle: "italic", color: "var(--accent-soft)" }}>
            Implants are all we do.
          </SplitText>
        </div>

        <div className="why-grid">
          {cards.map((c, i) => (
            <Reveal key={i} delay={i * 80} className="why-card">
              <div className="why-card-img">
                <img src={c.img} alt={c.title} />
              </div>
              <div className="why-card-content">
                <span className="roman">{c.n}</span>
                <span className="tag">{c.tag}</span>
                <div className="title">{c.title}</div>
                <p className="body">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Why = Why;
