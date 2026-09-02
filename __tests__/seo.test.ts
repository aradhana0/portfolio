import { describe, it, expect } from "vitest";
import sitemap from "@/app/sitemap";
import robots from "@/app/robots";
import { caseStudies } from "@/content/caseStudies";

describe("SEO routes", () => {
  it("lists every page and case study in the sitemap", () => {
    const entries = sitemap();
    expect(entries.length).toBe(7 + caseStudies.length);
    for (const c of caseStudies) {
      expect(entries.some((e) => e.url.endsWith(`/projects/${c.slug}`))).toBe(true);
    }
  });

  it("points robots at the sitemap and allows crawling", () => {
    const r = robots();
    expect(String(r.sitemap)).toMatch(/\/sitemap\.xml$/);
    expect(r.rules).toMatchObject({ userAgent: "*", allow: "/" });
  });
});
