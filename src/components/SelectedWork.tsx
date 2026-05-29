"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  {
    title: "The Rise of Netflix",
    category: "Brand Campaign / Visual Design",
    description:
      "A cinematic visual campaign celebrating Netflix originals — bold typography and dramatic composition capturing the essence of three iconic stories.",
    src: "/projects/project-netflix.png",
    year: "2026",
  },
  {
    title: "KFC — Para Chuparse Los Dedos",
    category: "Social Media Art Direction",
    description:
      "Explosive food photography meets social-first design. A scroll-stopping visual system with irresistible textures and bold framing.",
    src: "/projects/project-kfc.png",
    year: "2026",
  },
  {
    title: "De Morfi — Brand Identity",
    category: "Brand Identity / Packaging",
    description:
      "Playful yet premium brand identity with deconstructed burger visuals, bold typographic storytelling, and warm tones.",
    src: "/projects/project-demorfi.png",
    year: "2025",
  },
  {
    title: "Dark Truth — Social Awareness",
    category: "Creative Direction / Editorial",
    description:
      "An editorial-style visual exposé on social media's impact. Dark, investigative aesthetics with layered typography.",
    src: "/projects/project-social-media.png",
    year: "2025",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isWide = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
      className={`group ${
        isWide
          ? "md:col-span-7 md:col-start-6"
          : "md:col-span-7"
      }`}
    >
      <div className="relative overflow-hidden rounded-xl bg-card sm:rounded-2xl">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.src}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 58vw"
            className="object-cover transition-transform duration-[1s] ease-out will-change-transform group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 md:p-9">
          <div className="flex items-end justify-between gap-4">
            <div className="min-w-0">
              <span className="mb-1.5 inline-block font-satoshi text-[10px] uppercase tracking-[0.2em] text-accent sm:text-xs sm:mb-2">
                {project.category}
              </span>
              <h3 className="font-clash text-xl font-semibold leading-tight text-foreground sm:text-2xl md:text-3xl lg:text-4xl">
                {project.title}
              </h3>
              <p className="mt-2 max-w-md font-satoshi text-xs leading-relaxed text-muted sm:text-sm sm:mt-3">
                {project.description}
              </p>
            </div>
            <span className="hidden shrink-0 font-clash text-5xl font-bold text-foreground/5 lg:block lg:text-6xl">
              {project.year}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SelectedWork() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="work" className="relative py-24 px-5 sm:py-28 sm:px-8 md:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div ref={headerRef} className="mb-14 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-5 sm:gap-4 sm:mb-6"
          >
            <span className="h-px w-8 bg-accent sm:w-12" />
            <span className="font-satoshi text-[10px] uppercase tracking-[0.3em] text-accent sm:text-xs">
              Selected Work
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-clash text-[clamp(2rem,5vw,4.5rem)] font-semibold leading-[1.1] text-foreground"
          >
            Curated projects,<br className="hidden sm:block" />
            <span className="text-gradient">crafted with intent.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-12 md:gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
