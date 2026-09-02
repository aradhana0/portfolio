"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { sketches } from "@/content/sketches";

function Placeholder({ large = false }: { large?: boolean }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-fg-subtle">
      <ImageIcon className={large ? "h-10 w-10" : "h-6 w-6"} aria-hidden="true" />
      <span className="text-xs">Add sketch</span>
    </div>
  );
}

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const openAt = (i: number) => {
    lastFocused.current = document.activeElement as HTMLElement | null;
    setIndex(i);
  };
  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i + sketches.length - 1) % sketches.length)),
    [],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % sketches.length)),
    [],
  );

  useEffect(() => {
    if (index === null) {
      lastFocused.current?.focus?.();
      return;
    }
    dialogRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, close, prev, next]);

  // Keep Tab focus within the dialog.
  const trapTab = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab") return;
    const focusables = dialogRef.current?.querySelectorAll<HTMLElement>("button");
    if (!focusables || focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const current = index === null ? null : sketches[index];

  return (
    <div className="mx-auto max-w-7xl px-6 pb-16">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {sketches.map((sketch, i) => (
          <button
            key={sketch.title}
            type="button"
            onClick={() => openAt(i)}
            className="group text-left"
            aria-label={`Open ${sketch.title}`}
          >
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
                <Placeholder />
              )}
            </div>
            <p className="mt-2 text-sm font-medium text-fg">{sketch.title}</p>
            <p className="text-xs text-fg-subtle">{sketch.details}</p>
          </button>
        ))}
      </div>

      {current && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          tabIndex={-1}
          onKeyDown={trapTab}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 outline-none"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-lg text-white/80 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 inline-flex h-10 w-10 items-center justify-center rounded-lg text-white/80 hover:text-white sm:left-6"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <div className="w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-card">
              {current.src ? (
                <Image src={current.src} alt={current.title} fill sizes="512px" className="object-contain" />
              ) : (
                <Placeholder large />
              )}
            </div>
            <p className="mt-3 text-center text-sm text-white/90">
              {current.title} — {current.details}
            </p>
          </div>
          <button
            type="button"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 inline-flex h-10 w-10 items-center justify-center rounded-lg text-white/80 hover:text-white sm:right-6"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </div>
  );
}
