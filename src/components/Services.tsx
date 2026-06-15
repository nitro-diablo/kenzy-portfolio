"use client";

import { LayoutTemplate, ShoppingCart, Code2, PenTool } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    icon: LayoutTemplate,
    title: "High-Converting Landing Pages",
    desc: "Pages engineered around one goal — turning clicks into customers.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Optimization",
    desc: "Friction-free checkout flows and product pages that maximize revenue.",
  },
  {
    icon: Code2,
    title: "Full-Stack Web Development",
    desc: "Modern, scalable web apps built with Next.js, TypeScript, and best practices.",
  },
  {
    icon: PenTool,
    title: "UI/UX for CRO",
    desc: "Design decisions backed by conversion psychology, not guesswork.",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-accent">
          Services
        </p>
        <h2 className="mt-3 text-center font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
          Everything You Need to <span className="text-gradient">Grow</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.1}>
            <div className="glass group h-full rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-2">
              <div className="inline-flex rounded-2xl bg-accent-soft p-3 text-accent transition-transform group-hover:scale-110 group-hover:rotate-6">
                <s.icon size={22} />
              </div>
              <h3 className="mt-5 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
