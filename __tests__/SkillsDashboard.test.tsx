import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SkillsDashboard } from "@/components/sections/SkillsDashboard";
import { skills } from "@/content/skills";

describe("SkillsDashboard", () => {
  it("renders a progress bar for every skill", () => {
    render(<SkillsDashboard />);
    expect(screen.getAllByRole("progressbar")).toHaveLength(skills.length);
  });

  it("renders skill labels", () => {
    render(<SkillsDashboard />);
    expect(screen.getByText(skills[0].name)).toBeInTheDocument();
  });
});
