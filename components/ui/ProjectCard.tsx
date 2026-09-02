"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/lib/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="flex h-full flex-col rounded-2xl border bg-card/60 p-6 transition-colors hover:bg-elevated"
    >
      <div className="mb-3 flex items-center justify-between">
        <Tag>{project.type}</Tag>
      </div>
      <h3 className="text-lg font-semibold text-fg">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm text-fg-muted">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-4 text-sm">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-primary hover:text-primary-deep"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-fg-muted hover:text-fg"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        )}
      </div>
    </motion.article>
  );
}
