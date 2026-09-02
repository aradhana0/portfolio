import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border bg-gradient-to-r from-primary/15 to-accentblue/10 p-8 sm:flex-row">
        <div className="flex items-center gap-4">
          <span className="hidden text-primary sm:block">
            <Sparkles className="h-8 w-8" />
          </span>
          <div>
            <h2 className="text-xl font-semibold text-fg">
              Let&apos;s build something amazing together!
            </h2>
            <p className="text-sm text-fg-muted">
              Currently open to new opportunities and exciting collaborations.
            </p>
          </div>
        </div>
        <Button href="/contact" icon={<ArrowRight className="h-4 w-4" />}>
          Get In Touch
        </Button>
      </div>
    </section>
  );
}
