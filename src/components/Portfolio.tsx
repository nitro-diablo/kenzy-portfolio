"use client";

import { ExternalLink, Globe, ShoppingBag, LayoutTemplate } from "lucide-react";
import Reveal from "./Reveal";

const projects = [
  {
    title: "Mongy Farm",
    tag: "Recent Live Project",
    desc: "A live e-commerce experience built for conversion — fast, clean, and optimized to turn visitors into customers.",
    url: "https://mongyfarm.com/",
    icon: Globe,
    live: true,
  },
  {
    title: "High-Converting Landing Page",
    tag: "Landing Page",
    desc: "Conversion-optimized landing page with A/B-tested headlines, trust signals, and friction-free CTAs.",
    url: "#",
    icon: LayoutTemplate,
    live: false,
  },
  {
    title: "E-commerce Optimization",
    tag: "E-commerce",
    desc: "Checkout-flow redesign and performance work that lifted conversion rates and cut bounce dramatically.",
    url: "#",
    icon: ShoppingBag,
    live: false,
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-accent">
          Portfolio
        </p>
        <h2 className="mt-3 text-center font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
          Work That <span className="text-gradient">Converts</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.12}>
            <a
              href={p.url}
              target={p.live ? "_blank" : undefined}
              rel={p.live ? "noopener noreferrer" : undefined}
              className="glass group flex h-full flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex rounded-2xl bg-accent-soft p-3 text-accent">
                  <p.icon size={24} />
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                    p.live
                      ? "bg-emerald-500/15 text-emerald-500"
                      : "bg-accent-soft text-accent"
                  }`}
                >
                  {p.live ? "● Live" : p.tag}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {p.desc}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                {p.live ? "Visit live site" : "Case study coming soon"}
                <ExternalLink
                  size={14}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5"
                />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
