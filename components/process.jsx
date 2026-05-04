/* ---------- Process (Patient Journey) ---------- */
function Process() {
  const steps = [
    {
      n: "01",
      title: "Consultation",
      sub: "Free · 60 minutes · With Dr. Young",
      body: "A 3D CT scan, a digital scan of your face, and an AI-generated preview of your new smile. You meet directly with the surgeon — not a salesperson — to walk through what's possible.",
      tag: "DAY 01",
      img: "assets/step-consultation.jpg"
    },
    {
      n: "02",
      title: "Smile Design",
      sub: "Digital · Pre-surgical planning",
      body: "We design your new teeth and the position of every implant before you ever come in for surgery. Predictability begins long before Transformation Day.",
      tag: "WEEKS 01–02",
      img: "assets/step-design.jpg"
    },
    {
      n: "03",
      title: "Transformation Day",
      sub: "Surgical · Under general anesthesia",
      body: "Implants placed and a full set of fixed teeth attached the same day, while you sleep. An MD anesthesiologist monitors every minute of the procedure.",
      tag: "DAY 01 · IN-OFFICE",
      img: "assets/step-surgery.jpg"
    },
    {
      n: "04",
      title: "Healing & Prototype",
      sub: "Follow-ups over 4–6 months",
      body: "A prototype set lets us refine the bite, the lip support, the smile line — making sure your final teeth fit your face and your life perfectly.",
      tag: "MONTHS 01–06",
      img: "assets/step-prototype.jpg"
    },
    {
      n: "05",
      title: "Forever Smiles Teeth",
      sub: "Final · Full-arch zirconia",
      body: "Your permanent restoration: monolithic zirconia, hand-finished, designed to last. Strong enough to eat anything. Beautiful enough to forget they're not what you were born with.",
      tag: "MONTH 06",
      img: "assets/step-lab.jpg"
    },
    {
      n: "06",
      title: "Forever Smiles Protection",
      sub: "Long-term · Lifetime care",
      body: "Annual maintenance, hygiene, and warranty support — so your investment, and your smile, are protected for life.",
      tag: "YEARS 01+",
      img: "assets/step-care.jpg"
    },
  ];

  const [active, setActive] = React.useState(0);

  return (
    <section id="process" className="process sec">
      <style>{`
        .process { background: var(--porcelain); }
        .process-head {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 24px 32px;
          align-items: end;
          margin-bottom: 64px;
        }
        .process-head > div:first-child {
          grid-column: 1 / -1;
        }
        .process-head > .lede {
          grid-column: 1 / 2;
          grid-row: 2;
        }
        .process-h {
          font-family: var(--display);
          font-weight: 300;
          font-size: clamp(40px, 5.4vw, 84px);
          line-height: 0.96;
          letter-spacing: -0.03em;
        }
        .process-h em { font-style: italic; color: var(--accent); }
        .process-stage {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 64px;
          align-items: start;
        }
        .step-list {
          display: grid;
          gap: 0;
          border-top: 1px solid var(--line);
        }
        .step {
          display: grid;
          grid-template-columns: 60px 1fr auto;
          gap: 24px;
          padding: 26px 4px;
          border-bottom: 1px solid var(--line);
          align-items: center;
          cursor: pointer;
          transition: padding-left var(--t-base) var(--ease-out), background var(--t-base) var(--ease-out);
          position: relative;
        }
        .step::before {
          content: ""; position: absolute;
          left: 0; top: 0; bottom: 0; width: 2px;
          background: var(--accent);
          transform: scaleY(0); transform-origin: top;
          transition: transform var(--t-base) var(--ease-out);
        }
        .step.active::before { transform: scaleY(1); }
        .step.active { padding-left: 18px; }
        .step .n {
          font-family: var(--mono);
          font-size: 11.5px; letter-spacing: 0.1em;
          color: var(--grey);
        }
        .step.active .n { color: var(--accent); }
        .step .title {
          font-family: var(--display);
          font-weight: 400;
          font-size: clamp(20px, 1.7vw, 26px);
          letter-spacing: -0.015em;
          line-height: 1.15;
        }
        .step .sub {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--grey);
          margin-top: 4px;
        }
        .step .arrow {
          opacity: 0.4;
          transition: opacity var(--t-fast) var(--ease-out), transform var(--t-fast) var(--ease-out);
        }
        .step.active .arrow { opacity: 1; transform: translateX(4px); }
        .step:hover .arrow { opacity: 1; transform: translateX(4px); }
        .step-detail {
          position: sticky; top: 110px;
          background: var(--bone);
          border-radius: 4px;
          border: 1px solid var(--line);
          overflow: hidden;
        }
        .step-media {
          width: 100%;
          height: 280px;
          aspect-ratio: auto;
          border-radius: 0;
          border-bottom: 1px solid var(--line);
        }
        .step-detail-body {
          padding: 28px;
        }
        .step-detail-tag {
          font-family: var(--mono);
          font-size: 10.5px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 12px;
        }
        .step-detail-title {
          font-family: var(--display);
          font-size: clamp(28px, 3vw, 44px);
          letter-spacing: -0.02em;
          margin-bottom: 12px;
          line-height: 1.05;
        }
        .step-detail-sub {
          font-family: var(--mono);
          font-size: 12px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--grey);
          margin-bottom: 20px;
        }
        .step-detail-body p {
          font-size: 16.5px;
          line-height: 1.55;
          color: var(--navy-soft);
        }
        @media (max-width: 880px) {
          .process-head { grid-template-columns: 1fr; }
          .process-stage { grid-template-columns: 1fr; }
          .step-detail-aside { display: none; }
          .step-detail-inline {
            display: block;
            background: var(--bone);
            border-radius: 4px;
            border: 1px solid var(--line);
            overflow: hidden;
            margin: 0 0 2px;
          }
          .step-detail-inline .step-media {
            width: 100%;
            height: 200px;
            aspect-ratio: auto;
            border-radius: 0;
            border-bottom: 1px solid var(--line);
            object-fit: cover;
          }
          .step-detail-inline .step-detail-body { padding: 20px; }
        }
        @media (min-width: 881px) {
          .step-detail-inline { display: none; }
          .step-detail-aside { display: block; }
        }
      `}</style>

      <div className="container">
        <div className="process-head">
          <div>
            <Reveal>
              <div className="eyebrow"><span className="dot" />The Patient Journey</div>
            </Reveal>
            <SplitText className="process-h" delayBase={50}>
              Six steps. One outcome. <em>Predictable.</em>
            </SplitText>
          </div>
          <Reveal delay={300}>
            <p className="lede" style={{ maxWidth: "42ch" }}>
              From the first call to the day you forget your teeth aren't what you were born with —
              every step is choreographed by the same surgical team, under one roof.
            </p>
          </Reveal>
        </div>

        <div className="process-stage">
          <div className="step-list">
            {steps.map((s, i) => (
              <React.Fragment key={i}>
                <div
                  className={`step ${i === active ? "active" : ""}`}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  data-cursor="hover"
                >
                  <span className="n">{s.n}</span>
                  <div>
                    <div className="title">{s.title}</div>
                    <div className="sub">{s.sub}</div>
                  </div>
                  <span className="arrow">
                    <ArrowRight />
                  </span>
                </div>
                {i === active && (
                  <div className="step-detail-inline">
                    <img src={s.img} alt={s.title} className="step-media" />
                    <div className="step-detail-body">
                      <div className="step-detail-tag">{s.tag}</div>
                      <div className="step-detail-title">{s.title}</div>
                      <div className="step-detail-sub">{s.sub}</div>
                      <p>{s.body}</p>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="step-detail step-detail-aside">
            <img
              key={`m-${active}`}
              src={steps[active].img}
              alt={steps[active].title}
              className="step-media"
              style={{ objectFit: "cover" }}
            />
            <div className="step-detail-body" key={active}>
              <div className="step-detail-tag">{steps[active].tag}</div>
              <div className="step-detail-title">{steps[active].title}</div>
              <div className="step-detail-sub">{steps[active].sub}</div>
              <p>{steps[active].body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Process = Process;
