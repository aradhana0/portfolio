import type { CaseStudy } from "@/lib/types";

// Placeholder case studies — one per project with a caseStudySlug.
export const caseStudies: CaseStudy[] = [
  {
    slug: "s2-migration-skills",
    title: "S2 Migration Skills",
    summary:
      "Reusable AI skills encoding migration patterns to accelerate S2 tab upgrade work.",
    role: "Senior engineer",
    timeline: "2024 · 8 weeks",
    stack: ["React", "TypeScript", "AI", "Developer Tools"],
    problem:
      "Manual migration work repeated across S2 projects and consumed too much engineering time.",
    approach:
      "Captured migration logic into reusable skills and tooling patterns to make upgrades repeatable and easier to validate.",
    architecture:
      "A React-based authoring experience backed by structured workflows and reusable AI prompts for migration guidance.",
    outcome:
      "Reduced repeated manual effort and created a repeatable migration framework for future upgrades.",
    media: [],
  },
  {
    slug: "s2-ai-code-review",
    title: "S2 AI Code Review",
    summary:
      "AI-assisted branch and PR review workflows designed to reduce review overhead and surface issues sooner.",
    role: "Senior engineer",
    timeline: "2024 · 5 weeks",
    stack: ["AI", "React", "TypeScript", "Git"],
    problem:
      "PR reviews were slow and inconsistent, especially for repetitive code health and integration checks.",
    approach:
      "Built guidance-driven review flows that summarize code changes and highlight likely risk areas before merge.",
    architecture:
      "Client-side review workflows with server-side analysis decisions and structured reporting for engineering teams.",
    outcome:
      "Improved review coverage and made it easier for engineers to identify likely risks earlier.",
    media: [],
  },
  {
    slug: "eu-dsa-compliance",
    title: "EU DSA Compliance",
    summary:
      "Architected the EU DSA compliance solution for Adobe Admin Console and shipped it quickly under tight constraints.",
    role: "Architecture lead",
    timeline: "2023 · 3 weeks",
    stack: ["React", "TypeScript", "System Design", "REST APIs"],
    problem:
      "The team needed a compliant and measurable path to meet regulatory obligations without slowing product delivery.",
    approach:
      "Designed a cross-system compliance flow and coordinated execution across engineering, design, and stakeholders.",
    architecture:
      "Frontend and backend integration for compliance checks, audit paths, and reporting while keeping the release roadmap on track.",
    outcome:
      "Delivered a working compliance solution within the challenge window and reduced operational risk across the platform.",
    media: [],
  },
  {
    slug: "lord-of-the-pings",
    title: "Lord of the Pings",
    summary:
      "An AI-powered work assistant that brings together Slack, Jira, Git, and Outlook activity into a single triage stream.",
    role: "Senior engineer",
    timeline: "2024 · 6 weeks",
    stack: ["AI Agents", "Slack", "Jira", "Git", "Outlook"],
    problem:
      "Teams were losing context when important tasks and references were spread across a dozen communication channels.",
    approach:
      "Aggregated signals into a single assistant experience and used prioritization logic to reduce noise and missed actions.",
    architecture:
      "A coordination layer that ingests tool metadata and surfaces actionable summaries and follow-ups in a user-friendly workflow.",
    outcome:
      "Reduced workstream friction and gave the team a clearer view of what required attention next.",
    media: [],
  },
  {
    slug: "reusable-card-component",
    title: "Reusable Card Component",
    summary:
      "A reusable card component system for adoption across Adobe teams, reducing duplicated implementation effort.",
    role: "Design system engineer",
    timeline: "2023 · 4 weeks",
    stack: ["React", "TypeScript", "Design Systems", "Accessibility"],
    problem:
      "Teams were building similar card patterns repeatedly, leading to inconsistent UI and higher maintenance overhead.",
    approach:
      "Created a flexible, reusable component model with strong accessibility and clear customization points.",
    architecture:
      "A component library-first design with typed props and a consistent API for reuse across product teams.",
    outcome:
      "Standardized common UI patterns and reduced duplicated implementation effort across the org.",
    media: [],
  },
  {
    slug: "tracelens",
    title: "TraceLens",
    summary:
      "AI-assisted incident investigation platform connecting logs, traces, deployments, and service signals to surface root causes.",
    role: "Full-stack engineer",
    timeline: "2024 · ongoing",
    stack: ["Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL"],
    problem:
      "Distributed systems produce too much signal and too little context during incidents and investigations.",
    approach:
      "Correlated operational data and used AI to generate evidence-backed root-cause hypotheses with a clear investigation flow.",
    architecture:
      "A Next.js experience over a Python backend that gathers service telemetry and patterns for investigation summaries.",
    outcome:
      "Provides a coherent investigation workflow for understanding failing systems and narrowing root causes quickly.",
    media: [],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
