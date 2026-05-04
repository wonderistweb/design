/* ---------- Credentials marquee ---------- */
function Marquee() {
  const items = [
    "Residency-Trained Surgical Specialist",
    "MD Anesthesiologist On Staff",
    "15,000+ Implants Placed",
    "Faculty · The Pankey Institute",
    "Editorial Board · Implant Practice US",
    "Author · Implant Surgery Textbooks",
    "Same-Day Permanent Teeth",
    "Zygomatic & Pterygoid Specialist",
  ];
  const repeated = [...items, ...items];
  return (
    <section className="marquee-sec">
      <style>{`
        .marquee-sec {
          background: var(--ink);
          color: var(--porcelain);
          padding: 44px 0;
          overflow: hidden;
          position: relative;
          border-block: 1px solid color-mix(in oklch, var(--porcelain) 14%, transparent);
        }
        .marquee-track {
          display: flex;
          gap: 56px;
          width: max-content;
          animation: marquee 60s linear infinite;
        }
        .marquee-sec:hover .marquee-track { animation-play-state: paused; }
        .marquee-item {
          font-family: var(--display);
          font-weight: 300;
          font-size: clamp(20px, 2.4vw, 34px);
          letter-spacing: -0.02em;
          display: inline-flex; align-items: center; gap: 56px;
          white-space: nowrap;
          color: color-mix(in oklch, var(--porcelain) 88%, transparent);
        }
        .marquee-item .sep {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--accent);
        }
        @keyframes marquee {
          to { transform: translateX(-50%); }
        }
      `}</style>
      <div className="marquee-track" aria-hidden>
        {repeated.map((it, i) => (
          <span className="marquee-item" key={i}>
            {it}
            <span className="sep" />
          </span>
        ))}
      </div>
    </section>
  );
}
window.Marquee = Marquee;
