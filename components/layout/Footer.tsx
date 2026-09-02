import { profile } from "@/content/profile";
import { SocialLink } from "@/components/ui/SocialLink";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-fg-subtle">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {profile.socials.map((s) => (
            <SocialLink key={s.label} social={s} />
          ))}
        </div>
      </div>
    </footer>
  );
}
