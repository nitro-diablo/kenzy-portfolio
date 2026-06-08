"use client";

import { useReveal } from "./useReveal";

const favorites = [
  {
    name: "Cobb Salad",
    description:
      "Loaded up with chicken, bacon, tomatoes, cucumbers, shredded cheese, and egg. Served with pita bread and your choice of dressing. Also available on our gluten free menu!",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
    badge: "GF Available",
    num: "01",
  },
  {
    name: "Corned Beef Reuben",
    description:
      "Our Wigleys corned beef is made in house alongside our sauerkraut and paired with homemade Thousand Island. Enjoy with fries, homemade soup, salad, or coleslaw!",
    image: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=600&q=80",
    badge: "GF Available",
    num: "02",
  },
  {
    name: "Irish Omelet",
    description:
      "Filled with bacon, onion, shredded cheese and sour cream, stuffed with our golden hashbrowns and served with toast. A local favorite!",
    image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=600&q=80",
    badge: "GF Available",
    num: "03",
  },
];

export default function FanFavorites() {
  const ref = useReveal();

  return (
    <section className="section-padding relative" ref={ref as React.RefObject<HTMLElement>}>
      <div className="absolute top-12 left-8 sm:left-16 text-[120px] sm:text-[200px] font-[var(--font-playfair)] font-bold text-accent/[0.03] leading-none select-none hidden md:block">
        02
      </div>

      <div className="max-w-[1300px] mx-auto">
        <div className="reveal mb-14 sm:mb-20 lg:text-right lg:ml-auto lg:max-w-2xl">
          <span className="section-label">Most Popular</span>
          <div className="accent-line-long mt-4 mb-6 lg:ml-auto" />
          <h2 className="heading-lg text-3xl sm:text-4xl lg:text-[3.25rem]">
            Fan <span className="text-accent">Favorites</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {favorites.map((item, index) => (
            <div
              key={item.name}
              className="reveal group relative overflow-hidden aspect-[3/4] sm:aspect-[2/3] cursor-default"
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] ease-out group-hover:scale-110"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent transition-opacity duration-500" />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-all duration-500" />

              <div className="absolute top-4 right-4 z-10">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] bg-accent text-background px-3 py-1.5">
                  {item.badge}
                </span>
              </div>

              <div className="absolute top-4 left-5 z-10">
                <span className="text-accent/30 font-[var(--font-playfair)] text-5xl font-bold">{item.num}</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
                <h3 className="text-xl sm:text-2xl font-[var(--font-playfair)] font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-500">
                  {item.name}
                </h3>
                <p className="text-foreground-muted text-xs sm:text-sm leading-relaxed line-clamp-3 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
