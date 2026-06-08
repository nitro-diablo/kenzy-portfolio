"use client";

import { useReveal } from "./useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section-padding bg-background-light relative" ref={ref as React.RefObject<HTMLElement>}>
      <div className="absolute top-12 right-8 sm:right-16 text-[120px] sm:text-[200px] font-[var(--font-playfair)] font-bold text-accent/[0.03] leading-none select-none hidden md:block">
        01
      </div>

      <div className="max-w-[1300px] mx-auto">
        <div className="reveal mb-14 sm:mb-20 max-w-2xl">
          <span className="section-label">Our Story</span>
          <div className="accent-line-long mt-4 mb-6" />
          <h2 className="heading-lg text-3xl sm:text-4xl lg:text-[3.25rem]">
            A Family Tradition of{" "}
            <span className="text-accent">Excellent Food</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          <div className="reveal-left lg:col-span-5 relative" style={{ transitionDelay: "0.1s" }}>
            <div className="relative overflow-hidden aspect-[3/4]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-2 sm:-right-4 bg-background border border-accent/20 p-5 sm:p-6">
              <p className="text-accent font-[var(--font-playfair)] text-4xl sm:text-5xl font-bold leading-none">40+</p>
              <p className="text-foreground-muted text-[10px] mt-2 tracking-[0.2em] uppercase">Years Experience</p>
            </div>
          </div>

          <div className="reveal-right lg:col-span-6 lg:col-start-7 space-y-6 lg:pt-12" style={{ transitionDelay: "0.2s" }}>
            <p className="text-foreground-muted text-[15px] sm:text-base leading-[1.85]">
              The owners of Mr. Mike&apos;s Grill have over 40 years of restaurant experience.
              Starting their life together in Alabama, Sammy and Hiyam moved to California and
              then back to Michigan in 1996, Hiyam&apos;s home state.
            </p>
            <p className="text-foreground-muted text-[15px] sm:text-base leading-[1.85]">
              Over the years, they have developed a great passion for food and creating a
              fantastic customer experience. In 2014, they bought Mr. Mike&apos;s Grill,
              bringing their daughters, Angie and Tanya, on board to continue the long
              tradition of excellent customer service and a diner that truly has a hometown
              family feel.
            </p>

            <div className="relative pl-6 border-l-2 border-accent/40 my-8">
              <p className="text-foreground text-[15px] sm:text-base leading-[1.85] italic">
                &ldquo;Family and commitment to their customers are truly the most important
                aspects of Mr. Mike&apos;s Grill!&rdquo;
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {["Family Owned", "Cooked to Order", "Largest GF Menu", "Fresh Ingredients"].map((feature) => (
                <span
                  key={feature}
                  className="text-[10px] font-semibold tracking-[0.15em] uppercase text-accent/80 border border-accent/15 px-4 py-2 bg-accent/[0.04]"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
