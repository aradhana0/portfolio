import { Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/content/projects";

export function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <SectionHeading
        icon={<Sparkles className="h-5 w-5" />}
        title="Featured Projects"
        viewAllHref="/projects"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
