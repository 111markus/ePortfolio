export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
        <span>© 2026 Markus Laanes · Tartu, Estonia</span>
        <div className="flex items-center gap-4">
          <a
            className="hover:text-white/70"
            href="mailto:markus.laanes@voco.ee"
          >
            markus.laanes@voco.ee
          </a>
          <a
            className="hover:text-white/70"
            href="https://github.com/111markus"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        <a className="hover:text-white/70" href="#hero">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
