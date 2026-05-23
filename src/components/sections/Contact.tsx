import { ClickSpark, FadeContent, ShinyText, StarBorder } from "../reactbits";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <FadeContent>
        <div className="mb-10 flex items-baseline justify-between gap-4">
          <p className="font-mono  tracking-[0.22em] text-[color:var(--accent)]">
            CONTACT
          </p>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/95 sm:text-base">
              If you have a project, internship, or job opportunity, feel free
              to write to me. I will get back to you as soon as possible.
            </p>

            <div className="mt-8 space-y-3 text-sm">
              <div className="rounded-2xl border border-white/25 bg-black/[0.5] p-4">
                <div className="text-xs text-white/80">Email</div>
                <div className="mt-1 text-white">
                  <a
                    className="hover:underline"
                    href="mailto:markus.laanes@voco.ee"
                  >
                    <ShinyText>markus.laanes@voco.ee</ShinyText>
                  </a>
                </div>
              </div>
              <div className="rounded-2xl border border-white/25 bg-black/[0.5] p-4">
                <div className="text-xs text-white/80">GitHub</div>
                <a
                  className="mt-1 inline-block text-white/95 hover:underline"
                  href="https://github.com/111markus"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ShinyText>github.com/111markus</ShinyText>
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/25 bg-black/[0.5] p-6 backdrop-blur">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const f = e.currentTarget;
                const btn = f.querySelector(
                  'button[type="submit"]',
                ) as HTMLButtonElement | null;
                if (btn) btn.textContent = "Saadetud ✓";
                setTimeout(() => {
                  f.reset();
                  if (btn) btn.textContent = "Saada →";
                }, 2200);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs text-white/80">Name</label>
                <input
                  required
                  className="mt-2 w-full rounded-2xl border border-white/25 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-white/55 focus:border-[color:var(--accent)]"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-xs text-white/80">Email</label>
                <input
                  type="email"
                  required
                  className="mt-2 w-full rounded-2xl border border-white/25 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-white/55 focus:border-[color:var(--accent)]"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-xs text-white/80">Message</label>
                <textarea
                  required
                  rows={5}
                  className="mt-2 w-full resize-none rounded-2xl border border-white/25 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-white/55 focus:border-[color:var(--accent)]"
                  placeholder="Describe briefly..."
                />
              </div>

              <ClickSpark>
                <StarBorder>
                  <button
                    type="submit"
                    className="w-full px-3 py-2 text-sm font-semibold text-white"
                  >
                    Send →
                  </button>
                </StarBorder>
              </ClickSpark>
            </form>
          </div>
        </div>
      </FadeContent>
    </section>
  );
}
