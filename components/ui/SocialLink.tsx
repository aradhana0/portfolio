import { Github, Linkedin, Mail } from "lucide-react";
import type { Social } from "@/lib/types";

const icons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export function SocialLink({ social }: { social: Social }) {
  const Icon = icons[social.icon];
  const external = social.icon !== "mail";
  return (
    <a
      href={social.href}
      aria-label={social.label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border bg-surface/40 text-fg-muted transition-colors hover:bg-elevated hover:text-fg"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}
