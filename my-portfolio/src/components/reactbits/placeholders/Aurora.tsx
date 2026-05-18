export default function Aurora() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -top-40 left-1/4 h-[520px] w-[520px] rounded-full bg-[color:var(--accent)]/25 blur-[90px]" />
      <div className="absolute top-24 right-1/4 h-[480px] w-[480px] rounded-full bg-[color:var(--accent-secondary)]/20 blur-[90px]" />
      <div className="absolute bottom-[-200px] left-1/3 h-[620px] w-[620px] rounded-full bg-fuchsia-500/10 blur-[110px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:28px_28px] opacity-30" />
    </div>
  );
}
