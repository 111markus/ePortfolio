import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function ShinyText({ children, className }: Props) {
  return (
    <span
      className={[
        "relative inline-block",
        "bg-[linear-gradient(110deg,var(--accent)_0%,var(--accent-secondary)_40%,var(--accent)_80%)]",
        "bg-[length:200%_100%] bg-clip-text text-transparent",
        "animate-[shimmer_3.5s_linear_infinite]",
        className ?? "",
      ].join(" ")}
    >
      {children}
      <style>{`@keyframes shimmer{0%{background-position:0% 50%}100%{background-position:200% 50%}}`}</style>
    </span>
  );
}
