import { Reveal } from "@/components/layout/Reveal";
import { experiences } from "@/content/experience";
import type { Experience } from "@/lib/types";

export function ExperienceList({ items = experiences }: { items?: Experience[] }) {
  return (
    <ol className="relative ml-3 border-l pl-8">
      {items.map((exp, i) => (
        <li key={`${exp.company}-${i}`} className="relative pb-10 last:pb-0">
          <span
            className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-base bg-primary"
            aria-hidden="true"
          />
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h3 className="text-base font-semibold text-fg">
                {exp.role} <span className="text-primary">· {exp.company}</span>
              </h3>
              <span className="text-sm text-fg-subtle">{exp.period}</span>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-fg-muted">
              {exp.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
