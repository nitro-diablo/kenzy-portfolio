"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Reservations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reservations" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="section-label">Reservations</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-playfair)] font-bold leading-tight">
            Book Your{" "}
            <span className="text-accent">Table</span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-xl mx-auto">
            Call ahead to reserve your table or inquire about our catering options
            for your next meeting, event, or gathering.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 glass rounded-2xl p-8 md:p-12 warm-glow"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Hours */}
            <div className="text-left space-y-4">
              <h3 className="text-accent font-semibold uppercase tracking-wider text-sm">
                Hours of Operation
              </h3>
              <div className="space-y-3">
                {[
                  { day: "Monday", hours: "CLOSED" },
                  { day: "Tuesday", hours: "8:00am – 3:00pm" },
                  { day: "Wednesday", hours: "8:00am – 8:00pm" },
                  { day: "Thursday", hours: "8:00am – 8:00pm" },
                  { day: "Friday", hours: "8:00am – 8:00pm" },
                  { day: "Saturday", hours: "8:00am – 8:00pm" },
                  { day: "Sunday", hours: "8:00am – 3:00pm" },
                ].map((schedule) => (
                  <div
                    key={schedule.day}
                    className="flex justify-between items-center py-2 border-b border-border/50"
                  >
                    <span className="text-foreground text-sm font-medium">{schedule.day}</span>
                    <span
                      className={`text-sm ${
                        schedule.hours === "CLOSED"
                          ? "text-warm-red font-medium"
                          : "text-foreground-muted"
                      }`}
                    >
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Side */}
            <div className="flex flex-col justify-center items-center text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <p className="text-foreground-muted text-sm mb-2">Call to Reserve</p>
                <a
                  href="tel:+17347296453"
                  className="text-3xl font-[var(--font-playfair)] font-bold text-accent hover:text-accent-light transition-colors"
                >
                  (734) 729-6453
                </a>
              </div>
              <p className="text-foreground-muted text-sm">
                Walk-ins always welcome!<br />
                For parties of 6+, please call ahead.
              </p>
              <div className="flex flex-col gap-3 w-full max-w-xs">
                <a href="tel:+17347296453" className="btn-primary justify-center">
                  Call Now
                </a>
                <a
                  href="https://maps.google.com/?q=6047+N+Wayne+Rd+Westland+MI+48185"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline justify-center"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Catering Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 glass rounded-lg p-4 inline-block"
        >
          <p className="text-foreground-muted text-sm">
            <span className="text-accent font-medium">Catering Available!</span>{" "}
            Platters, trays, sandwiches, dips, and more for your next event. Call to inquire!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
