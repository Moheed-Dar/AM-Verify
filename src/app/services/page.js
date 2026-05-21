"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  MessageSquare,
  Star,
  TrendingUp,
} from "lucide-react";
import { useTheme } from "next-themes";

// ──────────────── CUSTOM HIGH-QUALITY SVG ICONS (Features) ────────────────
const PremiumIcons = {
  Automation: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" />
      <path d="M9 22h6" />
      <path d="M10 18v2" />
      <path d="M14 18v2" />
      <path d="M12 6v4" />
      <path d="M9 9h6" />
      <path d="M19.5 9.5l2-2" />
      <path d="M2.5 9.5l2-2" />
    </svg>
  ),
  GlobalApp: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
      <path d="M8 6h8" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 14v2" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
    </svg>
  ),
  Analytics: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
      <path d="M13 14l2 2 4-4" />
    </svg>
  ),
};

// ──────────────── DATA ────────────────
const features = [
  {
    IconComponent: PremiumIcons.Automation,
    title: "Power of Automation",
    description:
      "Powered by smart AI, our CRM delivers a personalized, high-quality experience that sets your business apart. From Facebook, Instagram, TikTok, LinkedIn, and WhatsApp Business to calls and text inquiries, every interaction is captured, tracked, and responded to automatically.",
    gradient: "from-purple-500/10 to-pink-500/10",
    gradientLight: "from-purple-500/5 to-pink-500/5",
    integrations: ["Facebook", "Instagram", "TikTok", "LinkedIn", "WhatsApp"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    IconComponent: PremiumIcons.GlobalApp,
    title: "Your Business Anywhere",
    description:
      "Whether you're on the go or in the field, your business stays active 24/7. No missed messages. No missed calls. No missed opportunities, just a fully automated system designed to help you close more deals and scale with confidence.",
    gradient: "from-blue-500/10 to-cyan-500/10",
    gradientLight: "from-blue-500/5 to-cyan-500/5",
    integrations: [],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
  },
  {
    IconComponent: PremiumIcons.Analytics,
    title: "Track the Performance",
    description:
      "Unlike other CRMs, we're all about categorizing your business data and communications into meaningful and easily comprehensible charts and tables. We won't leave you guessing.",
    gradient: "from-emerald-500/10 to-green-500/10",
    gradientLight: "from-emerald-500/5 to-green-500/5",
    integrations: [],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
];

const testimonials = [
  {
    name: "Anna Jenkins",
    role: "Marketing Director",
    quote:
      "I've used a handful of CRMs on the market, and found that most have a hard time syncing my various social media accounts real-time, leaving me missing important notifications sometimes for days. Flashteck CRM solution was a pleasant surprise! The team has really worked hard to ensure instant synchronization with most of the mainstream apps. Impressed!",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/nH1KtW4ZecVWmxO2/client_1-YbN5DPpnlMHbBOlN.png",
  },
  {
    name: "Danny Lores",
    role: "Field Contractor",
    quote:
      "I am a roofer who spends most of his time in the field, I like using Flashteck CRM services since it helps me organize my clients data and appointments into meaningful charts and tables. That's why I've been able to focus more on the actual work rather than worrying about missing calls, text messages or emails. I found it to be a great tool to increase productivity.",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/nH1KtW4ZecVWmxO2/client_2-Y4LgEjNy3VikGNOb.png",
  },
];

// ──────────────── STATS DATA ────────────────
const stats = [
  {
    value: 140,
    suffix: "+",
    label: "Agencies Onboard",
    description: "Trusted by growing agencies worldwide",
    gradient: "from-violet-500/20 to-fuchsia-500/20",
    accentBg: "from-violet-500 to-fuchsia-500",
    glowColor: "rgba(139, 92, 246, 0.15)",
    glowColorLight: "rgba(139, 92, 246, 0.06)",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop",
  },
  {
    value: 230,
    suffix: "K",
    label: "Leads Managed",
    description: "Leads captured and nurtured automatically",
    gradient: "from-amber-500/20 to-orange-500/20",
    accentBg: "from-amber-500 to-orange-500",
    glowColor: "rgba(245, 158, 11, 0.15)",
    glowColorLight: "rgba(245, 158, 11, 0.06)",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop",
  },
  {
    value: 97.3,
    suffix: "%",
    label: "Positive Feedback",
    description: "Client satisfaction that speaks for itself",
    gradient: "from-emerald-500/20 to-teal-500/20",
    accentBg: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.15)",
    glowColorLight: "rgba(16, 185, 129, 0.06)",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=400&auto=format&fit=crop",
  },
];

// ──────────────── ANIMATED COUNTER COMPONENT ────────────────
function AnimatedCounter({ value, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const isDecimal = value % 1 !== 0;
    const startTime = Date.now();

    const tick = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Ease-out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;

      setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(tick);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      <span className="text-[#e1c693]">{suffix}</span>
    </span>
  );
}

// ──────────────── ANIMATIONS ────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const statCardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function ServicesPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render theme-dependent styles until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#050505] transition-colors duration-500" />
    );
  }

  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen transition-colors duration-500 overflow-x-hidden ${
        isDark ? "bg-[#050505] text-gray-200" : "bg-[#f8f9fa] text-slate-800"
      }`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet" />

      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.04] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(225,198,147,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(225,198,147,0.4) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Background Ambient Effects */}
      <div className={`fixed inset-0 z-0 ${isDark ? "bg-[radial-gradient(ellipse_at_top_right,_rgba(225,198,147,0.08)_0%,_transparent_50%)]" : "bg-[radial-gradient(ellipse_at_top_right,_rgba(225,198,147,0.1)_0%,_transparent_50%)]"}`} />
      <div className={`fixed inset-0 z-0 ${isDark ? "bg-[radial-gradient(ellipse_at_bottom_left,_rgba(225,198,147,0.05)_0%,_transparent_50%)]" : "bg-[radial-gradient(ellipse_at_bottom_left,_rgba(225,198,147,0.05)_0%,_transparent_50%)]"}`} />

      <div className="relative z-10 pt-28 md:pt-36 pb-20">

        {/* ═══════════════════ HERO SECTION ═══════════════════ */}
        <section className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
          <div className={`absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none ${
            isDark ? "bg-[#e1c693]/5" : "bg-[#e1c693]/10"
          }`} />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className={`inline-flex items-center gap-2 px-5 py-2 border border-[#e1c693]/30 rounded-full backdrop-blur-sm ${
              isDark ? "bg-[#e1c693]/5" : "bg-[#e1c693]/5"
            }`}>
              <Sparkles className="w-4 h-4 text-[#e1c693]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e1c693]">
                Get Started
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tighter mb-6 ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              Unprecedented and Exponential{" "}
              <span
                className="italic text-transparent bg-clip-text bg-gradient-to-r md:p-5 from-[#e1c693] to-[#a78b54]"
              >
                GROWTH
              </span>
            </h1>
            <p className={`max-w-3xl mx-auto text-lg md:text-xl leading-relaxed ${
              isDark ? "text-gray-400" : "text-slate-500"
            }`}>
              Streamline your client connections. Manage calls, texts, and emails effortlessly with smart AI-based CRM solutions.
            </p>
          </motion.div>
        </section>

        {/* ═══════════════════ COMPACT PREMIUM FEATURES GRID ═══════════════════ */}
        <section className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-20 md:pb-28 space-y-8 md:space-y-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {features.map((feature, index) => {
              const FeatureIcon = feature.IconComponent;
              const isReversed = index % 2 !== 0;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative cursor-pointer"
                >
                  <div className={`relative flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-10 p-5 md:p-8 rounded-2xl border transition-all duration-500 overflow-hidden shadow-sm backdrop-blur-sm ${
                    isDark 
                      ? "border-white/5 hover:border-[#e1c693]/30 bg-[#0a0a0a]/50 dark:shadow-none" 
                      : "border-slate-200 hover:border-[#e1c693]/30 bg-white/80 shadow-sm"
                  }`}>
                    
                    <div className={`absolute top-0 ${isReversed ? 'left-0' : 'right-0'} w-1/2 h-full bg-gradient-to-br ${feature.gradientLight} ${isDark ? feature.gradient : ""} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[80px] pointer-events-none`} />

                    <div className="relative z-10 md:w-1/2 flex flex-col justify-center py-2">
                      <div className={`absolute -top-8 -left-2 text-[100px] font-black pointer-events-none select-none transition-colors duration-500 ${
                        isDark ? "text-white/[0.02] group-hover:text-[#e1c693]/[0.03]" : "text-slate-900/[0.02] group-hover:text-[#e1c693]/[0.03]"
                      }`}>
                        0{index + 1}
                      </div>

                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#e1c693] to-[#a78b54] flex items-center justify-center mb-6 shadow-lg shadow-[#e1c693]/20 group-hover:scale-110 transition-transform duration-300 text-white dark:text-[#050505]">
                        <FeatureIcon />
                      </div>

                      <h3 className={`font-bold text-2xl md:text-3xl mb-4 leading-tight group-hover:text-[#e1c693] transition-colors duration-300 ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}>
                        {feature.title}
                      </h3>

                      <p className={`text-base leading-relaxed mb-6 ${
                        isDark ? "text-gray-400" : "text-slate-500"
                      }`}>
                        {feature.description}
                      </p>

                      {feature.integrations.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {feature.integrations.map((app, i) => (
                            <span
                              key={i}
                              className={`px-3 py-1.5 border rounded-lg text-xs font-semibold tracking-wide transition-colors ${
                                isDark 
                                  ? "bg-white/5 border-white/10 text-gray-400 group-hover:border-[#e1c693]/30 group-hover:text-[#e1c693]" 
                                  : "bg-slate-100 border-slate-200 text-slate-600 group-hover:border-[#e1c693]/30 group-hover:text-[#e1c693]"
                              }`}
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="relative z-10 md:w-1/2">
                      <div className={`relative h-56 md:h-[320px] rounded-2xl overflow-hidden border shadow-xl transition-all duration-500 ${
                        isDark 
                          ? "border-white/5 group-hover:border-[#e1c693]/20 dark:shadow-2xl dark:shadow-black/50" 
                          : "border-slate-200 group-hover:border-[#e1c693]/20 shadow-xl"
                      }`}>
                        <img 
                          src={feature.image} 
                          alt={feature.title} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? "from-[#050505] via-transparent to-transparent" : "from-white via-transparent to-transparent"} opacity-60 group-hover:opacity-30 transition-opacity duration-500`} />
                        
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#e1c693]/20 backdrop-blur-md border border-[#e1c693]/50 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                          <ArrowRight className="w-6 h-6 text-[#e1c693]" />
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* ═══════════════════ PREMIUM TESTIMONIALS SECTION ═══════════════════ */}
        <section className={`relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 border-t ${
          isDark ? "border-white/5" : "border-slate-200"
        }`}>
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px] pointer-events-none ${
            isDark ? "bg-[#e1c693]/[0.02]" : "bg-[#e1c693]/[0.02]"
          }`} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 border border-[#e1c693]/30 rounded-full bg-[#e1c693]/5 backdrop-blur-sm mb-6">
              <MessageSquare className="w-4 h-4 text-[#e1c693]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e1c693]">
                Testimonials
              </span>
            </div>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black mb-4 ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              What do they{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54]">
                say?
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative cursor-pointer"
              >
                <div className={`relative flex flex-col md:flex-row gap-6 md:gap-10 p-6 md:p-10 rounded-2xl border transition-all duration-500 overflow-hidden shadow-sm backdrop-blur-xl ${
                  isDark 
                    ? "border-white/5 hover:border-[#e1c693]/20 bg-[#0a0a0a]/40 dark:shadow-none" 
                    : "border-slate-200 hover:border-[#e1c693]/20 bg-white/90 shadow-sm"
                }`}>
                  
                  <div className={`absolute -top-4 -right-2 text-[160px] font-bold pointer-events-none select-none leading-none transition-colors duration-500 ${
                    isDark ? "text-white/[0.02] group-hover:text-[#e1c693]/[0.04]" : "text-slate-900/[0.02] group-hover:text-[#e1c693]/[0.04]"
                  }`}>
                    "
                  </div>

                  <div className="relative z-10 flex flex-row md:flex-col items-center md:items-start gap-4 md:w-1/4">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#e1c693] to-[#a78b54] rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="relative w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-[#e1c693]/50 group-hover:border-[#e1c693] transition-colors duration-300" 
                      />
                    </div>
                    <div className="flex flex-col">
                      <h4 className={`font-bold text-lg ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}>{testimonial.name}</h4>
                      <p className="text-[#e1c693] text-xs font-semibold uppercase tracking-wider mt-0.5">{testimonial.role}</p>
                      
                      <div className="flex gap-0.5 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 text-[#e1c693] fill-[#e1c693]" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 md:w-3/4 flex items-center">
                    <p className={`text-base md:text-lg leading-relaxed font-light italic ${
                      isDark ? "text-gray-300" : "text-slate-600"
                    }`}>
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ═══════════════════ STATS / NUMBERS SECTION ═══════════════════ */}
        <section className={`relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 border-t ${
          isDark ? "border-white/5" : "border-slate-200"
        }`}>
          
          {/* Ambient Background Glows */}
          <div className={`absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none ${
            isDark ? "bg-purple-500/[0.04]" : "bg-purple-500/[0.02]"
          }`} />
          <div className={`absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[160px] pointer-events-none ${
            isDark ? "bg-[#e1c693]/[0.04]" : "bg-[#e1c693]/[0.02]"
          }`} />

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 border border-[#e1c693]/30 rounded-full bg-[#e1c693]/5 backdrop-blur-sm mb-6">
              <TrendingUp className="w-4 h-4 text-[#e1c693]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e1c693]">
                By The Numbers
              </span>
            </div>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black mb-4 ${
              isDark ? "text-white" : "text-slate-900"
            }`}>
              Results That{" "}
              <span
                
                className="italic text-transparent bg-clip-text bg-gradient-to-r md:pe-5 from-[#e1c693] to-[#a78b54]"
              >
                Speak
              </span>
            </h2>
            <p className={`max-w-2xl mx-auto text-lg leading-relaxed ${
              isDark ? "text-gray-400" : "text-slate-500"
            }`}>
              Real impact. Real growth. Here&apos;s what our platform delivers every single day.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {stats.map((stat, index) => {
              return (
                <motion.div
                  key={index}
                  variants={statCardVariants}
                  className="group relative cursor-pointer"
                >
                  <div className={`relative p-8 md:p-10 rounded-3xl border transition-all duration-700 overflow-hidden h-full flex flex-col items-center text-center shadow-sm backdrop-blur-xl ${
                    isDark 
                      ? "border-white/5 hover:border-white/10 bg-[#0a0a0a]/60 dark:shadow-none" 
                      : "border-slate-200 hover:border-slate-300 bg-white shadow-sm"
                  }`}>
                    
                    {/* Top Accent Line */}
                    <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${stat.accentBg} opacity-30 group-hover:opacity-70 transition-opacity duration-500`} />

                    {/* Hover Glow Behind Card */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${
                        isDark ? "hidden" : ""
                      }`}
                      style={{
                        background: `radial-gradient(ellipse at center, ${stat.glowColorLight} 0%, transparent 70%)`,
                      }}
                    />
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${
                        isDark ? "block" : "hidden"
                      }`}
                      style={{
                        background: `radial-gradient(ellipse at center, ${stat.glowColor} 0%, transparent 70%)`,
                      }}
                    />

                    {/* Decorative Corner Arc */}
                    <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full border transition-colors duration-500 pointer-events-none ${
                      isDark 
                        ? "border-white/[0.03] group-hover:border-white/[0.06]" 
                        : "border-slate-200/[0.03] group-hover:border-slate-300/[0.06]"
                    }`} />
                    <div className={`absolute -bottom-16 -left-16 w-32 h-32 rounded-full border transition-colors duration-500 pointer-events-none ${
                      isDark 
                        ? "border-white/[0.02] group-hover:border-white/[0.05]" 
                        : "border-slate-200/[0.02] group-hover:border-slate-300/[0.05]"
                    }`} />

                    {/* IMAGE CONTAINER */}
                    <div className={`relative w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden border shadow-xl mb-6 transition-all duration-500 ${
                      isDark 
                        ? "border-white/10 group-hover:border-white/20" 
                        : "border-slate-200 group-hover:border-slate-300"
                    }`}>
                      <img 
                        src={stat.image} 
                        alt={stat.label} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                      />
                      {/* Image Overlay Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ${
                        isDark 
                          ? "from-[#050505] via-transparent to-transparent opacity-50 group-hover:opacity-20" 
                          : "from-white via-transparent to-transparent opacity-50 group-hover:opacity-20"
                      }`} />
                      
                      {/* Floating Badge on Image */}
                      <div className={`absolute bottom-2 right-2 w-8 h-8 rounded-lg bg-gradient-to-br ${stat.accentBg} flex items-center justify-center shadow-md scale-0 group-hover:scale-100 transition-transform duration-500 delay-100`}>
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Animated Number */}
                    <div className="relative mb-3">
                      <span className={`text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}>
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </span>
                    </div>

                    {/* Label */}
                    <h4 className={`font-bold text-lg md:text-xl mb-2 group-hover:text-[#e1c693] transition-colors duration-300 ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}>
                      {stat.label}
                    </h4>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed max-w-[240px] ${
                      isDark ? "text-gray-500" : "text-slate-500"
                    }`}>
                      {stat.description}
                    </p>

                    {/* Bottom Decorative Dots */}
                    <div className="flex gap-1.5 mt-6">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${stat.accentBg} opacity-40`} />
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${stat.accentBg} opacity-25`} />
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${stat.accentBg} opacity-10`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom Decorative Divider Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-16 md:mt-20 h-px bg-gradient-to-r from-transparent via-[#e1c693]/20 to-transparent origin-center"
          />
        </section>

      </div>
    </div>
  );
}