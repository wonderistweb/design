/* ---------- Tweaks ---------- */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentHue": 240,
  "accentChroma": 0.13,
  "headlineWeight": 300,
  "headlineItalicAccent": true,
  "density": "balanced",
  "rail": true,
  "magneticCursor": false,
  "marquee": true,
  "grain": true,
  "heroVariant": "default"
}/*EDITMODE-END*/;

function applyTweakStyles(t) {
  const r = document.documentElement.style;
  r.setProperty("--accent", `oklch(0.68 ${t.accentChroma} ${t.accentHue})`);
  r.setProperty("--accent-soft", `oklch(0.88 ${Math.max(0.04, t.accentChroma * 0.4)} ${t.accentHue})`);
  document.body.dataset.density = t.density;
  document.body.dataset.rail = t.rail ? "1" : "0";
  document.body.dataset.cursor = t.magneticCursor ? "1" : "0";
  document.body.dataset.marquee = t.marquee ? "1" : "0";
  document.body.dataset.grain = t.grain ? "1" : "0";
  document.body.dataset.italic = t.headlineItalicAccent ? "1" : "0";
  document.body.dataset.hero = t.heroVariant;
  r.setProperty("--display-weight", String(t.headlineWeight));
}

// Inject density / toggle CSS once
(function injectTweakCSS(){
  if (document.getElementById("__fs_tweak_css")) return;
  const s = document.createElement("style");
  s.id = "__fs_tweak_css";
  s.textContent = `
    body[data-density="compact"] .sec { padding-block: clamp(56px, 6vw, 110px); }
    body[data-density="airy"] .sec { padding-block: clamp(110px, 12vw, 200px); }

    /* Italic accent off → restore default color */
    body[data-italic="0"] .hero-title em,
    body[data-italic="0"] .promise-h em,
    body[data-italic="0"] .outcomes-h em,
    body[data-italic="0"] .why-h em,
    body[data-italic="0"] .cta-h em,
    body[data-italic="0"] .surgeon-h em,
    body[data-italic="0"] .process-h em,
    body[data-italic="0"] .finance-h em,
    body[data-italic="0"] .foot-mark em {
      color: inherit; font-style: normal;
    }

    /* Cursor */
    body[data-cursor="0"] .cursor { display: none; }

    /* Marquee */
    body[data-marquee="0"] .marquee-sec { display: none; }

    /* Grain */
    body[data-grain="0"] .grain { display: none; }

    /* Hero variant: light */
    body[data-hero="light"] .hero { background: var(--bone); color: var(--ink); }
    body[data-hero="light"] .hero-veil {
      background:
        linear-gradient(180deg, transparent 0%, transparent 55%, color-mix(in oklch, var(--bone) 80%, transparent) 100%);
    }
    body[data-hero="light"] .media {
      background:
        repeating-linear-gradient(135deg,
          var(--paper), var(--paper) 14px,
          var(--bone) 14px, var(--bone) 28px);
      color: var(--navy);
    }
    body[data-hero="light"] .hero-eyebrow,
    body[data-hero="light"] .hero-foot-lede,
    body[data-hero="light"] .hero-meta,
    body[data-hero="light"] .hero-stat-label { color: var(--navy-soft); }
    body[data-hero="light"] .scroll-cue { color: var(--navy-soft); }
    body[data-hero="light"] .pill-btn { color: var(--ink); border-color: color-mix(in oklch, var(--ink) 22%, transparent); background: color-mix(in oklch, var(--ink) 6%, transparent); }
    body[data-hero="light"] .pill-btn:hover { color: var(--porcelain); background: var(--ink); }
    body[data-hero="light"] .hero-foot { border-top-color: color-mix(in oklch, var(--ink) 18%, transparent); }
    body[data-hero="light"] .placeholder-tag { background: color-mix(in oklch, var(--navy) 86%, transparent); color: var(--porcelain); }

    /* Editorial hero: serif italic display weight feel */
    body[data-hero="editorial"] .hero-title { font-family: "Bricolage Grotesque"; font-style: italic; font-weight: 300; }
    body[data-hero="editorial"] .promise-h em,
    body[data-hero="editorial"] .outcomes-h em { font-style: normal; }

    /* Display weight */
    .hero-title, .promise-h, .outcomes-h, .surgeon-h,
    .process-h, .why-h, .cta-h, .finance-h, .faq-h, .foot-mark {
      font-weight: var(--display-weight, 300);
    }

    /* Hide rail-style numbered eyebrows */
    body[data-rail="0"] .promise-eyebrow,
    body[data-rail="0"] .outcomes-eyebrow,
    body[data-rail="0"] .surgeon-eyebrow,
    body[data-rail="0"] .story-eyebrow,
    body[data-rail="0"] .eyebrow { display: none; }
  `;
  document.head.appendChild(s);
})();

function FSTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => { applyTweakStyles(t); }, [
    t.accentHue, t.accentChroma, t.headlineWeight, t.headlineItalicAccent,
    t.density, t.rail, t.magneticCursor, t.marquee, t.grain, t.heroVariant
  ]);

  return (
    <TweaksPanel title="Tweaks · FSIC">
      <TweakSection label="Brand color" />
      <TweakSlider label="Accent hue" value={t.accentHue} min={180} max={310} step={1}
        onChange={(v) => setTweak("accentHue", v)} unit="°" />
      <TweakSlider label="Accent chroma" value={t.accentChroma} min={0.02} max={0.22} step={0.01}
        onChange={(v) => setTweak("accentChroma", v)} />

      <TweakSection label="Hero" />
      <TweakRadio label="Variant" value={t.heroVariant}
        options={["default", "light", "editorial"]}
        onChange={(v) => setTweak("heroVariant", v)} />

      <TweakSection label="Typography" />
      <TweakRadio label="Display weight" value={String(t.headlineWeight)}
        options={["200", "300", "400"]}
        onChange={(v) => setTweak("headlineWeight", parseInt(v, 10))} />
      <TweakToggle label="Italic accent words" value={t.headlineItalicAccent}
        onChange={(v) => setTweak("headlineItalicAccent", v)} />

      <TweakSection label="Layout" />
      <TweakRadio label="Density" value={t.density}
        options={["compact", "balanced", "airy"]}
        onChange={(v) => setTweak("density", v)} />
      <TweakToggle label="Section rail labels" value={t.rail}
        onChange={(v) => setTweak("rail", v)} />

      <TweakSection label="Motion & FX" />
      <TweakToggle label="Magnetic cursor" value={t.magneticCursor}
        onChange={(v) => setTweak("magneticCursor", v)} />
      <TweakToggle label="Credentials marquee" value={t.marquee}
        onChange={(v) => setTweak("marquee", v)} />
      <TweakToggle label="Image grain overlay" value={t.grain}
        onChange={(v) => setTweak("grain", v)} />
    </TweaksPanel>
  );
}

window.FSTweaks = FSTweaks;
