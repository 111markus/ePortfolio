import type { PropsWithChildren } from "react";
import { useRef } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

export default function TiltCard({ children, className }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={ref}
      className={[
        "transition-transform duration-150 [transform-style:preserve-3d]",
        className ?? "",
      ].join(" ")}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateX(${-py * 10}deg) rotateY(${px * 10}deg) translateZ(0)`;
      }}
      onMouseLeave={() => {
        if (ref.current)
          ref.current.style.transform =
            "perspective(900px) rotateX(0deg) rotateY(0deg)";
      }}
    >
      {children}
    </div>
  );
}
