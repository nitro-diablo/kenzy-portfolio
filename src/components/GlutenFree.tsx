"use client";

import { useReveal } from "./useReveal";

const safetyFeatures = [
  "Two separate dedicated fryers",
  "Separate utensils & toaster",
  "Dedicated preparation area",
  "Separate cooking space",
  "Zero cross contamination",
];

export default function GlutenFree() {
  const ref = useReveal();

  return (
    <section className="relative overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-1/2 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30 lg:from-background lg:via-background/50 lg:to-transparent" />
        <div className="absolute inset-0 bg-background/40 lg:bg-transparent" />
      </div>

      <div className="relative z-10 max-w-[1300px] mx-auto">
        <div className="grid lg:grid-cols-2">
          <div className="reveal-left py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 lg:pr-20">
            <span className="section-label">Celiac Friendly</span>
            <div className="accent-line-long mt-4 mb-6" />
            <h2 className="heading-lg text-3xl sm:text-4xl lg:text-[3rem] mb-6">
              The Area&apos;s Largest{" "}
              <span className="text-accent">Gluten Free</span> Menu
            </h2>

            <p className="text-foreground-muted text-[15px] sm:text-base leading-[1.85] mb-4">
              Aside from our regular menu, Mr. Mike&apos;s Grill offers the area&apos;s largest
              Gluten Free menu, prepared safely and deliciously for all gluten free patrons.
            </p>
            <p className="text-foreground-muted text-[15px] sm:text-base leading-[1.85] mb-8">
              With one of the owners having Celiac Disease, the family takes pride in the needs
              of gluten free and has created a positive staff culture around it.
            </p>

            <div className="space-y-3 mb-10">
              {safetyFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <span className="w-6 h-px bg-accent/50" />
                  <span className="text-foreground text-sm font-medium tracking-wide">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 mb-8">
              <div className="border border-accent/20 px-5 py-4 bg-accent/[0.04]">
                <p className="text-accent font-[var(--font-playfair)] text-3xl font-bold leading-none">100%</p>
                <p className="text-foreground-muted text-[9px] mt-1.5 tracking-[0.25em] uppercase">Certified GF</p>
              </div>
              <a href="#menu" className="btn-primary">
                View GF Menu
              </a>
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
