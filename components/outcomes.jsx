/* ---------- Outcomes (Patient Testimonial Videos) ---------- */
function Outcomes() {
  const videos = [
    { name: "Diana", age: 64, location: "Ponte Vedra, FL", note: "Long-term denture wearer · Full-arch zirconia", quote: "I haven't smiled in photographs in fifteen years. Now I can't stop.", length: "2:14", img: "assets/patient-diana.jpg" },
    { name: "Marcus", age: 58, location: "St. Augustine, FL", note: "Zygomatic implants · Severe bone loss", quote: "Three other places told me I'd need bone grafts and a year of waiting.", length: "3:02", img: "assets/patient-marcus.jpg" },
    { name: "Robert", age: 68, location: "Jacksonville, FL", note: "Failing dentition · Same-day teeth", quote: "I walked in with teeth that were failing me. I walked out with a permanent smile.", length: "1:58", img: "assets/patient-robert.jpg" },
    { name: "Patricia", age: 71, location: "Jacksonville, FL", note: "Failing dentition · Full-mouth reconstruction", quote: "He spent an hour with me. The salesperson at the other place spent fifteen minutes.", length: "1:48", img: "assets/patient-patricia.jpg" },
  ];

  return (
    <section id="outcomes" className="outcomes dark sec">
      <style>{`
        .outcomes {
          background: var(--ink);
          color: var(--porcelain);
        }
        .outcomes-head {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: end;
          margin-bottom: 56px;
        }
        .outcomes-meta {
          font-size: 16px; line-height: 1.5;
          color: color-mix(in oklch, var(--porcelain) 75%, transparent);
          max-width: 38ch;
          justify-self: end;
          align-self: end;
        }
        .outcomes-eyebrow {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 600;
          color: color-mix(in oklch, var(--porcelain) 60%, transparent);
          display: flex; align-items: center; gap: 0; margin-bottom: 28px;
        }
        .outcomes-h {
          font-family: var(--display);
          font-weight: 300;
          font-size: clamp(40px, 6vw, 96px);
          line-height: 0.95;
          letter-spacing: -0.03em;
        }
        .outcomes-h .split-line {
          padding-right: 0.12em;
        }

        /* Video grid */
        .video-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .video-card {
          display: flex;
          flex-direction: column;
          gap: 0;
          cursor: pointer;
        }
        .video-thumb {
          position: relative;
          aspect-ratio: 9 / 11;
          border-radius: 4px;
          overflow: hidden;
          background: var(--navy);
          transition: transform var(--t-base) var(--ease-out);
        }
        .video-thumb img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center top;
        }
        .video-card:hover .video-thumb { transform: scale(1.02); }
        .video-play {
          position: absolute; inset: 0;
          display: grid; place-items: center;
          z-index: 2;
        }
        .video-play-btn {
          width: 56px; height: 56px;
          border-radius: 50%;
          background: color-mix(in oklch, var(--porcelain) 16%, transparent);
          border: 1px solid color-mix(in oklch, var(--porcelain) 30%, transparent);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: grid; place-items: center;
          color: var(--porcelain);
          transition: background var(--t-base) var(--ease-out), transform var(--t-base) var(--ease-out);
        }
        .video-card:hover .video-play-btn {
          background: var(--accent);
          transform: scale(1.08);
        }
        .video-play-btn svg { transform: translateX(1px); }
        .video-len {
          position: absolute;
          bottom: 12px; right: 12px;
          font-family: var(--mono);
          font-size: 10.5px;
          letter-spacing: 0.1em;
          padding: 5px 9px;
          background: color-mix(in oklch, var(--ink) 60%, transparent);
          backdrop-filter: blur(6px);
          border-radius: 2px;
          color: color-mix(in oklch, var(--porcelain) 85%, transparent);
        }
        .video-info {
          padding: 18px 0 0;
          border-top: 1px solid color-mix(in oklch, var(--porcelain) 14%, transparent);
          margin-top: 16px;
        }
        .video-name {
          font-family: var(--display);
          font-size: clamp(18px, 1.5vw, 22px);
          letter-spacing: -0.015em;
          margin-bottom: 4px;
        }
        .video-note {
          font-family: var(--mono);
          font-size: 10.5px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: color-mix(in oklch, var(--porcelain) 55%, transparent);
          margin-bottom: 10px;
        }
        .video-quote {
          font-size: 14.5px;
          line-height: 1.5;
          color: color-mix(in oklch, var(--porcelain) 75%, transparent);
          font-style: italic;
        }

        @media (max-width: 880px) {
          .outcomes-head { grid-template-columns: 1fr; gap: 24px; }
          .outcomes-meta { justify-self: start; align-self: start; }
          .video-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
        }
      `}</style>

      <div className="container">
        <div className="outcomes-head">
          <div>
            <Reveal><div className="outcomes-eyebrow"><span className="dot" aria-hidden /><span>Patient Stories</span></div></Reveal>
            <span className="outcomes-h">
              <SplitText delayBase={60}>Real patients.</SplitText>
              <br />
              <SplitText delayBase={60} startDelay={120}>Real outcomes.</SplitText>
              <br />
              <SplitText delayBase={60} startDelay={240} style={{ fontStyle: "italic", color: "var(--accent-soft)" }}>Their words.</SplitText>
            </span>
          </div>
          <Reveal delay={300} className="outcomes-meta">
            Every story below is a Transformation Day patient — permanent teeth
            placed by Dr. Young, same day as surgery.
          </Reveal>
        </div>

        <div className="video-grid">
          {videos.map((v, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="video-card" data-cursor="hover">
                <div className="video-thumb">
                  <img src={v.img} alt={v.name} />
                  <div className="video-play">
                    <button className="video-play-btn" aria-label={`Play ${v.name}'s story`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l14 8-14 8z"/></svg>
                    </button>
                  </div>
                  <span className="video-len">{v.length}</span>
                  <span className="grain" />
                </div>
                <div className="video-info">
                  <div className="video-name">{v.name}, {v.age} — {v.location}</div>
                  <div className="video-note">{v.note}</div>
                  <div className="video-quote">"{v.quote}"</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>


      </div>
    </section>
  );
}
window.Outcomes = Outcomes;
