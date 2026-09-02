"use client";

import { useEffect, useRef } from "react";

const SIZE = 400;

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (reduce || !fine) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.transform = `translate(${e.clientX - SIZE / 2}px, ${e.clientY - SIZE / 2}px)`;
        }
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-0 hidden md:block">
      <div
        ref={ref}
        className="h-[400px] w-[400px] rounded-full opacity-20 blur-[100px]"
        style={{ background: "radial-gradient(circle, rgb(var(--primary)), transparent 70%)" }}
      />
    </div>
  );
}
