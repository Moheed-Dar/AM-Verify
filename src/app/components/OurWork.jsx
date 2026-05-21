"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useTheme } from "next-themes";
import {
  ExternalLink,
  Sparkles,
  ArrowRight,
  Layers,
  Smartphone,
  Globe,
  Palette,
  Film,
  ShoppingBag,
  X,
} from "lucide-react";

export default function OurWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = !mounted ? "dark" : (theme === "system" ? systemTheme : theme);
  const isDark = currentTheme === "dark";

  const tabs = [
    { id: "all", label: "All Projects", icon: Layers },
    { id: "website", label: "Website", icon: Globe },
    { id: "ecommerce", label: "Ecommerce", icon: ShoppingBag },
    { id: "animations", label: "Animations", icon: Film },
    { id: "branding", label: "Branding", icon: Palette },
    { id: "mobile", label: "Mobile Apps", icon: Smartphone },
  ];

  const projects = [
    {
      id: 1,
      title: "Pharmacy App",
      category: "mobile",
      description: "Modern healthcare mobile application with intuitive UI/UX design and real-time tracking.",
      image: "https://cdn.dribbble.com/userupload/17918887/file/original-f03bc1d9420eadcf34120027fd662d76.png?resize=420x&vertical=center",
      icon: Smartphone,
      stats: { views: "12K", likes: "2.4K" },
      tags: ["iOS", "Android", "Healthcare"],
    },
    {
      id: 2,
      title: "E-Commerce Dashboard",
      category: "ecommerce",
      description: "Feature-rich analytics dashboard for online retail management with AI insights.",
      image: "https://cdn.dribbble.com/userupload/9327116/file/original-227475a76530cc083675382a3d5338a9.png?format=webp&resize=400x300&vertical=center",
      icon: ShoppingBag,
      stats: { views: "18K", likes: "3.1K" },
      tags: ["React", "Analytics", "SaaS"],
    },
    {
      id: 3,
      title: "Social Connect",
      category: "mobile",
      description: "Interactive social networking app with real-time messaging and stories.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4YT73Y0cEIDpwUWQhYERGcGy3ZXq02FJYA&s",
      icon: Smartphone,
      stats: { views: "25K", likes: "4.2K" },
      tags: ["Social", "Messaging", "Live"],
    },
    {
      id: 4,
      title: "Eco Corporate",
      category: "website",
      description: "Professional business website with modern design aesthetics and green theme.",
      image: "https://images-platform.99static.com//g8LGg4n4WmFIYn7q97MdC2zERus=/0x0:1600x1600/fit-in/500x500/99designs-contests-attachments/96/96719/attachment_96719715",
      icon: Globe,
      stats: { views: "8K", likes: "1.8K" },
      tags: ["Corporate", "Green", "Modern"],
    },
    {
      id: 5,
      title: "Luxury Brand Identity",
      category: "branding",
      description: "Complete visual identity package including logo, guidelines and collateral.",
      image: "https://img.freepik.com/free-psd/gold-logo-mockup_511564-1553.jpg?semt=ais_hybrid&w=740&q=80",
      icon: Palette,
      stats: { views: "15K", likes: "2.9K" },
      tags: ["Logo", "Identity", "Luxury"],
    },
    {
      id: 6,
      title: "Fashion Store App",
      category: "mobile",
      description: "Premium e-commerce mobile app with dark theme and smooth animations.",
      image: "https://cdn.dribbble.com/userupload/43817036/file/original-6908f76beb6856f616d4206d896b6c54.webp?resize=420x&vertical=center",
      icon: Smartphone,
      stats: { views: "22K", likes: "3.8K" },
      tags: ["Fashion", "Dark UI", "Premium"],
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  // Don't render theme-dependent styles until mounted
  if (!mounted) {
    return (
      <section
        ref={ref}
        id="work"
        className="relative overflow-hidden py-20 md:py-28 transition-colors duration-500 bg-[#050505]"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#e1c693]/30 rounded-full bg-[#e1c693]/5 mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#e1c693]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e1c693]">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-white">
              See Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54]">
                Work
              </span>
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      id="work"
      className={`relative overflow-hidden py-20 md:py-28 transition-colors duration-500 ${
        isDark ? "bg-[#050505]" : "bg-[#f8f9fa]"
      }`}
      suppressHydrationWarning
    >
      {/* Ambient Lights */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none ${
          isDark ? "bg-[#e1c693]/5" : "bg-[#e1c693]/10"
        }`} />
        <div className={`absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none ${
          isDark ? "bg-[#e1c693]/3" : "bg-[#e1c693]/8"
        }`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#e1c693]/30 rounded-full bg-[#e1c693]/5 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#e1c693]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e1c693]">Portfolio</span>
          </div>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black mb-4 transition-colors duration-500 ${
            isDark ? "text-white" : "text-gray-900"
          }`}>
            See Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54]">
              Work
            </span>
          </h2>

          <p className={`max-w-3xl mx-auto text-base md:text-lg leading-relaxed transition-colors duration-500 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}>
            Our work is a testament to our expertise. It speaks aloud in respect of e-commerce, web and mobile application, SEO, and branding.
            Our dedicated team partners with high growth industries and established enterprises to turn services into measurable sales. We drive customer retention, strengthen brand trust, and accelerate acquisition, transforming operations into profitable growth engines.
          </p>
        </motion.div>

        {/* Modern Minimalist Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className={`flex flex-wrap justify-center gap-4 md:gap-8 mb-16 border-b pb-4 transition-colors duration-500 ${
            isDark ? "border-white/10" : "border-gray-200"
          }`}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 text-sm font-semibold uppercase tracking-wider transition-colors duration-300 pb-2 ${
                activeTab === tab.id
                  ? "text-[#e1c693]"
                  : isDark
                  ? "text-gray-500 hover:text-gray-300"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e1c693]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative cursor-pointer ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                onClick={() => setSelectedProject(project)}
              >
                
                {/* === FEATURED CARD DESIGN (The Big Card) === */}
                {index === 0 ? (
                  <div className={`relative w-full h-full min-h-[450px] md:min-h-[600px] rounded-3xl overflow-hidden transition-all duration-700 flex flex-col md:flex-row ${
                    isDark 
                      ? "border border-white/5 hover:border-[#e1c693]/40" 
                      : "border border-gray-200 hover:border-[#e1c693]/40 shadow-sm hover:shadow-xl"
                  }`}>
                    
                    {/* Left: Image Section */}
                    <div className="md:w-1/2 h-64 md:h-full relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a]/80 z-10 hidden md:block"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 md:hidden"></div>
                    </div>

                    {/* Right: Content Section */}
                    <div className="md:w-1/2 bg-[#0a0a0a] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
                      {/* Background decorative number */}
                      <div className="absolute -bottom-10 -right-10 text-[200px] font-black text-white/[0.02] pointer-events-none select-none">
                        01
                      </div>
                      
                      {/* Ambient glow */}
                      <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#e1c693]/10 rounded-full blur-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-6">
                          <div className="w-8 h-8 rounded-lg bg-[#e1c693]/10 border border-[#e1c693]/30 flex items-center justify-center">
                            <project.icon className="w-4 h-4 text-[#e1c693]" />
                          </div>
                          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-wider text-[#e1c693]">
                            Featured Project
                          </span>
                        </div>

                        <h3 className="text-white font-black text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight group-hover:text-[#e1c693] transition-colors duration-300">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-md">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-400 text-xs font-medium"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <motion.div 
                          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#e1c693] to-[#a78b54] text-black font-bold rounded-xl cursor-pointer group/btn"
                          whileHover={{ scale: 1.05, boxShadow: "0px 20px 40px rgba(225, 198, 147, 0.3)" }}
                        >
                          View Case Study
                          <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                ) : (
                /* === NORMAL CARDS DESIGN === */
                  <div className={`relative w-full min-h-[350px] md:min-h-[450px] rounded-3xl overflow-hidden transition-all duration-700 ${
                    isDark 
                      ? "border border-white/5 hover:border-[#e1c693]/40" 
                      : "border border-gray-200 hover:border-[#e1c693]/40 shadow-sm hover:shadow-xl"
                  }`}>
                    
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                    />
                    
                    <div className={`absolute inset-0 bg-gradient-to-t z-10 ${
                      isDark 
                        ? "from-[#050505] via-[#050505]/60 to-transparent" 
                        : "from-[#f8f9fa] via-[#f8f9fa]/60 to-transparent"
                    }`}></div>
                    <div className="absolute inset-0 bg-[#e1c693]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      
                      <div className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full inline-block mb-4">
                        <span className="text-white/90 text-xs font-bold uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-white font-black text-2xl md:text-3xl mb-2 group-hover:text-[#e1c693] transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className={`text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-md ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}>
                        {project.description}
                      </p>

                      <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <div className="flex gap-2">
                          {project.tags.slice(0, 2).map((tag, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded text-white/70 text-[10px] font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isDark 
                            ? "border border-white/20 group-hover:border-[#e1c693] group-hover:text-[#e1c693] text-gray-400" 
                            : "border border-gray-300 group-hover:border-[#e1c693] group-hover:text-[#e1c693] text-gray-500"
                        }`}>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Project Modal - Always Dark Themed (Looks Premium) */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/50"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-30 w-10 h-10 bg-black/50 hover:bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="relative h-72 md:h-96 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[#e1c693]/10" />
              </div>

              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#e1c693]/10 border border-[#e1c693]/30 flex items-center justify-center">
                        <selectedProject.icon className="w-5 h-5 text-[#e1c693]" />
                      </div>
                      <span className="text-[#e1c693] text-sm font-bold uppercase tracking-wider">{selectedProject.category}</span>
                    </div>
                    <h3 className="text-white font-black text-3xl md:text-4xl tracking-tight">{selectedProject.title}</h3>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-white">{selectedProject.stats.views}</p>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Views</p>
                    </div>
                    <div className="w-px h-10 bg-white/10"></div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-white">{selectedProject.stats.likes}</p>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Likes</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 text-base leading-relaxed mb-8 border-l-2 border-[#e1c693]/50 pl-4">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-400 text-xs font-medium hover:border-[#e1c693]/30 hover:text-[#e1c693] transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-[#e1c693] to-[#a78b54] text-black font-bold rounded-xl hover:shadow-lg hover:shadow-[#e1c693]/20 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live Project
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}