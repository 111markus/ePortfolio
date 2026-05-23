import {
  FadeContent,
  GlitchText,
  ShinyText,
  SpotLight,
  TiltCard,
  Ribbons,
} from "../reactbits";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden">
      <Ribbons />
      <div className="mx-auto max-w-6xl px-6 py-24">
        <FadeContent>
          <div className="mb-10 flex items-baseline justify-between gap-4">
            <p className="font-mono tracking-[0.22em] text-[color:var(--accent)]">
              PROJECTS
            </p>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Selected Works
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/95 sm:text-base">
            A collection of projects I have developed. Click on a card to view
            the GitHub repository or the live demo.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <TiltCard key={p.id} className="group">
                <SpotLight className="group rounded-3xl border border-white/25 bg-black/[0.5] p-6 backdrop-blur">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-lg font-semibold text-white">
                        <GlitchText className="group-hover:text-white">
                          {p.title}
                        </GlitchText>
                      </div>
                      <p className="mt-2 text-sm text-white/95">
                        {p.description}
                      </p>
                    </div>
                    <div className="shrink-0 rounded-2xl border border-white/10 bg-black/20 px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-white/95">
                      #{String(p.id).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/95"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                    {p.github && (
                      <a
                        className="rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-white/95 transition hover:bg-black/30"
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub ↗
                      </a>
                    )}
                    {p.live && (
                      <a
                        className="rounded-xl border border-white/10 bg-black/20 px-4 py-2 text-white/95 transition hover:bg-black/30"
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ShinyText>Vaata projekti →</ShinyText>
                      </a>
                    )}
                  </div>
                </SpotLight>
              </TiltCard>
            ))}
          </div>
        </FadeContent>
      </div>
    </section>
  );
}
