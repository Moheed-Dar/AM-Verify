"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { ArrowLeft, ArrowRight, Quote, Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "- Anna Jenkins",
    role: "CEO Of Company",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/nH1KtW4ZecVWmxO2/client_1-YbN5DPpnlMHbBOlN.png",
    rating: 5,
    text: "I've used a handful of CRMs on the market, and found that most have a hard time syncing my various social media accounts real-time, leaving me missing important notifications sometimes for days. Flashteck CRM solution was a pleasant surprise! The team has really worked hard to ensure instant synchronization with most of the mainstream apps. Impressed! ",
  },
  {
    name: "- Danny Lores",
    role: "CEO Of Company",
    image: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/nH1KtW4ZecVWmxO2/client_2-Y4LgEjNy3VikGNOb.png",
    rating: 5,
    text: "I am a roofer who spends most of his time in the field, I like using Flashteck CRM services since it helps me organize my clients data and appointments into meaningful charts and tables. That's why I've been able to focus more on the actual work rather than worrying about missing calls, text messages or emails. I found it to be a great tool to increase productivity.",
  },
  {
    name: "Marcus Thorne",
    role: "Director of Operations",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop&crop=face",
    rating: 5,
    text: "The analytics dashboard is a game-changer. Before Flashteck, we were flying blind with our lead data. Now, we can track every metric in real-time, identify bottlenecks, and optimize our sales funnel on the fly. It's incredibly intuitive and has boosted our conversion rates significantly.",
  },
  {
    name: "Elena Rostova",
    role: "Customer Success Manager",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=1000&fit=crop&crop=face",
    rating: 5,
    text: "What sets Flashteck apart isn't just the software, but the onboarding experience. Their support team helped us migrate our entire database seamlessly. The automated follow-ups have saved my team hours of manual work every week, allowing us to focus on actually serving our clients.",
  },
  {
    name: "James Liang",
    role: "E-commerce Founder",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1000&fit=crop&crop=face",
    rating: 5,
    text: "Running an online store means dealing with customer queries across multiple platforms. Flashteck unified our inbox across email, social, and WhatsApp. Response times dropped by 50%, and we never miss a sales lead. It's exactly what a growing e-commerce business needs.",
  },
  {
    name: "Sofia Martinez",
    role: "Senior Real Estate Agent",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1000&fit=crop&crop=face",
    rating: 5,
    text: "In real estate, timing is everything. Being able to manage calls, texts, and emails from one app while out in the field is invaluable. Flashteck's mobile-friendly CRM ensures I never miss a follow-up with a potential buyer. It's completely transformed how I manage my property listings.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonials[currentIndex];
  
  const currentTheme = !mounted ? "dark" : (theme === "system" ? systemTheme : theme);
  const isDark = currentTheme === "dark";

  // Don't render theme-dependent styles until mounted
  if (!mounted) {
    return (
      <section className="relative overflow-hidden pt-10 md:py-24 transition-colors duration-500 bg-[#050505]">
        <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-12 w-full">
          <div className="mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#e1c693]/30 rounded-full bg-[#e1c693]/5 mb-4 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#e1c693]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e1c693]">Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white">
              What Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54]">
                Clients Say
              </span>
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`relative overflow-hidden py-16 md:py-24 transition-colors duration-500 ${
        isDark ? "bg-[#050505]" : "bg-[#f8f9fa]"
      }`}
      suppressHydrationWarning
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_left,_rgba(225,198,147,0.08)_0%,_transparent_50%)]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-12 w-full">
        
        {/* Header - REDUCED BOTTOM MARGIN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#e1c693]/30 rounded-full bg-[#e1c693]/5 mb-4 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#e1c693]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e1c693]">Testimonials</span>
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tight transition-colors duration-500 ${
            isDark ? "text-white" : "text-gray-900"
          }`}>
            What Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54]">
              Clients Say
            </span>
          </h2>
        </motion.div>

        {/* Main Content: 60/40 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          
          {/* Left Side: Content (Takes 3 columns = 60%) */}
          <div className="relative order-2 lg:order-1 lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {/* Large Quote Icon */}
                <div className="text-[#e1c693]/20 mb-3">
                  <Quote className="w-8 h-8" />
                </div>

                {/* Testimonial Text - Tighter Margins */}
                <p 
                  className={`text-lg md:text-xl font-light leading-relaxed mb-6 tracking-tight transition-colors duration-500 ${
                    isDark ? "text-gray-200" : "text-gray-800"
                  }`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {currentTestimonial.text}
                </p>

                {/* Rating & Author Info */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full overflow-hidden border-2 border-[#e1c693] shadow-[0_0_15px_rgba(225,198,147,0.2)] lg:hidden ${
                    isDark ? "" : "shadow-md"
                  }`}>
                    <img src={currentTestimonial.image} alt={currentTestimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="flex gap-1 mb-1">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 text-[#e1c693]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <h4 className={`text-base font-bold tracking-tight transition-colors duration-500 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}>
                      {currentTestimonial.name}
                    </h4>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center gap-3 mt-8">
              <button
                onClick={goToPrev}
                className={`group w-10 h-10 cursor-pointer rounded-full border flex items-center justify-center transition-all duration-300 ${
                  isDark 
                    ? "border-white/10 text-gray-400 hover:bg-[#e1c693]/10 hover:border-[#e1c693]/50 hover:text-[#e1c693]" 
                    : "border-gray-300 text-gray-600 hover:bg-[#e1c693]/10 hover:border-[#e1c693]/50 hover:text-[#e1c693]"
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={goToNext}
                className={`group w-10 h-10 cursor-pointer rounded-full border flex items-center justify-center transition-all duration-300 ${
                  isDark 
                    ? "border-white/10 text-gray-400 hover:bg-[#e1c693]/10 hover:border-[#e1c693]/50 hover:text-[#e1c693]" 
                    : "border-gray-300 text-gray-600 hover:bg-[#e1c693]/10 hover:border-[#e1c693]/50 hover:text-[#e1c693]"
                }`}
              >
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Counter */}
              <div className={`ml-1 text-xs font-bold tracking-widest transition-colors duration-500 ${
                isDark ? "text-gray-500" : "text-gray-600"
              }`}>
                <span className="text-[#e1c693]">0{currentIndex + 1}</span> / 0{testimonials.length}
              </div>
            </div>
          </div>

          {/* Right Side: Image (Takes 2 columns = 40%) */}
          <div className="relative order-1 lg:order-2 lg:col-span-2 hidden lg:block">
            <div className="relative w-full max-w-[340px] mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`relative aspect-[4/5] rounded-2xl overflow-hidden ${
                    isDark ? "border border-white/5" : "border border-gray-200 shadow-lg"
                  }`}
                >
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradients */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    isDark ? "from-[#050505] via-transparent to-transparent" : "from-[#f8f9fa] via-transparent to-transparent"
                  }`}></div>
                  <div className={`absolute inset-0 bg-gradient-to-l ${
                    isDark ? "from-transparent to-[#050505]/40" : "from-transparent to-[#f8f9fa]/40"
                  }`}></div>
                  <div className="absolute inset-0 bg-[#e1c693]/5 mix-blend-overlay"></div>

                  {/* Floating Badge - FIXED POSITION */}
                  <motion.div 
                    className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md border border-[#e1c693]/30 px-4 py-2.5 rounded-lg shadow-xl"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {testimonials.slice(0, 3).map((t, i) => (
                          <div key={i} className="w-6 h-6 rounded-full overflow-hidden border-2 border-black">
                            <img src={t.image} alt="" className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                      <div>
                        <p className="text-white text-[10px] font-bold">100+ Reviews</p>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-2 h-2 text-[#e1c693]" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Image - Clean View */}
          <div className="block lg:hidden relative h-[320px] rounded-2xl overflow-hidden order-1">
             <AnimatePresence mode="wait">
               <motion.img
                 key={currentIndex}
                 initial={{ opacity: 0, scale: 1.05 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 0.4 }}
                 src={currentTestimonial.image}
                 alt={currentTestimonial.name}
                 className="w-full h-full object-cover"
               />
             </AnimatePresence>
             <div className={`absolute inset-0 bg-gradient-to-t ${
               isDark ? "from-[#050505] via-[#050505]/50 to-transparent" : "from-[#f8f9fa] via-[#f8f9fa]/50 to-transparent"
             }`}></div>
          </div>

        </div>
      </div>
    </section>
  );
}