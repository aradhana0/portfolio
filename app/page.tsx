import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { AboutMe } from "@/components/sections/AboutMe";
import { SkillsDashboard } from "@/components/sections/SkillsDashboard";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ArtGallery } from "@/components/sections/ArtGallery";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FeaturedProjects />
      <AboutMe />
      <SkillsDashboard />
      <ExperienceTimeline />
      <ArtGallery />
      <ContactCTA />
    </>
  );
}
