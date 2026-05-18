import { useEffect } from "react";

export default function BlobCursor() {
  useEffect(() => {
    const blob = document.createElement("div");
    blob.setAttribute("data-blob", "true");
    blob.style.position = "fixed";
    blob.style.left = "0";
    blob.style.top = "0";
    blob.style.width = "32px";
    blob.style.height = "32px";
    blob.style.borderRadius = "9999px";
    blob.style.pointerEvents = "none";
    blob.style.zIndex = "9999";
    blob.style.mixBlendMode = "screen";
    blob.style.background = "rgba(108, 99, 255, 0.25)";
    blob.style.border = "1px solid rgba(0, 217, 255, 0.25)";
    blob.style.backdropFilter = "blur(8px)";
    blob.style.transform = "translate(-50%, -50%)";
    blob.style.transition = "opacity 0.2s ease";

    document.body.appendChild(blob);

    let mx = 0,
      my = 0,
      x = 0,
      y = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    let raf = 0;
    const tick = () => {
      x += (mx - x) * 0.18;
      y += (my - y) * 0.18;
      blob.style.left = `${x}px`;
      blob.style.top = `${y}px`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      blob.remove();
    };
  }, []);

  return null;
}
