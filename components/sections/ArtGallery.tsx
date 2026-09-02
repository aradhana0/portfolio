import { Palette } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SketchCard } from "@/components/ui/SketchCard";
import { Reveal } from "@/components/layout/Reveal";
import { sketches, artistStatement } from "@/content/sketches";

export function ArtGallery() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <SectionHeading
        icon={<Palette className="h-5 w-5" />}
        title="Art & Sketches"
        viewAllHref="/art"
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {sketches.map((sketch) => (
          <SketchCard key={sketch.title} sketch={sketch} />
        ))}
      </div>
      <Reveal>
        <p className="mt-6 max-w-2xl border-l-2 border-primary pl-4 text-sm italic text-fg-muted">
          {artistStatement}
        </p>
      </Reveal>
    </section>
  );
}
