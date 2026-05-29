"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  {
    title: "The Rise of Netflix",
    category: "Brand Campaign / Visual Design",
    description:
      "A cinematic visual campaign celebrating Netflix originals — designed to capture the essence of three iconic stories through bold typography and dramatic composition.",
    src: "/projects/project-netflix.png",
    year: "2026",
  },
  {
    title: "KFC — Para Chuparse Los Dedos",
    category: "Social Media Art Direction",
    description:
      "Explosive food photography meets social-first design. A visual system for KFC that breaks through the scroll with irresistible textures and bold framing.",
    src: "/projects/project-kfc.png",
    year: "2026",
  },
  {
    title: "De Morfi — Brand Identity",
    category: "Brand Identity / Packaging",
    description:
      "A playful yet premium brand identity for De Morfi by Los Troncos. Deconstructed burger visuals paired with bold typographic storytelling and warm tones.",
    src: "/projects/project-demorfi.png",
    year: "2025",
  },
  {
    title: "Dark Truth — Social Awareness",
    category: "Creative Direction / Editorial",
    description:
      "An editorial-style visual exposé on social media's impact. Dark, investigative aesthetics with layered typography and data-driven visual storytelling.",
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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.76, 0, 0.24, 1] }}
      className={`group relative ${
        index % 2 === 0 ? "md:col-span-7" : "md:col-start-3 md:col-span-10"
      }`}
    >
      <div className="relative overflow-hidden rounded-2xl bg-card">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.src}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 70vw"
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="flex items-end justify-between">
            <div>
              <span className="mb-2 inline-block font-satoshi text-xs uppercase tracking-[0.2em] text-accent">
                {project.category}
              </span>
              <h3 className="font-clash text-2xl font-semibold text-foreground md:text-4xl">
                {project.title}
              </h3>
              <p className="mt-3 max-w-md font-satoshi text-sm leading-relaxed text-muted md:text-base">
                {project.description}
              </p>
            </div>
            <span className="hidden font-clash text-6xl font-bold text-foreground/5 md:block">
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
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="work" className="relative py-32 px-6 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        {/* Section header */}
        <div ref={headerRef} className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="h-[1px] w-12 bg-accent" />
            <span className="font-satoshi text-xs uppercase tracking-[0.3em] text-accent">
              Selected Work
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-clash text-4xl font-semibold text-foreground md:text-6xl lg:text-7xl"
          >
            Curated projects,<br />
            <span className="text-gradient">crafted with intent.</span>
          </motion.h2>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
