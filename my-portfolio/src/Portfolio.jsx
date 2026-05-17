import { useState, useEffect, useRef } from "react";

/* ── ReactBits-inspired effects implemented in vanilla React/CSS ──
   Aurora background · BlurText reveal · SplitText hero · GradientText
   ShinyText · ClickSpark · ScrollReveal · GlowCard · AnimatedCounter
   TiltCard · Typewriter · StarBorder · MagneticButton ── */

/* ── AURORA BACKGROUND (ReactBits Aurora CSS-only) ── */
function Aurora({
  colors = ["#a78bfa", "#f472b6", "#34d399", "#60a5fa"],
  blur = 80,
}) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <style>{`
        @keyframes aurora1 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(6%,4%) scale(1.1)} 66%{transform:translate(-4%,7%) scale(0.95)} }
        @keyframes aurora2 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(-8%,-4%) scale(1.08)} 66%{transform:translate(5%,-6%) scale(1.05)} }
        @keyframes aurora3 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(4%,-5%) scale(0.92)} 66%{transform:translate(-5%,3%) scale(1.07)} }
        @keyframes aurora4 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(-3%,6%) scale(1.06)} 66%{transform:translate(7%,-3%) scale(0.96)} }
      `}</style>
      {[
        {
          color: colors[0],
          top: "10%",
          left: "15%",
          w: "55vw",
          h: "55vw",
          anim: "aurora1 16s ease-in-out infinite",
        },
        {
          color: colors[1],
          top: "40%",
          right: "10%",
          w: "50vw",
          h: "50vw",
          anim: "aurora2 19s ease-in-out infinite",
        },
        {
          color: colors[2],
          bottom: "5%",
          left: "25%",
          w: "45vw",
          h: "45vw",
          anim: "aurora3 22s ease-in-out infinite",
        },
        {
          color: colors[3],
          top: "5%",
          right: "20%",
          w: "40vw",
          h: "40vw",
          anim: "aurora4 14s ease-in-out infinite",
        },
      ].map((b, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: b.top,
            left: b.left,
            right: b.right,
            bottom: b.bottom,
            width: b.w,
            height: b.h,
            borderRadius: "50%",
            background: `radial-gradient(circle at 40% 40%, ${b.color}55 0%, ${b.color}22 50%, transparent 70%)`,
            filter: `blur(${blur}px)`,
            animation: b.anim,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}

/* ── BLUR TEXT (ReactBits BlurText) ── */
function BlurText({ text, delay = 0, stagger = 60, className = "" }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  const words = text.split(" ");
  return (
    <span className={className} ref={ref} style={{ display: "inline" }}>
      <style>{`@keyframes blurIn{from{opacity:0;filter:blur(12px);transform:translateY(10px)}to{opacity:1;filter:blur(0);transform:translateY(0)}}`}</style>
      {words.map((w, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            marginRight: "0.28em",
            animation: visible ? `blurIn 0.6s ease forwards` : "none",
            animationDelay: visible ? `${i * stagger}ms` : "0ms",
            opacity: visible ? undefined : 0,
          }}
        >
          {w}
        </span>
      ))}
    </span>
  );
}

/* ── GRADIENT TEXT (ReactBits GradientText) ── */
function GradientText({
  children,
  from = "#a78bfa",
  to = "#f472b6",
  animate = true,
}) {
  return (
    <span
      style={{
        background: `linear-gradient(135deg, ${from}, ${to}, ${from})`,
        backgroundSize: "200% 200%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        animation: animate ? "gradShift 4s ease infinite" : "none",
        display: "inline",
      }}
    >
      <style>{`@keyframes gradShift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}`}</style>
      {children}
    </span>
  );
}

/* ── SHINY TEXT (ReactBits ShinyText) ── */
function ShinyText({ children, color = "#e2e8f0" }) {
  return (
    <span
      style={{
        position: "relative",
        display: "inline-block",
        color,
        overflow: "hidden",
      }}
    >
      <style>{`@keyframes shine{0%{left:-100%}100%{left:150%}}`}</style>
      {children}
      <span
        style={{
          position: "absolute",
          top: 0,
          left: "-100%",
          width: "60%",
          height: "100%",
          background:
            "linear-gradient(90deg,transparent,rgba(255,255,255,0.35),transparent)",
          animation: "shine 2.8s ease-in-out infinite",
          transform: "skewX(-20deg)",
        }}
      />
    </span>
  );
}

