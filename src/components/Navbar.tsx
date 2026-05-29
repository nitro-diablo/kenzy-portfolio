"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed top-0 left-0 w-full z-50 glass"
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-8 md:px-12 md:py-5">
        <Link href="/" className="font-clash text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Kenzy<span className="text-accent">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-satoshi text-[13px] uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/201026600904"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-full border border-accent/30 px-5 py-2 font-satoshi text-[13px] uppercase tracking-[0.15em] text-accent transition-all duration-300 hover:bg-accent hover:text-background"
          >
            Let&apos;s Talk
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-[1.5px] w-6 bg-foreground"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-[1.5px] w-6 bg-foreground"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-[1.5px] w-6 bg-foreground"
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="py-3 font-clash text-3xl font-medium text-foreground sm:text-4xl"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="https://wa.me/201026600904"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="mt-6 rounded-full border border-accent px-7 py-3 font-satoshi text-base text-accent"
              >
                Let&apos;s Talk
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
