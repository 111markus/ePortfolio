import type { PropsWithChildren } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = PropsWithChildren<{
  className?: string;
  strength?: number;
}>;

export default function Magnet({ children, className, strength = 14 }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18 });
  const sy = useSpring(y, { stiffness: 260, damping: 18 });

  return (
    <motion.div
      className={className}
      style={{ x: sx, y: sy }}
      onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        x.set((dx / r.width) * strength);
        y.set((dy / r.height) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
