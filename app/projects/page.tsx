import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";

export const metadata: Metadata = { title: "Projects — Aradhana Dubey" };

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Projects"
        subtitle="A selection of things I've built. Filter by technology to narrow it down."
      />
      <div className="mx-auto max-w-7xl px-6 pb-16">
        <ProjectsGrid />
      </div>
    </>
  );
}
