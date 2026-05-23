export default function Ribbons() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute left-[-20%] top-24 h-20 w-[140%] -rotate-6 bg-[linear-gradient(90deg,transparent,rgba(108,99,255,0.12),transparent)]" />
      <div className="absolute left-[-20%] top-52 h-20 w-[140%] rotate-3 bg-[linear-gradient(90deg,transparent,rgba(0,217,255,0.10),transparent)]" />
    </div>
  );
}
