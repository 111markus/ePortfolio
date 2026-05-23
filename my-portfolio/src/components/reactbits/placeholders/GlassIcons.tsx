type Item = { label: string; icon?: string };

type Props = {
  title: string;
  items: Item[];
};

export default function GlassIcons({ title, items }: Props) {
  return (
    <div className="rounded-2xl border border-white/25 bg-black/[0.5] p-5">
      <div className="mb-3 text-sm font-semibold text-white">{title}</div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.label}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-xs text-white/95"
            title={it.label}
          >
            <span className="text-white/95">{it.icon ?? "▦"}</span>
            {it.label}
          </div>
        ))}
      </div>
    </div>
  );
}
