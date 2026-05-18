import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function GlitchText({ children, className }: Props) {
  return (
    <span
      className={[
        "relative inline-block",
        "after:absolute after:inset-0 after:content-[attr(data-text)] after:opacity-0 after:transition-opacity after:duration-200 group-hover:after:opacity-100",
        "after:translate-x-[1px] after:text-[color:var(--accent-secondary)]",
        "before:absolute before:inset-0 before:content-[attr(data-text)] before:opacity-0 before:transition-opacity before:duration-200 group-hover:before:opacity-100",
        "before:-translate-x-[1px] before:text-fuchsia-400",
        className ?? "",
      ].join(" ")}
      data-text={typeof children === "string" ? children : undefined}
    >
      {children}
    </span>
  );
}
