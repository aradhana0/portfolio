"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SocialLink } from "@/components/ui/SocialLink";
import { PencilMorph } from "@/components/ui/PencilMorph";
import { profile } from "@/content/profile";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-12 pt-12 lg:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="mb-3 flex items-center gap-2 text-fg-muted">
            {profile.greeting} <span className="text-xl">&#128075;</span>
          </motion.p>
          <motion.h1
            variants={item}
            className="text-5xl font-bold tracking-tight text-fg sm:text-6xl"
          >
            {profile.firstName} <span className="text-primary">{profile.lastName}</span>
          </motion.h1>
          <motion.p variants={item} className="mt-3 text-lg font-medium text-fg">
            {profile.title} <span className="text-primary">@ {profile.company}</span>
          </motion.p>
          <motion.p variants={item} className="mt-4 max-w-md text-fg-muted">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-5">
            <PencilMorph />
          </motion.div>

          <motion.div variants={item} className="mt-6 flex flex-wrap gap-3">
            <Button href="/projects" icon={<ArrowRight className="h-4 w-4" />}>
              View My Work
            </Button>
            <Button
              href={profile.resumeUrl}
              download
              variant="secondary"
              icon={<Download className="h-4 w-4" />}
            >
              Download Resume
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex gap-3">
            {profile.socials.map((s) => (
              <SocialLink key={s.label} social={s} />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-6 -z-10 rounded-[40%] opacity-40 blur-3xl"
            style={{
              background: "radial-gradient(circle at 60% 40%, rgb(var(--primary)), transparent 60%)",
            }}
          />
          <div className="relative mx-auto flex aspect-[4/5] w-full max-w-sm items-center justify-center overflow-hidden rounded-2xl border bg-card text-center text-sm text-fg-subtle">
            <Image
              src="/assets/profile-pic.png"
              alt="Aradhana Dubey profile"
              width={640}
              height={800}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 lg:absolute lg:-right-4 lg:top-1/2 lg:mt-0 lg:w-44 lg:-translate-y-1/2 lg:grid-cols-1">
            {profile.infoCards.map((card, i) => (
              <motion.div
                key={card.subtitle}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-xl border bg-card/80 p-3 backdrop-blur"
              >
                <p className="text-sm font-semibold text-fg">{card.title}</p>
                <p className="text-xs text-fg-subtle">{card.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
