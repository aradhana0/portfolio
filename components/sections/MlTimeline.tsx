import { ExternalLink } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/layout/Reveal";
import { mlJourney } from "@/content/mlJourney";

export function MlTimeline() {
  return (
    <div className="mx-auto max-w-3xl space-y-4 px-6 pb-16">
      {mlJourney.map((entry, i) => (
        <Reveal key={i}>
          <div className="rounded-2xl border bg-card/60 p-5">
            <div className="flex items-center justify-between gap-3">
              <Tag>{entry.kind}</Tag>
              <span className="text-sm text-fg-subtle">{entry.date}</span>
            </div>
            <h3 className="mt-2 text-base font-semibold text-fg">{entry.title}</h3>
            <p className="mt-1 text-sm text-fg-muted">{entry.description}</p>
            {entry.link && (
              <a
                href={entry.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-deep"
              >
                <ExternalLink className="h-4 w-4" />
                Learn more
              </a>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
