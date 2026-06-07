"use client";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export default function Logo({ size = "md", showText = true, className = "" }: LogoProps) {
  const sizes = {
    sm: { icon: "w-8 h-8", text: "text-base", sub: "text-[9px]" },
    md: { icon: "w-10 h-10", text: "text-lg", sub: "text-[10px]" },
    lg: { icon: "w-14 h-14", text: "text-2xl", sub: "text-xs" },
  };

  const s = sizes[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Mark - Grill/Flame inspired icon */}
      <div className={`${s.icon} relative flex items-center justify-center`}>
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Outer circle */}
          <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
          {/* Inner grill lines */}
          <path d="M14 20h20M14 24h20M14 28h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-accent" />
          {/* Flame */}
          <path
            d="M24 10c0 0-4 3-4 6.5c0 2.2 1.8 4 4 4s4-1.8 4-4c0-3.5-4-6.5-4-6.5z"
            fill="currentColor"
            className="text-accent"
          />
          {/* Bottom arc */}
          <path
            d="M16 34c2.5 2 5 3 8 3s5.5-1 8-3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="text-accent"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-[var(--font-playfair)] ${s.text} font-bold text-foreground tracking-tight`}>
            Mr. Mike&apos;s
          </span>
          <span className={`${s.sub} font-semibold tracking-[0.25em] uppercase text-accent mt-0.5`}>
            Grill
          </span>
        </div>
      )}
    </div>
  );
}
