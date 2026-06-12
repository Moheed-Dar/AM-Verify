"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Target, Rocket, BarChart3, Layers, Crown } from "lucide-react";
import { useTheme } from "next-themes";

const stepsData = [
  {
    step: "01",
    title: "Discovery",
    description: "Stop guessing. We deep-dive into your market, dissect your competition, and find the gaps they're missing.",
    points: ["Market Analysis", "Competitor Research", "Target Profiling"],
    icon: Search
  },
  {
    step: "02",
    title: "Strategy",
    description: "Cookie-cutter campaigns? Not here. We craft laser-focused outreach that speaks directly to pain points.",
    points: ["Campaign Design", "Message Crafting", "Channel Selection"],
    icon: Target
  },
  {
    step: "03",
    title: "Execution",
    description: "While others talk, we deliver. Watch your calendar flood with qualified leads who are ready to buy.",
    points: ["Campaign Launch", "Lead Generation", "Pipeline Building"],
    icon: Rocket
  },
  {
    step: "04",
    title: "Optimisation",
    description: "Good isn't good enough. We obsessively test, tweak, and multiply your ROI until every dollar works 10x harder.",
    points: ["A/B Testing", "Performance Tracking", "ROI Optimisation"],
    icon: BarChart3
  },
  {
    step: "05",
    title: "Scale",
    description: "Success isn't luck — it's a system. We turn your winning campaigns into a client-generating machine.",
    points: ["Campaign Scaling", "Process Automation", "Team Training"],
    icon: Layers
  },
  {
    step: "06",
    title: "Dominate",
    description: "Forget competing. You'll own your market while others scramble for scraps. Become an industry leader.",
    points: ["Market Leadership", "Brand Authority", "Sustainable Growth"],
    icon: Crown
  }
];

// Single Card Component
function StepCard({ item, isDark }) {
  const Icon = item.icon;

  return (
    <div className="group relative flex-shrink-0 w-[220px] md:w-[260px]">
      {/* Gradient Border on Hover */}
      <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-br from-[#e1c693] via-[#a78b54] to-[#e1c693] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]" />

      <div
        className={`relative h-full flex flex-col py-3 px-4 md:py-4 md:px-5 rounded-xl border backdrop-blur-md transition-colors duration-500 ${
          isDark
            ? "bg-[#0a0a0a]/90 border-white/10 group-hover:border-transparent"
            : "bg-white/90 border-gray-200 group-hover:border-transparent"
        }`}
      >
        {/* Background Large Step Number */}
        <div className="absolute top-2 right-3 text-6xl font-black opacity-5 select-none pointer-events-none">
          {item.step}
        </div>

        {/* Icon & Step Badge */}
        <div className="flex items-center gap-2 mb-3">
          <div
            className={`p-2 rounded-lg border transition-colors duration-300 ${
              isDark
                ? "bg-[#e1c693]/10 border-[#e1c693]/20 text-[#e1c693] group-hover:bg-[#e1c693]/20"
                : "bg-[#a78b54]/10 border-[#a78b54]/20 text-[#a78b54] group-hover:bg-[#a78b54]/20"
            }`}
          >
            <Icon className="w-4 h-4" />
          </div>
          <div>
            <p
              className={`text-[9px] font-bold uppercase tracking-widest ${
                isDark ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Step {item.step}
            </p>
            <h3
              className={`text-base md:text-lg font-bold tracking-tight leading-tight ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {item.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p
          className={`text-[11px] md:text-xs leading-relaxed mb-3 flex-1 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {item.description}
        </p>

        {/* Bullet Points */}
        <div className="space-y-1.5 mt-auto">
          {item.points.map((point, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className={`w-1 h-1 rounded-full flex-shrink-0 ${
                  isDark ? "bg-[#e1c693]" : "bg-[#a78b54]"
                }`}
              />
              <p
                className={`text-[11px] md:text-xs font-medium truncate ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ZeroToHero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-[#050505]" />;
  }

  const isDark = theme === "dark";

  // Duplicate data for seamless infinite loop
  const duplicatedSteps = [...stepsData, ...stepsData];

  return (
    <section
      className={`relative py-20 overflow-hidden transition-colors duration-700 ${
        isDark ? "bg-[#050505]" : "bg-[#fafaf9]"
      }`}
    >
      {/* Section Ambient Lights */}
      <div
        className={`absolute top-1/4 right-0 w-[40%] h-[500px] rounded-full blur-3xl pointer-events-none ${
          isDark ? "bg-[#a78b54]/5" : "bg-[#e1c693]/10"
        }`}
      />
      <div
        className={`absolute bottom-0 left-0 w-[30%] h-[400px] rounded-full blur-3xl pointer-events-none ${
          isDark ? "bg-[#a78b54]/5" : "bg-[#e1c693]/10"
        }`}
      />

      {/* Left & Right Black/Dark Fade Masks (No Blue) */}
      <div
        className={`absolute top-0 left-0 w-32 md:w-48 h-full z-20 pointer-events-none ${
          isDark
            ? "bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent"
            : "bg-gradient-to-r from-[#fafaf9] via-[#fafaf9]/80 to-transparent"
        }`}
      />
      <div
        className={`absolute top-0 right-0 w-32 md:w-48 h-full z-20 pointer-events-none ${
          isDark
            ? "bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent"
            : "bg-gradient-to-l from-[#fafaf9] via-[#fafaf9]/80 to-transparent"
        }`}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <h2
            className={`text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            From Zero to Hero in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54]">
              90 Days
            </span>
          </h2>

          <p
            className={`mt-4 text-base md:text-xl leading-relaxed ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            The exact system that&apos;s flooding calendars with qualified leads
          </p>
        </motion.div>

        {/* Infinite Marquee Container with Y-axis margin */}
        <div className="w-full overflow-hidden my-8">
          <motion.div
            className="flex gap-3 md:gap-4 w-max"
            animate={{
              x: ["0%", "-50%"], // Moves exactly half (since we duplicated the array)
            }}
            transition={{
              x: {
                duration: 35, // Slightly slower for smaller cards to read easily
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              },
            }}
            whileHover={{ animationPlayState: "paused" }} // Pauses on hover
            style={{ willChange: "transform" }}
          >
            {duplicatedSteps.map((item, index) => (
              <StepCard key={`${item.step}-${index}`} item={item} isDark={isDark} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}