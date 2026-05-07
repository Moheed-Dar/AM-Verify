"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Eye,
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
  ZoomIn,
} from "lucide-react";

export default function OurWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const tabs = [
    { id: "all", label: "All Projects", icon: Layers },
    { id: "website", label: "Website Development", icon: Globe },
    { id: "ecommerce", label: "Ecommerce", icon: ShoppingBag },
    { id: "animations", label: "Animations", icon: Film },
    { id: "branding", label: "Branding", icon: Palette },
    { id: "mobile", label: "Mobile Applications", icon: Smartphone },
  ];

  const projects = [
    {
      id: 1,
      title: "Pharmacy App",
      category: "mobile",
      description: "Modern healthcare mobile application with intuitive UI/UX design and real-time tracking.",
      image: "https://cdn.dribbble.com/userupload/17918887/file/original-f03bc1d9420eadcf34120027fd662d76.png?resize=420x&vertical=center",
      gradient: "from-blue-500 to-cyan-400",
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
      gradient: "from-purple-500 to-pink-400",
      icon: ShoppingBag,
      stats: { views: "18K", likes: "3.1K" },
      tags: ["React", "Analytics", "SaaS"],
    },
    {
      id: 3,
      title: "Social Connect",
      category: "mobile",
      description: "Interactive social networking app with real-time messaging and stories.",
      image: "https://s3-alpha.figma.com/hub/file/3711112620/344a8a59-f0fb-4426-853f-c2cef5dff53f-cover.png",
      gradient: "from-red-500 to-orange-400",
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
      gradient: "from-emerald-500 to-teal-400",
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
      gradient: "from-amber-500 to-yellow-400",
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
      gradient: "from-indigo-500 to-purple-400",
      icon: Smartphone,
      stats: { views: "22K", likes: "3.8K" },
      tags: ["Fashion", "Dark UI", "Premium"],
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section
      ref={ref}
      id="work"
      className="relative bg-[#0a0a0a] overflow-hidden py-20 md:py-28"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-125 h-125 bg-orange-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/3 w-125 h-125 bg-blue-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            See Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-orange-600">
              Work
            </span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Our work is a testament to our expertise. It speaks aloud in respect
            of e-commerce, web and mobile application, SEO, Google ad words and
            email marketing, branding and social media marketing.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-linear-to-r from-orange-500 to-orange-600 rounded-xl"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <tab.icon className="w-4 h-4 relative z-10" />
              <span className="relative z-10">{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  layout: { duration: 0.4 },
                }}
                className="group relative"
              >
                <motion.div
                  className="relative overflow-hidden rounded-2xl bg-white/3 border border-white/6 hover:border-white/12 transition-all duration-500 cursor-pointer"
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image */}
                  <div className="relative aspect-4/3 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500`}
                    />

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    >
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        className="flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 rounded-full backdrop-blur-md"
                      >
                        <ZoomIn className="w-5 h-5 text-white" />
                        <span className="text-white font-medium">View Details</span>
                      </motion.div>
                    </motion.div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
                        <span className="text-white/90 text-xs font-medium capitalize">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="absolute top-4 right-4 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-white/10 backdrop-blur-md border border-white/10 rounded text-white/70 text-[10px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-white font-bold text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-500">
                        {project.title}
                      </h3>
                      <project.icon className={`w-5 h-5 bg-linear-to-br ${project.gradient} bg-clip-text text-transparent opacity-50 group-hover:opacity-100 transition-opacity`} />
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 pt-3 border-t border-white/6">
                      <div className="flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-gray-600" />
                        <span className="text-gray-500 text-xs">{project.stats.views}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-gray-600" />
                        <span className="text-gray-500 text-xs">{project.stats.likes}</span>
                      </div>
                      <div className="ml-auto">
                        <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Gradient Line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r ${project.gradient}`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-3xl bg-[#111] border border-white/10 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Modal Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-linear-to-t from-[#111] via-transparent to-transparent`} />
                <div className={`absolute inset-0 bg-linear-to-br ${selectedProject.gradient} opacity-20`} />
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${selectedProject.gradient} flex items-center justify-center shadow-lg`}>
                    <selectedProject.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">{selectedProject.title}</h3>
                    <span className="text-gray-500 text-sm capitalize">{selectedProject.category}</span>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-gray-400 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                    <Eye className="w-4 h-4 text-orange-400" />
                    <span className="text-white text-sm">{selectedProject.stats.views} views</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                    <Sparkles className="w-4 h-4 text-orange-400" />
                    <span className="text-white text-sm">{selectedProject.stats.likes} likes</span>
                  </div>
                </div>

                <motion.a
                  href="#"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live Project
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}