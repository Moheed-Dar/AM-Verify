"use client";

import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative bg-[#050505] py-16 md:py-24 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(225,198,147,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(225,198,147,0.2) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#e1c693]/5 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Compact Main Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden border border-[#e1c693]/20 bg-[#0a0a0a] shadow-xl shadow-black/20"
        >
          <div className="grid md:grid-cols-2">
            
            {/* Left Side: Compact Cinematic Image */}
            <div className="relative h-64 md:h-full min-h-[320px] overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a]/90 hidden md:block"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent md:hidden"></div>
              
              {/* Small Floating Badge */}
              <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md border border-[#e1c693]/30 px-4 py-1.5 rounded-full">
                <span className="text-[#e1c693] text-[10px] font-bold uppercase tracking-widest">24/7 Support</span>
              </div>
            </div>

            {/* Right Side: Content (Compact) */}
            <div className="relative p-8 md:p-10 flex flex-col justify-center">
              {/* Heading */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight mb-4 leading-tight">
                Let's Talk{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54]">
                  Right Away
                </span>
              </h2>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
                Collaborate with our digital design, development and marketing professionals to step-up financial performance of your brand.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-3">
                {/* Let's Talk Button */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#e1c693] to-[#a78b54] text-black font-bold text-xs rounded-lg overflow-hidden transition-all duration-300 shadow-lg shadow-[#e1c693]/20 hover:shadow-[#e1c693]/40"
                >
                  <span className="relative z-10">Start a Project</span>
                  <ArrowRight className="relative z-10 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </motion.a>

                {/* Phone Button */}
                <motion.a
                  href="tel:+18774766927"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center justify-center gap-3 px-6 py-3 bg-white/5 border border-white/10 text-white font-medium text-xs rounded-lg transition-all duration-300 hover:bg-white/10 hover:border-[#e1c693]/30"
                >
                  <div className="w-7 h-7 rounded-full bg-[#e1c693]/10 border border-[#e1c693]/30 flex items-center justify-center">
                    <Phone className="w-3 h-3 text-[#e1c693]" />
                  </div>
                  <span>+1-(877) 476-6927</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}