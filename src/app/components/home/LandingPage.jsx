"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, ArrowRight, Play, Star, CheckCircle2 } from "lucide-react";
import { useTheme } from "next-themes";

export default function HomeContent() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-[#050505]" />;
  }

  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen overflow-x-hidden relative transition-colors duration-700 ${
        isDark ? "bg-[#050505] text-gray-100" : "bg-[#fafaf9] text-gray-900"
      }`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;1,700&display=swap"
        rel="stylesheet"
      />

      {/* ==================== BACKGROUND EFFECTS ==================== */}
      <div
        className={`fixed inset-0 z-0 transition-opacity duration-700 ${
          isDark
            ? "bg-[radial-gradient(ellipse_at_top_right,_rgba(225,198,147,0.08)_0%,_transparent_50%)]"
            : "bg-[radial-gradient(ellipse_at_top_right,_rgba(225,198,147,0.15)_0%,_transparent_50%)]"
        }`}
      />

      <div
        className={`fixed inset-0 z-0 transition-opacity duration-700 ${
          isDark
            ? "bg-[radial-gradient(ellipse_at_bottom_left,_rgba(167,139,84,0.05)_0%,_transparent_50%)]"
            : "bg-[radial-gradient(ellipse_at_bottom_left,_rgba(167,139,84,0.08)_0%,_transparent_50%)]"
        }`}
      />

      <div className={`fixed inset-0 z-0 ${isDark ? 'opacity-[0.03]' : 'opacity-[0.06]'}`}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${
              isDark ? 'rgba(225,198,147,0.2)' : 'rgba(225,198,147,0.3)'
            } 1px, transparent 1px), linear-gradient(90deg, ${
              isDark ? 'rgba(225,198,147,0.2)' : 'rgba(225,198,147,0.3)'
            } 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-16 md:pt-44 md:pb-24 z-20 w-full flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="space-y-7"
          >
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border backdrop-blur-sm transition-colors duration-300 ${
                isDark
                  ? 'border-[#e1c693]/25 bg-[#e1c693]/5'
                  : 'border-[#a78b54]/25 bg-[#a78b54]/5'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e1c693] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e1c693]"></span>
              </span>
              <p
                className={`text-xs font-bold uppercase tracking-[0.25em] ${
                  isDark ? "text-[#e1c693]" : "text-[#a78b54]"
                }`}
              >
                The Future of Client Acquisition
              </p>
            </div>

            {/* Main Heading */}
            <h1
              className={`text-4xl md:text-5xl lg:text-[3.8rem] font-extrabold leading-[1.08] tracking-tight ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              We Guarantee{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] via-[#f0d9a8] to-[#a78b54]">
                90 Qualified
              </span>
              <br />Conversations.{" "}
              <span
                className={`text-3xl md:text-4xl lg:text-[2.8rem] font-bold ${
                  isDark ? "text-gray-500" : "text-gray-400"
                }`}
                style={{ fontStyle: "italic", fontFamily: "'Playfair Display', serif" }}
              >
                Or You Don't Pay!
              </span>
            </h1>

            {/* Subheading */}
            <p
              className={`text-lg md:text-xl leading-relaxed max-w-lg ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Stop burning ad spend on cold leads. Our AI-powered system delivers qualified
              prospects who are ready to talk — directly to your calendar within 30 days.{" "}
              <span className={`font-semibold ${isDark ? "text-[#e1c693]" : "text-[#a78b54]"}`}>
                Zero risk, pure results.
              </span>
            </p>

            {/* Guarantee Pills */}
            <div className="flex flex-wrap gap-2.5">
              {["90 qualified calls", "Full refund guarantee", "No long-term contracts"].map(
                (item, i) => (
                  <div
                    key={i}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm border transition-colors duration-300 ${
                      isDark
                        ? 'bg-[#e1c693]/5 border-[#e1c693]/15 text-[#e1c693]'
                        : 'bg-[#a78b54]/5 border-[#a78b54]/15 text-[#a78b54]'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" /> {item}
                  </div>
                )
              )}
            </div>

            {/* CTAs - Size Reduced */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative px-6 py-3 text-sm bg-gradient-to-r from-[#e1c693] to-[#a78b54] text-[#0a0a0a] font-bold rounded-full text-center hover:shadow-[0_10px_30px_rgba(225,198,147,0.4)] transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">Book Free Strategy Call</span>
                <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>

              <motion.a
                href="#work"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`group px-6 py-3 text-sm border rounded-full font-bold text-center transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm ${
                  isDark
                    ? "border-white/15 hover:border-[#e1c693]/60 hover:text-[#e1c693] hover:bg-[#e1c693]/5"
                    : "border-gray-300 hover:border-[#a78b54]/60 hover:text-[#a78b54] hover:bg-[#a78b54]/5"
                }`}
              >
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    isDark
                      ? "bg-white/10 group-hover:bg-[#e1c693]/20"
                      : "bg-gray-100 group-hover:bg-[#a78b54]/10"
                  }`}
                >
                  <Play className="w-3 h-3 fill-current" />
                </span>
                See How It Works
              </motion.a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`w-9 h-9 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                      isDark
                        ? "border-[#050505] bg-gradient-to-br from-gray-700 to-gray-800 text-gray-300"
                        : "border-white bg-gradient-to-br from-gray-200 to-gray-300 text-gray-600"
                    }`}
                    style={{ zIndex: 5 - i }}
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#e1c693] text-[#e1c693]" />
                  ))}
                </div>
                <p className={`text-xs mt-0.5 ${isDark ? "text-gray-500" : "text-gray-500"}`}>
                  Trusted by{" "}
                  <span className={`font-semibold ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    500+
                  </span>{" "}
                  businesses
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Video Container */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative w-full group"
          >
            {/* Ambient glow behind video */}
            <div className="absolute -inset-8 bg-gradient-to-tr from-[#e1c693]/20 via-[#a78b54]/10 to-transparent rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-1000 pointer-events-none" />

            {/* Animated Rotating Border Wrapper */}
            <div className="relative p-[2px] rounded-2xl overflow-hidden transition-all duration-700 shadow-2xl group-hover:shadow-[0_20px_50px_rgba(225,198,147,0.3)]">
              {/* Rotating gradient animation element */}
              <div 
                className="absolute inset-[-100%] z-0" 
                style={{ 
                  background: `conic-gradient(from 0deg, transparent 0%, ${isDark ? '#e1c693' : '#a78b54'} 10%, transparent 20%)`,
                  animation: 'spin 4s linear infinite'
                }} 
              />

              {/* Video Inner Container */}
              <div className={`relative z-10 aspect-video w-full rounded-2xl overflow-hidden ${isDark ? "bg-[#0a0a0a]" : "bg-[#111111]"}`}>
                
                {/* MODERN MESH GRADIENT BACKGROUND behind the video */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div className={`absolute w-1/2 h-1/2 rounded-full blur-3xl top-[-10%] left-[-10%] ${isDark ? 'bg-[#e1c693]/30' : 'bg-[#e1c693]/50'}`} style={{ animation: 'pulse 6s ease-in-out infinite' }} />
                  <div className={`absolute w-1/2 h-1/2 rounded-full blur-3xl bottom-[-10%] right-[-10%] ${isDark ? 'bg-[#a78b54]/30' : 'bg-[#a78b54]/50'}`} style={{ animation: 'pulse 6s ease-in-out infinite 3s' }} />
                  <div className={`absolute inset-0 ${isDark ? 'bg-[#0a0a0a]/60' : 'bg-[#111111]/40'}`}></div>
                </div>

                {/* YouTube Iframe */}
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Client Acquisition System"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="relative z-20 w-full h-full absolute inset-0"
                />

                {/* Corner decorations */}
                <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#e1c693]/50 rounded-tl-sm pointer-events-none z-30" />
                <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#e1c693]/50 rounded-tr-sm pointer-events-none z-30" />
                <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#e1c693]/50 rounded-bl-sm pointer-events-none z-30" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#e1c693]/50 rounded-br-sm pointer-events-none z-30" />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Custom Keyframe Animations for Video */}
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.6; }
        }
      `}</style>

    </div>
  );
}