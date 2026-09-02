"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  label: string;
  value: number; // 0-100
}

export function ProgressBar({ label, value }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-fg">{label}</span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-elevated"
        role="progressbar"
        aria-label={label}
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accentblue"
          initial={{ width: 0 }}
          whileInView={{ width: `${clamped}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
