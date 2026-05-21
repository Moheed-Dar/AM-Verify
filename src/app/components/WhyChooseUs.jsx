"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Brain,
  User,
  Handshake,
  Globe,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { theme } = useTheme();

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

  return (
    <section
      ref={ref}
      id="about"
      className={`relative overflow-hidden py-20 md:py-28 transition-colors duration-500
        ${theme === "dark" ? "bg-[#050505]" : "bg-[#f8f9fa]"}`}
    >
      {/* Background Grid — color toggles with theme */}
      <div className="absolute inset-0 opacity-[0.04]">
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

      {/* Ambient Golden Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#e1c693]/5 rounded-full blur-[150px] pointer-events-none"></div>

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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            Building Websites <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54]">
              For Years
            </span>
          </h2>
          <p className="mt-6 text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
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
            className="md:col-span-2 relative rounded-3xl overflow-hidden group border border-white/5 hover:border-[#e1c693]/30 transition-all duration-700 min-h-[380px] md:min-h-[420px]"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
              alt="Team Collaboration"
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-[#e1c693]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>

            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Delivering Custom <span className="text-[#e1c693]">Website Solutions</span>
              </h3>
              <p className="text-gray-300 text-sm md:text-base max-w-lg leading-relaxed">
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
            className="relative rounded-3xl overflow-hidden group border border-white/5 hover:border-[#e1c693]/30 transition-all duration-700 min-h-[380px] md:min-h-[420px]"
          >
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
              alt="Core Strategy"
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]/20 z-10"></div>
            <div className="absolute inset-0 bg-[#e1c693]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>

            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
              <h4 className="text-white font-bold text-2xl mb-2">Core Discernments</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Strategic approach to design and innovation for your business.</p>
            </div>
          </motion.div>

          {/* Feature Cards */}
          {coreFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative rounded-3xl overflow-hidden group border border-white/5 hover:border-[#e1c693]/40 transition-all duration-700 cursor-pointer min-h-[380px] md:min-h-[420px]"
              whileHover={{ y: -5 }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/40 z-10"></div>
              <div className="absolute inset-0 bg-[#e1c693]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>

              <div className="relative z-20 flex flex-col justify-between h-full p-8">
                <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-[#e1c693]/20 group-hover:border-[#e1c693]/40 transition-all duration-500">
                  <feature.icon className="w-7 h-7 text-white group-hover:text-[#e1c693] transition-colors duration-500" />
                </div>

                <div>
                  <h4 className="text-white font-bold text-lg mb-2 tracking-wide">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <div className="w-10 h-10 rounded-full border border-white/20 backdrop-blur-sm flex items-center justify-center group-hover:border-[#e1c693] group-hover:text-[#e1c693] text-gray-400 transition-all duration-500">
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