/* ── CLICK SPARK (ReactBits ClickSpark) ── */
function ClickSpark({ children, sparkColor = "#f472b6", sparkCount = 10 }) {
  const [sparks, setSparks] = useState([]);
  const fire = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left,
      y = e.clientY - rect.top;
    const id = Date.now();
    const newSparks = Array.from({ length: sparkCount }, (_, i) => ({
      id: `${id}-${i}`,
      x,
      y,
      angle: (360 / sparkCount) * i,
      dist: 30 + Math.random() * 30,
    }));
    setSparks((s) => [...s, ...newSparks]);
    setTimeout(
      () => setSparks((s) => s.filter((sp) => !newSparks.includes(sp))),
      700,
    );
  };
  return (
    <span
      style={{ position: "relative", display: "inline-block" }}
      onClick={fire}
    >
      <style>{`@keyframes sparkFly{0%{opacity:1;transform:translate(var(--sx),var(--sy)) scale(1)}100%{opacity:0;transform:translate(calc(var(--sx)*2.5),calc(var(--sy)*2.5)) scale(0)}}`}</style>
      {children}
      {sparks.map((sp) => (
        <span
          key={sp.id}
          style={{
            position: "absolute",
            left: sp.x,
            top: sp.y,
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: sparkColor,
            "--sx": `${Math.cos((sp.angle * Math.PI) / 180) * sp.dist}px`,
            "--sy": `${Math.sin((sp.angle * Math.PI) / 180) * sp.dist}px`,
            animation: "sparkFly 0.6s ease-out forwards",
            pointerEvents: "none",
            zIndex: 999,
          }}
        />
      ))}
    </span>
  );
}

/* ── SCROLL REVEAL (ReactBits ScrollReveal) ── */
function ScrollReveal({ children, delay = 0, direction = "up" }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const from =
    direction === "up"
      ? "translateY(32px)"
      : direction === "left"
        ? "translateX(-32px)"
        : direction === "right"
          ? "translateX(32px)"
          : "translateY(-32px)";
  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : from,
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ── GLOW CARD (ReactBits GlowingCard) ── */
function GlowCard({
  children,
  glowColor = "rgba(167,139,250,0.25)",
  style = {},
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hov, setHov] = useState(false);
  const ref = useRef(null);
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };
  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        transition: "border-color 0.3s, transform 0.2s",
        transform: hov ? "translateY(-3px)" : "translateY(0)",
        borderColor: hov ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.08)",
        ...style,
      }}
    >
      {hov && (
        <div
          style={{
            position: "absolute",
            pointerEvents: "none",
            zIndex: 0,
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
            left: pos.x - 140,
            top: pos.y - 140,
            transition: "opacity 0.2s",
          }}
        />
      )}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}

