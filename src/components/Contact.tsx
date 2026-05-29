"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 px-6 md:px-12">
      <div className="mx-auto max-w-[1400px]" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="h-[1px] w-12 bg-accent" />
          <span className="font-satoshi text-xs uppercase tracking-[0.3em] text-accent">
            Get in Touch
          </span>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left: Statement */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-clash text-4xl font-semibold leading-[1.15] text-foreground md:text-6xl lg:text-7xl"
            >
              Let&apos;s create{" "}
              <span className="text-gradient">something iconic.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 max-w-md font-satoshi text-base leading-relaxed text-muted md:text-lg"
            >
              Whether you&apos;re launching a new brand or reimagining an existing 
              one — I&apos;d love to hear your vision. Premium work starts with 
              a conversation.
            </motion.p>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 space-y-4"
            >
              <a
                href="mailto:hello@kenzy.design"
                className="block font-satoshi text-lg text-foreground transition-colors hover:text-accent"
              >
                hello@kenzy.design
              </a>
              <a
                href="https://wa.me/201026600904"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-satoshi text-lg text-foreground transition-colors hover:text-accent"
              >
                +20 10 26600904
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 flex items-center gap-6"
            >
              {["Instagram", "Behance", "Dribbble", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="font-satoshi text-sm uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
                >
                  {social}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Contact form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="name" className="mb-2 block font-satoshi text-xs uppercase tracking-[0.2em] text-muted">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full border-b border-border bg-transparent py-4 font-satoshi text-base text-foreground outline-none transition-colors placeholder:text-muted/40 focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block font-satoshi text-xs uppercase tracking-[0.2em] text-muted">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="w-full border-b border-border bg-transparent py-4 font-satoshi text-base text-foreground outline-none transition-colors placeholder:text-muted/40 focus:border-accent"
              />
            </div>
            <div>
              <label htmlFor="project" className="mb-2 block font-satoshi text-xs uppercase tracking-[0.2em] text-muted">
                Tell me about your project
              </label>
              <textarea
                id="project"
                rows={4}
                placeholder="Brief description of your project and goals..."
                className="w-full resize-none border-b border-border bg-transparent py-4 font-satoshi text-base text-foreground outline-none transition-colors placeholder:text-muted/40 focus:border-accent"
              />
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="group relative overflow-hidden rounded-full bg-accent px-10 py-4 font-satoshi text-sm font-medium uppercase tracking-[0.15em] text-background transition-all duration-500 hover:bg-accent-light"
              >
                <span className="relative z-10">Send Message</span>
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
