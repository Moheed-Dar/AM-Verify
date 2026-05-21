"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "next-themes";
import {
  User,
  Handshake,
  Globe,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = !mounted ? "dark" : (theme === "system" ? systemTheme : theme);
  const isDark = currentTheme === "dark";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  };

  const coreFeatures = [
    {
      icon: User,
      title: "DISCOVER POTENTIAL",
      description: "Leverage digital technologies and strategies to unlock your business potential.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974&auto=format&fit=crop",
    },
    {
      icon: Handshake,
      title: "ENVISION SUCCESS",
      description: "Deliver seamless user experience and navigation using digital innovation.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop",
    },
    {
      icon: Globe,
      title: "STRONG FOUNDATIONS",
      description: "Connect with a responsive web design agency – unlock your business reach.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    },
  ];

  // Don't render theme-dependent styles until mounted
  if (!mounted) {
    return (
      <section
        ref={ref}
        id="about"
        className="relative overflow-hidden py-20 md:py-28 transition-colors duration-500 bg-[#050505]"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#e1c693]/30 rounded-full bg-[#e1c693]/5 mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#e1c693]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e1c693]">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              Building Websites <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54]">
                For Years
              </span>
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      id="about"
      className={`relative overflow-hidden py-20 md:py-28 transition-colors duration-500
        ${isDark ? "bg-[#050505]" : "bg-[#f8f9fa]"}`}
      suppressHydrationWarning
    >
      {/* Background Grid — color toggles with theme */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(${isDark ? "rgba(225,198,147,0.2)" : "rgba(225,198,147,0.4)"} 1px, transparent 1px),
              linear-gradient(90deg, ${isDark ? "rgba(225,198,147,0.2)" : "rgba(225,198,147,0.4)"} 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Ambient Golden Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] pointer-events-none ${
        isDark ? "bg-[#e1c693]/5" : "bg-[#e1c693]/10"
      }`} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#e1c693]/30 rounded-full bg-[#e1c693]/5 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#e1c693]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e1c693]">Why Choose Us</span>
          </div>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black leading-tight ${
            isDark ? "text-white" : "text-gray-900"
          }`}>
            Building Websites <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54]">
              For Years
            </span>
          </h2>
          <p className={`mt-6 text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}>
            We can turn brilliant ideas into working realities for you! Using industry-wide experience, we push our limits to deliver stunning websites aligned with your brand identity. Our AI-automated CRM streamlines every client interaction. Effortlessly manage calls, texts, and emails from one centralized platform, enhancing communication, boosting efficiency, and delivering a seamless customer experience.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >

          {/* Card 1: Large Image Card (Spans 2 cols on Desktop) */}
          <motion.div
            variants={itemVariants}
            className={`md:col-span-2 relative rounded-3xl overflow-hidden group transition-all duration-700 min-h-[380px] md:min-h-[420px] ${
              isDark 
                ? "border border-white/5 hover:border-[#e1c693]/30" 
                : "border border-gray-200 hover:border-[#e1c693]/40 shadow-sm hover:shadow-xl"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
              alt="Team Collaboration"
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
            <div className={`absolute inset-0 bg-gradient-to-t z-10 ${
              isDark 
                ? "from-[#050505] via-[#050505]/60 to-transparent" 
                : "from-[#f8f9fa] via-[#f8f9fa]/60 to-transparent"
            }`}></div>
            <div className="absolute inset-0 bg-[#e1c693]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>

            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
                Delivering Custom <span className="text-[#e1c693]">Website Solutions</span>
              </h3>
              <p className={`text-sm md:text-base max-w-lg leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}>
                Expand your business reach and create modern digital experiences with our expert team.
              </p>
              <motion.div
                className="mt-6 inline-flex items-center gap-2 text-[#e1c693] font-semibold text-sm cursor-pointer group/btn"
                whileHover={{ x: 5 }}
              >
                Discover More
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </motion.div>
            </div>
          </motion.div>

          {/* Card 2: Medium Image Card */}
          <motion.div
            variants={itemVariants}
            className={`relative rounded-3xl overflow-hidden group transition-all duration-700 min-h-[380px] md:min-h-[420px] ${
              isDark 
                ? "border border-white/5 hover:border-[#e1c693]/30" 
                : "border border-gray-200 hover:border-[#e1c693]/40 shadow-sm hover:shadow-xl"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
              alt="Core Strategy"
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
            <div className={`absolute inset-0 bg-gradient-to-t z-10 ${
              isDark 
                ? "from-[#050505] via-[#050505]/70 to-[#050505]/20" 
                : "from-[#f8f9fa] via-[#f8f9fa]/70 to-[#f8f9fa]/20"
            }`}></div>
            <div className="absolute inset-0 bg-[#e1c693]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>

            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <h4 className={`font-bold text-2xl mb-2 ${
                isDark ? "text-white" : "text-gray-900"
              }`}>Core Discernments</h4>
              <p className={`text-sm leading-relaxed ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}>Strategic approach to design and innovation for your business.</p>
            </div>
          </motion.div>

          {/* Feature Cards */}
          {coreFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative rounded-3xl overflow-hidden group transition-all duration-700 cursor-pointer min-h-[380px] md:min-h-[420px] ${
                isDark 
                  ? "border border-white/5 hover:border-[#e1c693]/40" 
                  : "border border-gray-200 hover:border-[#e1c693]/40 shadow-sm hover:shadow-xl"
              }`}
              whileHover={{ y: -5 }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t z-10 ${
                isDark 
                  ? "from-[#050505] via-[#050505]/80 to-[#050505]/40" 
                  : "from-[#f8f9fa] via-[#f8f9fa]/80 to-[#f8f9fa]/40"
              }`}></div>
              <div className="absolute inset-0 bg-[#e1c693]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>

              <div className="relative z-20 flex flex-col justify-between h-full p-8">
                <div className={`w-14 h-14 rounded-xl backdrop-blur-md border flex items-center justify-center transition-all duration-500 ${
                  isDark 
                    ? "bg-white/10 border-white/20 group-hover:bg-[#e1c693]/20 group-hover:border-[#e1c693]/40" 
                    : "bg-black/5 border-gray-300 group-hover:bg-[#e1c693]/20 group-hover:border-[#e1c693]/40"
                }`}>
                  <feature.icon className={`w-7 h-7 transition-colors duration-500 ${
                    isDark 
                      ? "text-white group-hover:text-[#e1c693]" 
                      : "text-gray-700 group-hover:text-[#e1c693]"
                  }`} />
                </div>

                <div>
                  <h4 className={`font-bold text-lg mb-2 tracking-wide ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                    {feature.title}
                  </h4>
                  <p className={`text-sm leading-relaxed mb-6 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}>
                    {feature.description}
                  </p>
                  <div className={`w-10 h-10 rounded-full backdrop-blur-sm border flex items-center justify-center transition-all duration-500 ${
                    isDark 
                      ? "border-white/20 group-hover:border-[#e1c693] group-hover:text-[#e1c693] text-gray-400" 
                      : "border-gray-300 group-hover:border-[#e1c693] group-hover:text-[#e1c693] text-gray-500"
                  }`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}