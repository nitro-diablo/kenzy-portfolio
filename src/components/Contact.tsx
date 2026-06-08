"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="max-w-[1300px] mx-auto">
        {/* Header — right-aligned for visual rhythm */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 sm:mb-16 lg:text-right lg:ml-auto lg:max-w-2xl"
        >
          <span className="section-label">Find Us</span>
          <div className="accent-line-long mt-4 mb-6 lg:ml-auto" />
          <h2 className="heading-lg text-3xl sm:text-4xl lg:text-[3.25rem]">
            Visit <span className="text-accent">Mr. Mike&apos;s</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Map — 7 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative overflow-hidden h-[280px] sm:h-[360px] lg:h-full lg:min-h-[440px] border border-border/20"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.8!2d-83.39!3d42.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDE5JzQ4LjAiTiA4M8KwMjMnMjQuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mr. Mike's Grill Location"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          {/* Info cards — 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Address */}
            <div className="border border-border/20 p-5 sm:p-6 hover:border-accent/15 transition-colors duration-500">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-accent/15 flex items-center justify-center flex-shrink-0 bg-accent/[0.04]">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-foreground font-semibold text-sm mb-1.5">Address</h3>
                  <p className="text-foreground-muted text-sm">6047 N. Wayne Rd</p>
                  <p className="text-foreground-muted text-sm">Westland, MI 48185</p>
                  <a
                    href="https://maps.google.com/?q=6047+N+Wayne+Rd+Westland+MI+48185"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-xs mt-2 inline-block hover:text-accent-light transition-colors tracking-wide"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="border border-border/20 p-5 sm:p-6 hover:border-accent/15 transition-colors duration-500">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-accent/15 flex items-center justify-center flex-shrink-0 bg-accent/[0.04]">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-foreground font-semibold text-sm mb-1.5">Phone</h3>
                  <a
                    href="tel:+17347296453"
                    className="text-lg font-[var(--font-playfair)] text-accent hover:text-accent-light transition-colors font-bold"
                  >
                    (734) 729-6453
                  </a>
                  <p className="text-foreground-muted text-xs mt-1">Orders & reservations</p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="border border-border/20 p-5 sm:p-6 hover:border-accent/15 transition-colors duration-500">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-accent/15 flex items-center justify-center flex-shrink-0 bg-accent/[0.04]">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-foreground font-semibold text-sm mb-2">Services</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Dine-In", "Carry Out", "Catering", "Free Wi-Fi"].map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-semibold px-3 py-1.5 text-accent/80 border border-accent/12 tracking-[0.1em] uppercase bg-accent/[0.03]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick actions */}
            <div className="flex gap-3 pt-1">
              <a href="tel:+17347296453" className="btn-primary flex-1 justify-center">
                Call to Order
              </a>
              <a
                href="https://maps.google.com/?q=6047+N+Wayne+Rd+Westland+MI+48185"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex-1 justify-center"
              >
                Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
