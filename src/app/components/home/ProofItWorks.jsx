"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Trophy, TrendingUp, Users, Zap, Maximize2, X } from "lucide-react";
import { useTheme } from "next-themes";

const proofData = [
  {
    id: 1,
    badgeShort: "Daily Bookings",
    badgeLong: "Consistent Appointments Booked",
    title: "Consistent Appointments Booked",
    quote:
      "Thank you for your hard work. I do have some additional appointment slots available on Tuesday, March 10 to fill up if you can work to fill those up that would be great.",
    caption: "Real client message · Appointments filling up",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop",
  },
  {
    id: 2,
    badgeShort: "$1K Deposit",
    badgeLong: "First Client Converted — $1,000 Deposit",
    title: "First Client Converted — $1,000 Deposit",
    quote:
      "Hey guys, I did convert my first client Jimmy yesterday and he paid his $1000 deposit. This was a lead that I called about a month ago.",
    caption: "First client converted · $1,000 deposit collected",
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2031&auto=format&fit=crop",
  },
  {
    id: 3,
    badgeShort: "$2K/mo Deal",
    badgeLong: "First-Week Deal Closed",
    title: "First-Week Deal Closed",
    quote:
      "I drove 3 hours to go see a lead you guys gave me the first week and closed him on 2K a month. And he said I was cheap.",
    caption: "Nathaniel · Closed $2K/month in week one",
    imageUrl:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    badgeShort: "Overflow",
    badgeLong: "Lead Overflow",
    title: "Lead Overflow",
    quote:
      "There are many that replied yesterday that have not been called yet please give them a call. Our setter could not keep up.",
    caption: "Too many leads to handle · Setter overwhelmed",
    imageUrl:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 5,
    badgeShort: "9 Appointments",
    badgeLong: "9 Appointments Set with Plumbers",
    title: "9 Appointments Set with Plumbers",
    quote:
      "9 appointments set with plumbers that were interested in getting Google Ads — all booked through outbound outreach.",
    caption: "9 appointments booked · Google Ads leads",
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    badgeShort: "8 Demos",
    badgeLong: "8 Demos Booked in a Week",
    title: "8 Demos Booked in a Week",
    quote:
      "8 demos set with leads interested in getting local service ads. Back-to-back intro calls filling every available time slot.",
    caption: "8 demos set · Local service ads leads",
    imageUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 7,
    badgeShort: "4 Demos Wk 1",
    badgeLong: "4 Demos Booked First Week",
    title: "4 Demos Booked First Week",
    quote:
      "4 booked demos in the first week with concrete companies interested in getting an AI caller. Calendar filling up fast.",
    caption: "4 demos · Concrete companies · AI caller interest",
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 8,
    badgeShort: "$1K/mo Recurring",
    badgeLong: "$1K/Month Deal Closed Already",
    title: "$1K/Month Deal Closed Already",
    quote: "Pretty good g been a bit slow past two days but closed a $1k/m deal already 💪",
    caption: "Griffin · SaaS Owner",
    imageUrl:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 9,
    badgeShort: "5 Booked, 1 Sold",
    badgeLong: "5 Booked in a Day, 1 Sold Same Day",
    title: "5 Booked in a Day, 1 Sold Same Day",
    quote: "5 so far today booked, 3 have ran, 1 sold out of the 3. $750 up front, 20% of jobs sold.",
    caption: "Ross Price · Same-day close",
    imageUrl:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop",
  },
];

