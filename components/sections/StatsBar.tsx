import { Users, Code2, Users2, Globe } from "lucide-react";
import type { ReactNode } from "react";
import { profile } from "@/content/profile";

const iconMap: Record<string, ReactNode> = {
  users: <Users className="h-6 w-6" />,
  code: <Code2 className="h-6 w-6" />,
  team: <Users2 className="h-6 w-6" />,
  globe: <Globe className="h-6 w-6" />,
};

export function StatsBar() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="grid grid-cols-2 gap-4 rounded-2xl border bg-surface/40 p-6 sm:grid-cols-4">
        {profile.stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-3">
            <span className="text-primary">{iconMap[stat.icon]}</span>
            <div>
              <p className="font-semibold text-fg">{stat.value}</p>
              <p className="text-sm text-fg-subtle">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
