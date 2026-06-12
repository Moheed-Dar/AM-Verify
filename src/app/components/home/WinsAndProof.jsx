"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Maximize2, X, TrendingUp, Users, Target, CheckCircle } from "lucide-react";
import { useTheme } from "next-themes";

const winsData = [
  {
    id: 1,
    name: "DJ Ford",
    niche: "Real Estate & Property Scaling",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    challenge: "Struggled to maintain a consistent pipeline of qualified buyers and was relying heavily on slow referral systems.",
    solution: "Implemented targeted ad campaigns and an automated follow-up system to nurture cold leads instantly.",
    results: [
      { metric: "$40K/mo", label: "Revenue Scale" },
      { metric: "3x", label: "ROAS" }
    ]
  },
  {
    id: 2,
    name: "Nathaniel Carrassco",
    niche: "B2B Consulting",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    challenge: "Spending 15+ hours a week on manual outreach with less than a 2% response rate from potential corporate clients.",
    solution: "Deployed an AI-integrated email sequencing system with dynamic personalization and booking links.",
    results: [
      { metric: "32", label: "New Clients" },
      { metric: "85%", label: "Time Saved" }
    ]
  },
  {
    id: 3,
    name: "Taylor Moses",
    niche: "Fitness & Online Coaching",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    challenge: "High ticket drop-offs and low show-up rates for consultation calls due to lack of trust and immediate engagement.",
    solution: "Integrated a 24/7 automated SMS follow-up and a value-driven video nurture sequence before calls.",
    results: [
      { metric: "150+", label: "Leads/Month" },
      { metric: "68%", label: "Show-up Rate" }
    ]
  },
  {
    id: 4,
    name: "Aron Morua",
    niche: "Digital Agency Growth",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    challenge: "Fluctuating monthly revenue and inability to scale operations past the $20K/mo plateau without working 80-hour weeks.",
    solution: "Built an automated lead qualification and distribution system, allowing the team to focus purely on high-value closing.",
    results: [
      { metric: "$100K", label: "In 90 Days" },
      { metric: "4x", label: "Team Output" }
    ]
  }
];

// Fullscreen Lightbox Component
function FullscreenLightbox({ imageUrl, name, isDark, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-300 hover:scale-110 cursor-pointer"
        aria-label="Close fullscreen"
      >
        <X className="w-6 h-6" />
      </button>

      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-[95vw] max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt={name}
          className="max-w-full max-h-[82vh] object-contain rounded-2xl shadow-2xl"
        />
        <p className="mt-4 text-white/80 text-sm font-medium text-center tracking-wide">
          {name}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function WinsAndProof() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCloseFullscreen = useCallback(() => {
    setFullscreenImage(null);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-[#050505]" />;
  }

  const isDark = theme === "dark";

  return (
    <section
      className={`relative pt-24 overflow-hidden transition-colors duration-700 ${
        isDark ? "bg-[#050505]" : "bg-[#fafaf9]"
      }`}
    >
      {/* Ambient Light */}
      <div
        className={`absolute top-0 right-0 w-[50%] h-[600px] rounded-full blur-3xl pointer-events-none ${
          isDark ? "bg-[#a78b54]/5" : "bg-[#e1c693]/10"
        }`}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-sm mb-6 transition-colors duration-300 ${
              isDark
                ? "border-[#e1c693]/20 bg-[#e1c693]/5"
                : "border-[#a78b54]/20 bg-[#a78b54]/5"
            }`}
          >
            <Trophy
              className={`w-4 h-4 ${isDark ? "text-[#e1c693]" : "text-[#a78b54]"}`}
            />
            <span
              className={`text-xs font-bold uppercase tracking-widest ${
                isDark ? "text-[#e1c693]" : "text-[#a78b54]"
              }`}
            >
              Client Success
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            More Wins. More{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54]">
              Proof.
            </span>
          </h2>

          <p
            className={`mt-6 text-lg md:text-xl leading-relaxed ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Real people, real businesses, and real transformations.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {winsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className={`flex flex-col rounded-2xl border overflow-hidden transition-colors duration-500 ${
                isDark
                  ? "bg-[#0a0a0a] border-white/10 hover:border-[#e1c693]/30"
                  : "bg-white border-gray-200 hover:border-[#a78b54]/50"
              } hover:shadow-2xl group`}
            >
              
              {/* Image Section with Stylish Border */}
              <div className="relative p-3">
                {/* Stylish Gradient Border Wrapper */}
                <div className="p-[2px] rounded-2xl bg-gradient-to-br from-[#e1c693] via-[#a78b54] to-[#e1c693] transition-all duration-500 group-hover:p-[3px]">
                  <div className={`relative rounded-[14px] overflow-hidden ${isDark ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 cursor-pointer"
                        onClick={() =>
                          setFullscreenImage({
                            url: item.imageUrl,
                            name: item.name,
                          })
                        }
                      />
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Hover Fullscreen Button */}
                      <button
                        onClick={() =>
                          setFullscreenImage({
                            url: item.imageUrl,
                            name: item.name,
                          })
                        }
                        className="absolute top-3 right-3 z-20 p-2 rounded-xl border backdrop-blur-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 cursor-pointer bg-black/50 border-white/20 text-white hover:bg-[#e1c693]/20 hover:border-[#e1c693]/50 hover:text-[#e1c693]"
                        aria-label="View fullscreen"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>

                      {/* Floating Name & Niche */}
                      <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold ${
                          isDark ? 'bg-[#e1c693] border-[#0a0a0a] text-[#0a0a0a]' : 'bg-[#a78b54] border-white text-white'
                        }`}>
                          {item.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-white font-bold text-sm tracking-tight">{item.name}</p>
                          <p className="text-white/70 text-xs">{item.niche}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content Section */}
              <div className="px-6 pb-6 space-y-4 flex-1 flex flex-col">
                
                <div className="space-y-3 flex-1">
                  {/* Challenge */}
                  <div className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span className={`font-bold ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>Challenge: </span>
                    {item.challenge}
                  </div>
                  
                  {/* Solution */}
                  <div className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <span className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54]`}>Solution: </span>
                    {item.solution}
                  </div>
                </div>

                {/* Results Section */}
                <div className={`mt-auto pt-4 border-t grid grid-cols-2 gap-4 ${
                  isDark ? 'border-white/10' : 'border-gray-200'
                }`}>
                  {item.results.map((res, i) => (
                    <div key={i} className="text-center">
                      <p className={`text-xl md:text-2xl font-extrabold tracking-tight ${
                        isDark ? 'text-[#e1c693]' : 'text-[#a78b54]'
                      }`}>
                        {res.metric}
                      </p>
                      <p className={`text-xs font-semibold uppercase tracking-wider mt-1 ${
                        isDark ? 'text-gray-500' : 'text-gray-500'
                      }`}>
                        {res.label}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {fullscreenImage && (
          <FullscreenLightbox
            imageUrl={fullscreenImage.url}
            name={fullscreenImage.name}
            isDark={isDark}
            onClose={handleCloseFullscreen}
          />
        )}
      </AnimatePresence>
    </section>
  );
}