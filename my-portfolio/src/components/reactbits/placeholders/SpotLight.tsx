import type { PropsWithChildren } from "react";
import { useState } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

export default function SpotLight({ children, className }: Props) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      className={["relative overflow-hidden", className ?? ""].join(" ")}
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background: `radial-gradient(220px circle at ${pos.x}px ${pos.y}px, rgba(108,99,255,0.18), transparent 55%)`,
        }}
      />
      {children}
    </div>
  );
}
