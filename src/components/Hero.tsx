"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent-soft blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[480px] rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent"
          >
            <Sparkles size={14} /> 100% Conversion Focused
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            I Build Websites That Turn{" "}
            <span className="text-gradient">Visitors Into Buyers.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base text-muted sm:text-lg"
          >
            Software Engineer specializing in Conversion Rate Optimization
            (CRO). We are the fastest team to deliver high-converting websites.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-accent/30 transition-transform hover:scale-105"
            >
              Book a Free Consultation
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#work"
              className="glass inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold transition-transform hover:scale-105"
            >
              View My Work
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 text-xs font-medium uppercase tracking-wider text-muted"
          >
            Fastest delivery in the market — strategy session is free
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-64 sm:w-80"
        >
          <div className="glow-ring relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/profile.png"
              alt="Diablo — Software Engineer & CRO Specialist"
              fill
              sizes="(max-width: 640px) 256px, 320px"
              className="object-cover"
              priority
            />
          </div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -bottom-5 -left-5 flex items-center gap-2 rounded-2xl px-4 py-3"
          >
            <Image src="/logo.png" alt="" width={32} height={32} className="rounded-md" />
            <div>
              <p className="text-xs font-bold">Diablo</p>
              <p className="text-[10px] text-muted">Whole agency in one person</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
