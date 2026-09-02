import type { Project } from "@/lib/types";

// Placeholder featured projects — edit freely.
export const projects: Project[] = [
  {
    title: "React Spectrum S2 Migration",
    type: "AI Developer Tooling · Adobe",
    description:
      "Built reusable AI skills to automate S2 tab migrations, code review, encoding migration patterns and engineering knowledge into repeatable workflows that reduced manual upgrade effort.",
    tags: ["AI Skills", "Automation", "React", "TypeScript", "Developer Tools"],
    caseStudySlug: "s2-migration-skills",
  },
  {
    title: "EU DSA Compliance",
    type: "Architecture · Adobe",
    description:
      "Architected and led the EU DSA compliance solution for Adobe Admin Console, owning vertical execution from design and cross-system integration through E2E delivery — shipped in 17 days.",
    tags: [
      "React",
      "TypeScript",
      "System Design",
      "REST APIs",
      "Enterprise",
    ],
    caseStudySlug: "eu-dsa-compliance",
  },
  {
    title: "Lord of the Pings",
    type: "AI Agent · Adobe",
    description:
      "AI-powered work assistant that brings together signals from Slack, Jira, Git, and Outlook to surface pending actions, prioritize what needs attention, track aging items, and capture personal notes.",
    tags: ["AI Agents", "Slack", "Jira", "Git", "Outlook", "Automation"],
    caseStudySlug: "lord-of-the-pings",
  },
  {
    title: "Reusable Card Component",
    type: "Design System · Adobe",
    description:
      "Architected and built a reusable, extensible card component adopted by multiple teams across Adobe, standardizing common UI patterns while reducing duplicated implementation effort.",
    tags: [
      "React",
      "TypeScript",
      "Design Systems",
      "Component Architecture",
      "Accessibility",
    ],
    caseStudySlug: "reusable-card-component",
  },
  {
  title: "TraceLens",
  type: "Full Stack + AI · In Development",
  description:
    "AI-assisted incident investigation platform that correlates logs, traces, deployments, and service signals from distributed systems to reconstruct failures and surface evidence-backed root-cause hypotheses.",
  tags: [
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "OpenTelemetry",
    "PostgreSQL",
    "Redis",
    "AI Agents",
  ],
  caseStudySlug: "tracelens",
}
];
