import { FadeContent, TiltCard } from "../reactbits";
import {
  education,
  experience,
  personal,
  skills as skillData,
} from "../../data/resume";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <FadeContent>
        <div className="mb-10 flex items-baseline justify-between gap-4">
          <p className="font-mono text-xs tracking-[0.22em] text-[color:var(--accent)]">
            MINUST
          </p>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Kes ma olen
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-white/70 sm:text-base">
              <p>
                I'm Markus, a 20-year-old Software Development student at Tartu
                Vocational College. Technology has always been part of my life —
                from building and configuring computers as a kid to now focusing
                on front-end development.
              </p>
              <p>
                I work with HTML, CSS, JavaScript, React, and have experience
                with WordPress, Docker, and MariaDB/MySQL. Through school
                projects I've built web-based games, hobby websites, and a
                client project for a makeup artist.
              </p>
              <p>
                Outside of coding I stay active — gym, mountain skiing, and
                keeping a healthy balance.
              </p>
              <p>
                Currently looking for a{" "}
                <span className="font-semibold text-white">
                  front-end development internship
                </span>{" "}
                to gain real-world experience and keep growing as a developer.
              </p>
            </div>

            <div className="mt-10">
              <div className="mb-3 text-sm font-semibold text-white/90">
                Core skills
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-white/70">
                {[
                  ...skillData.frontend,
                  ...skillData.tools,
                  ...skillData.databases,
                ].map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-8">
              <div>
                <div className="mb-3 font-mono text-xs tracking-[0.22em] text-white/55">
                  EDUCATION
                </div>
                <div className="space-y-3">
                  {education.map((e) => (
                    <div
                      key={`${e.from}-${e.to}-${e.school}`}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <div className="text-sm font-semibold text-white">
                          {e.title}
                        </div>
                        <div className="text-xs text-white/55">
                          {e.from} – {e.to}
                        </div>
                      </div>
                      <div className="mt-1 text-xs text-white/60">
                        {e.school} · {e.location}
                        {e.graduation ? ` · Graduation ${e.graduation}` : ""}
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-white/65">
                        {e.highlights.map((h) => (
                          <span
                            key={h}
                            className="rounded-full border border-white/10 bg-black/20 px-3 py-1"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-3 font-mono text-xs tracking-[0.22em] text-white/55">
                  EXPERIENCE
                </div>
                <div className="space-y-3">
                  {experience.map((x) => (
                    <div
                      key={`${x.from}-${x.to}-${x.company}`}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <div className="text-sm font-semibold text-white">
                          {x.title}
                        </div>
                        <div className="text-xs text-white/55">
                          {x.from} – {x.to}
                        </div>
                      </div>
                      <div className="mt-1 text-xs text-white/60">
                        {x.company}
                      </div>
                      <p className="mt-3 text-sm text-white/70">
                        {x.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <TiltCard className="group">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[color:var(--accent)]/20 blur-3xl" />
                <div className="absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-[color:var(--accent-secondary)]/20 blur-3xl" />
              </div>
              <div className="relative">
                <div className="font-display text-xl font-bold text-white">
                  {personal.name}
                </div>
                <div className="mt-1 font-mono text-xs tracking-[0.2em] text-white/55">
                  Junior Front-End Developer
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm text-white/70">
                    “Tahan ehitada projekte, mis näevad head välja ja on lihtsad
                    kasutada.”
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-white/60">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-white/85">Asukoht</div>
                    <div className="mt-1">{personal.location}</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-white/85">Staatus</div>
                    <div className="mt-1">Internship search</div>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </FadeContent>
    </section>
  );
}
