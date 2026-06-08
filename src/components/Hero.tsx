"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/75 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Vertical decorative lines */}
      <div className="absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-transparent via-accent/8 to-transparent hidden lg:block" />
      <div className="absolute top-0 right-[15%] w-px h-full bg-gradient-to-b from-transparent via-accent/8 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-10 w-full">
        <div className="flex flex-col items-center text-center pt-28 sm:pt-32 pb-16">
          {/* Logo — large, glowing hero anchor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Logo size="hero" glow className="mb-6 sm:mb-8" />
          </motion.div>

          {/* Location tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex items-center gap-3 mb-8 sm:mb-10"
          >
            <span className="accent-line" />
            <span className="text-accent/80 text-[10px] sm:text-[11px] font-semibold tracking-[0.4em] uppercase">
              Westland, MI
            </span>
            <span className="text-accent/30 text-[10px]">|</span>
            <span className="text-foreground-muted text-[10px] sm:text-[11px] tracking-[0.3em] uppercase">
              Est. 2014
            </span>
            <span className="accent-line" />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="heading-xl text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] max-w-4xl"
          >
            Fresh, Homestyle{" "}
            <span className="text-gradient">Cooking</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-foreground-muted text-sm sm:text-base lg:text-lg max-w-lg mx-auto mt-6 sm:mt-8 leading-[1.8]"
          >
            From hearty breakfasts to prime rib dinners — fresh ingredients,
            cooked to order. Featuring the area&apos;s largest certified Gluten Free menu.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10 sm:mt-12 w-full sm:w-auto px-2 sm:px-0"
          >
            <a href="#menu" className="btn-primary sm:!px-10">
              View Our Menu
            </a>
            <a href="tel:+17347296453" className="btn-outline sm:!px-10">
              Order Now — (734) 729-6453
            </a>
          </motion.div>

          {/* Status bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 sm:mt-20 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-xs tracking-wider"
          >
            <div className="flex items-center gap-2">
              <div className="w-[6px] h-[6px] rounded-full bg-green-400 animate-pulse" />
              <span className="text-foreground-muted">Open Today: 8am – 8pm</span>
            </div>
            <span className="hidden sm:block w-px h-3 bg-border-light" />
            <div className="flex items-center gap-4 text-foreground-muted">
              <span>Dine-In</span>
              <span className="text-accent/30">·</span>
              <span>Carry Out</span>
              <span className="text-accent/30">·</span>
              <span>Catering</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
