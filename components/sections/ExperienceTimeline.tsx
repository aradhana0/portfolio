import { Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceList } from "@/components/sections/ExperienceList";

export function ExperienceTimeline() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <SectionHeading
        icon={<Briefcase className="h-5 w-5" />}
        title="Experience"
        viewAllHref="/experience"
      />
      <ExperienceList />
    </section>
  );
}
