"use client";

import { useEffect, useSyncExternalStore, useState } from "react";
import { motion } from "framer-motion";

function subscribe() {
  return () => {};
}

function getIsTouchClient() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

function getIsTouchServer() {
  return true;
}

export default function CustomCursor() {
  const isTouch = useSyncExternalStore(subscribe, getIsTouchClient, getIsTouchServer);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isTouch) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.dataset.cursor === "pointer"
      ) {
        setIsHovering(true);
      }
    };

    const handleOut = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });
    window.addEventListener("mouseout", handleOut, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[10000] hidden md:block"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div className="h-2 w-2 rounded-full bg-accent" />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[10000] hidden md:block"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      >
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/40"
          style={{ mixBlendMode: "difference" }}
        />
      </motion.div>
    </>
  );
}
