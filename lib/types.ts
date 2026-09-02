export type SocialIcon = "github" | "linkedin" | "mail";

export interface Social {
  label: string;
  href: string;
  icon: SocialIcon;
}

export interface InfoCard {
  icon: string;
  title: string;
  subtitle: string;
}

export interface Stat {
  icon: string;
  value: string;
  label: string;
}

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  company: string;
  greeting: string;
  tagline: string;
  summary: string;
  resumeUrl: string;
  socials: Social[];
  infoCards: InfoCard[];
  stats: Stat[];
}

export interface Skill {
  name: string;
  level?: number; // 0-100
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface Project {
  title: string;
  type: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  caseStudySlug?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  role?: string;
  timeline?: string;
  stack: string[];
  problem: string;
  approach: string;
  architecture: string;
  outcome: string;
  media: string[];
}

export interface Sketch {
  title: string;
  src: string;
  details: string;
}

export interface MlEntry {
  title: string;
  date: string;
  kind: "course" | "project" | "note";
  description: string;
  link?: string;
}
