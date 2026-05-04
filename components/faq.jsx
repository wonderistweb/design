/* ---------- FAQ ---------- */
function FAQ() {
  const items = [
    { q: "Am I a candidate if I've been told no elsewhere?", a: "Often, yes. Dr. Young specializes in advanced surgical techniques — zygomatic, pterygoid, and transnasal implants — that allow us to restore patients who have severe bone loss without months of grafting. Many patients come to us after being turned away by other centers." },
    { q: "How is this different from ClearChoice or Nuvia?", a: "Both rely on salespeople for consultations and general dentists for surgery. At Forever Smiles, you sit with Dr. Young — a residency-trained surgical specialist — for up to an hour during your free consult. He plans, he performs, and he follows your case from start to finish." },
    { q: "Will I really get teeth the same day?", a: "Yes. Transformation Day includes implant placement and a full set of fixed teeth, all under general anesthesia. You go home that evening with a smile that works — eating, talking, and looking like teeth you were born with." },
    { q: "Is the surgery painful?", a: "You're under general anesthesia for the entire procedure, monitored by an MD anesthesiologist. Most patients describe recovery as far easier than they expected — typically 2–3 days of swelling and over-the-counter pain management." },
    { q: "How long does it last?", a: "The implants themselves are designed to be permanent. Your final zirconia teeth — the Forever Smiles set — are exceptionally durable. Our long-term Forever Smiles Protection plan covers maintenance and care for years to come." },
    { q: "Do you accept insurance?", a: "We are a fee-for-service practice and do not accept insurance directly. Most patients finance through one of our seven lending partners. We'll provide documentation for any out-of-network insurance reimbursement you may pursue." },
  ];
  const [open, setOpen] = React.useState(0);

  return (
    <section className="faq sec">
      <style>{`
        .faq { background: var(--bone); }
        .faq-grid {
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: clamp(40px, 5vw, 80px);
          align-items: start;
        }
        .faq-head {
          grid-column: 1 / -1;
          display: grid;
          grid-template-columns: 5fr 7fr;
          gap: clamp(40px, 5vw, 80px);
          align-items: end;
          margin-bottom: 8px;
        }
        .faq-head-title { /* heading side */ }
        .faq-head-cta { /* cta side */ }
        .faq-h {
          font-family: var(--display);
          font-weight: 300;
          font-size: clamp(36px, 4.6vw, 64px);
          line-height: 1.0;
          letter-spacing: -0.03em;
          margin-bottom: 24px;

        }
        .faq-list {
          border-top: 1px solid var(--line);
        }
        .faq-row {
          border-bottom: 1px solid var(--line);
        }
        .faq-q {
          width: 100%;
          padding: 28px 0;
          display: grid;
          grid-template-columns: 36px 1fr 36px;
          gap: 18px;
          align-items: center;
          text-align: left;
          font-family: var(--display);
          font-size: clamp(20px, 1.7vw, 26px);
          letter-spacing: -0.015em;
          color: var(--ink);
          transition: padding-left var(--t-base) var(--ease-out);
        }
        .faq-q .num {
          font-family: var(--mono);
          font-size: 11.5px;
          letter-spacing: 0.1em;
          color: var(--grey);
        }
        .faq-row.open .faq-q { padding-left: 12px; }
        .faq-row.open .num { color: var(--accent); }
        .faq-a {
          overflow: hidden;
          max-height: 0;
          transition: max-height 600ms var(--ease-out), padding 600ms var(--ease-out);
        }
        .faq-row.open .faq-a {
          max-height: 600px;
          padding-bottom: 28px;
          padding-left: 64px;
          padding-right: 36px;
        }
        .faq-a p {
          font-size: 16px;
          line-height: 1.6;
          color: var(--navy-soft);
          max-width: 60ch;
        }
        @media (max-width: 880px) {
          .faq-grid { grid-template-columns: 1fr; }
          .faq-head { grid-template-columns: 1fr; }
          .faq-row.open .faq-a { padding-left: 36px; }
        }
      `}</style>

      <div className="container">
        <div className="faq-grid">
          <div className="faq-head">
            <div className="faq-head-title">
              <Reveal>
                <div className="eyebrow"><span className="dot" />Questions, answered</div>
              </Reveal>
              <SplitText className="faq-h" delayBase={50}>
                Everything you'd ask in the consult.
              </SplitText>
            </div>
            <div className="faq-head-cta">
              <Reveal delay={250}>
                <p className="body" style={{ maxWidth: "36ch" }}>
                  Don't see your question? We answer the phones 9–5. A human will pick up.
                </p>
                <a href="tel:9044142320" className="btn" data-cursor="hover" style={{ marginTop: 24 }}>
                  Call (904) 414-2320
                  <ArrowRight />
                </a>
              </Reveal>
            </div>
          </div>

          <div className="faq-list" style={{ gridColumn: "1 / -1" }}>
            {items.map((it, i) => (
              <div key={i} className={`faq-row ${i === open ? "open" : ""}`}>
                <Reveal delay={i * 60}>
                  <button className="faq-q" onClick={() => setOpen(i === open ? -1 : i)} data-cursor="hover">
                    <span className="num">{String(i + 1).padStart(2, "0")}</span>
                    <span>{it.q}</span>
                    <Plus open={i === open} />
                  </button>
                  <div className="faq-a">
                    <p>{it.a}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.FAQ = FAQ;
