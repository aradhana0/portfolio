import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";
import type { Sketch } from "@/lib/types";

export function SketchCard({ sketch }: { sketch: Sketch }) {
  return (
    <figure className="group">
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl border bg-card">
        {sketch.src ? (
          <Image
            src={sketch.src}
            alt={sketch.title}
            fill
            sizes="(max-width: 640px) 50vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-fg-subtle">
            <ImageIcon className="h-6 w-6" aria-hidden="true" />
            <span className="text-xs">Add sketch</span>
          </div>
        )}
      </div>
      <figcaption className="mt-2">
        <p className="text-sm font-medium text-fg">{sketch.title}</p>
        <p className="text-xs text-fg-subtle">{sketch.details}</p>
      </figcaption>
    </figure>
  );
}
