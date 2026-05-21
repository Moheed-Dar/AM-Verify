"use client";

import { Phone, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function CTASection() {
  const { theme } = useTheme();

  return (
    <section
      className={`relative overflow-hidden py-16 md:py-24 transition-colors duration-500 ${
        theme === "dark" ? "bg-[#050505]" : "bg-[#f8f9fa]"
      }`}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(${theme === "dark" ? "rgba(225,198,147,0.2)" : "rgba(225,198,147,0.4)"} 1px, transparent 1px),
              linear-gradient(90deg, ${theme === "dark" ? "rgba(225,198,147,0.2)" : "rgba(225,198,147,0.4)"} 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#e1c693]/5 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Compact Main Container (Card - Unchanged) */}
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
        
        {/* Bottom CTA Section (Outside Card) */}
        <div className={`py-20 md:py-32 border-b transition-colors duration-500 ${
          theme === "dark" ? "border-white/5" : "border-gray-300"
        }`}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#e1c693]/5 border border-[#e1c693]/30 rounded-full mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#e1c693]" />
              <span className="text-[#e1c693] text-xs font-bold uppercase tracking-wider">Start a Project</span>
            </div>
            
            <h2 className={`text-4xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight mb-8 transition-colors duration-500 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
              Have an idea?{" "}
              <br className="hidden md:block" />
              <span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54] italic"
                style={{ fontFamily: "arial" }}
              >
                Let's talk.
              </span>{" "}
              about it.
            </h2>

            <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed transition-colors duration-500 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}>
              Collaborate with our digital design, development and marketing professionals to step-up financial performance of your brand.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#e1c693] to-[#a78b54] text-black font-bold text-sm rounded-xl shadow-lg shadow-[#e1c693]/20 hover:shadow-[#e1c693]/40 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Get a Free Consultation</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.a>

              <a
                href="tel:+18774766927"
                className={`inline-flex items-center gap-3 px-10 py-4 border font-semibold text-sm rounded-xl transition-all duration-300 hover:border-[#e1c693]/30 ${
                  theme === "dark" 
                    ? "border-white/10 text-white hover:bg-white/5" 
                    : "border-gray-300 text-gray-900 hover:bg-gray-100"
                }`}
              >
                <Phone className="w-4 h-4 text-[#e1c693]" /> +1 (831) 207-4991
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}