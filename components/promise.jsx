/* ---------- The Promise (problem → outcome) ---------- */
function PromiseSection() {
  return (
    <section id="promise" className="promise sec">
      <style>{`
        .promise { background: var(--porcelain); }
        .promise-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          grid-template-rows: auto auto;
          gap: clamp(32px, 4vw, 64px) clamp(40px, 6vw, 96px);
          align-items: start;
        }
        .promise-grid > div:first-child {
          grid-column: 1 / -1;
        }
        .promise-body {
          grid-column: 1 / 2;
          grid-row: 2;
        }
        .promise-list-col {
          grid-column: 2 / 3;
          grid-row: 2;
        }
        .promise-eyebrow {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 600;
          color: var(--grey);
          display: flex; align-items: center; gap: 0;
          margin-bottom: 28px;
        }
        .promise-eyebrow .num {
          font-variant-numeric: tabular-nums;
          color: var(--ink);
        }
        .promise-h {
          font-family: var(--display);
          font-weight: 300;
          font-size: clamp(36px, 5.2vw, 80px);
          line-height: 1.0;
          letter-spacing: -0.03em;

        }
        .promise-h em { font-style: italic; color: var(--accent); }
        .promise-body p {
          font-size: clamp(17px, 1.25vw, 20px);
          line-height: 1.55;
          color: var(--navy-soft);
          letter-spacing: -0.005em;
          margin-bottom: 18px;
          max-width: 52ch;
        }
        .promise-body p strong {
          color: var(--ink); font-weight: 500;
        }
        .promise-list {
          margin-top: 0;
          display: grid; gap: 0;
          border-top: 1px solid var(--line);
        }
        .promise-row {
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: 24px;
          padding: 22px 0;
          border-bottom: 1px solid var(--line);
          align-items: center;
        }
        .promise-row .idx {
          display: flex;
          align-items: center;
          color: var(--accent);
          opacity: 0.85;
        }
        .promise-row .label {
          font-family: var(--display);
          font-size: clamp(20px, 1.6vw, 26px);
          letter-spacing: -0.015em;
        }
        @media (max-width: 880px) {
          .promise-grid { grid-template-columns: 1fr; }
          .promise-body, .promise-list-col { grid-column: auto; grid-row: auto; }
        }
      `}</style>

      <div className="container">
        <div className="promise-grid">
          <div>
            <Reveal>
              <div className="promise-eyebrow">
                <span className="dot" aria-hidden />
                <span>The Forever Smiles Promise</span>
              </div>
            </Reveal>
            <SplitText className="promise-h" delayBase={50}>
              Built for the patients dentistry forgot.
            </SplitText>
          </div>

          <div className="promise-body">
            <Reveal delay={150}>
              <p>
                Most people who call us have spent <strong>years</strong> cycling through
                root canals, crowns, and dentures that never quite worked.
                Some have been told they aren't candidates for implants at all.
              </p>
              <p>
                Forever Smiles exists for them. We do <strong>one thing</strong> — full-mouth
                implant reconstruction — and we do it every single day, under one roof,
                with a coordinated surgical team. You leave your first day of treatment
                with a permanent, fixed set of teeth. You leave the rest of your life
                with the smile you should have had all along.
              </p>
            </Reveal>
          </div>

          <div className="promise-list-col">
            <Reveal delay={300}>
              <div className="promise-list">
                {[
                  {
                    label: "Same-day teeth", sub: "All-on-X · Fixed · Zirconia",
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                  },
                  {
                    label: "Surgeon-led, every step", sub: "Not a salesperson. Not a corporate model.",
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>
                  },
                  {
                    label: "MD anesthesiologist on staff", sub: "You sleep. We work. Safer monitoring.",
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="14"/><line x1="9" y1="11" x2="15" y2="11"/></svg>
                  },
                  {
                    label: "Solutions for severe bone loss", sub: "Zygomatic, pterygoid, transnasal — no graft, no wait",
                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  },
                ].map(({ label, sub, icon }, i) => (
                  <div className="promise-row" key={i}>
                    <span className="idx">{icon}</span>
                    <div>
                      <div className="label">{label}</div>
                      <div style={{ fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.04em", color: "var(--grey)", marginTop: 4 }}>{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
window.PromiseSection = PromiseSection;
