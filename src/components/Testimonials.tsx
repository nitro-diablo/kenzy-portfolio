"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "I found Mr Mike's Grill on a whim after a quick search for gluten free in Westland while we were out running errands. We decided to stop in and I was so pleased to see the extensive gluten free menu. Service was fabulous.",
    title: "Extensive Gluten Free Menu",
    source: "Google",
  },
  {
    quote:
      "It is a family own small business. They have a huge certified gluten free menu. Why? Because the mom is a celiac and she cares.",
    title: "A Must Visit",
    source: "Google",
  },
  {
    quote:
      "Angie and her family own this restaurant and they take a lot of pride in their small business. Their food is absolutely delicious and affordable. They are extremely knowledgeable about food allergens and have a dedicated gluten free menu, that is very generous and super tasty.",
    title: "Absolutely Delicious and Affordable",
    source: "Google",
  },
  {
    quote:
      "My husband and I are frequent flyers at Mr. Mikes. We love the food, prices, and the service is ALWAYS good!! I can not find anyone that has better soups than Mr. Mikes Grill! Keep it up! Good Service means a lot these days!",
    title: "Best Soups Around",
    source: "Google",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background-light relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-[var(--font-playfair)] font-bold mt-2">
            What People Are{" "}
            <span className="text-accent">Saying</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-xl border border-border hover:border-accent/30 bg-card transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <h3 className="text-foreground font-semibold text-lg mb-3 font-[var(--font-playfair)]">
                &ldquo;{testimonial.title}&rdquo;
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-2 text-xs text-accent font-medium uppercase tracking-wider">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                {testimonial.source}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
