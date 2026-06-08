"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const favorites = [
  {
    name: "Cobb Salad",
    description:
      "Loaded up with chicken, bacon, tomatoes, cucumbers, shredded cheese, and egg. Served with pita bread and your choice of dressing. Also available on our gluten free menu!",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
    badge: "GF Available",
  },
  {
    name: "Corned Beef Reuben",
    description:
      "Our Wigleys corned beef is made in house alongside our sauerkraut and paired with homemade Thousand Island. Enjoy with fries, homemade soup, salad, or coleslaw!",
    image: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=600&q=80",
    badge: "GF Available",
  },
  {
    name: "Irish Omelet",
    description:
      "Filled with bacon, onion, shredded cheese and sour cream, stuffed with our golden hashbrowns and served with toast. A local favorite!",
    image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=600&q=80",
    badge: "GF Available",
  },
];

export default function FanFavorites() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 sm:mb-16"
        >
          <p className="section-label">Most Popular</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[var(--font-playfair)] font-bold mt-3">
            Fan <span className="text-accent">Favorites</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {favorites.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-sm border border-border/60 hover:border-accent/30 transition-all duration-500 bg-card"
            >
              {/* Image */}
              <div className="relative h-52 sm:h-56 lg:h-60 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] bg-accent text-background px-3 py-1.5 rounded-sm">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg font-[var(--font-playfair)] font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-foreground-muted text-sm mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
