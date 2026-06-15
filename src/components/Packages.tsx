"use client";

import { Check, Sparkles, Crown, Gem } from "lucide-react";
import Reveal from "./Reveal";

type Plan = {
  icon: typeof Sparkles;
  name: string;
  tagline: string;
  price: string;
  priceUnit?: string;
  priceNote: string;
  features: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    icon: Sparkles,
    name: "Essential",
    tagline: "A unique site, built around you",
    price: "Custom",
    priceNote: "tailored quote · one-time",
    features: [
      "Unique, custom-built design — never a template",
      "Built exactly to your request",
      "Up to 3 revisions",
      "Delivery within 7 days",
    ],
  },
  {
    icon: Crown,
    name: "Plus",
    tagline: "Everything handled, end to end",
    price: "$150",
    priceUnit: "/mo",
    priceNote: "management · plus custom build",
    featured: true,
    features: [
      "Everything in Essential",
      "Faster 5-day delivery",
      "SEO-optimized for search engines",
      "Up to 6 revisions",
      "Full management — settings, colors, content & data updates",
      "Monthly Excel report with full analytics",
    ],
  },
  {
    icon: Gem,
    name: "Deluxe",
    tagline: "Total control, zero code",
    price: "+$500",
    priceNote: "one-time · no monthly fee",
    features: [
      "Everything in Essential & Plus — no subscription",
      "Your own simplified control panel, no coding needed",
      "Built in your language",
      "All site data & analytics inside one dashboard",
      "Manage everything from your phone",
      "Grant access to team members you choose",
    ],
  },
];

export default function Packages() {
  return (
    <section id="packages" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-accent">
          Packages
        </p>
        <h2 className="mt-3 text-center font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
          Choose the Level of <span className="text-gradient">Done-For-You</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-muted">
          Every package starts with a one-of-a-kind website built exactly to your
          vision — then scales up to full management and your own no-code control panel.
        </p>
      </Reveal>

      <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
        {plans.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 0.1}>
            <div
              className={`group relative flex h-full flex-col rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2 ${
                plan.featured
                  ? "border-2 border-accent bg-accent-soft shadow-xl shadow-accent/20 lg:scale-[1.03]"
                  : "glass"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-accent/30">
                  Most Popular
                </span>
              )}

              <div className="inline-flex w-fit rounded-2xl bg-accent-soft p-3 text-accent transition-transform group-hover:scale-110 group-hover:rotate-6">
                <plan.icon size={22} />
              </div>

              <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-bold">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-muted">{plan.tagline}</p>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight">
                  {plan.price}
                </span>
                {plan.priceUnit && (
                  <span className="text-sm font-medium text-muted">{plan.priceUnit}</span>
                )}
              </div>
              <p className="mt-1 text-xs uppercase tracking-wide text-muted">
                {plan.priceNote}
              </p>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm leading-relaxed">
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-accent"
                      aria-hidden
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 block rounded-full px-5 py-3 text-center text-sm font-semibold transition-transform hover:scale-105 ${
                  plan.featured
                    ? "bg-accent text-white shadow-lg shadow-accent/30"
                    : "border border-[color:var(--card-border)] hover:border-accent hover:text-accent"
                }`}
              >
                Book My Session Now
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
