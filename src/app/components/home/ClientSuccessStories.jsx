"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import { useTheme } from "next-themes";

const successStories = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "How Proplus helped DJ Ford get quality clients for over 12 months",
    quote: "Using Proplus for over 12 months, I can't praise this team enough. The lead quality and consistency is outstanding. It completely transformed our sales pipeline and revenue.",
    authorName: "DJ Ford",
    authorTitle: "CEO of Lessthanmedia",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/ScMzIvxBSi4",
    title: "Scaling Agency Revenue with Predictable Lead Generation",
    quote: "We went from struggling to find leads to having a waiting list of clients. The ROI on this system is unlike anything we've ever tried before. Absolutely game-changing!",
    authorName: "Sarah Jenkins",
    authorTitle: "Founder, ScaleUp Agency",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ",
    title: "Closing High-Ticket Deals Made Effortless",
    quote: "The appointments they set are highly qualified. Our closing rate jumped by 40% in the first two months. It feels like cheating! Highly recommend their system.",
    authorName: "Marcus Chen",
    authorTitle: "Director of Sales, Apex Solutions",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
    title: "From Feast or Famine to Consistent 6-Figure Months",
    quote: "Before Proplus, our revenue was unpredictable. Now, we hit our targets every single month. The consistency is exactly what we needed to scale our operations smoothly.",
    authorName: "Emily Rivera",
    authorTitle: "Co-Founder, NovaDigital",
  },
];

export default function ClientSuccessStories() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-[#050505]" />;
  }

  const isDark = theme === 'dark';

  return (
    <section className={`relative pt-24 overflow-hidden transition-colors duration-700 ${isDark ? 'bg-[#050505]' : 'bg-[#fafaf9]'}`}>
      
      {/* Section Ambient Light */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[600px] rounded-full blur-3xl pointer-events-none ${isDark ? 'bg-[#e1c693]/5' : 'bg-[#e1c693]/10'}`} />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className={`text-xs md:text-sm font-bold uppercase tracking-[0.4em] ${isDark ? 'text-[#e1c693]' : 'text-[#a78b54]'}`}>
            Client Success Stories
          </p>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4 tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Hear It From Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54]">Clients</span>
          </h2>
        </motion.div>

        {/* Success Stories List */}
        <div className="space-y-32">
          {successStories.map((story, index) => {
            // Alternate layout: Even index = Left Video, Odd index = Right Video
            const isReversed = index % 2 !== 0;

            return (
              <motion.div 
                key={story.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
              >
                
                {/* Video Container */}
                <div className="w-full lg:w-1/2 relative group">
                  {/* Ambient glow behind video */}
                  <div className={`absolute -inset-6 rounded-[2rem] blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-1000 pointer-events-none ${isReversed ? 'bg-gradient-to-tl from-[#e1c693]/20 to-transparent' : 'bg-gradient-to-tr from-[#e1c693]/20 to-transparent'}`} />
                  
                  {/* Rotating Border Wrapper */}
                  <div className="relative p-[2px] rounded-2xl overflow-hidden transition-all duration-700 shadow-2xl group-hover:shadow-[0_20px_50px_rgba(225,198,147,0.3)]">
                    <div 
                      className="absolute inset-[-100%] z-0" 
                      style={{ 
                        background: `conic-gradient(from 0deg, transparent 0%, ${isDark ? '#e1c693' : '#a78b54'} 10%, transparent 20%)`,
                        animation: 'spin 4s linear infinite'
                      }} 
                    />

                    {/* Video Inner Container */}
                    <div className={`relative z-10 aspect-video w-full rounded-2xl overflow-hidden ${isDark ? "bg-[#0a0a0a]" : "bg-[#111111]"}`}>
                      <div className="absolute inset-0 z-0 overflow-hidden">
                        <div className={`absolute w-1/2 h-1/2 rounded-full blur-3xl top-[-10%] left-[-10%] ${isDark ? 'bg-[#e1c693]/30' : 'bg-[#e1c693]/50'}`} style={{ animation: 'pulse 6s ease-in-out infinite' }} />
                        <div className={`absolute w-1/2 h-1/2 rounded-full blur-3xl bottom-[-10%] right-[-10%] ${isDark ? 'bg-[#a78b54]/30' : 'bg-[#a78b54]/50'}`} style={{ animation: 'pulse 6s ease-in-out infinite 3s' }} />
                        <div className={`absolute inset-0 ${isDark ? 'bg-[#0a0a0a]/60' : 'bg-[#111111]/40'}`}></div>
                      </div>

                      <iframe
                        width="100%"
                        height="100%"
                        src={story.videoUrl}
                        title={story.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="relative z-20 w-full h-full absolute inset-0"
                      />

                      {/* Corner decorations */}
                      <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#e1c693]/40 rounded-tl-sm pointer-events-none z-30" />
                      <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#e1c693]/40 rounded-tr-sm pointer-events-none z-30" />
                      <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#e1c693]/40 rounded-bl-sm pointer-events-none z-30" />
                      <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#e1c693]/40 rounded-br-sm pointer-events-none z-30" />
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <h3 className={`text-2xl md:text-3xl font-bold leading-tight tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {story.title}
                  </h3>
                  
                  {/* Quote Block */}
                  <div className="relative pl-6 border-l-2 border-[#e1c693]/50">
                    <Quote className={`absolute -left-4 -top-2 w-8 h-8 ${isDark ? 'text-[#050505]' : 'text-[#fafaf9]'} fill-current`} />
                    <p className={`text-base md:text-lg leading-relaxed italic ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      "{story.quote}"
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-2">
                    <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-sm font-bold ${isDark ? 'border-[#e1c693]/30 bg-[#e1c693]/10 text-[#e1c693]' : 'border-[#a78b54]/30 bg-[#a78b54]/10 text-[#a78b54]'}`}>
                      {story.authorName.charAt(0)}
                    </div>
                    <div>
                      <p className={`font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{story.authorName}</p>
                      <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{story.authorTitle}</p>
                    </div>
                  </div>

                  {/* Learn More Link */}
                  <motion.a 
                    href="#" 
                    className={`inline-flex items-center gap-2 text-sm font-bold group mt-4 ${isDark ? 'text-[#e1c693]' : 'text-[#a78b54]'}`}
                    whileHover={{ x: 5 }}
                  >
                    Learn More 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Custom Keyframe Animations */}
      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.6; }
        }
      `}</style>
    </section>
  );
}