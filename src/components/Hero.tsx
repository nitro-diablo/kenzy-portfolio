"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24">
      {/* Background accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center text-center">
        {/* Top tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="h-[1px] w-8 bg-accent" />
          <span className="font-satoshi text-xs uppercase tracking-[0.3em] text-accent">
            Brand &amp; Graphic Designer
          </span>
          <span className="h-[1px] w-8 bg-accent" />
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
            className="font-clash text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-9xl"
          >
            Designing brands
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.45 }}
            className="font-clash text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
          >
            <span className="text-gradient">people remember.</span>
          </motion.h1>
        </div>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 max-w-xl font-satoshi text-base leading-relaxed text-muted md:text-lg"
        >
          Kenzy transforms ambitious visions into iconic visual identities — 
          strategic, refined, and built to endure.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#work"
            className="group relative overflow-hidden rounded-full bg-accent px-8 py-4 font-satoshi text-sm font-medium uppercase tracking-[0.15em] text-background transition-all duration-500 hover:bg-accent-light"
          >
            <span className="relative z-10">View Work</span>
          </a>
          <a
            href="#contact"
            className="rounded-full border border-foreground/20 px-8 py-4 font-satoshi text-sm font-medium uppercase tracking-[0.15em] text-foreground transition-all duration-500 hover:border-accent hover:text-accent"
          >
            Let&apos;s Work Together
          </a>
        </motion.div>

        {/* Featured project images */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="mt-20 grid w-full grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        >
          {[
            { src: "/projects/project-netflix.png", alt: "Netflix campaign" },
            { src: "/projects/project-kfc.png", alt: "KFC social media" },
            { src: "/projects/project-demorfi.png", alt: "De Morfi branding" },
            { src: "/projects/project-social-media.png", alt: "Social media design" },
          ].map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 + i * 0.15 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-card"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={i < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-satoshi text-[10px] uppercase tracking-[0.3em] text-muted">
            Scroll
          </span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
