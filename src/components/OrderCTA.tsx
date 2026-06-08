"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Logo from "./Logo";

export default function OrderCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden" ref={ref}>
      {/* Full background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-background/88" />
      </div>

      <div className="relative z-10 py-24 sm:py-32 lg:py-40 px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          <Logo size="lg" glow className="mx-auto mb-8" />

          <span className="section-label">Ready to Eat?</span>
          <div className="accent-line mx-auto mt-4 mb-6" />
          <h2 className="heading-lg text-3xl sm:text-4xl lg:text-[3.25rem] mb-5">
            Order Your Favorites{" "}
            <span className="text-accent">Today</span>
          </h2>
          <p className="text-foreground-muted text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-10">
            Call us for carry out, dine-in, or catering. We&apos;re ready to serve you
            fresh, delicious homestyle meals.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+17347296453" className="btn-primary sm:!px-10">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call Now — (734) 729-6453
            </a>
            <a
              href="https://maps.google.com/?q=6047+N+Wayne+Rd+Westland+MI+48185"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline sm:!px-10"
            >
              Get Directions
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-foreground-muted text-[10px] tracking-[0.2em] uppercase">
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-green-400" />
              4.1 Google Rating
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent" />
              Family Owned Since 2014
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent" />
              Largest GF Menu
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
