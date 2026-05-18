import {
  Aurora,
  BlurText,
  Magnet,
  ScrollFloat,
  ShinyText,
  SplitText,
} from "../reactbits";
import { personal } from "../../data/resume";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <Aurora />
      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 py-24">
        <ScrollFloat>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for internship · {personal.location}
          </div>

          <div className="mt-10">
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
              <SplitText text="Markus" />
              <span className="block text-white/55">
                <SplitText text="Laanes" />
              </span>
            </h1>

            <div className="mt-4 font-mono text-xs tracking-[0.22em] text-white/60">
              Software Development Student
            </div>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              <BlurText>
                {personal.goal} <ShinyText>React</ShinyText>
                {" · "}
                <ShinyText>JavaScript</ShinyText>
                {" · "}
                <ShinyText>HTML/CSS</ShinyText>
              </BlurText>
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Magnet>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-2xl bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(108,99,255,0.25)] transition hover:opacity-90"
                >
                  Vaata töid ↓
                </a>
              </Magnet>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 backdrop-blur transition hover:bg-white/10"
              >
                Võta ühendust
              </a>
            </div>

            <div className="mt-12 flex items-center gap-3 text-xs text-white/55">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                React
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                TypeScript
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Tailwind
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Framer Motion
              </span>
            </div>
          </div>
        </ScrollFloat>
      </div>

      {/* noise overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </section>
  );
}
