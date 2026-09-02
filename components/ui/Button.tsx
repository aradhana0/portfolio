import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  download?: boolean;
}

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-deep shadow-glow",
  secondary: "border bg-surface/40 text-fg hover:bg-elevated",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-base disabled:pointer-events-none disabled:opacity-50";

export function Button({
  children,
  variant = "primary",
  icon,
  className,
  href,
  onClick,
  disabled,
  type = "button",
  download,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto:");
    if (external || download) {
      return (
        <a
          href={href}
          download={download}
          target={external && !download ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={classes}
        >
          {children}
          {icon}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
      {icon}
    </button>
  );
}
