import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/layout/Reveal";
import { SkillsDashboard } from "@/components/sections/SkillsDashboard";
import { aboutParagraphs, aboutHighlights } from "@/content/about";

export const metadata: Metadata = { title: "About — Aradhana Dubey" };

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="Who I am" title="About" />
      <section className="mx-auto max-w-7xl px-6 pb-4">
        <Reveal>
          <div className="max-w-3xl space-y-4 text-fg-muted">
            {aboutParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {aboutHighlights.map((h) => (
              <Tag key={h}>{h}</Tag>
            ))}
          </div>
        </Reveal>
      </section>
      <SkillsDashboard />
    </>
  );
}
