"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Target, Zap, MonitorSmartphone } from "lucide-react";
import Reveal from "./Reveal";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1400;
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

const pillars = [
  {
    icon: Target,
    title: "100% Conversion Focused",
    desc: "Every pixel, headline, and interaction is engineered to move visitors toward one goal: buying from you.",
    stat: { to: 100, suffix: "%" },
    label: "Conversion-first design",
  },
  {
    icon: Zap,
    title: "Fastest Delivery in the Market",
    desc: "Launch-ready websites delivered in days, not months — without sacrificing quality or performance.",
    stat: { to: 7, suffix: " days" },
    label: "Average delivery time",
  },
  {
    icon: MonitorSmartphone,
    title: "Fully Optimized & Responsive",
    desc: "Blazing-fast load times, 95+ Lighthouse scores, and a flawless experience on every device and OS.",
    stat: { to: 95, suffix: "+" },
    label: "Lighthouse performance",
  },
];

export default function ValueProps() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-accent">
          Why Choose Me
        </p>
        <h2 className="mt-3 text-center font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
          Built to <span className="text-gradient">Sell</span>, Not Just Look Good
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.12}>
            <div className="glass group h-full rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2">
              <div className="inline-flex rounded-2xl bg-accent-soft p-3 text-accent transition-transform group-hover:scale-110">
                <p.icon size={24} />
              </div>
              <p className="mt-6 font-[family-name:var(--font-display)] text-4xl font-bold text-gradient">
                <Counter to={p.stat.to} suffix={p.stat.suffix} />
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                {p.label}
              </p>
              <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