function FullscreenLightbox({ imageUrl, title, isDark, onClose }) {
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
          alt={title}
          className="max-w-full max-h-[82vh] object-contain rounded-2xl shadow-2xl"
        />
        <p className="mt-4 text-white/80 text-sm font-medium text-center tracking-wide">
          {title}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function ProofItWorks() {
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
      className={`relative py-24 overflow-hidden transition-colors duration-700 ${
        isDark ? "bg-[#050505]" : "bg-[#fafaf9]"
      }`}
    >
      <div
        className={`absolute bottom-0 left-0 w-[60%] h-[600px] rounded-full blur-3xl pointer-events-none ${
          isDark ? "bg-[#a78b54]/5" : "bg-[#e1c693]/10"
        }`}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-3xl mx-auto"
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
              Proven Results
            </span>
          </div>

          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Proof That It{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54]">
              Works
            </span>
          </h2>

          <p
            className={`mt-6 text-lg md:text-xl leading-relaxed ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Real client messages. Real results. No edits, no filters.
          </p>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {proofData.map((item, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-10 lg:gap-16 items-center`}
              >
                <div className="w-full lg:w-1/2 relative group">
                  <div
                    className={`absolute -inset-4 rounded-2xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none ${
                      isDark ? "bg-[#e1c693]/10" : "bg-[#e1c693]/20"
                    }`}
                  />

                  <div
                    className={`relative overflow-hidden rounded-2xl border transition-all duration-500 shadow-xl group-hover:shadow-2xl ${
                      isDark
                        ? "border-white/10 bg-[#0a0a0a]"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      <button
                        onClick={() =>
                          setFullscreenImage({
                            url: item.imageUrl,
                            title: item.title,
                          })
                        }
                        className={`absolute top-3 right-3 z-20 p-2.5 rounded-xl border backdrop-blur-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 cursor-pointer ${
                          isDark
                            ? "bg-[#0a0a0a]/70 border-white/20 text-white hover:bg-[#e1c693]/20 hover:border-[#e1c693]/50 hover:text-[#e1c693]"
                            : "bg-white/80 border-gray-300 text-gray-700 hover:bg-[#a78b54]/10 hover:border-[#a78b54]/50 hover:text-[#a78b54]"
                        }`}
                        aria-label="View fullscreen"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>

                      <span
                        className={`absolute top-3 right-14 z-20 text-[10px] font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 delay-75 px-2 py-1 rounded-md ${
                          isDark
                            ? "text-white/60 bg-black/40 backdrop-blur-sm"
                            : "text-gray-600 bg-white/60 backdrop-blur-sm"
                        }`}
                      >
                        Fullscreen
                      </span>
                    </div>

                    <div
                      className={`absolute bottom-4 left-4 px-4 py-2 rounded-lg backdrop-blur-md border ${
                        isDark
                          ? "bg-[#0a0a0a]/80 border-[#e1c693]/30 text-[#e1c693]"
                          : "bg-white/90 border-[#a78b54]/30 text-[#a78b54]"
                      }`}
                    >
                      <p className="text-sm md:text-base font-extrabold tracking-tight">
                        {item.badgeShort}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-5">
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border ${
                      isDark
                        ? "border-[#e1c693]/20 bg-[#e1c693]/5 text-[#e1c693]"
                        : "border-[#a78b54]/20 bg-[#a78b54]/5 text-[#a78b54]"
                    }`}
                  >
                    <Zap className="w-3 h-3" />
                    {item.badgeLong}
                  </div>

                  <h3
                    className={`text-2xl md:text-3xl font-bold leading-tight tracking-tight ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <div className="relative pl-6 border-l-2 border-[#e1c693]/50">
                    <Quote
                      className={`absolute -left-4 -top-2 w-8 h-8 ${
                        isDark ? "text-[#050505]" : "text-[#fafaf9]"
                      } fill-current`}
                    />
                    <p
                      className={`text-base md:text-lg leading-relaxed italic ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-2 text-gray-500">
                    <div
                      className={`h-px w-8 ${
                        isDark ? "bg-gray-700" : "bg-gray-300"
                      }`}
                    ></div>
                    <p className="text-sm font-medium">{item.caption}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {fullscreenImage && (
          <FullscreenLightbox
            imageUrl={fullscreenImage.url}
            title={fullscreenImage.title}
            isDark={isDark}
            onClose={handleCloseFullscreen}
          />
        )}
      </AnimatePresence>
    </section>
  );
}