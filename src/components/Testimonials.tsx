"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-32 px-6 md:px-12">
      <div className="mx-auto max-w-[1400px]" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="h-[1px] w-12 bg-accent" />
          <span className="font-satoshi text-xs uppercase tracking-[0.3em] text-accent">
            Kind Words
          </span>
        </motion.div>

        <div className="relative min-h-[300px] md:min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0"
            >
              <blockquote className="mb-10">
                <p className="font-clash text-2xl font-medium leading-[1.4] text-foreground md:text-4xl lg:text-5xl">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
              </blockquote>
              <div>
                <p className="font-satoshi text-base font-medium text-accent">
                  {testimonials[current].name}
                </p>
                <p className="font-satoshi text-sm text-muted">
                  {testimonials[current].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="mt-16 flex items-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-[2px] transition-all duration-500 ${
                i === current
                  ? "w-12 bg-accent"
                  : "w-6 bg-muted/30 hover:bg-muted/60"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
