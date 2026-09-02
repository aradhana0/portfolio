import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ExperienceList } from "@/components/sections/ExperienceList";

export const metadata: Metadata = { title: "Experience — Aradhana Dubey" };

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Career"
        title="Experience"
        subtitle="Roles, teams, and the kind of work I've focused on over the years."
      />
      <div className="mx-auto max-w-7xl px-6 pb-16">
        <ExperienceList />
      </div>
    </>
  );
}
