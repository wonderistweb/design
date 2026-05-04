/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="foot">
      <style>{`
        .foot {
          background: var(--ink);
          color: color-mix(in oklch, var(--porcelain) 80%, transparent);
          padding: 80px var(--pad-x) 32px;
          border-top: 1px solid color-mix(in oklch, var(--porcelain) 14%, transparent);
        }
        .foot-inner { max-width: var(--max); margin: 0 auto; }
        .foot-mark {
          font-family: var(--display);
          font-weight: 300;
          font-size: clamp(48px, 8vw, 120px);
          letter-spacing: -0.045em;
          line-height: 0.88;
          color: var(--porcelain);
          margin-bottom: 1em;
        }
        .foot-logo {
          height: 32px;
          width: auto;
          display: block;
          margin-top: 56px;
          margin-bottom: 32px;
        }
        .foot-mark em { font-style: italic; color: var(--accent-soft); }
        .foot-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 32px;
        }
        .foot-col h4 {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: color-mix(in oklch, var(--porcelain) 55%, transparent);
          font-weight: 500;
          margin-bottom: 16px;
        }
        .foot-col a {
          display: block;
          padding: 6px 0;
          font-size: 14.5px;
          color: color-mix(in oklch, var(--porcelain) 88%, transparent);
          letter-spacing: -0.005em;
          transition: color var(--t-fast);
        }
        .foot-col a:hover { color: var(--accent-soft); }
        .foot-addr {
          display: block;
          padding: 6px 0;
          font-size: 14.5px;
          line-height: 1.6;
          color: color-mix(in oklch, var(--porcelain) 88%, transparent);
          letter-spacing: -0.005em;
          transition: color var(--t-fast);
        }
        .foot-addr:hover { color: var(--accent-soft); }
        .foot-bottom {
          margin-top: 64px;
          padding-top: 24px;
          border-top: 1px solid color-mix(in oklch, var(--porcelain) 14%, transparent);
          display: flex; justify-content: space-between; gap: 16px;
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          color: color-mix(in oklch, var(--porcelain) 55%, transparent);
          text-transform: uppercase;
          flex-wrap: wrap;
        }
        @media (max-width: 880px) {
          .foot-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <div className="foot-inner">
        <Reveal>
          <div className="foot-mark">
            Forever Smiles<br />
            <em>permanently yours.</em>
          </div>
        </Reveal>

        <div className="foot-grid">
          <div className="foot-col">
            <h4>Visit</h4>
            <a href="https://maps.google.com/?q=13770+Beach+Blvd+Suite+6+Jacksonville+FL+32224" target="_blank" rel="noopener" className="foot-addr">
              13770 Beach Blvd, Suite 6<br />Jacksonville, FL 32224
            </a>
            <a href="tel:9044142320">(904) 414-2320</a>
            <a href="mailto:dryoung@foreversmilesjax.com">dryoung@foreversmilesjax.com</a>
          </div>
          <div className="foot-col">
            <h4>About Us</h4>
            <a href="#surgeon">Dr. Brian Young</a>
            <a href="#about">Our Practice</a>
            <a href="#promise">Why Forever Smiles</a>
            <a href="#about">Technology</a>
          </div>
          <div className="foot-col">
            <h4>Services</h4>
            <a href="#promise">All-on-4 Implants</a>
            <a href="#surgeon">Zygomatic Implants</a>
            <a href="#process">Dental Implants</a>
            <a href="#promise">Implant Dentures</a>
            <a href="#process">FP-1 Implant Bridges</a>
            <a href="#surgeon">Implant Correction</a>
          </div>
          <div className="foot-col">
            <h4>For Patients</h4>
            <a href="#consult">Patient Resources</a>
            <a href="#process">Forever Smiles Protection</a>
            <a href="#outcomes">Before & Afters</a>
            <a href="#">Blog</a>
          </div>
        </div>

        <img src="assets/logo-light.svg" alt="Forever Smiles Implant Center" className="foot-logo" />
        <div className="foot-bottom">
          <div>© 2026 Forever Smiles Implant Center · Jacksonville, FL</div>
          <div>Website by Wonderist Agency</div>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
