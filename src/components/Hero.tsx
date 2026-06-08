"use client";

import Logo from "./Logo";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/75 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Vertical decorative lines */}
      <div className="absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-transparent via-accent/8 to-transparent hidden lg:block" />
      <div className="absolute top-0 right-[15%] w-px h-full bg-gradient-to-b from-transparent via-accent/8 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-10 w-full">
        <div className="flex flex-col items-center text-center pt-28 sm:pt-32 pb-16">
          {/* Logo */}
          <div className="anim-scale-in">
            <Logo size="hero" glow className="mb-6 sm:mb-8" />
          </div>

          {/* Location tag */}
          <div className="anim-fade-up delay-2 flex items-center gap-3 mb-8 sm:mb-10">
            <span className="accent-line" />
            <span className="text-accent/80 text-[10px] sm:text-[11px] font-semibold tracking-[0.4em] uppercase">
              Westland, MI
            </span>
            <span className="text-accent/30 text-[10px]">|</span>
            <span className="text-foreground-muted text-[10px] sm:text-[11px] tracking-[0.3em] uppercase">
              Est. 2014
            </span>
            <span className="accent-line" />
          </div>

          {/* Heading */}
          <h1 className="anim-fade-up delay-3 heading-xl text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] max-w-4xl">
            Fresh, Homestyle{" "}
            <span className="text-gradient">Cooking</span>
          </h1>

          {/* Subheading */}
          <p className="anim-fade-up delay-4 text-foreground-muted text-sm sm:text-base lg:text-lg max-w-lg mx-auto mt-6 sm:mt-8 leading-[1.8]">
            From hearty breakfasts to prime rib dinners — fresh ingredients,
            cooked to order. Featuring the area&apos;s largest certified Gluten Free menu.
          </p>

          {/* CTA row */}
          <div className="anim-fade-up delay-5 flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10 sm:mt-12 w-full sm:w-auto px-2 sm:px-0">
            <a href="#menu" className="btn-primary sm:!px-10">
              View Our Menu
            </a>
            <a href="tel:+17347296453" className="btn-outline sm:!px-10">
              Order Now — (734) 729-6453
            </a>
          </div>

          {/* Status bar */}
          <div className="anim-fade-in delay-7 mt-16 sm:mt-20 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-xs tracking-wider">
            <div className="flex items-center gap-2">
              <div className="w-[6px] h-[6px] rounded-full bg-green-400 animate-pulse" />
              <span className="text-foreground-muted">Open Today: 8am – 8pm</span>
            </div>
            <span className="hidden sm:block w-px h-3 bg-border-light" />
            <div className="flex items-center gap-4 text-foreground-muted">
              <span>Dine-In</span>
              <span className="text-accent/30">·</span>
              <span>Carry Out</span>
              <span className="text-accent/30">·</span>
              <span>Catering</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
