"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Code2,
  ShoppingBag,
  MonitorSmartphone,
  Palette,
  Clapperboard,
  Smartphone,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    description: "Modern and responsive websites built with high performance and clean UI/UX experience.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop",
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce",
    description: "Scalable ecommerce solutions with secure payments and smooth shopping experience.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: MonitorSmartphone,
    title: "Web Applications",
    description: "Custom web applications tailored to your business needs with modern technologies.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwYXBwbGljYXRpb258ZW58MHx8MHx8fDA%3D",
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Creative branding solutions including logo design, identity systems and brand strategy.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Clapperboard,
    title: "Animations",
    description: "Professional animations and motion graphics to make your business visually engaging.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Cross-platform mobile apps with seamless performance and beautiful user experience.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = !mounted ? "dark" : (theme === "system" ? systemTheme : theme);
  const isDark = currentTheme === "dark";

  // Don't render theme-dependent styles until mounted
  if (!mounted) {
    return (
      <section
        id="services"
        className="relative overflow-hidden py-20 md:py-24 transition-colors duration-500 bg-[#050505]"
      >
        <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
          <div className="mb-12 md:mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-[#e1c693] uppercase bg-[#e1c693]/5 rounded-full border border-[#e1c693]/20 backdrop-blur-sm">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Services We{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54]">
                Offer
              </span>
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="services"
      className={`relative overflow-hidden py-20 md:py-24 transition-colors duration-500 ${
        isDark ? "bg-[#050505]" : "bg-[#f8f9fa]"
      }`}
      suppressHydrationWarning
    >
      {/* Background Ambient Lights */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_left,_rgba(225,198,147,0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(${isDark ? "rgba(225,198,147,0.2)" : "rgba(225,198,147,0.4)"} 1px, transparent 1px),
              linear-gradient(90deg, ${isDark ? "rgba(225,198,147,0.2)" : "rgba(225,198,147,0.4)"} 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Added more horizontal padding and reduced max-width for compact look */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
        
        {/* Header - Reduced Size */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-[#e1c693] uppercase bg-[#e1c693]/5 rounded-full border border-[#e1c693]/20 backdrop-blur-sm">
            What We Do
          </span>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black tracking-tight transition-colors duration-500 ${
            isDark ? "text-white" : "text-gray-900"
          }`}>
            Services We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54]">
              Offer
            </span>
          </h2>
        </motion.div>

        {/* Main Interactive Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Side: Service List - Reduced Padding & Sizes */}
          <div className={`w-full lg:w-1/2 flex flex-col divide-y transition-colors duration-500 ${
            isDark ? "divide-white/5" : "divide-gray-200"
          }`}>
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeService === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onMouseEnter={() => setActiveService(index)}
                  onClick={() => setActiveService(index)}
                  className={`group relative flex items-center justify-between py-4 cursor-pointer transition-all duration-500 ${
                    isActive ? "pl-5" : "pl-0 opacity-60 hover:opacity-100 hover:pl-3"
                  }`}
                >
                  {/* Active Golden Left Border */}
                  {isActive && (
                    <motion.div
                      layoutId="activeServiceBorder"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#e1c693] to-[#a78b54] rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center gap-4">
                    {/* Number */}
                    <span className={`text-xs font-bold transition-colors duration-300 ${
                      isActive ? 'text-[#e1c693]' : isDark ? 'text-gray-700' : 'text-gray-400'
                    }`}>
                      0{index + 1}
                    </span>

                    {/* Icon - Reduced size */}
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-500 ${
                      isActive 
                        ? "bg-[#e1c693]/10 border-[#e1c693]/40 text-[#e1c693]" 
                        : isDark 
                          ? "bg-white/5 border-white/10 text-gray-500 group-hover:border-white/30 group-hover:text-gray-300"
                          : "bg-gray-100 border-gray-200 text-gray-500 group-hover:border-gray-400 group-hover:text-gray-700"
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>

                    {/* Title - Reduced size */}
                    <h3 className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                      isActive 
                        ? isDark ? "text-white" : "text-gray-900"
                        : isDark ? "text-gray-400 group-hover:text-white" : "text-gray-500 group-hover:text-gray-900"
                    }`}>
                      {service.title}
                    </h3>
                  </div>

                  {/* Arrow - Reduced size */}
                  <motion.div
                    animate={{ x: isActive ? 0 : -10, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isActive 
                        ? "bg-[#e1c693]/10 border border-[#e1c693]/30 text-[#e1c693]" 
                        : isDark
                          ? "bg-white/5 border border-white/10 text-gray-500"
                          : "bg-gray-100 border border-gray-200 text-gray-400"
                    }`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side: Dynamic Image Showcase - Reduced Height */}
          <div className="hidden lg:block w-1/2 relative">
            <div className={`sticky top-28 h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl ${
              isDark ? "border border-white/5 shadow-black/50" : "border border-gray-200 shadow-gray-300/30"
            }`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, scale: 1.1, filter: "grayscale(100%)" }}
                  animate={{ opacity: 1, scale: 1, filter: "grayscale(0%)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "grayscale(100%)" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Heavy Gradient Overlay for Text */}
                  <div className={`absolute inset-0 bg-gradient-to-t z-10 ${
                    isDark 
                      ? "from-[#050505] via-[#050505]/40 to-transparent" 
                      : "from-[#f8f9fa] via-[#f8f9fa]/40 to-transparent"
                  }`}></div>
                  <div className="absolute inset-0 bg-[#e1c693]/10 mix-blend-overlay z-10"></div>

                  {/* Floating Content on Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <h4 className={`text-2xl font-black mb-2 drop-shadow-lg ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}>
                        {services[activeService].title}
                      </h4>
                      <p className={`text-sm leading-relaxed max-w-sm drop-shadow-md ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}>
                        {services[activeService].description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile View: Image Card - Reduced Height */}
          <div className="lg:hidden w-full">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeService}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 transition={{ duration: 0.4 }}
                 className={`relative w-full h-[320px] rounded-2xl overflow-hidden ${
                  isDark ? "border border-white/5" : "border border-gray-200 shadow-sm"
                }`}
               >
                 <img
                   src={services[activeService].image}
                   alt={services[activeService].title}
                   className="w-full h-full object-cover"
                 />
                 <div className={`absolute inset-0 bg-gradient-to-t z-10 ${
                  isDark 
                    ? "from-[#050505] via-[#050505]/50 to-transparent" 
                    : "from-[#f8f9fa] via-[#f8f9fa]/50 to-transparent"
                }`}></div>
                 
                 <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                   <div className="w-8 h-8 rounded-lg bg-[#e1c693]/20 border border-[#e1c693]/40 flex items-center justify-center mb-3">
                     {(() => {
                       const Icon = services[activeService].icon;
                       return <Icon className="w-4 h-4 text-[#e1c693]" />;
                     })()}
                   </div>
                   <h4 className={`text-xl font-bold mb-1 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}>
                     {services[activeService].title}
                   </h4>
                   <p className={`text-sm leading-relaxed ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}>
                     {services[activeService].description}
                   </p>
                 </div>
               </motion.div>
             </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}