import { Reveal } from "@/components/layout/Reveal";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="mx-auto max-w-7xl px-6 pb-4 pt-16">
      <Reveal>
        {eyebrow && (
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">{eyebrow}</p>
        )}
        <h1 className="text-3xl font-bold text-fg sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-fg-muted">{subtitle}</p>}
      </Reveal>
    </header>
  );
}
