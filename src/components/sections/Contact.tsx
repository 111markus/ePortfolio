import { useState } from "react";
import { ClickSpark, FadeContent, ShinyText, StarBorder } from "../reactbits";
import me2 from "../../assets/me2.jpg";
import ElectricBorder from "../ElectricBorder";
export default function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("markus.laanes@voco.ee");
    setEmailCopied(true);
    window.setTimeout(() => setEmailCopied(false), 1500);
  };

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
              <button
                type="button"
                onClick={copyEmail}
                className="block w-full rounded-2xl border border-white/25 bg-black/[0.5] p-4 text-left transition hover:border-[color:var(--accent)] hover:bg-black/[0.65]"
              >
                <div className="text-xs text-white/80">Email</div>
                <div className="mt-1 text-white">
                  <ShinyText>
                    {emailCopied ? "Copied" : "markus.laanes@voco.ee"}
                  </ShinyText>
                </div>
              </button>
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

          <div className="mx-auto w-full max-w-[320px] -mt-[25px] md:mx-0 md:ml-20 md:max-w-[440px]">
            <ElectricBorder
              color="#6983ad"
              speed={0.2}
              chaos={0.04}
              thickness={2}
              borderRadius={16}
              style={{ borderRadius: 16 }}
            >
              <img
                src={me2}
                alt="Markus"
                className="h-auto w-full select-none rounded-2xl"
                loading="eager"
                draggable={false}
              />
            </ElectricBorder>
          </div>
        </div>
      </FadeContent>
    </section>
  );
}
