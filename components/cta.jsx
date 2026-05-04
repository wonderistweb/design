/* ---------- Final CTA ---------- */
function CTA() {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [stage, setStage] = React.useState("");

  return (
    <section id="consult" className="cta dark sec">
      <style>{`
        .cta {
          background: var(--ink);
          color: var(--porcelain);
          position: relative;
          overflow: hidden;
        }
        .cta::before {
          content: ""; position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 0% 100%, color-mix(in oklch, var(--accent) 20%, transparent) 0%, transparent 50%),
            radial-gradient(ellipse at 100% 0%, color-mix(in oklch, var(--navy-2) 60%, transparent) 0%, transparent 60%);
        }
        .cta-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: clamp(40px, 5vw, 80px);
          align-items: center;
          position: relative;
          z-index: 1;
        }
        .cta-h {
          font-family: var(--display);
          font-weight: 300;
          font-size: clamp(48px, 7vw, 120px);
          line-height: 0.94;
          letter-spacing: -0.035em;
          margin-bottom: 32px;

        }
        .cta-h em { font-style: italic; color: var(--accent-soft); }
        .cta-meta {
          display: flex; gap: 32px; flex-wrap: wrap;
          margin-top: 32px;
          padding-top: 32px;
          border-top: 1px solid color-mix(in oklch, var(--porcelain) 18%, transparent);
        }
        .cta-meta-item {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: color-mix(in oklch, var(--porcelain) 65%, transparent);
        }
        .cta-meta-item strong {
          display: block;
          font-family: var(--display);
          font-size: 20px;
          letter-spacing: -0.01em;
          text-transform: none;
          font-weight: 400;
          color: var(--porcelain);
          margin-top: 6px;
        }
        .form-card {
          background: var(--porcelain);
          color: var(--ink);
          padding: 36px;
          border-radius: 4px;
        }
        .form-eyebrow {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--grey);
          margin-bottom: 8px;
        }
        .form-h {
          font-family: var(--display);
          font-size: 28px;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
          line-height: 1.1;
        }
        .field { margin-bottom: 14px; }
        .field label {
          display: block;
          font-family: var(--mono);
          font-size: 10.5px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--grey);
          margin-bottom: 6px;
        }
        .field input, .field select {
          width: 100%;
          padding: 14px 16px;
          background: var(--bone);
          border: 1px solid var(--line);
          border-radius: 4px;
          font-size: 15px;
          letter-spacing: -0.005em;
          transition: border-color var(--t-fast), background var(--t-fast);
        }
        .field input:focus, .field select:focus {
          outline: none;
          border-color: var(--accent);
          background: var(--porcelain);
        }
        .form-cta {
          width: 100%;
          padding: 18px;
          background: var(--ink);
          color: var(--porcelain);
          border-radius: 999px;
          font-size: 14px;
          letter-spacing: -0.005em;
          font-weight: 500;
          margin-top: 8px;
          display: inline-flex; align-items: center; justify-content: center; gap: 12px;
          transition: background var(--t-fast), transform var(--t-fast);
        }
        .form-cta:hover { background: var(--accent); color: var(--ink); transform: translateY(-1px); }
        .form-foot {
          font-family: var(--mono);
          font-size: 10.5px;
          letter-spacing: 0.06em;
          color: var(--grey);
          margin-top: 14px;
          text-align: center;
        }
        @media (max-width: 880px) { .cta-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="container">
        <div className="cta-grid">
          <div>
            <Reveal>
              <div className="eyebrow" style={{ color: "color-mix(in oklch, var(--porcelain) 60%, transparent)" }}>
                <span className="dot" />Take the first step
              </div>
            </Reveal>
            <SplitText className="cta-h" delayBase={50}>
              The next ten years<em> start with one consult.</em>
            </SplitText>
            <Reveal delay={300}>
              <p className="lede" style={{ maxWidth: "44ch", color: "color-mix(in oklch, var(--porcelain) 80%, transparent)" }}>
                Your consultation is free, takes about an hour, and includes a 3D scan
                and a preview of your new smile. No pressure. No salespeople. Just the doctor.
              </p>
            </Reveal>
            <Reveal delay={500}>
              <div className="cta-meta">
                <div className="cta-meta-item">
                  Location
                  <strong>Jacksonville, FL</strong>
                </div>
                <div className="cta-meta-item">
                  Phone
                  <strong>(904) 414-2320</strong>
                </div>
                <div className="cta-meta-item">
                  Hours
                  <strong>Mon–Fri · 9–5</strong>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} kind="scale">
            <form className="form-card" onSubmit={(e) => { e.preventDefault(); alert("Thanks! Our team will reach out within 1 business day."); }}>
              <div className="form-eyebrow">Free Consultation Request</div>
              <div className="form-h">Tell us a little about you.</div>

              <div className="field">
                <label htmlFor="name">Your name</label>
                <input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="First & last" required />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(___) ___-____" required />
              </div>
              <div className="field">
                <label htmlFor="stage">What best describes you?</label>
                <select id="stage" value={stage} onChange={(e) => setStage(e.target.value)} required>
                  <option value="">Choose one…</option>
                  <option>I'm losing or have lost most of my teeth</option>
                  <option>I currently wear dentures</option>
                  <option>I have failing dental work</option>
                  <option>I was told I'm not a candidate elsewhere</option>
                  <option>Just exploring options</option>
                </select>
              </div>
              <button type="submit" className="form-cta" data-cursor="hover">
                Request your consultation
                <ArrowRight />
              </button>
              <div className="form-foot" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ flexShrink: 0, opacity: 0.6 }}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                A coordinator will contact you within one business day.
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
window.CTA = CTA;
