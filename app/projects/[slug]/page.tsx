import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { CaseStudyContent } from "@/components/sections/CaseStudyContent";
import { caseStudies, getCaseStudy } from "@/content/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = getCaseStudy(params.slug);
  return { title: study ? `${study.title} — Case Study` : "Case Study" };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  return (
    <>
      <PageHeader eyebrow="Case study" title={study.title} subtitle={study.summary} />
      <CaseStudyContent study={study} />
    </>
  );
}
