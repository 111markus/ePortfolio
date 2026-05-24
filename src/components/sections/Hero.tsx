import { BlurText, ScrollFloat, ShinyText, SplitText } from "../reactbits";
import { personal } from "../../data/resume";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative -mt-[100px] overflow-hidden pt-[25px] "
    >
      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 py-24">
        <ScrollFloat>
          <div className="mt-0">
            <h1 className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
              <SplitText text="Markus Laanes" />
            </h1>

            <div className="mt-4 font-mono  tracking-[0.20em] text-white/80">
              Junior Software Developer
            </div>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
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
    </section>
  );
}
