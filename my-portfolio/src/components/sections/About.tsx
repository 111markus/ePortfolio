import { FadeContent } from "../reactbits";
import {
  education,
  experience,
  personal,
  skills as skillData,
} from "../../data/resume";
import me from "../../assets/me.png";
import ElectricBorder from "../ElectricBorder";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-0 py-24  ">
      <FadeContent>
        <div className="mb-10 flex items-baseline justify-between gap-4 -mt-[80px]">
          <p className="font-mono  tracking-[0.22em] text-[color:var(--accent)] ">
            ABOUT ME
          </p>

          <div className="h-px flex-1 bg-white/10" />
        </div>
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Let me introduce myself
        </h2>

        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <div className="mt-10 space-y-4 leading-relaxed text-white/95 sm:text-base">
              <p>
                I'm Markus, a 21-year-old Software Development student at Tartu
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
          </div>

          <div className="mx-auto w-full max-w-[320px] -mt-[40px] md:mx-0 md:ml-20 md:max-w-[420px]">
            <ElectricBorder
              color="#6983ad"
              speed={0.2}
              chaos={0.04}
              thickness={2}
              borderRadius={16}
              style={{ borderRadius: 16 }}
            >
              <img
                src={me}
                alt="Markus"
                className="h-auto w-full select-none rounded-2xl"
                loading="eager"
                draggable={false}
              />
            </ElectricBorder>
          </div>

          <div className="md:col-span-2 mt-12">
            <div className="font-mono tracking-[0.22em] text-[color:var(--accent)]">
              EDUCATION
            </div>
            <div className="grid gap-5 md:grid-cols-2 mt-4">
              {education.map((e) => (
                <div
                  key={`${e.from}-${e.to}-${e.school}`}
                  className="rounded-2xl border border-white/25 bg-black/[0.5] p-4"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="text-sm font-semibold text-white">
                      {e.title}
                    </div>
                    <div className="text-xs text-white/95">
                      {e.from} – {e.to}
                    </div>
                  </div>
                  <div className="mt-1 text-xs text-white/80">
                    {e.school} · {e.location}
                    {e.graduation ? ` · Graduation ${e.graduation}` : ""}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-3 text-[12px] text-white/95">
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

          <div className="md:col-span-2 mt-0">
            <div className="font-mono tracking-[0.22em] text-[color:var(--accent)]">
              EXPERIENCE
            </div>
            <div className="grid gap-5 md:grid-cols-2 mt-4">
              {experience.map((x) => (
                <div
                  key={`${x.from}-${x.to}-${x.company}`}
                  className="rounded-2xl border border-white/25 bg-black/[0.5] p-4"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <div className="text-sm font-semibold text-white">
                      {x.title}
                    </div>
                    <div className="text-xs text-white/95">
                      {x.from} – {x.to}
                    </div>
                  </div>
                  <div className="mt-1 text-xs text-white/90">{x.company}</div>
                  <p className="mt-3 text-sm text-white/85">{x.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeContent>
    </section>
  );
}
