"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function GlutenFree() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background-light relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="section-label">Celiac Friendly</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-[var(--font-playfair)] font-bold leading-tight">
              The Area&apos;s Largest{" "}
              <span className="text-accent">Gluten Free</span> Menu
            </h2>
            <div className="divider" />
            <p className="text-foreground-muted text-lg leading-relaxed">
              Aside from our regular menu, Mr. Mike&apos;s Grill offers the area&apos;s largest
              Gluten Free menu, prepared safely and deliciously for all gluten free patrons.
            </p>
            <p className="text-foreground-muted text-lg leading-relaxed">
              With one of the owners having Celiac Disease, the family takes pride in the needs
              of gluten free and has created a positive staff culture around it.
            </p>

            {/* Safety Features */}
            <div className="grid gap-4 pt-4">
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
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <a href="#menu" className="btn-primary inline-flex mt-4 w-full sm:w-auto">
              View GF Menu
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden">
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
            <div className="absolute -bottom-4 -left-4 lg:left-4 glass rounded-xl p-5 warm-glow">
              <p className="text-accent font-bold text-2xl">100%</p>
              <p className="text-foreground-muted text-xs mt-1">Safe & Certified GF Kitchen</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
