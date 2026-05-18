import { FadeContent, GlassIcons, InfiniteScroll } from "../reactbits";
import { skills } from "../../data/resume";

const marquee = [
  "React",
  "JavaScript",
  "HTML/CSS",
  "WordPress",
  "Docker",
  "MariaDB/MySQL",
  "Figma",
  "Git/GitHub",
  "Render",
];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24">
      <FadeContent>
        <div className="mb-10 flex items-baseline justify-between gap-4">
          <p className="font-mono text-xs tracking-[0.22em] text-[color:var(--accent)]">
            OSKUSED
          </p>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
          Mida ma kasutan
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
          Siin on kiire ülevaade tehnoloogiatest ja tööriistadest, millega ma
          kõige rohkem kokku puutun.
        </p>

        <div className="mt-10">
          <InfiniteScroll items={marquee} />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <GlassIcons
            title="Frontend"
            items={skills.frontend.map((s) => ({ label: s, icon: "⚡" }))}
          />
          <GlassIcons
            title="Tools"
            items={skills.tools.map((s) => ({ label: s, icon: "🧰" }))}
          />
          <GlassIcons
            title="Databases & Other"
            items={[...skills.databases, ...skills.other].map((s) => ({
              label: s,
              icon: "🗄",
            }))}
          />
        </div>
      </FadeContent>
    </section>
  );
}
