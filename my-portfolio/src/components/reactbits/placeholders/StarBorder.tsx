import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

export default function StarBorder({ children, className }: Props) {
  return (
    <div
      className={[
        "relative inline-flex rounded-2xl p-[1px]",
        "bg-[conic-gradient(from_90deg,var(--accent),var(--accent-secondary),var(--accent))]",
        className ?? "",
      ].join(" ")}
    >
      <div className="rounded-2xl bg-[color:var(--bg-secondary)] px-4 py-2">
        {children}
      </div>
    </div>
  );
}
