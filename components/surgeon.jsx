/* ---------- Surgeon (Dr. Young) ---------- */
function Surgeon() {
  return (
    <section id="surgeon" className="surgeon sec">
      <style>{`
        .surgeon { background: var(--bone); }
        .surgeon-top {
          display: grid;
          grid-template-columns: 5fr 6fr;
          gap: clamp(24px, 3vw, 48px) clamp(40px, 5vw, 80px);
          align-items: center;
          margin-bottom: 56px;
        }
        .surgeon-body {
        }
        .surgeon-eyebrow {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 600;
          color: var(--grey);
          display: flex; align-items: center; gap: 0;
          margin-bottom: 28px;
        }
        .surgeon-h {
          font-family: var(--display);
          font-weight: 300;
          font-size: clamp(28px, 3.6vw, 56px);
          line-height: 0.98;
          letter-spacing: -0.03em;
          margin-bottom: 32px;
          display: block;
        }
        .surgeon-h em { font-style: italic; color: var(--accent); }
        .surgeon-body p {
          font-size: 16px; line-height: 1.6;
          color: var(--navy-soft);
          margin-bottom: 14px;
          max-width: 44ch;
        }
        .surgeon-quote-wrap {
          padding: 24px 0 0;
          margin-top: 20px;
          border-top: 1px solid var(--line);
          display: flex;
          gap: 16px;
          align-items: start;
        }
        .surgeon-quote-mark {
          font-family: var(--display);
          font-style: italic;
          font-size: clamp(40px, 4vw, 60px);
          line-height: 0.7;
          color: var(--accent);
          letter-spacing: -0.04em;
          flex: 0 0 auto;
        }
        .surgeon-quote-wrap > div { flex: 1; }
        .surgeon-quote {
          font-family: var(--display);
          font-weight: 300;
          font-style: italic;
          font-size: clamp(18px, 1.7vw, 26px);
          line-height: 1.4;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin-bottom: 12px;
        }
        .surgeon-quote-attr {
          font-family: var(--mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--grey);
        }
        .creds {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border-top: 1px solid var(--line);
        }
        .cred {
          padding: 22px 0;
          border-bottom: 1px solid var(--line);
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: 16px;
          align-items: start;
        }
        .cred:nth-child(odd) { padding-right: 24px; border-right: 1px solid var(--line); padding-left: 0; }
        .cred:nth-child(even) { padding-left: 24px; }
        .cred-icon {
          display: flex;
          align-items: flex-start;
          padding-top: 2px;
          color: var(--accent);
          opacity: 0.8;
        }
        .cred .label {
          font-family: var(--display);
          font-size: 18px;
          letter-spacing: -0.01em;
          line-height: 1.25;
        }
        .cred .sub {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.06em;
          color: var(--grey);
          margin-top: 4px;
          text-transform: uppercase;
        }
        .surgeon-photo {
          aspect-ratio: 4 / 5;
          border-radius: 4px;
          overflow: hidden;
        }
        .surgeon-photo img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }
        @media (max-width: 880px) {
          .surgeon-top { grid-template-columns: 1fr; }
          .surgeon-photo { aspect-ratio: 16 / 9; }
          .surgeon-quote-wrap { flex-direction: column; }
          .creds { grid-template-columns: 1fr; }
          .cred:nth-child(odd) { border-right: none; padding-right: 0; }
          .cred:nth-child(even) { padding-left: 0; }
        }
      `}</style>

      <div className="container">
        <div className="surgeon-top">
          <Reveal delay={100} className="surgeon-photo">
            <img src="assets/dr-young.jpg" alt="Dr. Brian Young" />
          </Reveal>

          <Reveal delay={200} className="surgeon-body">
            <div className="surgeon-eyebrow">
              <span className="dot" aria-hidden />
              <span>Your Surgeon</span>
            </div>
            <SplitText className="surgeon-h" delayBase={45}>
              Experience is expensive.<br />So is inexperience.
            </SplitText>
            <p>
              Dr. Young is a residency-trained periodontist who has dedicated the last
              decade exclusively to full-arch implant reconstruction. Beyond his practice,
              he teaches the surgeons who teach others — as faculty at The Pankey Institute,
              on the editorial board of <em>Implant Practice US</em>, and through international
              lecturing on advanced techniques.
            </p>
            <p>
              He personally meets with every candidate. Not a salesperson. Not a treatment
              coordinator first. The doctor who will perform your surgery.
            </p>
            <div className="surgeon-quote-wrap">
              <span className="surgeon-quote-mark" aria-hidden>"</span>
              <div>
                <p className="surgeon-quote">
                  Most centers advertising All-on-4 are run by general dentists with weekend
                  training. Patients deserve a residency-trained surgical specialist who does
                  this every single day.
                </p>
                <div className="surgeon-quote-attr">— Dr. Brian Young, DDS · Founder &amp; Surgical Director</div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={250}>
          <div className="creds">
            {[
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/><path d="M6 12v5c3.33 1.67 8.67 1.67 12 0v-5"/></svg>,
                label: "UNC Chapel Hill", abbr: "DDS", sub: "Doctor of Dental Surgery"
              },
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="3" y="6" width="18" height="15" rx="2"/><path d="M3 10h18M8 6V4M16 6V4"/></svg>,
                label: "University of Florida", abbr: "Residency", sub: "Periodontics & IV Anesthesia"
              },
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>,
                label: "The Pankey Institute", abbr: "Faculty", sub: "Implant Essentials"
              },
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
                label: "Implant Practice US", abbr: "Editorial", sub: "Review Board Member"
              },
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                label: "Jacksonville Dental Society", abbr: "Leadership", sub: "Past Board Member"
              },
              {
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
                label: "Implant Surgery Textbooks", abbr: "Author", sub: "Chapters & Journals"
              },
            ].map(({ icon, label, abbr, sub }, i) => (
              <div className="cred" key={i}>
                <span className="cred-icon">{icon}</span>
                <div>
                  <div className="label">{label}</div>
                  <div className="sub">{abbr} · {sub}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
window.Surgeon = Surgeon;
