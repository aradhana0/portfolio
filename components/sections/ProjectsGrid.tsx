"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/content/projects";
import { cn } from "@/lib/cn";

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

export function ProjectsGrid() {
  const [active, setActive] = useState<string | null>(null);
  const filtered = active ? projects.filter((p) => p.tags.includes(active)) : projects;

  const chip = "rounded-full border px-3 py-1.5 text-sm transition-colors";
  const on = "bg-primary text-white";
  const off = "bg-surface/40 text-fg-muted hover:bg-elevated";

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive(null)}
          className={cn(chip, active === null ? on : off)}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            type="button"
            key={tag}
            onClick={() => setActive(tag)}
            className={cn(chip, active === tag ? on : off)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
