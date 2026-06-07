"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

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
      {
        name: "Irish Omelet",
        description:
          "Filled with bacon, onion, shredded cheese and sour cream, stuffed with golden hashbrowns. Served with toast.",
        price: "11.99",
        tag: "Fan Favorite",
        gf: true,
      },
      {
        name: "Build Your Own Breakfast",
        description:
          "Choose your eggs, meat, and sides. A customizable breakfast experience made just for you.",
        price: "8.49",
      },
      {
        name: "Western Omelet",
        description:
          "Ham, peppers, onions, and cheddar cheese. Served with hashbrowns and toast.",
        price: "11.49",
      },
      {
        name: "Buttermilk Pancakes",
        description:
          "Stack of fluffy buttermilk pancakes served with butter and warm syrup.",
        price: "7.99",
      },
      {
        name: "French Toast",
        description:
          "Thick-cut bread dipped in cinnamon egg batter, grilled golden. Served with powdered sugar.",
        price: "8.49",
      },
      {
        name: "Eggs Benedict",
        description:
          "Poached eggs on English muffin with Canadian bacon, topped with hollandaise sauce.",
        price: "12.99",
      },
      {
        name: "Biscuits & Gravy",
        description:
          "Homemade biscuits smothered in our savory country sausage gravy.",
        price: "8.99",
      },
      {
        name: "Breakfast Burrito",
        description:
          "Scrambled eggs, sausage, peppers, onions, and cheese wrapped in a flour tortilla.",
        price: "10.49",
      },
    ],
  },
  {
    id: "lunch",
    name: "Lunch",
    items: [
      {
        name: "Cobb Salad",
        description:
          "Loaded with chicken, bacon, tomatoes, cucumbers, shredded cheese, and egg. Served with pita bread and your choice of dressing.",
        price: "13.99",
        tag: "Fan Favorite",
        gf: true,
      },
      {
        name: "Corned Beef Reuben",
        description:
          "Wigleys corned beef made in house alongside our sauerkraut, paired with homemade Thousand Island. Served with fries, soup, salad, or coleslaw.",
        price: "14.49",
        tag: "Fan Favorite",
        gf: true,
      },
      {
        name: "Classic Burger",
        description:
          "Half-pound fresh ground beef, lettuce, tomato, onion, and pickles on a brioche bun.",
        price: "12.49",
      },
      {
        name: "Bacon Cheeseburger",
        description:
          "Our classic burger topped with crispy bacon and melted American cheese.",
        price: "13.99",
      },
      {
        name: "Club Sandwich",
        description:
          "Triple decker with turkey, ham, bacon, lettuce, tomato, and mayo on toasted bread.",
        price: "12.99",
      },
      {
        name: "Grilled Chicken Wrap",
        description:
          "Grilled chicken breast with lettuce, tomato, cheese, and ranch in a flour tortilla.",
        price: "11.99",
      },
      {
        name: "French Dip",
        description:
          "Thinly sliced roast beef on a hoagie roll with melted Swiss and au jus for dipping.",
        price: "13.49",
      },
      {
        name: "Soup & Salad Combo",
        description:
          "Cup of our homemade soup of the day paired with a fresh garden salad.",
        price: "10.49",
      },
    ],
  },
  {
    id: "dinner",
    name: "Dinner",
    items: [
      {
        name: "Prime Rib Dinner",
        description:
          "Slow-roasted prime rib served with your choice of two sides. Available Fri & Sat.",
        price: "24.99",
        tag: "Weekend Special",
      },
      {
        name: "Grilled Salmon",
        description:
          "Fresh Atlantic salmon fillet, grilled to perfection. Served with rice and vegetables.",
        price: "18.99",
      },
      {
        name: "Chicken Parmesan",
        description:
          "Breaded chicken breast topped with marinara and melted mozzarella. Served over pasta.",
        price: "16.99",
      },
      {
        name: "Meatloaf Dinner",
        description:
          "Homestyle meatloaf with our signature gravy. Served with mashed potatoes and vegetables.",
        price: "14.99",
      },
      {
        name: "Fish & Chips",
        description:
          "Beer-battered cod fillets with crispy fries, coleslaw, and tartar sauce.",
        price: "15.99",
      },
      {
        name: "Liver & Onions",
        description:
          "Tender liver grilled with caramelized onions and gravy. Served with mashed potatoes.",
        price: "13.99",
      },
      {
        name: "Steak & Eggs",
        description:
          "8oz sirloin steak grilled to your liking, served with two eggs any style and hashbrowns.",
        price: "17.99",
      },
      {
        name: "Divine Chocolate Lava Cake",
        description:
          "Decadent warm chocolate cake with a molten center. Gluten free!",
        price: "8.99",
        tag: "GF Dessert",
        gf: true,
      },
    ],
  },
  {
    id: "gluten-free",
    name: "Gluten Free",
    items: [
      {
        name: "GF Irish Omelet",
        description:
          "Our famous Irish Omelet prepared with dedicated GF utensils and cooking space.",
        price: "12.49",
        gf: true,
      },
      {
        name: "GF Cobb Salad",
        description:
          "All the goodness of our Cobb Salad, safely prepared in our dedicated GF area.",
        price: "14.49",
        gf: true,
      },
      {
        name: "GF Corned Beef Reuben",
        description:
          "Our famous Reuben on gluten-free bread, prepared with separate GF utensils.",
        price: "15.49",
        gf: true,
      },
      {
        name: "GF Burger",
        description:
          "Fresh ground beef on a gluten-free bun with all the fixings. Dedicated GF fryer for fries.",
        price: "13.99",
        gf: true,
      },
      {
        name: "GF Pancakes",
        description:
          "Fluffy gluten-free pancakes served with butter and syrup.",
        price: "9.49",
        gf: true,
      },
      {
        name: "GF Fish & Chips",
        description:
          "Cod fillets in GF batter, fried in our dedicated GF fryer. With GF fries and coleslaw.",
        price: "16.99",
        gf: true,
      },
      {
        name: "GF Grilled Chicken Dinner",
        description:
          "Seasoned grilled chicken breast with rice and steamed vegetables.",
        price: "15.99",
        gf: true,
      },
      {
        name: "Divine Chocolate Lava Cake",
        description:
          "Our famous GF dessert — warm chocolate cake with molten center.",
        price: "8.99",
        gf: true,
        tag: "Must Try",
      },
    ],
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("breakfast");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const currentMenu = menuData.find((cat) => cat.id === activeCategory);

  return (
    <section id="menu" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-label">Our Menu</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold mt-2">
            Breakfast, Lunch &{" "}
            <span className="text-accent">Dinner</span>
          </h2>
          <p className="text-foreground-muted text-lg mt-4 max-w-2xl mx-auto">
            Fresh, homestyle cooked dishes with the freshest ingredients, cooked to order.
            Menu and item availability subject to change.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-accent text-background shadow-lg shadow-accent/20"
                  : "glass text-foreground-muted hover:text-accent hover:border-accent/30"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* GF Notice */}
        {activeCategory === "gluten-free" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-lg p-4 mb-8 max-w-3xl mx-auto text-center"
          >
            <p className="text-accent font-medium text-sm">
              ✦ Dedicated GF fryers, utensils, toaster, prep area & cooking space — zero cross contamination ✦
            </p>
          </motion.div>
        )}

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
          {currentMenu?.items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group p-6 rounded-xl border border-border hover:border-accent/30 bg-card hover:bg-card-hover transition-all duration-300"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-foreground font-semibold text-lg group-hover:text-accent transition-colors">
                      {item.name}
                    </h3>
                    {item.tag && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-accent/20 text-accent px-2 py-0.5 rounded-full">
                        {item.tag}
                      </span>
                    )}
                    {item.gf && !item.tag && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-green-900/30 text-green-400 px-2 py-0.5 rounded-full">
                        GF
                      </span>
                    )}
                  </div>
                  <p className="text-foreground-muted text-sm mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="text-accent font-[var(--font-playfair)] text-xl font-semibold whitespace-nowrap">
                  ${item.price}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12 space-y-4"
        >
          <p className="text-foreground-muted text-sm uppercase tracking-wider">
            Carry out pricing may differ • Larger orders may be subject to automatic gratuity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+17347296453" className="btn-primary">
              Call to Order — (734) 729-6453
            </a>
            <a href="#reservations" className="btn-outline">
              Make a Reservation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
