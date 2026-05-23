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
            className="flex items-center gap-2 hover:text-white/70"
            href="https://github.com/111markus"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.38-3.37-1.38-.45-1.16-1.11-1.47-1.11-1.47-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.38-2.03 1.02-2.75-.1-.26-.44-1.3.1-2.71 0 0 .83-.27 2.73 1.05a9.2 9.2 0 0 1 2.48-.34c.84 0 1.68.12 2.47.34 1.9-1.32 2.73-1.05 2.73-1.05.54 1.41.2 2.45.1 2.71.64.72 1.02 1.63 1.02 2.75 0 3.95-2.34 4.82-4.57 5.07.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.48A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
            </svg>
          </a>
        </div>
        <a className="hover:text-white/70" href="#hero">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
