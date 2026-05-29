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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-6 md:px-12">
      <div className="mx-auto max-w-[1400px]" ref={ref}>
        {/* Section tag */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="h-[1px] w-12 bg-accent" />
          <span className="font-satoshi text-xs uppercase tracking-[0.3em] text-accent">
            About
          </span>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left: Statement */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-clash text-4xl font-semibold leading-[1.15] text-foreground md:text-5xl lg:text-6xl"
            >
              Every brand has a story.{" "}
              <span className="text-gradient">I make sure the world feels it.</span>
            </motion.h2>
          </div>

          {/* Right: Bio */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-satoshi text-base leading-[1.8] text-muted md:text-lg"
            >
              I&apos;m Kenzy — a brand and graphic designer who operates at the 
              intersection of strategy and aesthetics. I don&apos;t just design logos 
              or pick color palettes. I architect complete visual ecosystems that 
              position brands as category leaders.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-6 font-satoshi text-base leading-[1.8] text-muted md:text-lg"
            >
              My work spans global campaigns, premium brand identities, and 
              creative direction for clients who refuse to blend in. Every 
              decision — from typography to texture — is intentional, strategic, 
              and designed to provoke an emotional response.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-6 font-satoshi text-base leading-[1.8] text-muted md:text-lg"
            >
              The result? Brands that don&apos;t just exist — they dominate 
              perception, command premium pricing, and become unforgettable.
            </motion.p>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-20 grid grid-cols-2 gap-8 border-t border-border pt-12 md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + i * 0.1 }}
            >
              <span className="font-clash text-4xl font-semibold text-accent md:text-5xl">
                {stat.value}
              </span>
              <p className="mt-2 font-satoshi text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
