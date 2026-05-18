import type { PropsWithChildren } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = PropsWithChildren<{
  className?: string;
  offsetPx?: number;
}>;

export default function ScrollFloat({
  children,
  className,
  offsetPx = 40,
}: Props) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, -offsetPx]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.92]);
  return (
    <motion.div className={className} style={{ y, opacity }}>
      {children}
    </motion.div>
  );
}
