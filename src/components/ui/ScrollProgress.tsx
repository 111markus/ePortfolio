import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const v = max <= 0 ? 0 : (h.scrollTop / max) * 100;
      setP(v);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[200] h-[2px] w-full bg-transparent">
      <div className="h-full bg-[#6983ad]" style={{ width: `${p}%` }} />
    </div>
  );
}
