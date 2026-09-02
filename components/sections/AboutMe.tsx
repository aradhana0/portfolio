import { User } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/layout/Reveal";
import { aboutParagraphs, aboutHighlights } from "@/content/about";

export function AboutMe() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <SectionHeading icon={<User className="h-5 w-5" />} title="About Me" />
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
  );
}
