"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const BadgeIcons = {
    Star: () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
    Shield: () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>,
    Award: () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></svg>,
    Crown: () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" /></svg>,
    Palette: () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /></svg>,
};

const fadeInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };
const fadeInRight = { hidden: { opacity: 0, x: 50, scale: 0.95 }, visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } } };

export default function LandingPage() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const achievements = [
        { icon: <BadgeIcons.Shield />, title: 'Google Partner', desc: 'Premier Status' },
        { icon: <BadgeIcons.Star />, title: 'Clutch Top Agency', desc: '2024 & 2025' },
        { icon: <BadgeIcons.Crown />, title: 'Meta Business', desc: 'Certified Partner' },
        { icon: <BadgeIcons.Award />, title: 'Bing Ads', desc: 'Accredited Pro' },
        { icon: <BadgeIcons.Palette />, title: 'Adobe Creative', desc: 'Enterprise Level' },
    ];

    if (!mounted) {
        return <div className="min-h-screen bg-[#050505]" />;
    }

    return (
        <div className={`min-h-screen overflow-x-hidden relative transition-colors duration-500 
            ${theme === 'dark' ? 'bg-[#050505] text-gray-200' : 'bg-[#f8f9fa] text-gray-900'}`} 
            style={{ fontFamily: "'Outfit', sans-serif" }}>
            
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet" />

            {/* Background Gradient */}
            <div className={`fixed inset-0 z-0 transition-opacity duration-500 
                ${theme === 'dark' ? 'bg-[radial-gradient(ellipse_at_top_right,_rgba(225,198,147,0.08)_0%,_transparent_50%)]' 
                                  : 'bg-[radial-gradient(ellipse_at_top_right,_rgba(225,198,147,0.12)_0%,_transparent_50%)]'}`} />

            {/* Grid Pattern */}
            <div className="fixed inset-0 z-0 opacity-[0.03]">
                <div className="absolute inset-0" 
                     style={{ 
                         backgroundImage: `linear-gradient(${theme === 'dark' ? 'rgba(225,198,147,0.2)' : 'rgba(225,198,147,0.25)'} 1px, transparent 1px), 
                                           linear-gradient(90deg, ${theme === 'dark' ? 'rgba(225,198,147,0.2)' : 'rgba(225,198,147,0.25)'} 1px, transparent 1px)`, 
                         backgroundSize: "80px 80px" 
                     }} 
                />
            </div>

            <div className="pt-28 md:pt-36">
                
                {/* Utility Top Bar */}
                <div className={`hidden lg:flex justify-between items-center px-6 md:px-12 lg:px-20 py-1.5 backdrop-blur-md text-[11px] uppercase tracking-widest border-b relative z-40 
                    ${theme === 'dark' ? 'bg-[#050505]/50 border-white/5 text-gray-500' 
                                      : 'bg-white/70 border-gray-200 text-gray-500'}`}>
                    <div className="flex gap-8">
                        <a href="tel:+18774768827" className="flex items-center gap-2 hover:text-[#e1c693] cursor-pointer transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                           +1 (831) 207-4991
                        </a>
                        <a href="mailto:info@AM-Verify.com" className="flex items-center gap-2 hover:text-[#e1c693] cursor-pointer transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            info@flashteck.com
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                        New York, USA
                    </div>
                </div>

                {/* Logo Banner */}
                <div className="w-full flex justify-center mt-4 md:mt-6 relative z-30 px-4">
                    <div className={`shadow-md px-6 md:px-12 py-2 rounded-t-xl border relative overflow-hidden 
                        ${theme === 'dark' ? 'bg-[#0a0a0a] border-white/10' : 'bg-white border-gray-200'}`}>
                        <motion.div 
                            className="absolute inset-0 z-10 pointer-events-none" 
                            style={{ 
                                background: `linear-gradient(105deg, transparent 40%, ${theme === 'dark' ? 'rgba(225, 198, 147, 0.15)' : 'rgba(225, 198, 147, 0.25)'} 45%, ${theme === 'dark' ? 'rgba(225, 198, 147, 0.3)' : 'rgba(225, 198, 147, 0.4)'} 50%, ${theme === 'dark' ? 'rgba(225, 198, 147, 0.15)' : 'rgba(225, 198, 147, 0.25)'} 55%, transparent 60%)` 
                            }} 
                            initial={{ x: '-100%', skewX: '-15deg' }} 
                            animate={{ x: '200%' }} 
                            transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.8 }} 
                        />
                        <h2 className="relative z-20 text-lg md:text-2xl font-light tracking-[0.2em] md:tracking-[0.3em] text-gray-500">
                            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54] font-bold">VERIFY</span> PLATFORM
                        </h2>
                    </div>
                </div>

                {/* Hero Section */}
                <main id="home" className="relative max-w-7xl mx-auto mt-8 md:mt-12 px-6 md:px-12 lg:px-20 z-20 pb-12">
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
                        <motion.div variants={fadeInLeft} initial="hidden" animate="visible" className="lg:w-1/2 space-y-6 py-6 md:py-12 text-center lg:text-left">
                            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tighter 
                                ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                BRAND.<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54]">DESIGN</span><br />
                                PRODUCT.<br />
                                <span style={{ fontFamily: "arial" }} className={`italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Development
                                </span><br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54]">& MORE</span>
                            </h1>
                            <div className="space-y-3 max-w-lg mx-auto lg:mx-0">
                                <p className={`text-base md:text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
                                    Responsive Web Design Company Bringing Impactful Digital Strategies. Flashteck offers customized, result driven solutions tailored to meet diverse business needs. Our approach is flexible, scale-able, and designed to support growth at every stage of your business.
                                </p>
                                <p className="text-[#e1c693] text-xs md:text-sm font-bold uppercase tracking-[0.3em]">
                                    Data-Driven • Creative Excellence
                                </p>
                            </div>
                        </motion.div>

                        <div className="lg:w-1/2 w-full min-h-[350px] md:min-h-[550px] relative">
                            <motion.div variants={fadeInRight} initial="hidden" animate="visible" 
                                className="w-full h-full absolute inset-0 overflow-hidden border border-transparent hover:border-[#e1c693]/30 transition-all duration-700 shadow-2xl shadow-black/50" 
                                style={{ borderRadius: '12% 12% 12% 50%' }}>
                                <img 
                                    src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop" 
                                    alt="Creative Design" 
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-110 transition-all duration-1000" 
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent ${theme === 'dark' ? 'from-[#050505]' : 'from-[#f8f9fa]'}`}></div>
                                <div className="absolute inset-0 bg-[#e1c693]/10 mix-blend-overlay pointer-events-none"></div>
                            </motion.div>
                        </div>
                    </div>
                </main>

                {/* Achievements */}
                <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 z-20 py-12 md:py-16">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10">
                        <h3 className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-[#e1c693]">Trusted & Recognized By</h3>
                        <p className={`text-[10px] mt-1.5 uppercase tracking-[0.2em] ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
                            Achievements & Certifications
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
                        {achievements.map((item, index) => (
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0, y: 50, rotateX: 45 }} 
                                whileInView={{ opacity: 1, y: 0, rotateX: 0 }} 
                                whileHover={{ scale: 1.05 }} 
                                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }} 
                                viewport={{ once: true }} 
                                className={`group relative flex flex-col items-center justify-center p-5 rounded-xl border backdrop-blur-lg cursor-pointer transition-all duration-300 
                                    ${theme === 'dark' ? 'bg-white/[0.02] border-white/5 hover:border-[#e1c693]/40' 
                                                      : 'bg-white border-gray-200 hover:border-[#e1c693]/40 shadow-sm'}`}
                            >
                                <div className={`relative w-16 h-16 rounded-full border flex items-center justify-center mb-4 transition-all duration-300 
                                    ${theme === 'dark' ? 'bg-white/5 border-white/10 group-hover:border-[#e1c693] text-gray-600' 
                                                      : 'bg-gray-50 border-gray-200 group-hover:border-[#e1c693] text-gray-500'} group-hover:text-[#e1c693]`}>
                                    {item.icon}
                                    <motion.div animate={{ y: [0, -6, 0], opacity: [0.5, 1, 0.5] }} 
                                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }} 
                                        className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#e1c693] rounded-full shadow-[0_0_8px_#e1c693]" />
                                </div>
                                <h4 className={`text-xs font-bold leading-tight text-center ${theme === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
                                    {item.title}
                                </h4>
                                <p className={`text-[9px] font-medium mt-0.5 uppercase tracking-wider text-center ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ===== FLOATING BOTTOM LEFT ICONS WITH HOVER LABELS ===== */}
            <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-4">
                
                {/* Phone Icon Button */}
                <div className="relative group">
                    <motion.a 
                        href="tel:+18774768827"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-12 h-12 rounded-full border  border-[#e1c693]/50 flex items-center justify-center shadow-lg shadow-black/50 hover:bg-[#e1c693] hover:text-black transition-all duration-300 ${
                            theme === 'dark' ? 'bg-[#050505] text-[#e1c693]' : 'bg-[#e1c693] text-[#413011]'
                        }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    </motion.a>
                    
                    {/* Hover Label */}
                    <span className={`absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap shadow-xl pointer-events-none transition-all  duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 ${
                        theme === 'dark' ? 'bg-[#0a0a0a] text-[#e1c693] border border-[#e1c693]/30' : 'bg-white text-gray-900 border border-gray-200'
                    }`}>
                        +1 (831) 207-4991
                    </span>
                </div>

                {/* Email Icon Button */}
                <div className="relative group">
                    <motion.a 
                        href="mailto:info@AM-Verify.com"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-12 h-12 rounded-full border border-[#e1c693]/50 flex items-center justify-center shadow-lg shadow-black/50 hover:bg-[#e1c693] hover:text-black transition-all duration-300 ${
                            theme === 'dark' ? 'bg-[#050505] text-[#e1c693]' : 'bg-white text-[#e1c693]'
                        }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    </motion.a>
                    
                    {/* Hover Label */}
                    <span className={`absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap shadow-xl pointer-events-none transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 ${
                        theme === 'dark' ? 'bg-[#0a0a0a] text-[#e1c693] border border-[#e1c693]/30' : 'bg-white text-gray-900 border border-gray-200'
                    }`}>
                        info@flashteck.com
                    </span>
                </div>

            </div>

        </div>
    );
}