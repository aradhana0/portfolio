import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { caseStudies } from "@/content/caseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const now = new Date();
  const routes = ["", "/about", "/experience", "/projects", "/art", "/ml-journey", "/contact"];

  return [
    ...routes.map((r) => ({ url: `${base}${r}`, lastModified: now })),
    ...caseStudies.map((c) => ({ url: `${base}/projects/${c.slug}`, lastModified: now })),
  ];
}
