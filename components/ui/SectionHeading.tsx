import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  icon?: ReactNode;
  title: string;
  viewAllHref?: string;
  viewAllLabel?: string;
}

export function SectionHeading({
  icon,
  title,
  viewAllHref,
  viewAllLabel = "View all",
}: SectionHeadingProps) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h2 className="flex items-center gap-2 text-xl font-semibold text-fg">
        {icon && <span className="text-primary">{icon}</span>}
        {title}
      </h2>
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-deep"
        >
          {viewAllLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
