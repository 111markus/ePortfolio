import {
  FadeContent,
  GlitchText,
  ShinyText,
  SpotLight,
  TiltCard,
} from "../reactbits";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden">
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
            A collection of projects I have developed. Click on a visual to view
            the live demo or explore the code on GitHub.
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
                    </div>
                    <div className="shrink-0 rounded-2xl border border-white/10 bg-black/20 px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-white/95">
                      #{String(p.id).padStart(2, "0")}
                    </div>
                  </div>

                  {p.image &&
                    (p.live ? (
                      <a
                        className="mt-3 mb-3 block h-[260px] w-full overflow-hidden rounded-3xl border border-white/25 bg-black/[0.5]"
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open live demo for ${p.title}`}
                      >
                        <img
                          src={p.image}
                          alt={p.title}
                          className="h-full w-full object-cover"
                        />
                      </a>
                    ) : (
                      <div className="mt-3 mb-3 h-[260px] w-full overflow-hidden rounded-3xl border border-white/25 bg-black/[0.5]">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}

                  <p className="mt-2 text-sm text-white/95">{p.description}</p>

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
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 p-2 text-white/95 transition hover:bg-black/30"
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                      >
                        <svg
                          className="h-6 w-6"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.38-3.37-1.38-.45-1.16-1.11-1.47-1.11-1.47-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.38-2.03 1.02-2.75-.1-.26-.44-1.3.1-2.71 0 0 .83-.27 2.73 1.05a9.2 9.2 0 0 1 2.48-.34c.84 0 1.68.12 2.47.34 1.9-1.32 2.73-1.05 2.73-1.05.54 1.41.2 2.45.1 2.71.64.72 1.02 1.63 1.02 2.75 0 3.95-2.34 4.82-4.57 5.07.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.48A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
                        </svg>
                        <ShinyText>GitHub</ShinyText>
                      </a>
                    )}
                    {p.live && (
                      <a
                        className="rounded-xl border border-white/25 bg-black/20 px-4 py-2 text-white/95 transition hover:bg-black/30"
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ShinyText>LIVE SITE ↗</ShinyText>
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
