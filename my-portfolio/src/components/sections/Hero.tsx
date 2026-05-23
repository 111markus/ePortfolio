import {
  Aurora,
  BlurText,
  ScrollFloat,
  ShinyText,
  SplitText,
} from "../reactbits";
import { personal } from "../../data/resume";

export default function Hero() {
  return (
    <section id="hero" className="relative -mt-[72px] overflow-hidden pt-[72px]">
      <Aurora />
      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 py-24">
        <ScrollFloat>
          <div className="mt-0">
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
              <SplitText text="Markus Laanes" />
            </h1>

            <div className="mt-4 font-mono text-xs tracking-[0.22em] text-white/60">
              Junior Software Developer
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
