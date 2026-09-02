import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import type { Project } from "@/lib/types";

const project: Project = {
  title: "Test Project",
  type: "Frontend",
  description: "A sample project used for testing.",
  tags: ["React", "TypeScript"],
  liveUrl: "https://example.com/live",
  repoUrl: "https://github.com/example/repo",
  caseStudySlug: "test-project",
};

describe("ProjectCard", () => {
  it("renders title, description and tags", () => {
    render(<ProjectCard project={project} />);
    expect(screen.getByRole("heading", { name: "Test Project" })).toBeInTheDocument();
    expect(screen.getByText("A sample project used for testing.")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("links to the live demo and repo safely", () => {
    render(<ProjectCard project={project} />);
    const live = screen.getByRole("link", { name: /Live Demo/i });
    const repo = screen.getByRole("link", { name: /GitHub/i });
    expect(live).toHaveAttribute("href", "https://example.com/live");
    expect(live).toHaveAttribute("rel", "noopener noreferrer");
    expect(repo).toHaveAttribute("href", "https://github.com/example/repo");
    expect(repo).toHaveAttribute("target", "_blank");
  });
});
