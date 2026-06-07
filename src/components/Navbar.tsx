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
            ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#home" className="flex-shrink-0">
              <Logo size="md" showText className="hidden sm:flex" />
              <Logo size="sm" showText={false} className="sm:hidden" />
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground-muted hover:text-accent transition-colors duration-300 text-[13px] tracking-wide uppercase font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+17347296453"
                className="hidden md:inline-flex btn-primary !min-h-[40px] !py-2 !px-5 !text-xs"
              >
                Order Now
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-foreground hover:bg-border/30 transition-colors"
                aria-label="Toggle menu"
              >
                <div className="w-5 flex flex-col gap-[5px]">
                  <span
                    className={`block h-[2px] bg-foreground transition-all duration-300 origin-center ${
                      mobileOpen ? "rotate-45 translate-y-[7px]" : ""
                    }`}
                  />
                  <span
                    className={`block h-[2px] bg-foreground transition-all duration-300 ${
                      mobileOpen ? "opacity-0 scale-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-[2px] bg-foreground transition-all duration-300 origin-center ${
                      mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col h-full pt-20 pb-8 px-6 overflow-y-auto">
              <div className="flex flex-col gap-2 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl sm:text-3xl font-[var(--font-playfair)] text-foreground hover:text-accent transition-colors py-3 border-b border-border/30"
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
                <a href="tel:+17347296453" className="btn-primary w-full" onClick={() => setMobileOpen(false)}>
                  Call to Order
                </a>
                <a href="#reservations" onClick={() => setMobileOpen(false)} className="btn-outline w-full">
                  Book a Table
                </a>
                <div className="pt-6 border-t border-border/50">
                  <p className="text-foreground-muted text-sm">
                    6047 N. Wayne Rd, Westland, MI 48185
                  </p>
                  <a href="tel:+17347296453" className="text-accent text-sm font-medium mt-1 inline-block">
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
