"use client";

import { useReveal } from "./useReveal";

const schedule = [
  { day: "Monday", hours: "CLOSED" },
  { day: "Tuesday", hours: "8:00am – 3:00pm" },
  { day: "Wednesday", hours: "8:00am – 8:00pm" },
  { day: "Thursday", hours: "8:00am – 8:00pm" },
  { day: "Friday", hours: "8:00am – 8:00pm" },
  { day: "Saturday", hours: "8:00am – 8:00pm" },
  { day: "Sunday", hours: "8:00am – 3:00pm" },
];

export default function Reservations() {
  const ref = useReveal();

  return (
    <section id="reservations" className="section-padding bg-background-light relative" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-[1100px] mx-auto">
        <div className="reveal text-center mb-12 sm:mb-16">
          <span className="section-label">Reservations</span>
          <div className="accent-line mx-auto mt-4 mb-6" />
          <h2 className="heading-lg text-3xl sm:text-4xl lg:text-[3.25rem]">
            Book Your{" "}
            <span className="text-accent">Table</span>
          </h2>
          <p className="text-foreground-muted text-sm sm:text-base mt-4 max-w-md mx-auto">
            Call ahead to reserve your table or inquire about our catering options
            for your next meeting, event, or gathering.
          </p>
        </div>

        <div className="reveal grid md:grid-cols-2 gap-8 lg:gap-16" style={{ transitionDelay: "0.15s" }}>
          <div>
            <h3 className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] mb-6">
              Hours of Operation
            </h3>
            <div className="space-y-0">
              {schedule.map((s) => (
                <div
                  key={s.day}
                  className="flex justify-between items-center py-3 border-b border-border/20"
                >
                  <span className="text-foreground text-sm tracking-wide">{s.day}</span>
                  <span className={`text-sm ${s.hours === "CLOSED" ? "text-warm-red font-semibold" : "text-foreground-muted"}`}>
                    {s.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center space-y-6 py-8">
            <div className="w-14 h-14 rounded-full border border-accent/20 flex items-center justify-center bg-accent/[0.04]">
              <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] text-foreground-muted uppercase tracking-[0.25em] mb-2">Call to Reserve</p>
              <a
                href="tel:+17347296453"
                className="text-2xl sm:text-3xl font-[var(--font-playfair)] font-bold text-accent hover:text-accent-light transition-colors"
              >
                (734) 729-6453
              </a>
            </div>
            <p className="text-foreground-muted text-sm leading-relaxed max-w-xs">
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
            <p className="text-foreground-muted text-xs mt-2">
              <span className="text-accent font-medium">Catering Available</span>{" "}
              — Platters, trays & more for events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
