import { useState } from "react";
import { Magnetic } from "../reactbits";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-[150] w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => jump("hero")}
          className="font-mono text-xs tracking-[0.2em] text-[color:var(--accent)]"
          aria-label="Back to top"
        >
          ML / Markus Laanes
        </button>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Main">
          {links.map((l) => (
            <Magnetic key={l.id} className="">
              <button
                onClick={() => jump(l.id)}
                className="rounded-xl px-4 py-2 text-xs font-semibold text-white/70 transition hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </button>
            </Magnetic>
          ))}
        </nav>

        <button
          className="md:hidden rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="mx-auto max-w-6xl px-6 pb-4 md:hidden">
          <div className="rounded-2xl border border-white/10 bg-black/50 p-3 backdrop-blur">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => jump(l.id)}
                className="block w-full rounded-xl px-4 py-3 text-left text-sm text-white/80 hover:bg-white/5"
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
