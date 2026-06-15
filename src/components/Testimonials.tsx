"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "Our conversion rate doubled within the first month after launch. The attention to detail and speed of delivery were unlike anything we'd experienced before.",
    name: "Sarah M.",
    role: "Founder, D2C Skincare Brand",
  },
  {
    quote:
      "He rebuilt our store's checkout flow and bounce rate dropped instantly. Fastest turnaround I've ever seen from a developer — and the site looks incredible.",
    name: "Omar K.",
    role: "E-commerce Manager",
  },
  {
    quote:
      "From the first strategy session to launch, everything was focused on results. Our landing page now converts visitors we used to lose. Highly recommended.",
    name: "Lina A.",
    role: "Marketing Director, SaaS Startup",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(id);
  }, [paused]);

  const t = testimonials[index];

  return (
    <section id="testimonials" className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-accent">
          Social Proof
        </p>
        <h2 className="mt-3 text-center font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
          Clients Who <span className="text-gradient">Converted</span>
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <div
          className="glass relative mt-14 rounded-3xl p-8 sm:p-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote className="absolute -top-4 left-8 rounded-full bg-accent p-1.5 text-white" size={32} />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-5 min-h-28 text-base leading-relaxed sm:text-lg">
                “{t.quote}”
              </p>
              <div className="mt-6">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted">{t.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-8 bg-accent" : "w-2 bg-muted/40"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  setIndex((index - 1 + testimonials.length) % testimonials.length)
                }
                aria-label="Previous testimonial"
                className="glass rounded-full p-2 transition-transform hover:scale-110"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => setIndex((index + 1) % testimonials.length)}
                aria-label="Next testimonial"
                className="glass rounded-full p-2 transition-transform hover:scale-110"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
