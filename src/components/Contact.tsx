"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import Reveal from "./Reveal";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("loading");
    try {
      const res = await fetch("/api/send-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "glass w-full rounded-2xl px-5 py-3.5 text-sm outline-none transition-all placeholder:text-muted focus:ring-2 focus:ring-accent";

  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
      <Reveal>
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-accent">
          Free Strategy Session
        </p>
        <h2 className="mt-3 text-center font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s Build Your{" "}
          <span className="text-gradient">High-Converting</span> Website.
        </h2>
        <p className="mt-4 text-center text-muted">
          Book a free strategy session — no commitment, just a plan to grow
          your business.
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <form onSubmit={handleSubmit} className="glass mt-12 rounded-3xl p-6 sm:p-10">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center py-10 text-center"
            >
              <CheckCircle2 size={48} className="text-emerald-500" />
              <h3 className="mt-4 text-xl font-bold">Session Booked!</h3>
              <p className="mt-2 text-sm text-muted">
                I&apos;ll reach out within 24 hours to schedule your free
                strategy session.
              </p>
            </motion.div>
          ) : (
            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  required
                  placeholder="Full Name *"
                  aria-label="Full Name"
                  className={inputClass}
                />
                <input
                  name="brand"
                  required
                  placeholder="Brand / Project Name *"
                  aria-label="Brand or Project Name"
                  className={inputClass}
                />
              </div>
              <input
                name="email"
                type="email"
                required
                placeholder="Email Address *"
                aria-label="Email Address"
                className={inputClass}
              />
              <input
                name="whatsapp"
                type="tel"
                placeholder="WhatsApp Number (optional, for faster replies)"
                aria-label="WhatsApp Number"
                className={inputClass}
              />

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-8 py-4 text-base font-bold text-white shadow-xl shadow-accent/30 transition-shadow hover:shadow-2xl hover:shadow-accent/40 disabled:opacity-60"
              >
                {status === "loading" ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <Send size={18} />
                )}
                Book My Session Now
              </motion.button>

              {status === "error" && (
                <p className="text-center text-sm text-red-500">
                  Something went wrong. Please try again or reach out directly.
                </p>
              )}

              <div className="mt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-500" /> No
                  spam, ever
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={14} className="text-accent" /> Reply within 24h
                </span>
              </div>
            </div>
          )}
        </form>
      </Reveal>
    </section>
  );
}
