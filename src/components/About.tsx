"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding bg-background-light relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-5 right-6 sm:-bottom-6 sm:right-8 glass rounded-lg p-5 sm:p-6 warm-glow">
              <p className="text-accent font-[var(--font-playfair)] text-4xl sm:text-5xl font-bold leading-none">40+</p>
              <p className="text-foreground-muted text-[11px] sm:text-xs mt-2 tracking-wide uppercase">Years Experience</p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="space-y-6"
          >
            <p className="section-label">Our Story</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[var(--font-playfair)] font-bold leading-[1.12]">
              A Family Tradition of{" "}
              <span className="text-accent">Excellent Food</span>
            </h2>
            <div className="divider" />
            <p className="text-foreground-muted text-[15px] sm:text-base leading-[1.8]">
              The owners of Mr. Mike&apos;s Grill have over 40 years of restaurant experience.
              Starting their life together in Alabama, Sammy and Hiyam moved to California and
              then back to Michigan in 1996, Hiyam&apos;s home state.
            </p>
            <p className="text-foreground-muted text-[15px] sm:text-base leading-[1.8]">
              Over the years, they have developed a great passion for food and creating a
              fantastic customer experience. In 2014, they bought Mr. Mike&apos;s Grill,
              bringing their daughters, Angie and Tanya, on board to continue the long
              tradition of excellent customer service and a diner that truly has a hometown
              family feel.
            </p>
            <blockquote className="text-foreground text-[15px] sm:text-base leading-[1.8] font-medium italic border-l-2 border-accent pl-6">
              &ldquo;Family and commitment to their customers are truly the most important
              aspects of Mr. Mike&apos;s Grill!&rdquo;
            </blockquote>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                "Family Owned",
                "Cooked to Order",
                "Largest GF Menu",
                "Fresh Ingredients",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
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
