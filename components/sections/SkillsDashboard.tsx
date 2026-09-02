import { Code2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { skills } from "@/content/skills";

export function SkillsDashboard() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <SectionHeading icon={<Code2 className="h-5 w-5" />} title="Skills" />
      <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
        {skills.map((skill) => (
          <ProgressBar key={skill.name} label={skill.name} value={100} />
        ))}
      </div>
    </section>
  );
}
