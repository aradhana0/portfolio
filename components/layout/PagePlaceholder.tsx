import { Reveal } from "@/components/layout/Reveal";

export function PagePlaceholder({ title, note }: { title: string; note?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">{title}</p>
        <h1 className="text-3xl font-bold text-fg sm:text-4xl">{title}</h1>
        <p className="mt-4 max-w-xl text-fg-muted">
          {note ??
            "This page arrives in the next build milestone. The route, layout shell, navigation and theming are already wired up."}
        </p>
      </Reveal>
    </section>
  );
}
