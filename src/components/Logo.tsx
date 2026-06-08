"use client";

import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  className?: string;
  glow?: boolean;
}

export default function Logo({ size = "md", className = "", glow = false }: LogoProps) {
  const sizes = {
    sm: { width: 44, height: 44 },
    md: { width: 56, height: 56 },
    lg: { width: 100, height: 100 },
    xl: { width: 140, height: 140 },
    hero: { width: 220, height: 220 },
  };

  const s = sizes[size];

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {glow && (
        <div
          className="absolute inset-0 rounded-full blur-[60px] opacity-30"
          style={{ background: "radial-gradient(circle, rgba(212,153,61,0.4) 0%, transparent 70%)" }}
        />
      )}
      <Image
        src="/logo.png"
        alt="Mr. Mike's Grill"
        width={s.width}
        height={s.height}
        className="object-contain relative z-10"
        priority
      />
    </div>
  );
}
