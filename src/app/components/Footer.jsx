"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Code2,
  ShoppingBag,
  Palette,
  Smartphone,
  Play,
  Globe,
  Heart,
  ArrowUp,
  Sparkles,
  MoveUpRight
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const servicesLinks = [
    { name: "Website Development", icon: Code2 },
    { name: "Ecommerce Solutions", icon: ShoppingBag },
    { name: "Branding & Identity", icon: Palette },
    { name: "Mobile Applications", icon: Smartphone },
    { name: "Video Animation", icon: Play },
    { name: "SEO Optimization", icon: Globe },
  ];

  const companyLinks = [
    "About Us",
    "Our Team",
    "Careers",
    "Case Studies",
    "Testimonials",
    "Blog",
  ];

  const supportLinks = [
    "Help Center",
    "FAQs",
    "Contact Us",
    "Privacy Policy",
    "Terms of Service",
    "Sitemap",
  ];

  return (
    <footer className="relative bg-[#020202] overflow-hidden">
      {/* Background Ambient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(225,198,147,0.06)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 opacity-[0.02]">
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

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12">
        
        {/* ===== 1. MASSIVE CTA SECTION ===== */}
        <div className="py-20 md:py-32 border-b border-white/5">
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
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tight mb-8">
              Have an idea?{" "}
              <br className="hidden md:block" />
              <span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54] italic"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Let's talk
              </span>{" "}
              about it.
            </h2>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
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
                className="inline-flex items-center gap-3 px-10 py-4 border border-white/10 text-white font-semibold text-sm rounded-xl hover:bg-white/5 hover:border-[#e1c693]/30 transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-[#e1c693]" /> +1-(877) 476-6927
              </a>
            </div>
          </motion.div>
        </div>

        {/* ===== 2. MAIN FOOTER GRID ===== */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & Contact Column */}
          <div className="lg:col-span-4">
            <a href="/" className="inline-flex items-center gap-3 mb-8 group">
              {/* Local Image Logo from Public Folder */}
              <img 
                src="/images/img1.png" 
                alt="AM-Verify Logo" 
                className="h-12 w-12 object-contain rounded-lg"
              />
              <div>
                <span className="text-2xl font-bold text-white tracking-tight">
                  AM-Verify<span className="text-[#e1c693]">.</span>
                </span>
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">Digital Agency</p>
              </div>
            </a>

            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
              We craft digital experiences that drive growth, engagement, and lasting impact for brands worldwide.
            </p>

            <div className="space-y-4">
              <a href="tel:+18774766927" className="flex items-center gap-4 text-gray-400 hover:text-[#e1c693] transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-[#e1c693]/30 transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+1-(877) 476-6927</span>
              </a>
              <a href="mailto:info@AM-Verify.com" className="flex items-center gap-4 text-gray-400 hover:text-[#e1c693] transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-[#e1c693]/30 transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">info@AM-Verify.com</span>
              </a>
              <div className="flex items-center gap-4 text-gray-400">
                <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">New York, USA</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#e1c693] inline-block"></span> Services
            </h4>
            <ul className="space-y-4">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <a href="#" className="group flex items-center gap-3 text-gray-400 hover:text-[#e1c693] transition-all duration-300">
                    <link.icon className="w-4 h-4 text-gray-600 group-hover:text-[#e1c693] transition-colors" />
                    <span className="text-sm border-b border-transparent group-hover:border-[#e1c693]/30 pb-0.5 transition-all">{link.name}</span>
                    <MoveUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#e1c693]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support Combined Column */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-8 lg:grid-cols-1 lg:gap-6">
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#e1c693] inline-block"></span> Company
              </h4>
              <ul className="space-y-4">
                {companyLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-[#e1c693] transition-colors text-sm flex items-center gap-2 group">
                      <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#e1c693] transition-colors"></span> {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#e1c693] inline-block"></span> Support
              </h4>
              <ul className="space-y-4">
                {supportLinks.slice(0, 5).map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-[#e1c693] transition-colors text-sm flex items-center gap-2 group">
                      <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#e1c693] transition-colors"></span> {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Column (Glassmorphic) */}
          <div className="lg:col-span-3">
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden group">
              {/* Ambient glow inside card */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#e1c693]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <h4 className="text-white font-bold text-base mb-2 relative z-10">Newsletter</h4>
              <p className="text-gray-500 text-xs mb-5 leading-relaxed relative z-10">Get the latest updates and insights directly to your inbox.</p>
              <div className="space-y-3 relative z-10">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#e1c693]/50 text-sm"
                />
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#e1c693] to-[#a78b54] text-black font-bold text-sm rounded-lg hover:shadow-lg hover:shadow-[#e1c693]/20 transition-all duration-300">
                  Subscribe <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ===== 3. BOTTOM BAR ===== */}
        <div className="border-t border-white/5 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-xs text-center md:text-left"
          >
            © 2026 <span className="text-white font-semibold">AM-Verify.</span> All rights reserved. Crafted with <Heart className="w-3 h-3 inline text-[#e1c693] fill-[#e1c693]" /> in USA
          </motion.p>

          <div className="flex items-center gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-[#e1c693] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#e1c693] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#e1c693] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>

      {/* ===== SCROLL TO TOP ===== */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full border border-[#e1c693]/50 bg-[#020202] text-[#e1c693] flex items-center justify-center shadow-lg shadow-black/50 hover:bg-[#e1c693] hover:text-black transition-all duration-300 group"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
      </motion.button>
    </footer>
  );
}