/* ── ANIMATED COUNTER (ReactBits CountUp) ── */
function CountUp({ to, suffix = "", duration = 1800 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const p = Math.min((Date.now() - start) / duration, 1);
            setVal(Math.round(p * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to, duration]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

/* ── STAR BORDER (ReactBits StarBorder) ── */
function StarBorder({ children, color = "#a78bfa", speed = "4s", style = {} }) {
  return (
    <div
      style={{
        position: "relative",
        display: "inline-flex",
        borderRadius: 8,
        ...style,
      }}
    >
      <style>{`
        @keyframes starMove{0%{offset-distance:0%}100%{offset-distance:100%}}
        @keyframes starMove2{0%{offset-distance:50%}100%{offset-distance:150%}}
      `}</style>
      <div
        style={{
          position: "absolute",
          inset: -1,
          borderRadius: 8,
          background: "transparent",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: `conic-gradient(from 0deg, transparent 0%, ${color} 5%, transparent 10%)`,
            animation: `starMove ${speed} linear infinite`,
            borderRadius: 8,
          }}
        />
      </div>
      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
        {children}
      </div>
    </div>
  );
}

/* ── TILT CARD (ReactBits TiltCard) ── */
function TiltCard({ children, style = {} }) {
  const ref = useRef(null);
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(800px) rotateX(${-y * 12}deg) rotateY(${x * 12}deg) scale(1.02)`;
  };
  const reset = () => {
    ref.current.style.transform =
      "perspective(800px) rotateX(0) rotateY(0) scale(1)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={reset}
      style={{ transition: "transform 0.15s ease", ...style }}
    >
      {children}
    </div>
  );
}

/* ── TYPEWRITER ── */
function Typewriter({ texts, speed = 80, pause = 2000 }) {
  const [idx, setIdx] = useState(0);
  const [chars, setChars] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const cur = texts[idx];
    if (!del && chars < cur.length) {
      const t = setTimeout(() => setChars((c) => c + 1), speed);
      return () => clearTimeout(t);
    } else if (!del && chars === cur.length) {
      const t = setTimeout(() => setDel(true), pause);
      return () => clearTimeout(t);
    } else if (del && chars > 0) {
      const t = setTimeout(() => setChars((c) => c - 1), speed / 2);
      return () => clearTimeout(t);
    } else if (del && chars === 0) {
      setDel(false);
      setIdx((i) => (i + 1) % texts.length);
    }
  }, [chars, del, idx, texts, speed, pause]);
  return (
    <span>
      {texts[idx].slice(0, chars)}
      <span style={{ opacity: 0.7, animation: "blink 1s step-end infinite" }}>
        |
      </span>
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
    </span>
  );
}

/* ═══════════════════════════════════════════════
   MAIN PORTFOLIO COMPONENT
═══════════════════════════════════════════════ */
export default function Portfolio() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  };

  const navLinks = [
    "about",
    "education",
    "skills",
    "experience",
    "projects",
    "contact",
  ];

  /* ── palette ── */
  const P = {
    bg: "#07060f",
    surface: "#0f0d1a",
    surface2: "#16132a",
    border: "rgba(167,139,250,0.12)",
    borderHov: "rgba(167,139,250,0.28)",
    text: "#f0edfb",
    muted: "rgba(240,237,251,0.55)",
    dim: "rgba(240,237,251,0.28)",
    purple: "#a78bfa",
    pink: "#f472b6",
    teal: "#34d399",
    amber: "#fbbf24",
    mono: "'DM Mono', 'Courier New', monospace",
    display: "'Syne', sans-serif",
  };

  const tag = (label) => (
    <span
      style={{
        fontFamily: P.mono,
        fontSize: 11,
        color: P.purple,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 16,
      }}
    >
      {label}
      <span
        style={{ flex: 1, maxWidth: 48, height: 1, background: P.border }}
      />
    </span>
  );

  const sectionTitle = (t) => (
    <h2
      style={{
        fontSize: "clamp(26px,4vw,40px)",
        fontWeight: 700,
        letterSpacing: "-0.025em",
        lineHeight: 1.1,
        marginBottom: 16,
        color: P.text,
      }}
    >
      {t}
    </h2>
  );

  return (
    <div
      style={{
        background: P.bg,
        color: P.text,
        fontFamily: P.display,
        fontSize: 15,
        lineHeight: 1.6,
        overflowX: "hidden",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Syne:wght@400;600;700;800&display=swap');
        * { box-sizing: border-box; margin:0; padding:0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width:6px; } ::-webkit-scrollbar-track { background:${P.bg}; }
        ::-webkit-scrollbar-thumb { background:rgba(167,139,250,0.4); border-radius:3px; }
        a { color: inherit; text-decoration: none; }
        @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes pulse-green { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.8)} }
        @keyframes spin { to{transform:rotate(360deg)} }
        @keyframes navIn { from{opacity:0;transform:translateY(-8px)} to{opacity:1;transform:translateY(0)} }
        .nav-link-item { transition: color 0.2s; }
        .nav-link-item:hover { color: ${P.text} !important; }
        .project-card:hover { border-color: rgba(167,139,250,0.3) !important; }
        .btn-pill { transition: all 0.2s; border-radius:100px; }
        .btn-pill:hover { transform:translateY(-2px); opacity:0.9; }
        .skill-chip { transition: all 0.2s; }
        .skill-chip:hover { background: rgba(167,139,250,0.15) !important; border-color: rgba(167,139,250,0.4) !important; color: ${P.purple} !important; }
        .social-btn { transition: all 0.25s; }
        .social-btn:hover { border-color: rgba(167,139,250,0.5) !important; background: rgba(167,139,250,0.08) !important; color: ${P.purple} !important; }
        @media(max-width:700px){
          .nav-desktop{display:none!important}
          .nav-mobile-btn{display:flex!important}
          .about-grid{grid-template-columns:1fr!important}
          .skills-grid{grid-template-columns:1fr!important}
          .exp-grid{grid-template-columns:1fr!important;gap:4px!important}
          .project-item-grid{grid-template-columns:1fr!important}
          .contact-grid{grid-template-columns:1fr!important}
          .stats-grid{grid-template-columns:1fr 1fr!important}
        }
      `}</style>

      {/* ── NAV ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 48px",
          borderBottom: scrolled
            ? `1px solid ${P.border}`
            : "1px solid transparent",
          background: scrolled ? "rgba(7,6,15,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          transition: "all 0.3s",
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <button
          onClick={() => scrollTo("hero")}
          style={{
            fontFamily: P.mono,
            fontSize: 14,
            color: P.purple,
            background: "none",
            border: "none",
            cursor: "pointer",
            letterSpacing: "0.04em",
          }}
          aria-label="Back to top"
        >
          ~/markus
        </button>

        <ul
          className="nav-desktop"
          style={{ display: "flex", gap: 28, listStyle: "none" }}
          role="list"
        >
          {navLinks.map((id) => (
            <li key={id}>
              <button
                className="nav-link-item"
                onClick={() => scrollTo(id)}
                style={{
                  fontFamily: P.mono,
                  fontSize: 11,
                  color: P.muted,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {id}
              </button>
            </li>
          ))}
        </ul>

        <ClickSpark sparkColor={P.pink} sparkCount={12}>
          <button
            onClick={() => scrollTo("contact")}
            style={{
              fontFamily: P.mono,
              fontSize: 11,
              color: P.purple,
              border: `1px solid rgba(167,139,250,0.4)`,
              padding: "8px 20px",
              borderRadius: 4,
              background: "transparent",
              cursor: "pointer",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "background 0.2s, border-color 0.2s",
            }}
          >
            Hire me
          </button>
        </ClickSpark>

        <button
          className="nav-mobile-btn"
          onClick={() => setNavOpen((o) => !o)}
          style={{
            display: "none",
            flexDirection: "column",
            gap: 5,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
          }}
          aria-label="Toggle menu"
          aria-expanded={navOpen}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 22,
                height: 1.5,
                background: P.muted,
                transition: "transform 0.3s, opacity 0.3s",
                transform: navOpen
                  ? i === 0
                    ? "translateY(6.5px) rotate(45deg)"
                    : i === 2
                      ? "translateY(-6.5px) rotate(-45deg)"
                      : "none"
                  : "none",
                opacity: navOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {navOpen && (
        <div
          style={{
            position: "fixed",
            top: 56,
            left: 0,
            right: 0,
            zIndex: 99,
            background: "rgba(7,6,15,0.97)",
            backdropFilter: "blur(16px)",
            borderBottom: `1px solid ${P.border}`,
            padding: "20px 32px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            animation: "navIn 0.2s ease",
          }}
        >
          {navLinks.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                fontFamily: P.mono,
                fontSize: 13,
                color: P.muted,
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "8px 0",
                borderBottom: `1px solid ${P.border}`,
              }}
            >
              {id}
            </button>
          ))}
        </div>
      )}

      {/* ══════════ HERO ══════════ */}
      <section
        id="hero"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 48px",
          maxWidth: 1100,
          margin: "0 auto",
          position: "relative",
        }}
        aria-label="Introduction"
      >
        <Aurora
          colors={["#a78bfa", "#f472b6", "#34d399", "#60a5fa"]}
          blur={90}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Status */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(52,211,153,0.08)",
              border: "1px solid rgba(52,211,153,0.2)",
              borderRadius: 100,
              padding: "6px 16px",
              fontFamily: P.mono,
              fontSize: 11,
              color: "#34d399",
              marginBottom: 40,
            }}
            role="status"
          >
            <span
              style={{
                width: 6,
                height: 6,
                background: "#34d399",
                borderRadius: "50%",
                animation: "pulse-green 2s ease-in-out infinite",
              }}
              aria-hidden="true"
            />
            Available for work — Estonia
          </div>

          {/* Eyebrow */}
          <div
            style={{
              fontFamily: P.mono,
              fontSize: 12,
              color: P.purple,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              marginBottom: 28,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span
              style={{ width: 32, height: 1, background: P.purple }}
              aria-hidden="true"
            />
            Front-End Developer
          </div>

          {/* Name */}
          <h1
            style={{
              fontSize: "clamp(56px,9vw,104px)",
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: "-0.035em",
              marginBottom: 28,
            }}
          >
            <BlurText text="Markus" delay={100} stagger={80} />
            <br />
            <span style={{ color: P.muted }}>
              <BlurText text="Tamm" delay={500} stagger={80} />
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: P.mono,
              fontSize: "clamp(13px,2vw,17px)",
              color: P.muted,
              margin: "28px 0 48px",
              fontWeight: 300,
              maxWidth: 520,
            }}
          >
            I build{" "}
            <GradientText from="#a78bfa" to="#f472b6">
              fast, accessible
            </GradientText>
            {" & "}
            <Typewriter
              texts={[
                "well-crafted UIs",
                "responsive layouts",
                "interactive experiences",
                "clean, readable code",
              ]}
            />
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <ClickSpark sparkColor={P.amber} sparkCount={14}>
              <button
                onClick={() => scrollTo("projects")}
                className="btn-pill"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: `linear-gradient(135deg, ${P.purple}, ${P.pink})`,
                  color: "#fff",
                  fontFamily: P.mono,
                  fontSize: 13,
                  fontWeight: 500,
                  padding: "14px 32px",
                  border: "none",
                  cursor: "pointer",
                  letterSpacing: "0.04em",
                  borderRadius: 100,
                }}
              >
                View Work →
              </button>
            </ClickSpark>
            <a
              href="https://github.com/111markus"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: P.muted,
                fontFamily: P.mono,
                fontSize: 13,
                padding: "14px 32px",
                border: `1px solid ${P.border}`,
                borderRadius: 100,
                background: "transparent",
              }}
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            left: 48,
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontFamily: P.mono,
            fontSize: 11,
            color: P.dim,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
          aria-hidden="true"
        >
          <div
            style={{
              width: 1,
              height: 48,
              background: `linear-gradient(to bottom, ${P.purple}, transparent)`,
            }}
          />
          scroll
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div
        style={{
          height: 1,
          background: P.border,
          maxWidth: 1100,
          margin: "0 auto",
        }}
        role="separator"
      />

      {/* ══════════ ABOUT ══════════ */}
      <section
        id="about"
        style={{ padding: "110px 48px", maxWidth: 1100, margin: "0 auto" }}
        aria-labelledby="about-h"
      >
        {tag("About")}
        {sectionTitle("Who I am")}
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 72,
            marginTop: 48,
          }}
        >
          <ScrollReveal direction="left">
            <p style={{ color: P.muted, lineHeight: 1.85, marginBottom: 20 }}>
              I&apos;m a{" "}
              <strong style={{ color: P.text }}>front-end developer</strong>{" "}
              studying at Tallinn Polytechnic School, passionate about building
              web experiences that are clean, fast, and accessible.
            </p>
            <p style={{ color: P.muted, lineHeight: 1.85, marginBottom: 20 }}>
              My foundation is{" "}
              <strong style={{ color: P.text }}>
                HTML, CSS, and JavaScript
              </strong>
              , and I&apos;m actively expanding into modern tools like Bootstrap and
              SASS. I enjoy taking a project from a rough idea to something that
              actually works well and looks good.
            </p>
            <p style={{ color: P.muted, lineHeight: 1.85 }}>
              Outside of coursework, I build personal projects — web games,
              hobby pages — and take on client work to sharpen real-world
              skills. I believe the best way to learn is to build things that
              matter.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={100}>
            <div
              className="stats-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 1,
                background: P.border,
                border: `1px solid ${P.border}`,
                borderRadius: 12,
                overflow: "hidden",
              }}
              role="list"
              aria-label="Quick stats"
            >
              {[
                { n: 1, suf: "+", label: "Years studying web dev" },
                { n: 18, suf: "+", label: "GitHub repositories" },
                { n: 3, suf: "", label: "Project types built" },
                { n: 100, suf: "%", label: "Passion for the craft" },
              ].map(({ n, suf, label }, i) => (
                <div
                  key={i}
                  role="listitem"
                  style={{ background: P.surface, padding: "28px 24px" }}
                >
                  <div
                    style={{
                      fontSize: 36,
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                      marginBottom: 6,
                    }}
                  >
                    <GradientText from={P.purple} to={P.pink} animate={false}>
                      <CountUp to={n} suffix={suf} />
                    </GradientText>
                  </div>
                  <div
                    style={{
                      fontFamily: P.mono,
                      fontSize: 11,
                      color: P.dim,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div
        style={{
          height: 1,
          background: P.border,
          maxWidth: 1100,
          margin: "0 auto",
        }}
        role="separator"
      />

      {/* ══════════ EDUCATION ══════════ */}
      <section
        id="education"
        style={{ padding: "100px 48px", maxWidth: 1100, margin: "0 auto" }}
        aria-labelledby="edu-h"
      >
        {tag("Education")}
        {sectionTitle("Where I&apos;ve learned")}
        <ScrollReveal delay={100}>
          <div
            style={{
              marginTop: 48,
              border: `1px solid ${P.border}`,
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            <GlowCard
              glowColor="rgba(167,139,250,0.2)"
              style={{ padding: "36px 40px" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: 16,
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      letterSpacing: "-0.01em",
                      marginBottom: 6,
                      color: P.text,
                    }}
                  >
                    Web Development
                  </h3>
                  <div
                    style={{
                      fontFamily: P.mono,
                      fontSize: 13,
                      color: P.purple,
                      marginBottom: 14,
                    }}
                  >
                    Tallinn Polytechnic School (Tallinna Polütehnikum)
                  </div>
                  <p
                    style={{
                      color: P.muted,
                      fontSize: 14,
                      lineHeight: 1.75,
                      maxWidth: 560,
                    }}
                  >
                    Studying front-end and full-stack web development.
                    Coursework covers HTML, CSS, JavaScript, responsive design,
                    accessibility standards, Bootstrap, SASS, and version
                    control with Git.
                  </p>
                  <span
                    style={{
                      display: "inline-block",
                      marginTop: 16,
                      fontFamily: P.mono,
                      fontSize: 10,
                      padding: "4px 12px",
                      borderRadius: 4,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      background: "rgba(167,139,250,0.12)",
                      color: P.purple,
                      border: "1px solid rgba(167,139,250,0.25)",
                    }}
                  >
                    Ongoing
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: P.mono,
                    fontSize: 12,
                    color: P.dim,
                    letterSpacing: "0.06em",
                    paddingTop: 4,
                  }}
                >
                  2024 – present
                </div>
              </div>
            </GlowCard>
          </div>
        </ScrollReveal>
      </section>

      <div
        style={{
          height: 1,
          background: P.border,
          maxWidth: 1100,
          margin: "0 auto",
        }}
        role="separator"
      />

      {/* ══════════ SKILLS ══════════ */}
      <section
        id="skills"
        style={{ padding: "100px 48px", maxWidth: 1100, margin: "0 auto" }}
        aria-labelledby="skills-h"
      >
        {tag("Skills")}
        {sectionTitle("What I work with")}
        <p
          style={{
            color: P.muted,
            fontSize: 15,
            maxWidth: 480,
            lineHeight: 1.7,
          }}
        >
          Tools and technologies I use to bring ideas to life.
        </p>
        <div
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 1,
            background: P.border,
            border: `1px solid ${P.border}`,
            borderRadius: 16,
            overflow: "hidden",
            marginTop: 48,
          }}
          role="list"
          aria-label="Skills by category"
        >
          {[
            {
              icon: "◈",
              name: "Frontend",
              color: P.purple,
              skills: [
                { label: "HTML5", feat: true },
                { label: "CSS3", feat: true },
                { label: "JavaScript", feat: true },
                { label: "Bootstrap 5", feat: false },
                { label: "SASS / SCSS", feat: false },
                { label: "Responsive Design", feat: false },
              ],
            },
            {
              icon: "◉",
              name: "Design & UX",
              color: P.pink,
              skills: [
                { label: "Figma", feat: true },
                { label: "WCAG Accessibility", feat: true },
                { label: "UI Design", feat: false },
                { label: "Web Typography", feat: false },
                { label: "Color Theory", feat: false },
              ],
            },
            {
              icon: "◎",
              name: "Tools",
              color: P.teal,
              skills: [
                { label: "Git", feat: true },
                { label: "GitHub", feat: true },
                { label: "VS Code", feat: false },
                { label: "Chrome DevTools", feat: false },
                { label: "npm", feat: false },
              ],
            },
          ].map((group, gi) => (
            <ScrollReveal key={gi} delay={gi * 100}>
              <GlowCard
                glowColor={`${group.color}22`}
                style={{
                  height: "100%",
                  padding: "32px 28px",
                  background: P.surface,
                }}
              >
                <span
                  style={{ fontSize: 22, marginBottom: 14, display: "block" }}
                  aria-hidden="true"
                >
                  {group.icon}
                </span>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: P.text,
                    marginBottom: 16,
                  }}
                >
                  {group.name}
                </div>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: 6 }}
                  role="list"
                  aria-label={`${group.name} skills`}
                >
                  {group.skills.map(({ label, feat }) => (
                    <span
                      key={label}
                      className="skill-chip"
                      role="listitem"
                      style={{
                        fontFamily: P.mono,
                        fontSize: 11,
                        letterSpacing: "0.04em",
                        padding: "4px 12px",
                        borderRadius: 4,
                        color: feat ? group.color : P.muted,
                        background: feat
                          ? `${group.color}18`
                          : "rgba(255,255,255,0.04)",
                        border: `1px solid ${feat ? `${group.color}35` : P.border}`,
                        cursor: "default",
                      }}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div
        style={{
          height: 1,
          background: P.border,
          maxWidth: 1100,
          margin: "0 auto",
        }}
        role="separator"
      />

      {/* ══════════ EXPERIENCE ══════════ */}
      <section
        id="experience"
        style={{ padding: "100px 48px", maxWidth: 1100, margin: "0 auto" }}
        aria-labelledby="exp-h"
      >
        {tag("Experience")}
        {sectionTitle("What I&apos;ve worked on")}
        <div style={{ marginTop: 48 }} role="list">
          {[
            {
              period: "2024 – present",
              role: "Freelance Front-End Developer",
              company: "Independent / Client Work",
              desc: "Built a client website from concept to deployment — designing the layout, writing semantic HTML and CSS, ensuring mobile responsiveness, and delivering a functional, accessible end product.",
              type: "Client project",
              typeColor: P.pink,
            },
            {
              period: "2024 – present",
              role: "Student Developer",
              company: "Tallinn Polytechnic School",
              desc: "Applying coursework knowledge in practical assignments — multi-page websites, styled components, and interactive JavaScript projects. Maintaining all work in version-controlled GitHub repositories.",
              type: "Academic",
              typeColor: P.teal,
            },
          ].map((exp, i) => (
            <ScrollReveal key={i} delay={i * 120}>
              <div
                className="exp-grid"
                role="listitem"
                style={{
                  display: "grid",
                  gridTemplateColumns: "160px 1fr",
                  gap: 40,
                  padding: "40px 0",
                  borderBottom: `1px solid ${P.border}`,
                  borderTop: i === 0 ? `1px solid ${P.border}` : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: P.mono,
                    fontSize: 11,
                    color: P.dim,
                    letterSpacing: "0.06em",
                    paddingTop: 4,
                  }}
                >
                  {exp.period}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: 19,
                      fontWeight: 700,
                      letterSpacing: "-0.01em",
                      marginBottom: 4,
                      color: P.text,
                    }}
                  >
                    {exp.role}
                  </h3>
                  <div
                    style={{
                      fontFamily: P.mono,
                      fontSize: 13,
                      color: P.purple,
                      marginBottom: 14,
                    }}
                  >
                    {exp.company}
                  </div>
                  <p style={{ color: P.muted, fontSize: 14, lineHeight: 1.75 }}>
                    {exp.desc}
                  </p>
                  <span
                    style={{
                      display: "inline-block",
                      marginTop: 14,
                      fontFamily: P.mono,
                      fontSize: 10,
                      padding: "4px 12px",
                      borderRadius: 4,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      background: `${exp.typeColor}12`,
                      color: exp.typeColor,
                      border: `1px solid ${exp.typeColor}30`,
                    }}
                  >
                    {exp.type}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div
        style={{
          height: 1,
          background: P.border,
          maxWidth: 1100,
          margin: "0 auto",
        }}
        role="separator"
      />

      {/* ══════════ PROJECTS ══════════ */}
      <section
        id="projects"
        style={{ padding: "100px 48px", maxWidth: 1100, margin: "0 auto" }}
        aria-labelledby="proj-h"
      >
        {tag("Projects")}
        {sectionTitle("Selected work")}
        <p
          style={{
            color: P.muted,
            fontSize: 15,
            maxWidth: 480,
            lineHeight: 1.7,
          }}
        >
          A mix of client work, web games, and personal projects — all on
          GitHub.
        </p>
        <div style={{ marginTop: 48 }} role="list">
          {[
            {
              num: "01",
              title: "Client Website",
              year: "2024",
              badge: "Client work",
              badgeColor: P.teal,
              desc: "A multi-page website built for a real client — semantic HTML structure, custom CSS layout, fully responsive across all screen sizes, optimised for usability and accessibility.",
              stack: ["HTML", "CSS", "Responsive Design"],
              url: "https://github.com/111markus/Oppeveeb_HTML_CSS",
            },
            {
              num: "02",
              title: "Web Games",
              year: "2024",
              badge: "GitHub",
              badgeColor: P.amber,
              desc: "A collection of browser-based games built with vanilla JavaScript — DOM manipulation, game loops, event listeners, and interactive logic. Fun practice for core JS concepts.",
              stack: ["JavaScript", "HTML", "CSS"],
              url: "https://github.com/111markus/javascript",
            },
            {
              num: "03",
              title: "Hobby Page",
              year: "2024",
              badge: "GitHub",
              badgeColor: P.purple,
              desc: "A personal hobby website — clean layout, custom assets, and hand-written HTML and CSS. Built as a creative outlet and to practise page structure and visual design.",
              stack: ["HTML", "CSS"],
              url: "https://github.com/111markus/hobileht",
            },
            {
              num: "04",
              title: "Bootstrap 5 Components",
              year: "2024",
              badge: "GitHub",
              badgeColor: P.pink,
              desc: "Exploring Bootstrap 5's grid system, components, and utilities. Rapid prototyping of responsive layouts, navigation patterns, and form elements.",
              stack: ["Bootstrap 5", "HTML", "CSS"],
              url: "https://github.com/111markus/Bootstrap5",
            },
            {
              num: "05",
              title: "SASS Styling Project",
              year: "2024–25",
              badge: "In progress",
              badgeColor: P.amber,
              desc: "Working with SASS/SCSS — variables, nesting, mixins, and partials — to write more maintainable and scalable stylesheets for a real multi-component site.",
              stack: ["SCSS", "HTML", "CSS"],
              url: "https://github.com/111markus/sass",
            },
          ].map((p, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <TiltCard>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card"
                  role="listitem"
                  aria-label={`${p.title} project (opens in new tab)`}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "64px 1fr auto",
                    gap: 24,
                    padding: "32px 0",
                    borderBottom: `1px solid ${P.border}`,
                    borderTop: i === 0 ? `1px solid ${P.border}` : "none",
                    textDecoration: "none",
                    color: "inherit",
                    position: "relative",
                    transition: "border-color 0.2s",
                  }}
                >
                  <div
                    style={{
                      fontFamily: P.mono,
                      fontSize: 12,
                      color: P.dim,
                      paddingTop: 4,
                      letterSpacing: "0.06em",
                    }}
                  >
                    {p.num}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 19,
                        fontWeight: 700,
                        letterSpacing: "-0.015em",
                        marginBottom: 8,
                        color: P.text,
                        transition: "color 0.2s",
                      }}
                    >
                      <ShinyText>{p.title}</ShinyText>
                    </div>
                    <p
                      style={{
                        color: P.muted,
                        fontSize: 14,
                        lineHeight: 1.7,
                        marginBottom: 14,
                      }}
                    >
                      {p.desc}
                    </p>
                    <div
                      style={{ display: "flex", flexWrap: "wrap", gap: 6 }}
                      aria-label="Technologies used"
                    >
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          style={{
                            fontFamily: P.mono,
                            fontSize: 11,
                            color: P.dim,
                            background: "rgba(255,255,255,0.03)",
                            border: `1px solid ${P.border}`,
                            borderRadius: 3,
                            padding: "3px 9px",
                            letterSpacing: "0.04em",
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: 8,
                      paddingTop: 4,
                    }}
                  >
                    <span
                      style={{ fontFamily: P.mono, fontSize: 11, color: P.dim }}
                    >
                      {p.year}
                    </span>
                    <span
                      style={{
                        fontFamily: P.mono,
                        fontSize: 10,
                        padding: "3px 10px",
                        borderRadius: 3,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        background: `${p.badgeColor}14`,
                        color: p.badgeColor,
                        border: `1px solid ${p.badgeColor}30`,
                      }}
                    >
                      {p.badge}
                    </span>
                  </div>
                </a>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div
        style={{
          height: 1,
          background: P.border,
          maxWidth: 1100,
          margin: "0 auto",
        }}
        role="separator"
      />

      {/* ══════════ CONTACT ══════════ */}
      <section
        id="contact"
        style={{ padding: "100px 48px", maxWidth: 1100, margin: "0 auto" }}
        aria-labelledby="contact-h"
      >
        {tag("Contact")}
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            marginTop: 0,
          }}
        >
          <ScrollReveal direction="left">
            <h2
              style={{
                fontSize: "clamp(28px,4vw,44px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                marginBottom: 20,
                color: P.text,
              }}
            >
              Let&apos;s build something{" "}
              <GradientText from={P.purple} to={P.pink}>
                great together.
              </GradientText>
            </h2>
            <p
              style={{
                color: P.muted,
                fontSize: 15,
                lineHeight: 1.75,
                marginBottom: 36,
              }}
            >
              Have a project in mind or just want to connect? I&apos;m open to
              internship opportunities, freelance work, and interesting
              conversations about the web.
            </p>
            <nav aria-label="Contact links">
              <a
                href="https://github.com/111markus"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub profile (opens in new tab)"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  color: P.muted,
                  fontFamily: P.mono,
                  fontSize: 13,
                  padding: "12px 20px",
                  border: `1px solid ${P.border}`,
                  borderRadius: 8,
                  background: "transparent",
                }}
              >
                <span style={{ fontWeight: 700, fontSize: 13 }}>gh</span>
                github.com/111markus
              </a>
            </nav>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={100}>
            <ContactForm P={P} />
          </ScrollReveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: `1px solid ${P.border}`,
          padding: "28px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
        role="contentinfo"
      >
        <span
          style={{
            fontFamily: P.mono,
            fontSize: 11,
            color: P.dim,
            letterSpacing: "0.06em",
          }}
        >
          © 2025 Markus Tamm · Built with HTML, CSS &amp; care
        </span>
        <button
          onClick={() => scrollTo("hero")}
          style={{
            fontFamily: P.mono,
            fontSize: 11,
            color: P.dim,
            background: "none",
            border: "none",
            cursor: "pointer",
            letterSpacing: "0.06em",
            transition: "color 0.2s",
          }}
          aria-label="Back to top of page"
        >
          Back to top ↑
        </button>
      </footer>
    </div>
  );
}

