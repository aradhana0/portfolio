import { describe, it, expect } from "vitest";
import { skills } from "@/content/skills";
import { projects } from "@/content/projects";
import { experiences } from "@/content/experience";
import { caseStudies } from "@/content/caseStudies";
import { mlJourney } from "@/content/mlJourney";

describe("content integrity", () => {
  it("keeps every skill level between 0 and 100", () => {
    for (const skill of skills) {
      expect(skill.level).toBeGreaterThanOrEqual(0);
      expect(skill.level).toBeLessThanOrEqual(100);
      expect(skill.name).not.toBe("");
    }
  });

  it("gives every project the required fields", () => {
    for (const p of projects) {
      expect(p.title).not.toBe("");
      expect(p.description).not.toBe("");
      expect(p.tags.length).toBeGreaterThan(0);
    }
  });

  it("gives every experience a role, company and period", () => {
    for (const e of experiences) {
      expect(e.role).not.toBe("");
      expect(e.company).not.toBe("");
      expect(e.period).not.toBe("");
    }
  });

  it("has a case study for every project caseStudySlug", () => {
    for (const p of projects) {
      if (p.caseStudySlug) {
        expect(caseStudies.some((c) => c.slug === p.caseStudySlug)).toBe(true);
      }
    }
  });

  it("uses only valid ML-entry kinds", () => {
    for (const e of mlJourney) {
      expect(["course", "project", "note"]).toContain(e.kind);
    }
  });
});
