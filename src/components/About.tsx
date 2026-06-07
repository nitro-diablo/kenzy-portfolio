"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding bg-background-light relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 right-4 sm:-bottom-6 sm:right-6 glass rounded-xl p-4 sm:p-6 warm-glow">
              <p className="text-accent font-[var(--font-playfair)] text-3xl sm:text-4xl font-bold">40+</p>
              <p className="text-foreground-muted text-xs sm:text-sm mt-1">Years of Restaurant Experience</p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="space-y-5 sm:space-y-6"
          >
            <p className="section-label">Our Story</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[var(--font-playfair)] font-bold leading-tight">
              A Family Tradition of{" "}
              <span className="text-accent">Excellent Food</span>
            </h2>
            <div className="divider" />
            <p className="text-foreground-muted text-base sm:text-lg leading-relaxed">
              The owners of Mr. Mike&apos;s Grill have over 40 years of restaurant experience.
              Starting their life together in Alabama, Sammy and Hiyam moved to California and
              then back to Michigan in 1996, Hiyam&apos;s home state.
            </p>
            <p className="text-foreground-muted text-base sm:text-lg leading-relaxed">
              Over the years, they have developed a great passion for food and creating a
              fantastic customer experience. In 2014, they bought Mr. Mike&apos;s Grill,
              bringing their daughters, Angie and Tanya, on board to continue the long
              tradition of excellent customer service and a diner that truly has a hometown
              family feel.
            </p>
            <blockquote className="text-foreground text-base sm:text-lg leading-relaxed font-medium italic border-l-2 border-accent pl-5 sm:pl-6">
              &ldquo;Family and commitment to their customers are truly the most important
              aspects of Mr. Mike&apos;s Grill!&rdquo;
            </blockquote>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
              {[
                "Family Owned",
                "Cooked to Order",
                "Largest GF Menu",
                "Fresh Ingredients",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-foreground-muted text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
