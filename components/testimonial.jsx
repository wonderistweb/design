/* ---------- Patient Testimonial ---------- */
function Testimonial() {
  const stories = [
    {
      name: "Diana", age: 64, location: "Ponte Vedra, FL",
      quote: "I cried the first time I looked in the mirror. I haven't smiled in photographs in fifteen years. Now I can't stop.",
      detail: "Long-term denture wearer · Full-arch zirconia",
      length: "2:14",
      img: "assets/patient-diana.jpg"
    },
    {
      name: "Marcus", age: 58, location: "St. Augustine, FL",
      quote: "Three other places told me I'd need bone grafts and a year of waiting. Dr. Young did it in one day.",
      detail: "Zygomatic implants · Severe bone loss",
      length: "3:02",
      img: "assets/patient-marcus.jpg"
    },
    {
      name: "Patricia", age: 71, location: "Jacksonville, FL",
      quote: "He spent an hour with me — the actual surgeon, not a sales rep. I drove from Savannah for that.",
      detail: "Failing dentition · Same-day teeth",
      length: "1:48",
      img: "assets/patient-patricia.jpg"
    },
  ];
  const [i, setI] = React.useState(0);
  const s = stories[i];

  return (
    <section id="stories" className="story sec">
      <style>{`
        .story { background: var(--bone); }
        .story-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: clamp(40px, 5vw, 80px);
          align-items: stretch;
        }
        .story-media {
          position: relative;
          aspect-ratio: 1 / 1;
          border-radius: 4px;
          overflow: hidden;
        }
        .story-media .media { width: 100%; height: 100%; aspect-ratio: auto; border-radius: 0; }
        .story-play {
          position: absolute; inset: 0;
          display: grid; place-items: center;
          z-index: 2;
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
        .play-btn-lg:hover { background: var(--porcelain); color: var(--ink); transform: scale(1.04); border-color: var(--porcelain); }
        .play-btn-lg svg { transform: translateX(2px); }
        .story-meta {
          position: absolute; left: 18px; bottom: 18px; right: 18px;
          display: flex; justify-content: space-between; align-items: end;
          color: var(--porcelain);
        }
        .story-meta .name {
          font-family: var(--display);
          font-size: clamp(22px, 2vw, 30px);
          letter-spacing: -0.015em;
          line-height: 1.1;
        }
        .story-meta .where {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: color-mix(in oklch, var(--porcelain) 70%, transparent);
          margin-top: 4px;
        }
        .story-len {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.1em;
          padding: 6px 10px;
          background: color-mix(in oklch, var(--porcelain) 16%, transparent);
          backdrop-filter: blur(6px);
          border-radius: 2px;
        }
        .story-eyebrow {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 600;
          color: var(--grey);
          display: flex; align-items: center; gap: 0;
          margin-bottom: 28px;
        }
        .story-quote {
          font-family: var(--display);
          font-weight: 300;
          font-size: clamp(28px, 3.4vw, 52px);
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin-bottom: 32px;

        }
        .story-quote::before {
          content: """;
          font-family: var(--display);
          font-style: italic;
          color: var(--accent);
          font-size: 1.4em;
          line-height: 0;
          vertical-align: -0.3em;
          margin-right: 6px;
        }
        .story-attr {
          font-family: var(--mono);
          font-size: 11.5px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--grey);
          margin-bottom: 40px;
        }
        .story-controls {
          display: flex;
          gap: 8px;
          align-items: center;
          margin-top: 24px;
        }
        .story-dot-group {
          flex: 1;
          display: flex; gap: 8px;
        }
        .story-dot {
          flex: 1;
          height: 2px;
          background: var(--line);
          position: relative;
          overflow: hidden;
          transition: background var(--t-fast);
        }
        .story-dot.active::after {
          content: ""; position: absolute; inset: 0;
          background: var(--ink);
          transform-origin: left;
          animation: dotfill 6s linear forwards;
        }
        @keyframes dotfill { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .story-nav {
          display: flex; gap: 8px;
        }
        .story-nav button {
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1px solid var(--line);
          background: var(--porcelain);
          color: var(--ink);
          display: grid; place-items: center;
          transition: background var(--t-fast), color var(--t-fast), transform var(--t-fast);
        }
        .story-nav button:hover { background: var(--ink); color: var(--porcelain); transform: scale(1.04); }
        @media (max-width: 880px) { .story-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="container">
        <div className="story-grid">
          <Reveal kind="scale">
            <div className="story-media">
              <img
                src={s.img}
                alt={s.name}
                className="media"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
              <div className="story-play">
                <button className="play-btn-lg" aria-label={`Play ${s.name}'s story`}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l14 8-14 8z"/></svg>
                </button>
              </div>
              <div className="story-meta">
                <div>
                  <div className="name">{s.name}, {s.age}</div>
                  <div className="where">{s.location}</div>
                </div>
                <span className="story-len">{s.length}</span>
              </div>
            </div>
          </Reveal>

          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Reveal>
              <div className="story-eyebrow">
                <span className="dot" aria-hidden />
                <span>Patient Stories</span>
              </div>
            </Reveal>
            <div className="story-quote" key={i}>{s.quote}"</div>
            <div className="story-attr">— {s.name}, {s.detail}</div>

            <div className="story-controls">
              <div className="story-dot-group">
                {stories.map((_, idx) => (
                  <span key={idx} className={`story-dot ${idx === i ? "active" : ""}`} />
                ))}
              </div>
              <div className="story-nav">
                <button data-cursor="hover" onClick={() => setI((i - 1 + stories.length) % stories.length)} aria-label="Previous">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>
                </button>
                <button data-cursor="hover" onClick={() => setI((i + 1) % stories.length)} aria-label="Next">
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Testimonial = Testimonial;
