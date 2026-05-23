import { About, Contact, Hero, Projects, Skills } from "./components/sections";

export default function Portfolio() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
