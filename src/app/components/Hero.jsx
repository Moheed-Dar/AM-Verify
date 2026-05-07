"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  Rocket,
  Sparkles,
} from "lucide-react";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Partner logos data
  const partnerLogos = [
    { name: "Clutch", icon: "CLUTCH" },
    { name: "Top Digital Agency", icon: "TOP DIGITAL" },
    { name: "Google Partner", icon: "GOOGLE" },
    { name: "Bing Ads", icon: "BING ADS" },
    { name: "GoodFirms", icon: "GOODFIRMS" },
    { name: "DesignRush", icon: "DESIGNRUSH" },
    { name: "Trustpilot", icon: "TRUSTPILOT" },
    { name: "Upwork", icon: "UPWORK" },
  ];

  return (
    <section className="relative min-h-screen bg-[#0a0e27] overflow-hidden flex items-center pt-16 md:pt-20 lg:pt-24">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-32 left-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ===== LEFT SIDE VERTICAL PILL BUTTON (Let's Get Started) ===== */}
      <motion.a
        href="#contact"
        className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center group"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
        whileHover={{ x: 5 }}
      >
        <div className="relative">
          {/* Main Pill */}
          <div className="bg-gradient-to-b from-orange-500 to-orange-600 text-white py-8 px-3 rounded-r-2xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 flex flex-col items-center gap-3 min-h-[180px] justify-center border-r border-orange-400/30">
            {/* Icon */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Rocket className="w-5 h-5 text-white" />
            </motion.div>
            
            {/* Vertical Text */}
            <span
              className="text-sm font-bold tracking-widest uppercase whitespace-nowrap"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
              }}
            >
              Let&apos;s Get Started
            </span>
            
            {/* Arrow */}
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-4 h-4 rotate-90" />
            </motion.div>
          </div>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-orange-400/20 rounded-r-2xl blur-xl -z-10 group-hover:blur-2xl transition-all duration-300" />
        </div>
      </motion.a>

      {/* ===== LEFT SIDE FLOATING CHAT & PHONE BUTTONS (Adjusted Lower) ===== */}
      <motion.div
        className="fixed left-6 bottom-6 z-40 hidden lg:flex flex-col gap-3"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.8, type: "spring" }}
      >
        {/* Chat Button */}
        <motion.a
          href="#chat"
          className="group relative w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center text-orange-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle className="w-5 h-5" />
          
          {/* Tooltip */}
          <span className="absolute left-14 bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
            Let&apos;s Chat
          </span>
        </motion.a>

        {/* Phone Button */}
        <motion.a
          href="tel:+18774768927"
          className="group relative w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center text-orange-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <Phone className="w-5 h-5" />
          
          {/* Tooltip */}
          <span className="absolute left-14 bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
            Call Now
          </span>
        </motion.a>
      </motion.div>

      {/* Main Content - UPDATED PADDING FOR MD AND BELOW */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 lg:pl-20 pt-28 md:pt-32 lg:pt-20 pb-12 md:pb-16 lg:pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 pl-0 md:pl-4 lg:pl-8">
            {/* Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 text-sm font-medium">
                Creative Digital Agency
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-1 md:space-y-2">
              <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight"
              >
                BRAND.
                <span className="text-orange-500">DESIGN</span>
              </motion.h1>
              <motion.h1
                custom={2}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight"
              >
                PRODUCT.
              </motion.h1>
              <motion.h1
                custom={3}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight"
              >
                IN-HOUSE
              </motion.h1>
              <motion.h1
                custom={4}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight"
              >
                DEVELOPMENT
              </motion.h1>
              <motion.h1
                custom={5}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight"
              >
                <span className="text-orange-500">&</span> MORE
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              custom={6}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-base md:text-lg text-gray-400 max-w-lg leading-relaxed font-light"
            >
              Responsive Web Design Company Bringing Impactful Digital
              Strategies!
              <span className="block text-orange-400 mt-1 font-medium">
                Data-Driven Strategies .
              </span>
            </motion.p>

            {/* Orange Underline Decoration */}
            <motion.div
              custom={7}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="relative"
            >
              <svg
                width="120"
                height="12"
                viewBox="0 0 120 12"
                fill="none"
                className="text-orange-500"
              >
                <motion.path
                  d="M2 8C20 4 40 2 60 4C80 6 100 8 118 6"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
                />
              </svg>
            </motion.div>
          </div>

          {/* Right Content - SVG Illustration */}
          <motion.div
            className="relative hidden lg:block"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative"
            >
              {/* Main SVG Illustration - Designer Character */}
              <svg
                viewBox="0 0 500 450"
                className="w-full h-auto max-w-md mx-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Glow */}
                <motion.circle
                  cx="250"
                  cy="225"
                  r="160"
                  fill="url(#grad1)"
                  opacity="0.2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Character Body */}
                <motion.g
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  {/* Body/Shirt */}
                  <path
                    d="M150 280 C150 280 180 200 250 200 C320 200 350 280 350 280 L350 400 L150 400 Z"
                    fill="#2d5a87"
                  />
                  {/* Shirt Buttons */}
                  <circle cx="250" cy="260" r="4" fill="#f4a261" />
                  <circle cx="250" cy="290" r="4" fill="#f4a261" />
                  <circle cx="250" cy="320" r="4" fill="#f4a261" />
                  <circle cx="250" cy="350" r="4" fill="#f4a261" />
                  
                  {/* Collar */}
                  <path
                    d="M220 200 L250 230 L280 200"
                    fill="white"
                    stroke="#e0e0e0"
                    strokeWidth="1"
                  />
                </motion.g>

                {/* Character Head */}
                <motion.g
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  {/* Face */}
                  <circle cx="250" cy="170" r="45" fill="#f4a261" />
                  {/* Hair */}
                  <path
                    d="M205 160 C205 130 230 110 250 110 C270 110 295 130 295 160 C295 170 290 180 285 185 L275 175 L250 175 L225 175 L215 185 C210 180 205 170 205 160"
                    fill="#2d3436"
                  />
                  {/* Eyes */}
                  <circle cx="235" cy="170" r="5" fill="#2d3436" />
                  <circle cx="265" cy="170" r="5" fill="#2d3436" />
                  {/* Smile */}
                  <path
                    d="M235 185 Q250 195 265 185"
                    stroke="#2d3436"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                  {/* Blush */}
                  <circle cx="225" cy="180" r="6" fill="#e17055" opacity="0.3" />
                  <circle cx="275" cy="180" r="6" fill="#e17055" opacity="0.3" />
                </motion.g>

                {/* Left Hand with Lightbulb */}
                <motion.g
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {/* Arm */}
                  <path
                    d="M180 280 Q160 250 170 220"
                    stroke="#2d5a87"
                    strokeWidth="20"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Hand */}
                  <circle cx="170" cy="210" r="12" fill="#f4a261" />
                  {/* Lightbulb */}
                  <motion.g
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <circle cx="170" cy="185" r="18" fill="#f9ca24" />
                    <rect x="162" y="200" width="16" height="8" rx="2" fill="#95a5a6" />
                    {/* Light rays */}
                    <line x1="170" y1="155" x2="170" y2="165" stroke="#f9ca24" strokeWidth="2" />
                    <line x1="140" y1="185" x2="150" y2="185" stroke="#f9ca24" strokeWidth="2" />
                    <line x1="190" y1="185" x2="200" y2="185" stroke="#f9ca24" strokeWidth="2" />
                  </motion.g>
                </motion.g>

                {/* Right Hand with Toggle */}
                <motion.g
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  {/* Arm */}
                  <path
                    d="M320 280 Q340 250 330 220"
                    stroke="#2d5a87"
                    strokeWidth="20"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Hand */}
                  <circle cx="330" cy="210" r="12" fill="#f4a261" />
                  {/* Toggle Switch */}
                  <rect x="315" y="195" width="30" height="16" rx="8" fill="#2d3436" />
                  <motion.circle
                    cx="325"
                    cy="203"
                    r="6"
                    fill="white"
                    animate={{ cx: [325, 335, 325] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.g>

                {/* Top Screen - UI Design */}
                <motion.g
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <rect
                    x="120"
                    y="80"
                    width="180"
                    height="120"
                    rx="12"
                    fill="none"
                    stroke="#e17055"
                    strokeWidth="4"
                  />
                  {/* Screen Content */}
                  <rect x="135" y="95" width="150" height="90" rx="8" fill="#1e272e" />
                  {/* UI Lines */}
                  <rect x="145" y="110" width="60" height="4" rx="2" fill="#00d2d3" />
                  <rect x="145" y="120" width="80" height="4" rx="2" fill="#00d2d3" />
                  <rect x="145" y="135" width="50" height="4" rx="2" fill="#f9ca24" />
                  <rect x="145" y="145" width="70" height="4" rx="2" fill="#f9ca24" />
                  <rect x="145" y="160" width="40" height="4" rx="2" fill="#ff6b6b" />
                </motion.g>

                {/* Bottom Screen - Code/Toggle */}
                <motion.g
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <rect
                    x="260"
                    y="200"
                    width="160"
                    height="100"
                    rx="12"
                    fill="none"
                    stroke="#f39c12"
                    strokeWidth="4"
                  />
                  {/* Screen Content */}
                  <rect x="275" y="215" width="130" height="70" rx="8" fill="#1e272e" />
                  {/* Code Lines */}
                  <rect x="285" y="230" width="50" height="3" rx="1.5" fill="#54a0ff" />
                  <rect x="285" y="240" width="80" height="3" rx="1.5" fill="#54a0ff" />
                  <rect x="285" y="250" width="60" height="3" rx="1.5" fill="#54a0ff" />
                  <rect x="285" y="265" width="40" height="3" rx="1.5" fill="#5f27cd" />
                </motion.g>

                {/* Floating Decorative Elements */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="8"
                  fill="#e17055"
                  animate={{ y: [-10, 10, -10], scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.circle
                  cx="400"
                  cy="150"
                  r="6"
                  fill="#00d2d3"
                  animate={{ y: [10, -10, 10], scale: [1, 1.3, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.text
                  x="380"
                  y="120"
                  fill="#5f27cd"
                  fontSize="20"
                  fontWeight="bold"
                  animate={{ opacity: [0.5, 1, 0.5], rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ×
                </motion.text>

                {/* Coffee Cup */}
                <motion.g
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path
                    d="M200 380 L200 400 Q200 410 210 410 L230 410 Q240 410 240 400 L240 380"
                    fill="#e17055"
                  />
                  <path
                    d="M240 385 Q250 385 250 395 Q250 405 240 405"
                    stroke="#e17055"
                    strokeWidth="3"
                    fill="none"
                  />
                  {/* Steam */}
                  <motion.path
                    d="M210 375 Q215 365 210 355"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.3"
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.g>

                {/* Gradient Definitions */}
                <defs>
                  <radialGradient
                    id="grad1"
                    cx="50%"
                    cy="50%"
                    r="50%"
                    fx="50%"
                    fy="50%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#ff6b35", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#0a0e27", stopOpacity: 0 }}
                    />
                  </radialGradient>
                </defs>
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* Achievements and Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 md:mt-20 lg:mt-24 pt-10 border-t border-white/10"
        >
          <div className="text-center mb-10">
            <span className="text-gray-400 text-sm uppercase tracking-widest font-medium">
              Achievements and Awards
            </span>
          </div>

          {/* Animated Logo Marquee - Right to Left Infinite Scroll */}
          <div className="relative overflow-hidden py-4">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0e27] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0e27] to-transparent z-10" />

            {/* Scrolling Container */}
            <motion.div
              className="flex gap-12 items-center"
              animate={{
                x: [0, -1200],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {/* First Set */}
              {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors duration-300 cursor-pointer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    y: {
                      repeat: Infinity,
                      duration: 3 + (index % 3),
                      ease: "easeInOut",
                    },
                  }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center">
                    <span className="text-orange-400 font-bold text-xs">
                      {logo.icon.charAt(0)}
                    </span>
                  </div>
                  <span className="text-white/70 text-sm font-semibold whitespace-nowrap">
                    {logo.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}