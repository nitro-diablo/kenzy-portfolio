"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description:
      "Complete visual identity systems — logo design, color architecture, and brand guidelines ensuring consistency across every touchpoint.",
  },
  {
    number: "02",
    title: "Visual Systems",
    description:
      "Scalable design systems that maintain brand integrity. Typography hierarchies, grid systems, iconography, and component libraries.",
  },
  {
    number: "03",
    title: "Packaging Design",
    description:
      "Premium packaging that commands shelf presence. From concept to production-ready files, elevating the unboxing experience.",
  },
  {
    number: "04",
    title: "Social Media Art Direction",
    description:
      "Scroll-stopping visual content strategies. Campaign concepts, template systems, and creative direction that builds recognition.",
  },
  {
    number: "05",
    title: "Creative Direction",
    description:
      "High-level creative vision for campaigns, photoshoots, and brand launches. Turning strategic briefs into visual masterpieces.",
  },
  {
    number: "06",
    title: "Brand Strategy",
    description:
      "Brand positioning, audience analysis, and competitive research forming the strategic foundation for every visual decision.",
  },
];

function ServiceItem({ service, index }: { service: (typeof services)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group border-b border-border py-6 sm:py-8 md:py-10 cursor-pointer"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          <span className="font-clash text-xs text-accent/40 sm:text-sm">
            {service.number}
          </span>
          <motion.h3
            animate={{ x: isHovered ? 12 : 0 }}
            transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
            className="font-clash text-xl font-medium text-foreground transition-colors duration-300 group-hover:text-accent sm:text-2xl md:text-3xl lg:text-4xl"
          >
            {service.title}
          </motion.h3>
        </div>
        <motion.div
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 8 }}
          transition={{ duration: 0.3 }}
          className="sm:max-w-xs md:max-w-sm"
        >
          <p className="font-satoshi text-xs leading-relaxed text-muted sm:text-sm">
            {service.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-24 px-5 sm:py-28 sm:px-8 md:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div ref={headerRef} className="mb-10 sm:mb-14 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-5 sm:gap-4 sm:mb-6"
          >
            <span className="h-px w-8 bg-accent sm:w-12" />
            <span className="font-satoshi text-[10px] uppercase tracking-[0.3em] text-accent sm:text-xs">
              Services
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-clash text-[clamp(2rem,5vw,4.5rem)] font-semibold leading-[1.1] text-foreground"
          >
            What I bring{" "}
            <span className="text-gradient">to the table.</span>
          </motion.h2>
        </div>

        <div>
          {services.map((service, i) => (
            <ServiceItem key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
