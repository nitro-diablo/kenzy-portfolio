"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-[1.02]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40" />
      </div>

      {/* Decorative accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 text-center pt-24 sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8 sm:space-y-10"
        >
          {/* Logo as hero anchor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <Logo size="xl" className="drop-shadow-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            <span className="h-[1px] w-8 sm:w-12 bg-accent/60" />
            <span className="text-accent text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase">
              Westland, MI · Est. 2014
            </span>
            <span className="h-[1px] w-8 sm:w-12 bg-accent/60" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-[var(--font-playfair)] font-bold leading-[1.08] tracking-tight"
          >
            Fresh, Homestyle
            <br />
            <span className="text-gradient">Cooking</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-foreground-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
          >
            From hearty breakfasts to prime rib dinners — fresh ingredients, cooked to order.
            Featuring the area&apos;s largest certified Gluten Free menu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-2 px-4 sm:px-0"
          >
            <a href="#menu" className="btn-primary !py-4 !px-8 text-sm">
              View Our Menu
            </a>
            <a href="tel:+17347296453" className="btn-outline !py-4 !px-8 text-sm">
              Order Now — (734) 729-6453
            </a>
          </motion.div>
        </motion.div>

        {/* Hours Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-14 sm:mt-16 inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-5 glass rounded-full px-6 py-3.5"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-foreground-muted text-xs sm:text-sm">
              Open Today: 8:00am – 8:00pm
            </span>
          </div>
          <span className="text-accent/40 hidden sm:inline">|</span>
          <span className="text-accent text-xs sm:text-sm font-medium tracking-wide">
            Dine-In · Carry Out · Catering
          </span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-5 h-9 rounded-full border border-accent/30 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-accent/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
