import type { PropsWithChildren } from "react";
import { useRef } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

export default function TiltCard({ children, className }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const settleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearSettleTimer = () => {
    if (settleTimerRef.current) {
      clearTimeout(settleTimerRef.current);
      settleTimerRef.current = null;
    }
  };

  return (
    <div
      ref={ref}
      className={[
        "[transform-style:preserve-3d] will-change-transform",
        className ?? "",
      ].join(" ")}
      onMouseEnter={() => {
        const el = ref.current;
        if (!el) return;
        clearSettleTimer();
        el.style.transition = "transform 180ms ease-out";
        settleTimerRef.current = setTimeout(() => {
          if (ref.current) {
            ref.current.style.transition = "none";
          }
          settleTimerRef.current = null;
        }, 180);
      }}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.2;
        const py = (e.clientY - r.top) / r.height - 0.2;
        el.style.transform = `perspective(900px) rotateX(${-py * 10}deg) rotateY(${px * 10}deg) translateZ(0)`;
      }}
      onMouseLeave={() => {
        clearSettleTimer();
        if (ref.current) {
          ref.current.style.transition = "transform 160ms ease-out";
          ref.current.style.transform =
            "perspective(900px) rotateX(0deg) rotateY(0deg)";
        }
      }}
    >
      {children}
    </div>
  );
}
