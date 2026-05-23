import { motion } from "framer-motion";

export default function PageLoadCurtain() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[300] pointer-events-none"
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.9, ease: [0.83, 0, 0.17, 1] }}
        className="absolute left-0 right-0 top-0 h-1/2 bg-black"
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        transition={{ duration: 0.9, ease: [0.83, 0, 0.17, 1] }}
        className="absolute left-0 right-0 bottom-0 h-1/2 bg-black"
      />
    </div>
  );
}
