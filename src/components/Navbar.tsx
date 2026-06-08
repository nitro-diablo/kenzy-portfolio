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
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-background/95 backdrop-blur-2xl border-b border-accent/10 shadow-2xl shadow-black/30"
            : "bg-transparent"
        }`}
      >
        {/* Thin accent strip at very top */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-[72px] sm:h-[80px]">
            {/* Logo */}
            <a href="#home" className="flex-shrink-0 group">
              <div className="transition-transform duration-500 group-hover:scale-105">
                <Logo size="md" />
              </div>
            </a>

            {/* Desktop Nav — centered */}
            <div className="hidden lg:flex items-center gap-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-foreground/70 hover:text-foreground transition-all duration-500 text-[11px] tracking-[0.2em] uppercase font-medium group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-500 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Right side: CTA + Hamburger */}
            <div className="flex items-center gap-5">
              <a
                href="tel:+17347296453"
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-background text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm hover:bg-accent-light transition-all duration-500 hover:-translate-y-px"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-background/40" />
                Order Now
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex flex-col items-end justify-center w-10 h-10 gap-[6px]"
                aria-label="Toggle menu"
              >
                <span className={`block h-px bg-foreground transition-all duration-500 origin-right ${mobileOpen ? "w-6 rotate-[-40deg] translate-y-[3px]" : "w-6"}`} />
                <span className={`block h-px bg-foreground transition-all duration-500 ${mobileOpen ? "opacity-0 w-0" : "w-4"}`} />
                <span className={`block h-px bg-foreground transition-all duration-500 origin-right ${mobileOpen ? "w-6 rotate-[40deg] -translate-y-[3px]" : "w-6"}`} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu — full takeover */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-background lg:hidden"
          >
            <div className="flex flex-col h-full pt-28 pb-10 px-8 overflow-y-auto">
              {/* Logo in mobile menu */}
              <div className="mb-12 flex justify-center">
                <Logo size="xl" glow />
              </div>

              <nav className="flex flex-col items-center gap-2 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-[var(--font-playfair)] text-foreground/80 hover:text-accent transition-colors py-3 tracking-wide"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-3 mt-6"
              >
                <a href="tel:+17347296453" className="btn-primary w-full" onClick={() => setMobileOpen(false)}>
                  Call to Order
                </a>
                <a href="#reservations" onClick={() => setMobileOpen(false)} className="btn-outline w-full">
                  Book a Table
                </a>
                <div className="pt-6 text-center">
                  <p className="text-foreground-muted text-xs tracking-wider">
                    6047 N. Wayne Rd, Westland, MI
                  </p>
                  <a href="tel:+17347296453" className="text-accent text-xs font-medium mt-1 inline-block tracking-wide">
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
