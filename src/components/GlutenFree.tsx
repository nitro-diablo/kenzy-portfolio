"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function GlutenFree() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background-light relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent/[0.03] blur-[80px]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <p className="section-label">Celiac Friendly</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[var(--font-playfair)] font-bold leading-[1.12]">
              The Area&apos;s Largest{" "}
              <span className="text-accent">Gluten Free</span> Menu
            </h2>
            <div className="divider" />
            <p className="text-foreground-muted text-[15px] sm:text-base leading-[1.8]">
              Aside from our regular menu, Mr. Mike&apos;s Grill offers the area&apos;s largest
              Gluten Free menu, prepared safely and deliciously for all gluten free patrons.
            </p>
            <p className="text-foreground-muted text-[15px] sm:text-base leading-[1.8]">
              With one of the owners having Celiac Disease, the family takes pride in the needs
              of gluten free and has created a positive staff culture around it.
            </p>

            {/* Safety Features */}
            <div className="grid gap-3.5 pt-4">
              {[
                "Two separate dedicated fryers",
                "Separate utensils & toaster",
                "Dedicated preparation area",
                "Separate cooking space",
                "Zero cross contamination",
              ].map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-3.5"
                >
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 border border-accent/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <a href="#menu" className="btn-primary inline-flex mt-6 w-full sm:w-auto">
              View GF Menu
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-sm overflow-hidden">
              <div
                className="aspect-[4/3] lg:aspect-square bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>
            {/* Overlay card */}
            <div className="absolute -bottom-4 left-4 sm:-bottom-5 sm:left-6 glass rounded-lg p-5 warm-glow">
              <p className="text-accent font-bold text-2xl font-[var(--font-playfair)]">100%</p>
              <p className="text-foreground-muted text-[11px] mt-1.5 tracking-wide uppercase">Safe & Certified GF</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
