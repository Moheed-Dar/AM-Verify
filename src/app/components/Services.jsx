"use client";

import { motion } from "framer-motion";
import {
  Code2,
  ShoppingBag,
  MonitorSmartphone,
  Palette,
  Clapperboard,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    description: "Modern and responsive websites built with high performance and clean UI/UX experience.",
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce",
    description: "Scalable ecommerce solutions with secure payments and smooth shopping experience.",
  },
  {
    icon: MonitorSmartphone,
    title: "Web Applications",
    description: "Custom web applications tailored to your business needs with modern technologies.",
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Creative branding solutions including logo design, identity systems and brand strategy.",
  },
  {
    icon: Clapperboard,
    title: "Animations",
    description: "Professional animations and motion graphics to make your business visually engaging.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Cross-platform mobile apps with seamless performance and beautiful user experience.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="relative bg-black py-24 overflow-hidden">
      {/* Background Depth Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,146,60,0.08)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-orange-400 uppercase bg-orange-500/10 rounded-full border border-orange-500/20">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Services We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Offer
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We craft digital experiences that drive growth, engagement, and lasting impact.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative min-h-[280px] rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden flex flex-col items-center justify-center text-center p-6 cursor-pointer"
              >
                {/* Gradient Border Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute inset-[1px] rounded-2xl bg-black" />

                {/* Inner Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                  {/* Icon Container */}
                  <div className="mb-5 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 group-hover:border-orange-400/40 group-hover:shadow-[0_0_20px_rgba(251,146,60,0.3)] transition-all duration-300">
                    <Icon className="w-7 h-7 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-lg font-bold tracking-tight mb-2 group-hover:text-orange-300 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300 max-w-[90%]">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}