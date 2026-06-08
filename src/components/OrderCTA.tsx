"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function OrderCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 sm:py-32 px-5 sm:px-8 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-dark/10 via-transparent to-accent/5" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass rounded-lg p-8 sm:p-12 lg:p-16 text-center warm-glow"
        >
          <p className="section-label">Ready to Eat?</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[var(--font-playfair)] font-bold mt-5 leading-[1.12]">
            Order Your Favorites{" "}
            <span className="text-accent">Today</span>
          </h2>
          <p className="text-foreground-muted text-base sm:text-lg mt-5 max-w-lg mx-auto leading-relaxed">
            Call us for carry out, dine-in, or catering. We&apos;re ready to serve you
            fresh, delicious homestyle meals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a href="tel:+17347296453" className="btn-primary !py-4 !px-8 text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call Now — (734) 729-6453
            </a>
            <a
              href="https://maps.google.com/?q=6047+N+Wayne+Rd+Westland+MI+48185"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline !py-4 !px-8 text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
              </svg>
              Get Directions
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-8 text-foreground-muted text-xs tracking-wide">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              4.1★ Google Rating
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              Family Owned Since 2014
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              Largest GF Menu in Area
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
