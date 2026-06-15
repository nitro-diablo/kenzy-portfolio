"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck } from "lucide-react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const contact = document.getElementById("contact");
      const nearContact = contact
        ? contact.getBoundingClientRect().top < window.innerHeight * 0.6
        : false;
      setVisible(window.scrollY > 600 && !nearContact);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#contact"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="fixed bottom-5 left-1/2 z-50 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-white shadow-2xl shadow-accent/40 transition-transform hover:scale-105 sm:bottom-6"
        >
          <CalendarCheck size={18} />
          Book a Consultation
        </motion.a>
      )}
    </AnimatePresence>
  );
}
