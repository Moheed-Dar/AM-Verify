"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  Globe, 
  Send, 
  Share2, 
  Link as LinkIcon, 
  MessageCircle 
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
      transition: { delay: i * 0.15, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  // Using available lucide-react icons for social links
  const socialLinks = [
    { icon: Globe, href: "#", label: "Website" },
    { icon: Send, href: "#", label: "Contact" },
    { icon: Share2, href: "#", label: "Share" },
    { icon: LinkIcon, href: "#", label: "Link" },
    { icon: MessageCircle, href: "#", label: "Chat" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden flex items-center pt-32 pb-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-32 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 20, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Left Side Floating Buttons */}
      <motion.div
        className="fixed left-6 bottom-6 z-40 hidden lg:flex flex-col gap-3"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.a
          href="tel:+18774768927"
          className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center text-gray-900 shadow-lg"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <Phone className="w-5 h-5" />
          <span className="absolute left-14 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Call Now
          </span>
        </motion.a>
        <motion.a
          href="mailto:info@AM-Verify.com"
          className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-lg"
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail className="w-5 h-5" />
          <span className="absolute left-14 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Email Us
          </span>
        </motion.a>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <motion.h1
                custom={0}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
              >
                BRAND.
                <span className="text-yellow-500">DESIGN</span>
              </motion.h1>
              <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
              >
                PRODUCT. <span className="text-gray-400">IN-HOUSE</span>
              </motion.h1>
              <motion.h1
                custom={2}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
              >
                DEVELOPMENT
              </motion.h1>
              <motion.h1
                custom={3}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
              >
                <span className="text-yellow-500">&</span> MORE
              </motion.h1>
            </div>

            <motion.p
              custom={4}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-base md:text-lg text-gray-400 max-w-lg leading-relaxed"
            >
              Responsive Web Design Company Bringing Impactful Digital Strategies!
              <span className="block text-orange-400 mt-2 font-medium">
                Data-Driven Strategies
              </span>
            </motion.p>

            {/* Buttons */}
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold rounded-full shadow-lg hover:shadow-yellow-500/50 transition-all"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                LET&apos;S TALK
              </motion.a>
              <motion.a
                href="#login"
                className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                LOGIN
              </motion.a>
            </motion.div>

            {/* Orange Underline */}
            <motion.div
              custom={6}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="pt-4"
            >
              <svg width="120" height="12" viewBox="0 0 120 12" className="text-orange-500">
                <motion.path
                  d="M2 8C20 4 40 2 60 4C80 6 100 8 118 6"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                />
              </svg>
            </motion.div>
          </div>

          {/* Right Content - 3D Device Illustration */}
          <motion.div
            className="relative hidden lg:block"
            style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
          >
            <div className="relative">
              {/* Main SVG - 3D Devices with Network */}
              <svg viewBox="0 0 600 500" className="w-full h-auto">
                {/* Glow Effects */}
                <defs>
                  <linearGradient id="glow1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="glow2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                {/* Central Hub */}
                <motion.g
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <circle cx="300" cy="250" r="40" fill="url(#glow1)" />
                  <circle cx="300" cy="250" r="30" fill="#f59e0b" />
                  <circle cx="300" cy="250" r="20" fill="#fbbf24" />
                </motion.g>

                {/* Connection Lines */}
                <motion.path
                  d="M 300 210 Q 300 150 300 100"
                  stroke="url(#glow2)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="5,5"
                  animate={{ strokeDashoffset: [0, 10] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                <motion.path
                  d="M 330 230 Q 380 200 430 180"
                  stroke="url(#glow2)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="5,5"
                  animate={{ strokeDashoffset: [0, 10] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                />
                <motion.path
                  d="M 330 270 Q 380 300 430 320"
                  stroke="url(#glow2)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="5,5"
                  animate={{ strokeDashoffset: [0, 10] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                />
                <motion.path
                  d="M 270 270 Q 220 320 180 360"
                  stroke="url(#glow2)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="5,5"
                  animate={{ strokeDashoffset: [0, 10] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
                />

                {/* Top Phone */}
                <motion.g
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <rect x="280" y="50" width="40" height="70" rx="5" fill="#1f2937" stroke="#f59e0b" strokeWidth="2" />
                  <rect x="285" y="60" width="30" height="50" rx="2" fill="#111827" />
                  <circle cx="300" cy="100" r="3" fill="#f59e0b" />
                </motion.g>

                {/* Right Top Device */}
                <motion.g
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <rect x="430" y="150" width="50" height="60" rx="5" fill="#1f2937" stroke="#3b82f6" strokeWidth="2" />
                  <rect x="435" y="160" width="40" height="40" rx="2" fill="#111827" />
                  <circle cx="455" cy="190" r="3" fill="#3b82f6" />
                </motion.g>

                {/* Right Bottom Device */}
                <motion.g
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <rect x="430" y="300" width="60" height="40" rx="5" fill="#1f2937" stroke="#8b5cf6" strokeWidth="2" />
                  <rect x="435" y="305" width="50" height="30" rx="2" fill="#111827" />
                  <circle cx="460" cy="320" r="3" fill="#8b5cf6" />
                </motion.g>

                {/* Bottom Phone */}
                <motion.g
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <rect x="150" y="360" width="60" height="40" rx="5" fill="#1f2937" stroke="#10b981" strokeWidth="2" />
                  <rect x="155" y="365" width="50" height="30" rx="2" fill="#111827" />
                  <circle cx="180" cy="380" r="3" fill="#10b981" />
                </motion.g>

                {/* Left Device */}
                <motion.g
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <rect x="130" y="220" width="50" height="60" rx="5" fill="#1f2937" stroke="#ef4444" strokeWidth="2" />
                  <rect x="135" y="230" width="40" height="40" rx="2" fill="#111827" />
                  <circle cx="155" cy="260" r="3" fill="#ef4444" />
                </motion.g>

                {/* Floating Particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.circle
                    key={i}
                    cx={100 + Math.random() * 400}
                    cy={100 + Math.random() * 300}
                    r="3"
                    fill="#f59e0b"
                    opacity="0.6"
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Social Media Icons - Using available lucide-react icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 flex justify-center gap-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-yellow-500 hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all"
              whileHover={{ y: -5, scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + index * 0.1 }}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}