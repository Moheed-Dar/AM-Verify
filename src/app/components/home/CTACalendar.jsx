"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Video, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";

const features = [
  "10 new clients in 30 days",
  "No results, no payment",
  "Done-for-you outreach",
  "48-hour onboarding"
];

export default function CTACalendar() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-[#050505]" />;
  }

  const isDark = theme === "dark";

  // Dynamic Calendar Logic
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth(); // 0-indexed
  
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // 0=Sun, 1=Mon...
  
  // Adjust so Monday is index 0 (0=Mon, 1=Tue, ..., 6=Sun)
  const startOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
  
  const monthName = today.toLocaleString('en-US', { month: 'long', year: 'numeric' });

  // Generate blank spaces for start of the month
  const blankDays = Array.from({ length: startOffset }, (_, i) => i);
  
  // Generate actual days of the month
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Helper functions for day statuses
  const isWeekend = (day) => {
    const dayOfWeek = new Date(currentYear, currentMonth, day).getDay();
    return dayOfWeek === 0 || dayOfWeek === 6; // Sunday or Saturday
  };

  // Deterministic mock availability (e.g., every 3rd or 5th weekday)
  const isAvailable = (day) => {
    if (isWeekend(day)) return false;
    return day % 3 === 0 || day % 5 === 0; 
  };

  const isSelected = (day) => {
    // Select the 4th day of the month as a default mockup selected state
    // If 4th is weekend, select 5th
    if (day === 4 && !isWeekend(4)) return true;
    if (day === 5 && isWeekend(4)) return true;
    return false;
  };

  return (
    <section
      className={`relative py-16 overflow-hidden transition-colors duration-700 ${
        isDark ? "bg-[#050505]" : "bg-[#fafaf9]"
      }`}
    >
      {/* Section Ambient Lights */}
      <div
        className={`absolute bottom-0 left-0 w-[40%] h-[400px] rounded-full blur-3xl pointer-events-none ${
          isDark ? "bg-[#a78b54]/5" : "bg-[#e1c693]/10"
        }`}
      />
      <div
        className={`absolute top-0 right-0 w-[30%] h-[300px] rounded-full blur-3xl pointer-events-none ${
          isDark ? "bg-[#a78b54]/5" : "bg-[#e1c693]/10"
        }`}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Ready to fill your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54]">
                calendar?
              </span>
            </h2>

            <p
              className={`text-sm md:text-base leading-relaxed ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Stop chasing leads. Let our system put qualified prospects directly onto your calendar, ready to buy.
            </p>

            {/* Feature List */}
            <div className="space-y-3 py-1">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div
                    className={`flex-shrink-0 p-0.5 rounded-full ${
                      isDark ? "bg-[#e1c693]/10 text-[#e1c693]" : "bg-[#a78b54]/10 text-[#a78b54]"
                    }`}
                  >
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <p
                    className={`text-sm font-medium ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden bg-gradient-to-r from-[#e1c693] to-[#a78b54] text-[#050505] hover:text-white"
              >
                <span className="relative z-10">Book Free Strategy Call</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#a78b54] to-[#e1c693] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Calendar Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div
              className={`relative w-full max-w-sm rounded-xl border backdrop-blur-xl shadow-xl overflow-hidden ${
                isDark
                  ? "bg-[#0a0a0a]/80 border-white/10 shadow-[0_0_30px_-10px_rgba(225,198,147,0.15)]"
                  : "bg-white/80 border-gray-200 shadow-[0_0_30px_-10px_rgba(167,139,84,0.15)]"
              }`}
            >
              {/* Calendar Header */}
              <div
                className={`p-4 border-b ${
                  isDark ? "border-white/10" : "border-gray-200"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    isDark ? "bg-[#e1c693] text-[#050505]" : "bg-[#a78b54] text-white"
                  }`}>
                    AS
                  </div>
                  <div>
                    <p className={`font-bold text-xs ${isDark ? "text-white" : "text-gray-900"}`}>
                      Anemesh Shema
                    </p>
                    <p className={`text-[10px] ${isDark ? "text-gray-500" : "text-gray-500"}`}>
                      Discovery Call
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Clock className={`w-3.5 h-3.5 ${isDark ? "text-gray-500" : "text-gray-400"}`} />
                    <span className={`text-xs font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>30 min</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className={`w-3.5 h-3.5 ${isDark ? "text-gray-500" : "text-gray-400"}`} />
                    <span className={`text-xs font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>Google Meet</span>
                  </div>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-sm font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                    {monthName} {/* Dynamic Month & Year */}
                  </h3>
                  <div className="flex gap-1">
                    <button className={`p-1 rounded-md ${isDark ? "hover:bg-white/10 text-gray-400" : "hover:bg-gray-100 text-gray-500"}`}>
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button className={`p-1 rounded-md ${isDark ? "hover:bg-white/10 text-gray-400" : "hover:bg-gray-100 text-gray-500"}`}>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Weekdays */}
                <div className="grid grid-cols-7 gap-1 mb-1">
                  {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
                    <div key={day} className={`text-center text-[10px] font-bold py-0.5 ${isDark ? "text-gray-600" : "text-gray-400"}`}>
                      {day}
                    </div>
                  ))}
                </div>

                {/* Dates Grid */}
                <div className="grid grid-cols-7 gap-1">
                  {/* Blank spaces for start offset */}
                  {blankDays.map((blank) => (
                    <div key={`blank-${blank}`} className="h-7"></div>
                  ))}
                  
                  {/* Dynamic Days */}
                  {daysArray.map((day) => {
                    const weekend = isWeekend(day);
                    const available = isAvailable(day);
                    const selected = isSelected(day);
                    const disabled = !available || weekend;

                    return (
                      <button
                        key={day}
                        disabled={disabled}
                        className={`relative h-7 w-full flex items-center justify-center text-xs font-medium rounded-md transition-all duration-200 ${
                          selected
                            ? "bg-gradient-to-r from-[#e1c693] to-[#a78b54] text-[#050505] shadow-md scale-110"
                            : available && !weekend
                            ? isDark
                              ? "text-white hover:bg-[#e1c693]/10 hover:text-[#e1c693]"
                              : "text-gray-800 hover:bg-[#a78b54]/10 hover:text-[#a78b54]"
                            : isDark
                            ? "text-gray-700 cursor-not-allowed"
                            : "text-gray-300 cursor-not-allowed"
                        }`}
                      >
                        {day}
                        {available && !selected && !weekend && (
                          <span className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${isDark ? "bg-[#e1c693]" : "bg-[#a78b54]"}`} />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Branding */}
              {/* <div className={`px-4 py-2 border-t flex items-center justify-between ${isDark ? "border-white/5 bg-white/5" : "border-gray-100 bg-gray-50/50"}`}>
                <p className={`text-[10px] font-medium ${isDark ? "text-gray-600" : "text-gray-400"}`}>
                  Powered by Cal.com
                </p>
                <div className={`h-3 w-12 ${isDark ? "bg-gray-700 rounded" : "bg-gray-200 rounded"}`}></div>
              </div> */}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}