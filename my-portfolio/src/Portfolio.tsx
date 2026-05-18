import { BlobCursor } from "./components/reactbits";
import { About, Contact, Hero, Projects, Skills } from "./components/sections";

export default function Portfolio() {
  return (
    <main className="relative">
      <BlobCursor />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
