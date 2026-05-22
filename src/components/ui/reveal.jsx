import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export function Reveal({
  amount = 0.18,
  axis = "y",
  children,
  className,
  delay = 0,
  distance = 24,
  once = true,
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        prefersReducedMotion
          ? { opacity: 0 }
          : {
              opacity: 0,
              x: axis === "x" ? distance : 0,
              y: axis === "y" ? distance : 0,
            }
      }
      transition={
        prefersReducedMotion
          ? { duration: 0.01 }
          : { duration: 0.58, delay, ease }
      }
      viewport={{ amount, once }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  amount = 0.12,
  children,
  className,
  delayChildren = 0.05,
  once = true,
  staggerChildren = 0.08,
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: prefersReducedMotion
            ? { duration: 0.01 }
            : { delayChildren, staggerChildren },
        },
      }}
      viewport={{ amount, once }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
}
