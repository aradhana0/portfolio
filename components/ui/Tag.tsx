import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border bg-surface/60 px-2.5 py-1 text-xs font-medium text-fg-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
