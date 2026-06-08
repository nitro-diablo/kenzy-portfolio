"use client";

import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function Logo({ size = "md", className = "" }: LogoProps) {
  const sizes = {
    sm: { width: 48, height: 32 },
    md: { width: 72, height: 48 },
    lg: { width: 120, height: 80 },
    xl: { width: 180, height: 120 },
  };

  const s = sizes[size];

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Mr. Mike's Grill"
        width={s.width}
        height={s.height}
        className="object-contain"
        priority
      />
    </div>
  );
}
