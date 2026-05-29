"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer ref={ref} className="border-t border-border px-5 py-8 sm:px-12 sm:py-10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 sm:flex-row">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-clash text-lg font-semibold text-foreground">
            Kenzy<span className="text-accent">.</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-satoshi text-xs text-muted sm:text-sm"
        >
          &copy; {new Date().getFullYear()} Kenzy. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
