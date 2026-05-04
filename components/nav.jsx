/* ---------- Top Navigation ---------- */
function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState(null); // "services" | "patients" | null
  const closeTimer = React.useRef(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = (key) => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
    setActiveMenu(key);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenu(null), 140);
  };

  const services = [
    { label: "All-on-4 Implants", href: "#promise", note: "Full arch in a single day" },
    { label: "Zygomatic Implants", href: "#surgeon", note: "For severe bone loss" },
    { label: "Dental Implants", href: "#process", note: "Single tooth replacement" },
    { label: "Implant Dentures", href: "#promise", note: "Snap-in stability" },
    { label: "FP-1 Implant Bridges", href: "#process", note: "Fixed, tooth-only restoration" },
    { label: "Implant Correction", href: "#surgeon", note: "Failed-case revisions" },
  ];

  const patients = [
    { label: "Patient Resources", href: "#consult", note: "Forms, prep & guides" },
    { label: "Forever Smiles Protection", href: "#process", note: "Lifetime warranty & care" },
    { label: "Before & Afters", href: "#outcomes", note: "Real cases, real results" },
    { label: "Blog", href: "#", note: "Insights from Dr. Young" },
  ];

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""} ${activeMenu ? "nav--menu-open" : ""}`}>
      <style>{`
        .nav {
          position: fixed; top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 18px var(--pad-x);
          display: flex; align-items: center; justify-content: space-between;
          gap: 24px;
          color: var(--porcelain);
          transition: padding var(--t-base) var(--ease-out), background var(--t-base) var(--ease-out), color var(--t-base) var(--ease-out), border-color var(--t-base) var(--ease-out);
          border-bottom: 1px solid transparent;
        }
        .nav--scrolled,
        .nav--menu-open {
          padding: 12px var(--pad-x);
          background: color-mix(in oklch, var(--porcelain) 92%, transparent);
          backdrop-filter: blur(18px) saturate(140%);
          -webkit-backdrop-filter: blur(18px) saturate(140%);
          color: var(--ink);
          border-bottom-color: var(--line);
        }
        .nav .brand {
          display: flex; align-items: center;
          position: relative;
          height: 56px;
        }
        .nav .brand-logo {
          height: 56px;
          width: auto;
          display: block;
          transition: opacity var(--t-base) var(--ease-out), height var(--t-base) var(--ease-out);
        }
        .nav .brand-logo--light { position: static; }
        .nav .brand-logo--dark {
          position: absolute; left: 0; top: 50%;
          transform: translateY(-50%);
          opacity: 0;
          height: 48px;
        }
        .nav--scrolled,
        .nav--menu-open { }
        .nav--scrolled .brand-logo--light,
        .nav--menu-open .brand-logo--light { opacity: 0; }
        .nav--scrolled .brand-logo--dark,
        .nav--menu-open .brand-logo--dark { opacity: 1; }
        .nav--scrolled .brand,
        .nav--menu-open .brand { height: 48px; }

        .nav .links {
          display: flex; align-items: center; gap: 4px;
        }
        .nav .link {
          padding: 10px 14px;
          font-size: 13.5px;
          letter-spacing: -0.005em;
          border-radius: 999px;
          position: relative;
          display: inline-flex; align-items: center; gap: 6px;
          transition: color var(--t-fast) var(--ease-out);
          background: transparent;
          border: 0;
          color: inherit;
          cursor: pointer;
          font-family: inherit;
        }
        .nav .link::after {
          content: ""; position: absolute;
          left: 14px; right: 14px; bottom: 6px;
          height: 1px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform var(--t-base) var(--ease-out);
        }
        .nav .link:hover::after,
        .nav .link[aria-expanded="true"]::after { transform: scaleX(1); }
        .nav .link .caret {
          width: 10px; height: 10px;
          transition: transform var(--t-fast) var(--ease-out);
          opacity: 0.7;
        }
        .nav .link[aria-expanded="true"] .caret { transform: rotate(180deg); opacity: 1; }

        .nav .right { display: flex; align-items: center; gap: 10px; }
        .nav .phone {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 12px 18px;
          font-family: var(--sans);
          font-size: 13px;
          letter-spacing: -0.005em;
          font-weight: 500;
          background: transparent;
          color: inherit;
          border-radius: 999px;
          border: 1px solid color-mix(in oklch, currentColor 30%, transparent);
          transition: background var(--t-fast) var(--ease-out), color var(--t-fast) var(--ease-out), border-color var(--t-fast) var(--ease-out), transform var(--t-fast) var(--ease-out);
        }
        .nav .phone:hover {
          background: var(--accent);
          color: var(--ink);
          border-color: var(--accent);
        }
        .nav .cta-btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 12px 18px;
          font-size: 13.5px;
          font-weight: 500;
          background: var(--porcelain);
          color: var(--ink);
          border-radius: 999px;
          transition: transform var(--t-fast) var(--ease-out), background var(--t-fast) var(--ease-out);
        }
        .nav--scrolled .cta-btn, .nav--menu-open .cta-btn { background: var(--ink); color: var(--porcelain); }
        .nav .cta-btn:hover { background: var(--accent); color: var(--ink); }
        .nav .burger { display: none; }

        /* ---- Mega-menu panel ---- */
        .nav-mega {
          position: fixed;
          top: 100%;
          left: 0; right: 0;
          background: var(--porcelain);
          border-bottom: 1px solid var(--line);
          color: var(--ink);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-8px);
          transition: opacity var(--t-base) var(--ease-out), transform var(--t-base) var(--ease-out), visibility var(--t-base) var(--ease-out);
          padding: 36px var(--pad-x) 44px;
        }
        .nav-mega[data-open="true"] {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .nav-mega-inner {
          max-width: var(--max);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 2.4fr;
          gap: 56px;
          align-items: start;
        }
        .nav-mega-inner[data-layout="featured"] {
          grid-template-columns: 1fr 1.6fr 0.9fr;
          gap: 48px;
          align-items: stretch;
        }
        .nav-mega-eyebrow {
          font-family: var(--mono);
          font-size: 10.5px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--grey);
          margin-bottom: 12px;
        }
        .nav-mega-title {
          font-family: var(--display);
          font-weight: 300;
          font-size: 38px;
          line-height: 1.02;
          letter-spacing: -0.025em;
          margin-bottom: 14px;
        }
        .nav-mega-title em { font-style: italic; color: var(--accent); }
        .nav-mega-lede {
          font-size: 14px;
          line-height: 1.55;
          color: var(--navy-soft);
          max-width: 32ch;
        }
        .nav-mega-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4px 32px;
        }
        .nav-mega-grid[data-cols="1"] {
          grid-template-columns: 1fr;
        }

        /* Featured blog tile */
        .nav-feature {
          display: flex;
          flex-direction: column;
          position: relative;
          height: 100%;
          color: var(--ink);
          transition: transform var(--t-base) var(--ease-out);
        }
        .nav-feature:hover { transform: translateY(-2px); }
        .nav-feature-thumb {
          position: relative;
          flex: 1 1 0;
          min-height: 0;
          border-radius: 6px;
          overflow: hidden;
          background: var(--ink);
          isolation: isolate;
        }
        .nav-feature-img {
          position: absolute; inset: 0;
          background-image:
            repeating-linear-gradient(135deg,
              color-mix(in oklch, var(--navy) 92%, transparent) 0 12px,
              color-mix(in oklch, var(--navy-2) 88%, transparent) 12px 24px);
          transition: transform 800ms var(--ease-out);
        }
        .nav-feature:hover .nav-feature-img { transform: scale(1.04); }
        .nav-feature-tag {
          position: absolute;
          top: 12px; left: 12px;
          font-family: var(--mono);
          font-size: 9.5px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          padding: 4px 8px;
          border: 1px solid color-mix(in oklch, var(--porcelain) 30%, transparent);
          border-radius: 999px;
          background: color-mix(in oklch, var(--ink) 50%, transparent);
          backdrop-filter: blur(6px);
          color: var(--porcelain);
          z-index: 2;
        }
        .nav-feature-body {
          flex: 0 0 auto;
          padding-top: 14px;
        }
        .nav-feature-eyebrow {
          font-family: var(--mono);
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--grey);
          margin-bottom: 6px;
        }
        .nav-feature-title {
          font-family: var(--display);
          font-weight: 400;
          font-size: 16px;
          line-height: 1.2;
          letter-spacing: -0.015em;
          margin-bottom: 10px;
          text-wrap: balance;
          color: var(--ink);
        }
        .nav-feature-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--mono);
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent);
        }
        .nav-feature-cta svg { transition: transform var(--t-fast) var(--ease-out); }
        .nav-feature:hover .nav-feature-cta svg { transform: translateX(4px); }
        .nav-mega-item {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 16px;
          padding: 16px 14px;
          border-top: 1px solid var(--line);
          border-radius: 4px;
          transition: background var(--t-fast) var(--ease-out), padding-left var(--t-fast) var(--ease-out);
          cursor: pointer;
        }
        .nav-mega-item:hover {
          background: var(--bone);
          padding-left: 20px;
        }
        .nav-mega-item:hover .nav-mega-arrow { transform: translateX(3px); opacity: 1; }
        .nav-mega-item-label {
          font-family: var(--display);
          font-size: 18px;
          letter-spacing: -0.015em;
          line-height: 1.2;
        }
        .nav-mega-item-note {
          font-family: var(--mono);
          font-size: 10.5px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--grey);
          margin-top: 4px;
        }
        .nav-mega-arrow {
          opacity: 0.4;
          transition: transform var(--t-fast) var(--ease-out), opacity var(--t-fast) var(--ease-out);
          color: var(--ink);
        }

        @media (max-width: 980px) {
          .nav .links, .nav .phone { display: none; }
          .nav .brand { height: 40px; }
          .nav .brand-logo { height: 40px; }
          .nav .brand-logo--dark { height: 36px; }
          .nav--scrolled .brand, .nav--menu-open .brand { height: 36px; }
          .nav .cta-btn { padding: 10px 14px; font-size: 12.5px; gap: 6px; }
          .nav .burger {
            display: inline-flex; width: 44px; height: 44px;
            border-radius: 50%; align-items: center; justify-content: center;
            border: 1px solid color-mix(in oklch, currentColor 30%, transparent);
          }
          .nav-mega { display: none; }
        }
      `}</style>

      <a href="#" className="brand" aria-label="Forever Smiles Implant Center home">
        <img src="assets/logo-light.svg" alt="Forever Smiles Implant Center" className="brand-logo brand-logo--light" />
        <img src="assets/logo-stack-dark.png" alt="" aria-hidden="true" className="brand-logo brand-logo--dark" />
      </a>

      <nav className="links" onMouseLeave={scheduleClose}>
        <a href="#about" className="link" data-cursor="hover" onMouseEnter={() => openMenu(null)}>About Us</a>

        <button
          type="button"
          className="link"
          data-cursor="hover"
          aria-expanded={activeMenu === "services"}
          aria-haspopup="true"
          onMouseEnter={() => openMenu("services")}
          onFocus={() => openMenu("services")}
          onClick={() => setActiveMenu(activeMenu === "services" ? null : "services")}
        >
          Services
          <svg className="caret" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M2 4l3 3 3-3"/></svg>
        </button>

        <button
          type="button"
          className="link"
          data-cursor="hover"
          aria-expanded={activeMenu === "patients"}
          aria-haspopup="true"
          onMouseEnter={() => openMenu("patients")}
          onFocus={() => openMenu("patients")}
          onClick={() => setActiveMenu(activeMenu === "patients" ? null : "patients")}
        >
          For Patients
          <svg className="caret" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M2 4l3 3 3-3"/></svg>
        </button>

        <a href="#consult" className="link" data-cursor="hover" onMouseEnter={() => openMenu(null)}>Contact</a>
      </nav>

      <div className="right">
        <a href="tel:9044142320" className="phone" data-cursor="hover">(904) 414-2320</a>
        <a href="#consult" className="cta-btn" data-cursor="hover">
          Request consult
          <ArrowRight size={12} />
        </a>
        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M0 1h18M0 7h18M0 13h12" />
          </svg>
        </button>
      </div>

      {/* Mega menu panels */}
      <div
        className="nav-mega"
        data-open={activeMenu === "services"}
        onMouseEnter={() => openMenu("services")}
        onMouseLeave={scheduleClose}
      >
        <div className="nav-mega-inner">
          <div>
            <div className="nav-mega-eyebrow">— Services</div>
            <div className="nav-mega-title">Permanent <em>solutions.</em></div>
            <p className="nav-mega-lede">
              Surgeon-led, single-day full-arch implants and the supporting specialty work that
              gets you there. One team, one location, one accountable surgeon.
            </p>
          </div>
          <div className="nav-mega-grid" data-cols="2">
            {services.map((s, i) => (
              <a key={i} href={s.href} className="nav-mega-item" data-cursor="hover" onClick={() => setActiveMenu(null)}>
                <div>
                  <div className="nav-mega-item-label">{s.label}</div>
                  <div className="nav-mega-item-note">{s.note}</div>
                </div>
                <span className="nav-mega-arrow"><ArrowRight size={14} /></span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className="nav-mega"
        data-open={activeMenu === "patients"}
        onMouseEnter={() => openMenu("patients")}
        onMouseLeave={scheduleClose}
      >
        <div className="nav-mega-inner" data-layout="featured">
          <div>
            <div className="nav-mega-eyebrow">— For Patients</div>
            <div className="nav-mega-title">Everything you'll <em>need.</em></div>
            <p className="nav-mega-lede">
              From your first consultation to the day you forget your teeth aren't what you were
              born with — clear answers, transparent investment, and a process you can trust.
            </p>
          </div>
          <div className="nav-mega-grid" data-cols="1">
            {patients.map((s, i) => (
              <a key={i} href={s.href} className="nav-mega-item" data-cursor="hover" onClick={() => setActiveMenu(null)}>
                <div>
                  <div className="nav-mega-item-label">{s.label}</div>
                  <div className="nav-mega-item-note">{s.note}</div>
                </div>
                <span className="nav-mega-arrow"><ArrowRight size={14} /></span>
              </a>
            ))}
          </div>
          <a href="#" className="nav-feature" data-cursor="hover" onClick={() => setActiveMenu(null)}>
            <div className="nav-feature-thumb">
              <div className="nav-feature-img" aria-hidden></div>
              <span className="nav-feature-tag">Featured</span>
            </div>
            <div className="nav-feature-body">
              <div className="nav-feature-eyebrow">From the Blog · 6 min</div>
              <div className="nav-feature-title">What to expect on Transformation Day.</div>
              <span className="nav-feature-cta">
                Read article
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
window.Nav = Nav;
