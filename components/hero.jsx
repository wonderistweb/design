/* ---------- Hero ---------- */
function Hero() {
  const [muted, setMuted] = React.useState(true);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => {
      const h = window.innerHeight;
      const p = Math.min(1, Math.max(0, window.scrollY / h));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Add .split-ready after mount so the headline animates in on load
  // Also trigger hero footer reveals directly (bypass scroll observer)
  const heroRef = React.useRef(null);
  React.useEffect(() => {
    const el = heroRef.current;
    const stats = Array.from(el?.querySelectorAll(".hero-stat") || []);
    const ids = [
      setTimeout(() => el?.classList.add("split-ready"), 150),
      setTimeout(() => el?.querySelector(".hero-foot-lede")?.classList.add("is-in"), 500),
      setTimeout(() => el?.querySelector(".hero-actions")?.classList.add("is-in"), 680),
      ...stats.map((s, i) => setTimeout(() => s.classList.add("is-in"), 800 + i * 220)),
    ];
    return () => ids.forEach(clearTimeout);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          color: var(--porcelain);
          background: var(--ink);
          overflow: hidden;
          display: flex; flex-direction: column;
        }
        .hero-media {
          position: absolute; inset: 0;
          z-index: 0;
        }
        .hero-media .media {
          width: 100%; height: 100%;
          border-radius: 0;
          aspect-ratio: auto;
        }
        .hero-veil {
          position: absolute; inset: 0; z-index: 1;
          background:
            linear-gradient(180deg, color-mix(in oklch, var(--ink) 70%, transparent) 0%, color-mix(in oklch, var(--ink) 30%, transparent) 35%, color-mix(in oklch, var(--ink) 35%, transparent) 55%, color-mix(in oklch, var(--ink) 88%, transparent) 100%),
            linear-gradient(90deg, color-mix(in oklch, var(--ink) 50%, transparent) 0%, transparent 55%);
          pointer-events: none;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 140px var(--pad-x) 36px;
          max-width: var(--max);
          width: 100%;
          margin: 0 auto;
        }
        .hero-top {
          display: flex; justify-content: space-between; align-items: start;
          gap: 24px;
          margin-bottom: 1em;
        }
        .hero-eyebrow {
          font-family: var(--mono);
          font-size: 11.5px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 600;
          color: color-mix(in oklch, var(--porcelain) 80%, transparent);
          display: flex; align-items: center; gap: 14px;
        }
        .hero-eyebrow .dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
        }
        .hero-meta {
          font-family: var(--mono);
          font-size: 11px; letter-spacing: 0.14em;
          text-transform: uppercase;
          color: color-mix(in oklch, var(--porcelain) 65%, transparent);
          text-align: right;
        }
        .hero-meta span { display: block; }
        .hero-title-wrap {
          padding-block: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }
        .hero-title {
          font-family: var(--display);
          font-weight: 400;
          letter-spacing: -0.04em;
          line-height: 0.92;
          font-size: clamp(56px, 9.5vw, 168px);
          flex: 1;
          min-width: 0;
        }
        .hero-title em {
          font-style: italic;
          font-weight: 300;
          font-family: "Bricolage Grotesque";
          color: color-mix(in oklch, var(--accent) 80%, var(--porcelain));
        }
        .hero-foot {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 32px;
          padding-top: 48px;
        }
        .hero-foot-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 28px;
        }
        .hero-stats {
          display: flex;
          align-items: flex-end;
          gap: 44px;
          flex-shrink: 0;
        }
        .hero-foot-lede {
          font-size: clamp(16px, 1.2vw, 19px);
          line-height: 1.4;
          color: color-mix(in oklch, var(--porcelain) 86%, transparent);
          letter-spacing: -0.005em;
          max-width: 36ch;
        }
        .hero-actions {
          display: flex; gap: 12px;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;
        }
        .hero-stat {
          text-align: left;
        }
        .hero-stat-num {
          font-family: var(--display);
          font-weight: 300;
          font-size: clamp(32px, 3.4vw, 56px);
          letter-spacing: -0.035em;
          line-height: 1;
          display: flex; align-items: baseline; gap: 2px;
          color: var(--porcelain);
          margin-bottom: 8px;
        }
        .hero-stat-num .suf {
          font-size: 0.42em;
          color: var(--accent-soft);
          letter-spacing: 0;
        }
        .hero-stat-label {
          font-family: var(--mono);
          font-size: 10.5px;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: color-mix(in oklch, var(--porcelain) 50%, transparent);
          line-height: 1.5;
        }
        .hero-controls {
          flex-shrink: 0;
        }
        .play-btn-lg {
          width: 96px; height: 96px;
          border-radius: 50%;
          background: color-mix(in oklch, var(--porcelain) 14%, transparent);
          border: 1px solid color-mix(in oklch, var(--porcelain) 28%, transparent);
          color: var(--porcelain);
          display: grid; place-items: center;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          position: relative;
          transition: background var(--t-base) var(--ease-out), transform var(--t-base) var(--ease-out), border-color var(--t-base) var(--ease-out);
        }
        .play-btn-lg::before {
          content: ""; position: absolute; inset: -10px;
          border-radius: 50%;
          border: 1px solid color-mix(in oklch, var(--porcelain) 22%, transparent);
          animation: ringPulse 2.6s var(--ease-out) infinite;
        }
        @keyframes ringPulse {
          0%   { transform: scale(0.94); opacity: 0.8; }
          70%  { transform: scale(1.18); opacity: 0; }
          100% { transform: scale(1.18); opacity: 0; }
        }
        .play-btn-lg:hover {
          background: var(--porcelain);
          color: var(--ink);
          transform: scale(1.04);
          border-color: var(--porcelain);
        }
        .play-btn-lg svg { transform: translateX(2px); }
        .scroll-cue {
          position: absolute;
          z-index: 3;
          left: var(--pad-x); bottom: 36px;
          font-family: var(--mono);
          font-size: 10.5px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: color-mix(in oklch, var(--porcelain) 70%, transparent);
          display: flex; align-items: center; gap: 12px;
        }
        .scroll-cue .bar {
          display: inline-block;
          width: 56px; height: 1px;
          background: currentColor; opacity: 0.4;
          position: relative;
        }
        .scroll-cue .bar::after {
          content: ""; position: absolute; inset: 0;
          background: var(--accent); transform-origin: left center;
          animation: scrollbar 3s var(--ease-in-out) infinite;
        }
        @keyframes scrollbar {
          0% { transform: scaleX(0); transform-origin: left center; }
          50% { transform: scaleX(1); transform-origin: left center; }
          50.01% { transform-origin: right center; }
          100% { transform: scaleX(0); transform-origin: right center; }
        }
        @media (max-width: 880px) {
          .hero-foot { flex-direction: column; align-items: flex-start; gap: 28px; }
          .hero-stats { gap: 20px; }
          .hero-controls { display: none; }
        }
      `}</style>

      {/* Background media */}
      <div className="hero-media" style={{ transform: `scale(${1 + progress * 0.05})` }}>
        <img
          src="assets/hero-team.jpg"
          alt="Dr. Young's team celebrating a patient's new smile"
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover",
            objectPosition: "center 35%",
          }}
        />
      </div>

      {/* Veil */}
      <div className="hero-veil" />

      {/* Foreground content */}
      <div className="hero-content">
        <div className="hero-top">
          <div className="hero-eyebrow">
            <span className="dot" aria-hidden></span>
            <span>Jacksonville's Full-Arch Implant Specialist</span>
          </div>
        </div>

        <div className="hero-title-wrap">
          <h1 className="hero-title">
            <SplitText delayBase={70}>Permanent teeth.</SplitText>
            <br />
            <SplitText delayBase={70} style={{ color: "var(--accent-soft)" }}>In a single day.</SplitText>
          </h1>
          <div className="hero-controls">
            <button className="play-btn-lg" aria-label="Play hero reel">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l14 8-14 8z"/></svg>
            </button>
          </div>
        </div>

        <div className="hero-foot">
          <div className="hero-foot-left">
            <div className="hero-foot-lede" data-reveal style={{ "--reveal-delay": "0ms" }}>
              A surgeon-led, full-arch implant center designed around one outcome —
              restoring your smile, your confidence, and the way you live.
            </div>
            <div className="hero-actions" data-reveal style={{ "--reveal-delay": "0ms" }}>
              <MagneticButton className="btn btn--light">
                Request consultation
                <ArrowRight />
              </MagneticButton>
            </div>
          </div>

          <div className="hero-stats">
            {[
              { v: 15000, suf: "+", l: "Implants placed" },
              { v: 24, suf: " yrs", l: "In practice" },
              { v: 30, suf: "/mo", l: "Full arches restored" },
            ].map((s, i) => (
              <div className="hero-stat" key={i} data-reveal>
                <div className="hero-stat-num"><Counter to={s.v} /><span className="suf">{s.suf}</span></div>
                <div className="hero-stat-label">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
window.Hero = Hero;