/* ── CONTACT FORM (separate to keep Portfolio clean) ── */
function ContactForm({ P }) {
  const [sent, setSent] = useState(false);
  const [vals, setVals] = useState({ name: "", email: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setVals({ name: "", email: "", message: "" });
    }, 2800);
  };

  const inp = {
    background: P.surface,
    border: `1px solid ${P.border}`,
    borderRadius: 8,
    color: P.text,
    fontFamily: P.display,
    fontSize: 14,
    padding: "12px 16px",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s",
  };

  return (
    <form
      onSubmit={submit}
      aria-label="Contact form"
      style={{ display: "flex", flexDirection: "column", gap: 16 }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label
          htmlFor="cf-name"
          style={{
            fontFamily: P.mono,
            fontSize: 11,
            color: P.dim,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Name
        </label>
        <input
          id="cf-name"
          type="text"
          required
          value={vals.name}
          onChange={(e) => setVals({ ...vals, name: e.target.value })}
          placeholder="Your name"
          autoComplete="name"
          style={inp}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label
          htmlFor="cf-email"
          style={{
            fontFamily: P.mono,
            fontSize: 11,
            color: P.dim,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Email
        </label>
        <input
          id="cf-email"
          type="email"
          required
          value={vals.email}
          onChange={(e) => setVals({ ...vals, email: e.target.value })}
          placeholder="your@email.com"
          autoComplete="email"
          style={inp}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <label
          htmlFor="cf-msg"
          style={{
            fontFamily: P.mono,
            fontSize: 11,
            color: P.dim,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Message
        </label>
        <textarea
          id="cf-msg"
          required
          rows={5}
          value={vals.message}
          onChange={(e) => setVals({ ...vals, message: e.target.value })}
          placeholder="Tell me about your project…"
          style={{ ...inp, resize: "none" }}
        />
      </div>
      <ClickSpark sparkColor={P.pink} sparkCount={16}>
        <button
          type="submit"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: sent
              ? "rgba(52,211,153,0.2)"
              : `linear-gradient(135deg, ${P.purple}, ${P.pink})`,
            color: sent ? "#34d399" : "#fff",
            border: sent ? "1px solid rgba(52,211,153,0.3)" : "none",
            fontFamily: P.mono,
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: "0.04em",
            padding: "14px 28px",
            borderRadius: 8,
            cursor: "pointer",
            transition: "all 0.3s",
            alignSelf: "flex-start",
          }}
        >
          {sent ? "Sent ✓" : "Send message →"}
        </button>
      </ClickSpark>
    </form>
  );
}
