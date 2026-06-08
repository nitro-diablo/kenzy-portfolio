"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: string;
  gf?: boolean;
}

interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: "breakfast",
    name: "Breakfast",
    items: [
      { name: "Irish Omelet", description: "Filled with bacon, onion, shredded cheese and sour cream, stuffed with golden hashbrowns. Served with toast.", price: "11.99", tag: "Fan Favorite", gf: true },
      { name: "Build Your Own Breakfast", description: "Choose your eggs, meat, and sides. A customizable breakfast experience made just for you.", price: "8.49" },
      { name: "Western Omelet", description: "Ham, peppers, onions, and cheddar cheese. Served with hashbrowns and toast.", price: "11.49" },
      { name: "Buttermilk Pancakes", description: "Stack of fluffy buttermilk pancakes served with butter and warm syrup.", price: "7.99" },
      { name: "French Toast", description: "Thick-cut bread dipped in cinnamon egg batter, grilled golden. Served with powdered sugar.", price: "8.49" },
      { name: "Eggs Benedict", description: "Poached eggs on English muffin with Canadian bacon, topped with hollandaise sauce.", price: "12.99" },
      { name: "Biscuits & Gravy", description: "Homemade biscuits smothered in our savory country sausage gravy.", price: "8.99" },
      { name: "Breakfast Burrito", description: "Scrambled eggs, sausage, peppers, onions, and cheese wrapped in a flour tortilla.", price: "10.49" },
    ],
  },
  {
    id: "lunch",
    name: "Lunch",
    items: [
      { name: "Cobb Salad", description: "Loaded with chicken, bacon, tomatoes, cucumbers, shredded cheese, and egg. Served with pita bread and your choice of dressing.", price: "13.99", tag: "Fan Favorite", gf: true },
      { name: "Corned Beef Reuben", description: "Wigleys corned beef made in house alongside our sauerkraut, paired with homemade Thousand Island. Served with fries, soup, salad, or coleslaw.", price: "14.49", tag: "Fan Favorite", gf: true },
      { name: "Classic Burger", description: "Half-pound fresh ground beef, lettuce, tomato, onion, and pickles on a brioche bun.", price: "12.49" },
      { name: "Bacon Cheeseburger", description: "Our classic burger topped with crispy bacon and melted American cheese.", price: "13.99" },
      { name: "Club Sandwich", description: "Triple decker with turkey, ham, bacon, lettuce, tomato, and mayo on toasted bread.", price: "12.99" },
      { name: "Grilled Chicken Wrap", description: "Grilled chicken breast with lettuce, tomato, cheese, and ranch in a flour tortilla.", price: "11.99" },
      { name: "French Dip", description: "Thinly sliced roast beef on a hoagie roll with melted Swiss and au jus for dipping.", price: "13.49" },
      { name: "Soup & Salad Combo", description: "Cup of our homemade soup of the day paired with a fresh garden salad.", price: "10.49" },
    ],
  },
  {
    id: "dinner",
    name: "Dinner",
    items: [
      { name: "Prime Rib Dinner", description: "Slow-roasted prime rib served with your choice of two sides. Available Fri & Sat.", price: "24.99", tag: "Weekend Special" },
      { name: "Grilled Salmon", description: "Fresh Atlantic salmon fillet, grilled to perfection. Served with rice and vegetables.", price: "18.99" },
      { name: "Chicken Parmesan", description: "Breaded chicken breast topped with marinara and melted mozzarella. Served over pasta.", price: "16.99" },
      { name: "Meatloaf Dinner", description: "Homestyle meatloaf with our signature gravy. Served with mashed potatoes and vegetables.", price: "14.99" },
      { name: "Fish & Chips", description: "Beer-battered cod fillets with crispy fries, coleslaw, and tartar sauce.", price: "15.99" },
      { name: "Liver & Onions", description: "Tender liver grilled with caramelized onions and gravy. Served with mashed potatoes.", price: "13.99" },
      { name: "Steak & Eggs", description: "8oz sirloin steak grilled to your liking, served with two eggs any style and hashbrowns.", price: "17.99" },
      { name: "Divine Chocolate Lava Cake", description: "Decadent warm chocolate cake with a molten center. Gluten free!", price: "8.99", tag: "GF Dessert", gf: true },
    ],
  },
  {
    id: "gluten-free",
    name: "Gluten Free",
    items: [
      { name: "GF Irish Omelet", description: "Our famous Irish Omelet prepared with dedicated GF utensils and cooking space.", price: "12.49", gf: true },
      { name: "GF Cobb Salad", description: "All the goodness of our Cobb Salad, safely prepared in our dedicated GF area.", price: "14.49", gf: true },
      { name: "GF Corned Beef Reuben", description: "Our famous Reuben on gluten-free bread, prepared with separate GF utensils.", price: "15.49", gf: true },
      { name: "GF Burger", description: "Fresh ground beef on a gluten-free bun with all the fixings. Dedicated GF fryer for fries.", price: "13.99", gf: true },
      { name: "GF Pancakes", description: "Fluffy gluten-free pancakes served with butter and syrup.", price: "9.49", gf: true },
      { name: "GF Fish & Chips", description: "Cod fillets in GF batter, fried in our dedicated GF fryer. With GF fries and coleslaw.", price: "16.99", gf: true },
      { name: "GF Grilled Chicken Dinner", description: "Seasoned grilled chicken breast with rice and steamed vegetables.", price: "15.99", gf: true },
      { name: "Divine Chocolate Lava Cake", description: "Our famous GF dessert — warm chocolate cake with molten center.", price: "8.99", gf: true, tag: "Must Try" },
    ],
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("breakfast");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const currentMenu = menuData.find((cat) => cat.id === activeCategory);

  return (
    <section id="menu" className="section-padding bg-background-light relative" ref={ref}>
      {/* Decorative */}
      <div className="absolute top-12 right-8 sm:right-16 text-[120px] sm:text-[200px] font-[var(--font-playfair)] font-bold text-accent/[0.03] leading-none select-none hidden md:block">
        03
      </div>

      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="section-label">Our Menu</span>
          <div className="accent-line mx-auto mt-4 mb-6" />
          <h2 className="heading-lg text-3xl sm:text-4xl lg:text-[3.25rem]">
            Breakfast, Lunch &{" "}
            <span className="text-accent">Dinner</span>
          </h2>
          <p className="text-foreground-muted text-sm sm:text-base mt-4 max-w-md mx-auto leading-relaxed">
            Fresh, homestyle cooked dishes with the freshest ingredients, cooked to order.
          </p>
        </motion.div>

        {/* Tabs — underline style */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center gap-1 sm:gap-2 mb-10 sm:mb-14 border-b border-border/40 pb-px"
        >
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-4 sm:px-6 py-3 text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase transition-all duration-500 min-h-[44px] ${
                activeCategory === category.id
                  ? "text-accent"
                  : "text-foreground-muted hover:text-foreground"
              }`}
            >
              {category.name}
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* GF Notice */}
        <AnimatePresence mode="wait">
          {activeCategory === "gluten-free" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-8"
            >
              <div className="border border-accent/20 bg-accent/[0.04] p-4 text-center">
                <p className="text-accent font-medium text-xs tracking-wider">
                  Dedicated GF fryers, utensils, toaster, prep area & cooking space — zero cross contamination
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Menu items — clean list layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="divide-y divide-border/30"
          >
            {currentMenu?.items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.04, duration: 0.4 }}
                className="group py-5 sm:py-6 flex gap-4 items-start hover:bg-accent/[0.02] transition-colors duration-300 -mx-4 px-4"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-foreground font-semibold text-[15px] sm:text-base group-hover:text-accent transition-colors duration-300">
                      {item.name}
                    </h3>
                    {item.tag && (
                      <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-accent bg-accent/10 px-2 py-0.5">
                        {item.tag}
                      </span>
                    )}
                    {item.gf && !item.tag && (
                      <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-green-400 bg-green-900/20 px-2 py-0.5">
                        GF
                      </span>
                    )}
                  </div>
                  <p className="text-foreground-muted text-xs sm:text-sm mt-1.5 leading-relaxed pr-4">
                    {item.description}
                  </p>
                </div>
                {/* Price — separated by dots */}
                <div className="flex items-center gap-3 pt-0.5 flex-shrink-0">
                  <span className="hidden sm:block w-8 h-px bg-border-light" />
                  <span className="text-accent font-[var(--font-playfair)] text-lg font-semibold">
                    ${item.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom note + CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 sm:mt-16 text-center space-y-6"
        >
          <p className="text-foreground-muted text-[11px] uppercase tracking-[0.15em]">
            Carry out pricing may differ · Larger orders may be subject to automatic gratuity
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+17347296453" className="btn-primary">
              Call to Order — (734) 729-6453
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
