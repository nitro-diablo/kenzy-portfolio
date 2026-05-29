"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pt-20 sm:px-8 md:px-12">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-6 flex items-center gap-3 sm:mb-8"
        >
          <span className="h-px w-6 bg-accent sm:w-8" />
          <span className="font-satoshi text-[10px] uppercase tracking-[0.3em] text-accent sm:text-xs">
            Brand &amp; Graphic Designer
          </span>
          <span className="h-px w-6 bg-accent sm:w-8" />
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
            className="font-clash text-[clamp(2.5rem,8vw,7.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground"
          >
            Designing brands
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.42 }}
            className="font-clash text-[clamp(2.5rem,8vw,7.5rem)] font-semibold leading-[1.05] tracking-tight"
          >
            <span className="text-gradient">people remember.</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-5 max-w-lg font-satoshi text-[clamp(0.875rem,1.8vw,1.05rem)] leading-relaxed text-muted sm:mt-7"
        >
          Transforming ambitious visions into iconic visual identities —
          strategic, refined, and built to endure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4 sm:mt-10"
        >
          <a
            href="#work"
            className="rounded-full bg-accent px-7 py-3.5 font-satoshi text-[13px] font-medium uppercase tracking-[0.15em] text-background transition-all duration-400 hover:bg-accent-light sm:px-8 sm:py-4 sm:text-sm"
          >
            View Work
          </a>
          <a
            href="https://wa.me/201026600904"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-foreground/15 px-7 py-3.5 font-satoshi text-[13px] font-medium uppercase tracking-[0.15em] text-foreground transition-all duration-400 hover:border-accent hover:text-accent sm:px-8 sm:py-4 sm:text-sm"
          >
            Let&apos;s Work Together
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.15, ease: [0.76, 0, 0.24, 1] }}
          className="mt-14 grid w-full grid-cols-2 gap-3 sm:mt-16 sm:gap-4 md:grid-cols-4 md:gap-5 lg:mt-20"
        >
          {[
            { src: "/projects/project-netflix.png", alt: "Netflix campaign" },
            { src: "/projects/project-kfc.png", alt: "KFC social media" },
            { src: "/projects/project-demorfi.png", alt: "De Morfi branding" },
            { src: "/projects/project-social-media.png", alt: "Social media design" },
          ].map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.3 + i * 0.12 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-card sm:rounded-xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 768px) 45vw, 22vw"
                className="object-cover transition-transform duration-700 will-change-transform group-hover:scale-105"
                priority={i < 2}
                loading={i < 2 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-satoshi text-[10px] uppercase tracking-[0.3em] text-muted">
            Scroll
          </span>
          <div className="h-6 w-px bg-gradient-to-b from-accent to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
