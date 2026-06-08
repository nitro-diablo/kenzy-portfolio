"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Reservations", href: "#reservations" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-border/60 shadow-2xl shadow-black/20"
            : "bg-gradient-to-b from-background/60 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-18 sm:h-22">
            {/* Logo */}
            <a href="#home" className="flex-shrink-0 relative">
              <Logo size="md" className="hidden sm:flex" />
              <Logo size="sm" className="sm:hidden" />
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-foreground/80 hover:text-foreground transition-colors duration-300 text-[13px] tracking-[0.08em] uppercase font-medium after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+17347296453"
                className="hidden md:inline-flex btn-primary !min-h-[42px] !py-2.5 !px-6 !text-[11px] !tracking-[0.12em]"
              >
                Order Now
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full text-foreground hover:bg-accent/10 transition-colors border border-transparent hover:border-accent/20"
                aria-label="Toggle menu"
              >
                <div className="w-5 flex flex-col gap-[5px]">
                  <span
                    className={`block h-[1.5px] bg-foreground transition-all duration-300 origin-center ${
                      mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
                    }`}
                  />
                  <span
                    className={`block h-[1.5px] bg-foreground transition-all duration-300 ${
                      mobileOpen ? "opacity-0 scale-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-[1.5px] bg-foreground transition-all duration-300 origin-center ${
                      mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/[0.98] backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col h-full pt-24 pb-10 px-8 overflow-y-auto">
              {/* Mobile Logo */}
              <div className="mb-10">
                <Logo size="lg" />
              </div>

              <div className="flex flex-col gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.4, ease: "easeOut" }}
                    onClick={() => setMobileOpen(false)}
                    className="text-3xl font-[var(--font-playfair)] text-foreground hover:text-accent transition-colors py-4 border-b border-border/20"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 space-y-4"
              >
                <a href="tel:+17347296453" className="btn-primary w-full text-base" onClick={() => setMobileOpen(false)}>
                  Call to Order
                </a>
                <a href="#reservations" onClick={() => setMobileOpen(false)} className="btn-outline w-full text-base">
                  Book a Table
                </a>
                <div className="pt-8 border-t border-border/30 mt-4">
                  <p className="text-foreground-muted text-sm">
                    6047 N. Wayne Rd, Westland, MI 48185
                  </p>
                  <a href="tel:+17347296453" className="text-accent text-sm font-medium mt-2 inline-block">
                    (734) 729-6453
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
