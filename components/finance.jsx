/* ---------- Investment / Financing ---------- */
function Finance() {
  return (
    <section id="finance" className="finance sec">
      <style>{`
        .finance { background: var(--porcelain); }
        .finance-grid {
          display: grid;
          grid-template-columns: 5fr 6fr;
          gap: clamp(40px, 5vw, 80px);
          align-items: start;
        }
        .finance-left-head {
          margin-bottom: 8px;
        }
        .finance-h {
          font-family: var(--display);
          font-weight: 300;
          font-size: clamp(36px, 5vw, 72px);
          line-height: 1.0;
          letter-spacing: -0.03em;
          margin-bottom: 28px;

        }
        .finance-h em { font-style: italic; color: var(--accent); }
        .price-card {
          background: var(--ink);
          color: var(--porcelain);
          padding: 40px;
          border-radius: 4px;
          position: relative;
          overflow: hidden;
        }
        .price-card::before {
          content: ""; position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 100% 0%, color-mix(in oklch, var(--accent) 35%, transparent) 0%, transparent 60%);
          pointer-events: none;
        }
        .price-card > * { position: relative; z-index: 1; }
        .price-row {
          display: flex; justify-content: space-between; align-items: baseline;
          padding: 20px 0;
          border-bottom: 1px solid color-mix(in oklch, var(--porcelain) 16%, transparent);
        }
        .price-row:last-of-type { border-bottom: none; }
        .price-label {
          font-family: var(--display);
          font-size: 18px;
          letter-spacing: -0.01em;
        }
        .price-sub {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: color-mix(in oklch, var(--porcelain) 60%, transparent);
          margin-top: 4px;
        }
        .price-val {
          font-family: var(--display);
          font-weight: 300;
          font-size: clamp(28px, 3vw, 44px);
          letter-spacing: -0.025em;
        }
        .price-val .dollar {
          font-size: 0.6em;
          color: color-mix(in oklch, var(--porcelain) 60%, transparent);
          margin-right: 2px;
        }
        .price-headline {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: color-mix(in oklch, var(--porcelain) 70%, transparent);
          margin-bottom: 24px;
        }
        .price-from {
          font-family: var(--display);
          font-weight: 300;
          font-size: clamp(44px, 5.5vw, 80px);
          line-height: 0.9;
          letter-spacing: -0.04em;
          margin-bottom: 32px;
          display: flex; align-items: baseline; gap: 8px;
        }
        .price-from .dollar { font-size: 0.4em; color: var(--accent-soft); }
        .price-from .per {
          font-size: 0.22em; color: color-mix(in oklch, var(--porcelain) 60%, transparent);
          font-family: var(--mono); letter-spacing: 0.08em;
          text-transform: uppercase; align-self: end; margin-bottom: 0.4em;
        }
        .partners {
          margin-top: 24px;
          padding-top: 24px;
        }
        .partners-label {
          font-family: var(--mono);
          font-size: 10.5px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: color-mix(in oklch, var(--porcelain) 60%, transparent);
          margin-bottom: 14px;
        }
        .partners-list {
          display: flex; flex-wrap: wrap; gap: 8px;
        }
        .partner-pill {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.04em;
          padding: 8px 12px;
          border: 1px solid color-mix(in oklch, var(--porcelain) 22%, transparent);
          border-radius: 999px;
          color: color-mix(in oklch, var(--porcelain) 80%, transparent);
        }
        .finance-points {
          display: grid; gap: 18px;
          margin-top: 36px;
        }
        .finance-point {
          display: grid;
          grid-template-columns: 28px 1fr;
          gap: 16px;
          align-items: start;
        }
        .finance-point .check {
          width: 22px; height: 22px;
          border-radius: 50%;
          background: var(--accent-soft);
          color: var(--ink);
          display: grid; place-items: center;
          margin-top: 2px;
        }
        .finance-point .label {
          font-family: var(--display);
          font-size: 18px;
          letter-spacing: -0.01em;
          margin-bottom: 4px;
        }
        .finance-point .body {
          font-size: 15px;
          line-height: 1.5;
          color: var(--navy-soft);
        }
        @media (max-width: 880px) {
          .finance-grid { grid-template-columns: 1fr; }
          .price-row { flex-direction: column; align-items: flex-start; gap: 6px; }
        }
      `}</style>

      <div className="container">
        <div className="finance-grid">
          <div>
            <div className="finance-left-head">
              <Reveal>
                <div className="eyebrow"><span className="dot" />Investment</div>
              </Reveal>
              <SplitText className="finance-h" delayBase={50}>
                No surprises.<br /><em>Just clarity.</em>
              </SplitText>
            </div>

            <Reveal delay={200}>
              <p className="body" style={{ maxWidth: "44ch", marginBottom: 16 }}>
                We publish our pricing because we believe you deserve to know
                before you walk through the door. Most patients finance — we work
                with seven partners to find the right fit for your credit and timeline.
              </p>
            </Reveal>

            <Reveal delay={350}>
              <div className="finance-points">
                {[
                  ["Free 60-minute consultation", "CT scan, smile preview, and a treatment plan you can take home."],
                  ["Seven financing partners", "From prime credit to subprime — we find a plan that works."],
                  ["Single, transparent fee per arch", "Anesthesia priced separately. No hidden line items."],
                  ["Forever Smiles Protection", "Long-term maintenance and warranty for your investment."],
                ].map(([l, b], i) => (
                  <div className="finance-point" key={i}>
                    <span className="check">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M4 12l5 5L20 6"/></svg>
                    </span>
                    <div>
                      <div className="label">{l}</div>
                      <div className="body">{b}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={450}>
              <MagneticButton className="btn" style={{ marginTop: 36 }}>
                Request free consultation
                <ArrowRight />
              </MagneticButton>
            </Reveal>
          </div>

          <Reveal delay={150} kind="scale">
            <div className="price-card">
              <div className="price-headline">Forever Smiles · Per Arch</div>
              <div className="price-from">
                <span className="dollar">$</span>
                25,000
                <span className="per">starting</span>
              </div>

              <div className="price-row">
                <div>
                  <div className="price-label">Full-arch implant restoration</div>
                  <div className="price-sub">All-on-X · Fixed · Same day</div>
                </div>
                <div className="price-val"><span className="dollar">$</span>25,000</div>
              </div>
              <div className="price-row">
                <div>
                  <div className="price-label">General anesthesia</div>
                  <div className="price-sub">MD anesthesiologist · Per visit</div>
                </div>
                <div className="price-val"><span className="dollar">$</span>3,500</div>
              </div>
              <div className="price-row">
                <div>
                  <div className="price-label">Zygomatic implants</div>
                  <div className="price-sub">Severe bone loss · As needed</div>
                </div>
                <div className="price-val">+$4–8k</div>
              </div>

              <div className="partners">
                <div className="partners-label">Financing Partners</div>
                <div className="partners-list">
                  {["CareCredit", "Proceed", "LendingClub", "CoveredCare"].map((p) => (
                    <span key={p} className="partner-pill">{p}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
window.Finance = Finance;
