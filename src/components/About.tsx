"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "4+", label: "Years of Craft" },
  { value: "30+", label: "Brands Transformed" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-24 px-5 sm:py-28 sm:px-8 md:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 mb-5 sm:gap-4 sm:mb-6"
        >
          <span className="h-px w-8 bg-accent sm:w-12" />
          <span className="font-satoshi text-[10px] uppercase tracking-[0.3em] text-accent sm:text-xs">
            About
          </span>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-clash text-[clamp(1.75rem,4.5vw,3.5rem)] font-semibold leading-[1.12] text-foreground"
            >
              Every brand has a story.{" "}
              <span className="text-gradient">I make sure the world feels it.</span>
            </motion.h2>
          </div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-satoshi text-[clamp(0.875rem,1.6vw,1.05rem)] leading-[1.8] text-muted"
            >
              I&apos;m Kenzy — a brand and graphic designer who operates at the
              intersection of strategy and aesthetics. I don&apos;t just design logos
              or pick color palettes. I architect complete visual ecosystems that
              position brands as category leaders.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-5 font-satoshi text-[clamp(0.875rem,1.6vw,1.05rem)] leading-[1.8] text-muted sm:mt-6"
            >
              My work spans global campaigns, premium brand identities, and
              creative direction for clients who refuse to blend in. Every
              decision — from typography to texture — is intentional, strategic,
              and designed to provoke an emotional response.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-5 font-satoshi text-[clamp(0.875rem,1.6vw,1.05rem)] leading-[1.8] text-muted sm:mt-6"
            >
              The result? Brands that don&apos;t just exist — they dominate
              perception, command premium pricing, and become unforgettable.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-10 sm:mt-20 sm:gap-8 sm:pt-12 md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 + i * 0.08 }}
            >
              <span className="font-clash text-[clamp(2rem,4vw,3rem)] font-semibold text-accent">
                {stat.value}
              </span>
              <p className="mt-1 font-satoshi text-xs text-muted sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
