"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * The "pencil-stroke morphs into code" signature accent from the design plan:
 * a hand-drawn stroke draws itself on, then a code glyph fades in at the end.
 * Honors prefers-reduced-motion by rendering the finished state statically.
 */
export function PencilMorph() {
  const reduce = useReducedMotion();

  return (
    <svg width="160" height="36" viewBox="0 0 160 36" fill="none" aria-hidden="true">
      <motion.path
        d="M4 24 C 22 8, 40 8, 58 20 S 96 32, 118 16"
        stroke="rgb(var(--primary))"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={reduce ? { duration: 0 } : { duration: 1.1, ease: "easeInOut" }}
      />
      <motion.text
        x="124"
        y="24"
        fill="rgb(var(--primary))"
        fontSize="18"
        fontWeight="700"
        fontFamily="ui-monospace, monospace"
        initial={{ opacity: reduce ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={reduce ? { duration: 0 } : { duration: 0.4, delay: 1.0 }}
      >
        {"</>"}
      </motion.text>
    </svg>
  );
}
