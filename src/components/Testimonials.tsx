"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    quote:
      "Kenzy completely redefined our brand. The level of detail and strategic thinking behind every design decision was extraordinary. Our brand now commands the premium perception we always wanted.",
    name: "Sarah Mitchell",
    role: "CEO, Luxe Collective",
  },
  {
    quote:
      "Working with Kenzy felt like working with someone who truly understands the psychology of branding. The visual identity created for our company has elevated everything — from client conversations to revenue.",
    name: "James Rodriguez",
    role: "Founder, Apex Ventures",
  },
  {
    quote:
      "We came to Kenzy with a vague vision and left with a brand that stops people in their tracks. The attention to craft, typography, and storytelling is on another level entirely.",
    name: "Amira Hassan",
    role: "Creative Lead, Noir Studio",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative py-24 px-5 sm:py-28 sm:px-8 md:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 mb-10 sm:gap-4 sm:mb-14 lg:mb-16"
        >
          <span className="h-px w-8 bg-accent sm:w-12" />
          <span className="font-satoshi text-[10px] uppercase tracking-[0.3em] text-accent sm:text-xs">
            Kind Words
          </span>
        </motion.div>

        <div className="relative min-h-[220px] sm:min-h-[240px] md:min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0"
            >
              <blockquote className="mb-8 sm:mb-10">
                <p className="font-clash text-[clamp(1.25rem,3.5vw,3rem)] font-medium leading-[1.3] text-foreground">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
              </blockquote>
              <div>
                <p className="font-satoshi text-sm font-medium text-accent sm:text-base">
                  {testimonials[current].name}
                </p>
                <p className="font-satoshi text-xs text-muted sm:text-sm">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center gap-2.5 sm:mt-14 sm:gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-[2px] rounded-full transition-all duration-500 ${
                i === current
                  ? "w-10 bg-accent sm:w-12"
                  : "w-5 bg-muted/25 hover:bg-muted/50 sm:w-6"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
