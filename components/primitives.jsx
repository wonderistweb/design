/* ---------- Shared primitives ---------- */

/** Reveal hook: observes the element and adds .is-in once visible */
function useReveal(once = true) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          if (once) io.unobserve(e.target);
        } else if (!once) {
          e.target.classList.remove("is-in");
        }
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [once]);
  return ref;
}

/** Animated number counter */
function Counter({ to, duration = 1800, prefix = "", suffix = "", decimals = 0 }) {
  const [v, setV] = React.useState(0);
  const ref = React.useRef(null);
  const started = React.useRef(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setV(eased * to);
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  const formatted = decimals > 0
    ? v.toFixed(decimals)
    : Math.round(v).toLocaleString("en-US");
  return <span ref={ref}>{prefix}{formatted}{suffix}</span>;
}

/** Split-text headline. Each word gets its own .split-line wrapper */
function SplitText({ children, className = "", as: As = "span", delayBase = 60, startDelay = 0, ...rest }) {
  const ref = useReveal();
  const words = React.Children.toArray(children).flatMap((child) => {
    if (typeof child === "string") return child.split(/(\s+)/);
    return [child];
  });
  return (
    <As ref={ref} className={className} {...rest}>
      {words.map((w, i) => {
        if (typeof w !== "string") return <React.Fragment key={i}>{w}</React.Fragment>;
        if (/^\s+$/.test(w)) return <React.Fragment key={i}>{w}</React.Fragment>;
        return (
          <span key={i} className="split-line">
            <span style={{ "--split-delay": `${startDelay + i * delayBase}ms` }}>{w}</span>
          </span>
        );
      })}
    </As>
  );
}

/** Reveal wrapper */
function Reveal({ children, as: As = "div", delay = 0, kind, className = "", ...rest }) {
  const ref = useReveal();
  return (
    <As
      ref={ref}
      data-reveal={kind ?? true}
      style={{ "--reveal-delay": `${delay}ms`, ...(rest.style || {}) }}
      className={className}
      {...rest}
    >
      {children}
    </As>
  );
}

/** Striped media placeholder with caption */
function MediaPlaceholder({ tag, ratio = "16 / 9", variant = "navy", play = false, children, style = {}, className = "" }) {
  return (
    <div
      className={`media ${variant === "bone" ? "media--bone" : ""} ${className}`}
      style={{ aspectRatio: ratio, ...style }}
    >
      {play && <button className="play-btn" aria-label="Play">{""}</button>}
      <span className="grain"></span>
      {tag && <span className="placeholder-tag">{tag}</span>}
      {children}
    </div>
  );
}

/** Magnetic / cursor-aware button (tilts toward cursor) */
function MagneticButton({ children, className = "btn", strength = 0.3, ...rest }) {
  const ref = React.useRef(null);
  const onMove = (e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * strength;
    const y = (e.clientY - r.top - r.height / 2) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const onLeave = () => {
    const el = ref.current; if (!el) return;
    el.style.transform = "translate(0,0)";
  };
  return (
    <button
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-cursor="hover"
      {...rest}
    >
      {children}
    </button>
  );
}

function ArrowRight({ size = 14 }) {
  return (
    <svg className="btn-arrow" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Plus({ open }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" style={{ transition: "transform 400ms var(--ease-out)", transform: open ? "rotate(45deg)" : "rotate(0)" }}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

Object.assign(window, { useReveal, Counter, SplitText, Reveal, MediaPlaceholder, MagneticButton, ArrowRight, Plus });
