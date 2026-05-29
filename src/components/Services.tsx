"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description:
      "Complete visual identity systems — from logo design and color architecture to brand guidelines that ensure consistency across every touchpoint.",
  },
  {
    number: "02",
    title: "Visual Systems",
    description:
      "Scalable design systems that maintain brand integrity as you grow. Typography hierarchies, grid systems, iconography, and component libraries.",
  },
  {
    number: "03",
    title: "Packaging Design",
    description:
      "Premium packaging that commands shelf presence. From concept to production-ready files, designed to elevate the unboxing experience.",
  },
  {
    number: "04",
    title: "Social Media Art Direction",
    description:
      "Scroll-stopping visual content strategies. Campaign concepts, template systems, and creative direction that builds brand recognition.",
  },
  {
    number: "05",
    title: "Creative Direction",
    description:
      "High-level creative vision and art direction for campaigns, photoshoots, and brand launches. Turning strategic briefs into visual masterpieces.",
  },
  {
    number: "06",
    title: "Brand Strategy",
    description:
      "Deep-dive brand positioning, audience analysis, and competitive research that forms the strategic foundation for every visual decision.",
  },
];

function ServiceItem({ service, index }: { service: (typeof services)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group border-b border-border py-8 md:py-12 cursor-pointer"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <span className="font-clash text-sm text-accent/50 md:text-base">
            {service.number}
          </span>
          <motion.h3
            animate={{ x: isHovered ? 20 : 0 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="font-clash text-2xl font-medium text-foreground transition-colors duration-300 group-hover:text-accent md:text-4xl"
          >
            {service.title}
          </motion.h3>
        </div>
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
          transition={{ duration: 0.4 }}
          className="md:max-w-sm"
        >
          <p className="font-satoshi text-sm leading-relaxed text-muted md:text-base">
            {service.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-32 px-6 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div ref={headerRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="h-[1px] w-12 bg-accent" />
            <span className="font-satoshi text-xs uppercase tracking-[0.3em] text-accent">
              Services
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-clash text-4xl font-semibold text-foreground md:text-6xl lg:text-7xl"
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
