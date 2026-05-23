import type { PropsWithChildren } from "react";
import { useState } from "react";

type Spark = { id: string; x: number; y: number };

type Props = PropsWithChildren<{ className?: string }>;

export default function ClickSpark({ children, className }: Props) {
  const [sparks, setSparks] = useState<Spark[]>([]);

  return (
    <span
      className={["relative inline-block", className ?? ""].join(" ")}
      onClick={(e) => {
        const r = (e.currentTarget as HTMLSpanElement).getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        const id = `${Date.now()}`;
        const newSparks = Array.from({ length: 10 }, (_, i) => ({
          id: `${id}-${i}`,
          x,
          y,
        }));
        setSparks((prev) => [...prev, ...newSparks]);
        setTimeout(() => {
          setSparks((prev) => prev.filter((s) => !newSparks.includes(s)));
        }, 650);
      }}
    >
      {children}
      {sparks.map((s) => (
        <span
          key={s.id}
          className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-[color:var(--accent-secondary)]"
          style={{
            left: s.x,
            top: s.y,
            transform: `translate(-50%,-50%) translate(${(Math.random() - 0.5) * 70}px, ${(Math.random() - 0.5) * 70}px)`,
            opacity: 0,
            animation: "spark 0.65s ease-out forwards",
          }}
        />
      ))}
      <style>{`@keyframes spark{0%{opacity:1}100%{opacity:0}}`}</style>
    </span>
  );
}
