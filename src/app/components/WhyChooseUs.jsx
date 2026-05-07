"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain,
  User,
  Handshake,
  Globe,
  ArrowRight,
} from "lucide-react";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hoveredCard, setHoveredCard] = useState(null);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const coreFeatures = [
    {
      icon: User,
      title: "DISCOVER YOUR BUSINESS POTENTIAL",
      description: "Leverage digital technologies and strategies to unlock your business potential.",
      color: "from-orange-500 to-amber-500",
      borderColor: "border-white/5",
      hoverBorder: "group-hover:border-orange-500/30",
      iconBg: "bg-orange-500/10",
      iconBorder: "border-orange-500/20",
      iconColor: "text-orange-400",
    },
    {
      icon: Handshake,
      title: "ENVISION YOUR LONG-TERM SUCCESS",
      description: "Deliver seamless user experience and navigation using digital innovation.",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-white/5",
      hoverBorder: "group-hover:border-blue-500/30",
      iconBg: "bg-blue-500/10",
      iconBorder: "border-blue-500/20",
      iconColor: "text-blue-400",
    },
    {
      icon: Globe,
      title: "STRONG DIGITAL FOUNDATIONS FOR YOU",
      description: "Connect with a responsive web design agency – unlock your business potential.",
      color: "from-emerald-500 to-teal-500",
      borderColor: "border-white/5",
      hoverBorder: "group-hover:border-emerald-500/30",
      iconBg: "bg-emerald-500/10",
      iconBorder: "border-emerald-500/20",
      iconColor: "text-emerald-400",
    },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="relative bg-black overflow-hidden pt-10 md:pt-14 pb-16"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12"
        >
          {/* Left Side - SVG */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              className="relative aspect-square max-w-md mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-orange-500/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.05, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              <svg
                viewBox="0 0 400 400"
                className="w-full h-full relative z-10"
                fill="none"
              >
                {/* SVG content remains same */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="150"
                  stroke="url(#brainGrad)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="8 4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "center" }}
                />
                <motion.circle
                  cx="200"
                  cy="200"
                  r="120"
                  stroke="url(#brainGrad2)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="4 8"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "center" }}
                />

                <motion.path
                  d="M200 100 C250 100 280 140 280 180 C280 220 260 250 240 270 C220 290 200 300 200 300 C200 300 180 290 160 270 C140 250 120 220 120 180 C120 140 150 100 200 100Z"
                  fill="url(#brainFill)"
                  opacity="0.7"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{ transformOrigin: "center" }}
                />

                {[...Array(6)].map((_, i) => {
                  const angle = (i * 60 * Math.PI) / 180;
                  const x = 200 + 70 * Math.cos(angle);
                  const y = 200 + 70 * Math.sin(angle);

                  return (
                    <motion.circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="5"
                      fill="#f97316"
                      animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    />
                  );
                })}

                <defs>
                  <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#f97316" />
                  </linearGradient>
                  <linearGradient id="brainGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                  <radialGradient id="brainFill" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#1e40af" stopOpacity="0.1" />
                  </radialGradient>
                </defs>
              </svg>
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div variants={itemVariants} className="space-y-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              Building Websites
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                For Years
              </span>
            </h2>

            <motion.p
              className="text-gray-400 text-base leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Prime Design Agency can turn brilliant ideas into working realities for you! Using industry-wide experience, we push our limits to deliver stunning websites aligned with your brand identity.
            </motion.p>

            <motion.p
              className="text-gray-400 text-base leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              Prime Design Agency delivers custom website solutions to expand your business reach and create modern digital experiences.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Bottom Section - Cards + Image */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Core Features Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-orange-400" />
              Core Discernments
            </h3>

            <div className="space-y-3">
              {coreFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1 + index * 0.12, duration: 0.5 }}
                  className={`group relative flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border ${feature.borderColor} ${feature.hoverBorder} hover:bg-white/[0.04] transition-all duration-500 cursor-pointer`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{ x: 4 }}
                >
                  <motion.div
                    className={`relative flex-shrink-0 w-11 h-11 rounded-full ${feature.iconBg} border ${feature.iconBorder} flex items-center justify-center`}
                  >
                    <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
                  </motion.div>

                  <div className="flex-1 min-w-0 pt-0.5">
                    <h4
                      className={`text-white font-bold text-xs uppercase tracking-wider mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${feature.color}`}
                    >
                      {feature.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
            className="relative"
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden group w-full h-[250px] sm:h-[320px] md:h-[420px] lg:h-full lg:min-h-[500px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-[#0a0e27]/20 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10 z-10" />

              <img
                src="https://thumbs.dreamstime.com/b/unity-action-people-joining-hands-together-five-standing-circle-place-their-top-each-other-symbolizing-teamwork-385335630.jpg"
                alt="Team Collaboration"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 z-10" />

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20">
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  We&apos;re more than just another{" "}
                  <span className="text-orange-400 font-semibold">
                    Digital Marketing Agency
                  </span>
                  . Discover the Prime Design Agency difference.
                  <motion.span
                    className="inline-block ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4 text-orange-400 inline" />
                  </motion.span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}