type Props = {
  items: string[];
  className?: string;
};

export default function InfiniteScroll({ items, className }: Props) {
  return (
    <div className={["overflow-hidden", className ?? ""].join(" ")}>
      <div className="flex w-max animate-[marquee_18s_linear_infinite] gap-3">
        {[...items, ...items].map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="rounded-full border border-white/25 bg-black/50 px-3 py-1 text-md text-white/80"
          >
            {t}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </div>
  );
}
