import { Tag } from "@/components/ui/Tag";
import type { CaseStudy } from "@/lib/types";

export function CaseStudyContent({ study }: { study: CaseStudy }) {
  const sections = [
    { heading: "Problem", body: study.problem },
    { heading: "Approach", body: study.approach },
    { heading: "Architecture", body: study.architecture },
    { heading: "Outcome", body: study.outcome },
  ];

  return (
    <article className="mx-auto max-w-3xl px-6 pb-16">
      <dl className="grid grid-cols-2 gap-4 rounded-2xl border bg-surface/40 p-5 sm:grid-cols-3">
        {study.role && (
          <div>
            <dt className="text-xs uppercase tracking-wide text-fg-subtle">Role</dt>
            <dd className="mt-1 text-sm text-fg">{study.role}</dd>
          </div>
        )}
        {study.timeline && (
          <div>
            <dt className="text-xs uppercase tracking-wide text-fg-subtle">Timeline</dt>
            <dd className="mt-1 text-sm text-fg">{study.timeline}</dd>
          </div>
        )}
        <div className="col-span-2 sm:col-span-1">
          <dt className="text-xs uppercase tracking-wide text-fg-subtle">Stack</dt>
          <dd className="mt-1 flex flex-wrap gap-1.5">
            {study.stack.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </dd>
        </div>
      </dl>

      <div className="mt-8 space-y-8">
        {sections.map((s) => (
          <section key={s.heading}>
            <h2 className="text-lg font-semibold text-fg">{s.heading}</h2>
            <p className="mt-2 text-fg-muted">{s.body}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
