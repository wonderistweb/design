/* ---------- App root ---------- */
function Cursor() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    let raf, x = window.innerWidth / 2, y = window.innerHeight / 2, tx = x, ty = y;
    const onMove = (e) => { tx = e.clientX; ty = e.clientY; };
    const onOver = (e) => {
      const t = e.target.closest("[data-cursor='hover'], button, a");
      if (t) el.classList.add("is-hover");
      else el.classList.remove("is-hover");
    };
    const tick = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      el.style.left = x + "px";
      el.style.top = y + "px";
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);
  return <div className="cursor" ref={ref} aria-hidden></div>;
}

function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <Marquee />
      <PromiseSection />
      <Outcomes />
      <Surgeon />
      <Process />
      <Why />
      <Testimonial />
      <Finance />
      <FAQ />
      <CTA />
      <Footer />
      <FSTweaks />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
