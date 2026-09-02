import type { Profile } from "@/lib/types";

// NOTE: All values below are placeholder/dummy content.
// Edit here to update the site — every component reads from this object.
export const profile: Profile = {
  name: "Aradhana Dubey",
  firstName: "Aradhana",
  lastName: "Dubey",
  title: "Senior Software Engineer",
  company: "Adobe Inc",
  greeting: "Hi, I'm",
  tagline:
    "Building scalable full-stack applications and AI-powered experiences.",
  summary:
    "Full-Stack Engineer with 7+ years of software engineering experience, specializing in React, TypeScript, Python, and FastAPI, with a growing focus on building AI-powered products and intelligent applications.",
  resumeUrl: "/assets/Aradhana_Dubey_Resume.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/aradhana0/portfolio", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aradhana-dubey-7a1a42b0",
      icon: "linkedin",
    },
    { label: "Email", href: "mailto:aradhanad.work@gmail.com", icon: "mail" },
  ],
  infoCards: [
    { icon: "briefcase", title: "7+ Years", subtitle: "Experience" },
    { icon: "adobe", title: "Adobe Inc", subtitle: "Senior Engineer" },
    { icon: "brain", title: "Working with", subtitle: "AI / ML" },
  ],
  stats: [
    { icon: "users", value: "7+ Years", label: "of Experience" },
    { icon: "code", value: "20+", label: "Projects Delivered" },
    { icon: "team", value: "Cross-functional", label: "Team Player" },
    { icon: "globe", value: "Open to", label: "Relocation (UK/Europe)" },
  ],
};
