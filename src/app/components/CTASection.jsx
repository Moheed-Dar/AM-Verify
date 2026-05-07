"use client";

import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative w-full min-h-[350px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/85" />
        {/* Top & Bottom fade */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-20 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5"
        >
          Let's Talk Right Away
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-8"
        >
          Collaborate with our digital design, development and marketing
          professionals to step-up financial performance of your brand.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Let's Talk Button */}
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 px-10 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-sm rounded-lg overflow-hidden transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105"
          >
            <span className="relative z-10">Let's Talk</span>
            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>

          {/* Phone Button */}
          <a
            href="tel:+18774766927"
            className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-sm rounded-lg transition-all duration-300 hover:bg-white/20 hover:border-orange-500/40 hover:scale-105"
          >
            <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
              <Phone className="w-3 h-3 text-white" />
            </div>
            <span>+1-(877) 476-6927</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}