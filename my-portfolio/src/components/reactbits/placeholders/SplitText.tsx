import { motion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  staggerMs?: number;
};

export default function SplitText({ text, className, staggerMs = 28 }: Props) {
  const chars = [...text];
  return (
    <span aria-label={text} role="text" className={className}>
      {chars.map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: (i * staggerMs) / 1000, duration: 0.5 }}
          className="inline-block"
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}
