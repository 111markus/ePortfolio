import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  items: ReactNode[];
  className?: string;
};

export default function AnimatedList({ items, className }: Props) {
  return (
    <motion.ul
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.08 },
        },
      }}
    >
      {items.map((it, i) => (
        <motion.li
          key={i}
          variants={{
            hidden: { opacity: 0, y: 10 },
            show: { opacity: 1, y: 0 },
          }}
        >
          {it}
        </motion.li>
      ))}
    </motion.ul>
  );
}
