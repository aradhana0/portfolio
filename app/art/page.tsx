import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Gallery } from "@/components/sections/Gallery";
import { artistStatement } from "@/content/sketches";

export const metadata: Metadata = { title: "Art & Sketches — Aradhana Dubey" };

export default function ArtPage() {
  return (
    <>
      <PageHeader eyebrow="Beyond code" title="Art & Sketches" subtitle={artistStatement} />
      <Gallery />
    </>
  );
}
