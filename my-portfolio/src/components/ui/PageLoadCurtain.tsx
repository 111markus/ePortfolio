import { motion } from "framer-motion";

export default function PageLoadCurtain() {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{ duration: 0.9, ease: [0.83, 0, 0.17, 1] }}
      className="fixed inset-0 z-[300] origin-top bg-black"
    />
  );
}
