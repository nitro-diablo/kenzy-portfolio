"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer ref={ref} className="border-t border-border px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 md:flex-row">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-clash text-xl font-semibold text-foreground">
            Kenzy<span className="text-accent">.</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-satoshi text-sm text-muted"
        >
          &copy; {new Date().getFullYear()} Kenzy. All rights reserved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-6"
        >
          {["Instagram", "Behance", "Dribbble"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-satoshi text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
            >
              {link}
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
