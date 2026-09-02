import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { projects } from "@/content/projects";

describe("ProjectsGrid", () => {
  it("renders every project by default", () => {
    render(<ProjectsGrid />);
    for (const p of projects) {
      expect(screen.getByRole("heading", { name: p.title })).toBeInTheDocument();
    }
  });

  it("filters projects by tag", async () => {
    render(<ProjectsGrid />);
    await userEvent.click(screen.getByRole("button", { name: "Next.js" }));
    expect(screen.getByRole("heading", { name: "E-Commerce Platform" })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "AI Interview Coach" })).not.toBeInTheDocument();
  });

  it("restores all projects when 'All' is selected", async () => {
    render(<ProjectsGrid />);
    await userEvent.click(screen.getByRole("button", { name: "Next.js" }));
    await userEvent.click(screen.getByRole("button", { name: "All" }));
    expect(screen.getByRole("heading", { name: "AI Interview Coach" })).toBeInTheDocument();
  });
});
