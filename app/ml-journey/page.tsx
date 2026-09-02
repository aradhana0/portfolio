import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { MlTimeline } from "@/components/sections/MlTimeline";

export const metadata: Metadata = { title: "ML Journey — Aradhana Dubey" };

export default function MlJourneyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Learning in public"
        title="ML Journey"
        subtitle="Courses, experiments, and notes as I go deeper into machine learning."
      />
      <MlTimeline />
    </>
  );
}
