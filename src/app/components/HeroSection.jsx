"use client";
import React from 'react';
import { motion } from 'framer-motion';

// --- Icons required only for Hero Section ---
const HeroIcons = {
    Phone: () => <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
    Contact: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>,
};

const BadgeIcons = {
    Star: () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
    Shield: () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>,
    Award: () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></svg>,
    Crown: () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" /></svg>,
    Palette: () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /></svg>,
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeInRight = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } }
};

const HeroSection = ({ isDark }) => {
    const achievements = [
        { icon: <BadgeIcons.Shield />, title: 'Google Partner', desc: 'Premier Status' },
        { icon: <BadgeIcons.Star />, title: 'Clutch Top Agency', desc: '2024 & 2025' },
        { icon: <BadgeIcons.Crown />, title: 'Meta Business', desc: 'Certified Partner' },
        { icon: <BadgeIcons.Award />, title: 'Bing Ads', desc: 'Accredited Pro' },
        { icon: <BadgeIcons.Palette />, title: 'Adobe Creative', desc: 'Enterprise Level' },
    ];

    return (
        <>
            {/* Background Grid & Ambient Lights */}
            <div className={`fixed inset-0 z-0 transition-opacity duration-500 ${isDark ? 'bg-[radial-gradient(ellipse_at_top_right,_rgba(225,198,147,0.08)_0%,_transparent_50%)]' : 'bg-[radial-gradient(ellipse_at_top_right,_rgba(225,198,147,0.15)_0%,_transparent_50%)]'}`} />
            <div className="fixed inset-0 z-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(${isDark ? 'rgba(225,198,147,0.2)' : 'rgba(225,198,147,0.3)'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? 'rgba(225,198,147,0.2)' : 'rgba(225,198,147,0.3)'} 1px, transparent 1px)`, backgroundSize: "80px 80px" }} />
            </div>

            {/* Spacer */}
            <div className="pt-24 md:pt-28">

                {/* Utility Top Bar */}
                <div className={`hidden lg:flex justify-between items-center px-12 py-2.5 backdrop-blur-md text-xs uppercase tracking-widest border-b relative z-40 ${isDark ? 'bg-[#050505]/50 border-white/5 text-gray-500' : 'bg-white/50 border-gray-200 text-gray-500'}`}>
                    <div className="flex gap-8">
                        <span className="flex items-center gap-2 hover:text-[#e1c693] cursor-pointer transition-colors"><HeroIcons.Phone /> +1-(877) 476-8827</span>
                        <span className="flex items-center gap-2 hover:text-[#e1c693] cursor-pointer transition-colors"><HeroIcons.Contact /> info@AM-Verify.com</span>
                    </div>
                    <div>New York, USA</div>
                </div>

                {/* Logo Banner */}
                <div className="w-full flex justify-center mt-4 md:mt-6 relative z-30 px-4">
                    <div className={`shadow-md px-8 md:px-16 py-3 rounded-t-xl border relative overflow-hidden ${isDark ? 'bg-[#0a0a0a] border-white/10' : 'bg-white border-gray-100'}`}>
                        <motion.div className="absolute inset-0 z-10 pointer-events-none" style={{ background: `linear-gradient(105deg, transparent 40%, ${isDark ? 'rgba(225, 198, 147, 0.15)' : 'rgba(225, 198, 147, 0.3)'} 45%, ${isDark ? 'rgba(225, 198, 147, 0.3)' : 'rgba(225, 198, 147, 0.5)'} 50%, ${isDark ? 'rgba(225, 198, 147, 0.15)' : 'rgba(225, 198, 147, 0.3)'} 55%, transparent 60%)` }} initial={{ x: '-100%', skewX: '-15deg' }} animate={{ x: '200%' }} transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.8 }} />
                        <h2 className="relative z-20 text-xl md:text-3xl font-light tracking-[0.2em] md:tracking-[0.4em] text-gray-500">
                            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54] font-bold">VERIFY</span> PLATFORM
                        </h2>
                    </div>
                </div>

                {/* MODERN HERO SECTION */}
                <main id="home" className="relative max-w-7xl mx-auto mt-10 md:mt-16 px-6 md:px-12 lg:px-20 z-20 pb-16">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                        <motion.div variants={fadeInLeft} initial="hidden" animate="visible" className="lg:w-1/2 space-y-8 py-10 md:py-20 text-center lg:text-left">
                            <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                BRAND.<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54]">DESIGN</span><br />
                                PRODUCT.<br />
                                <span style={{ fontFamily: "'Playfair Display', serif" }} className={`italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Development</span><br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54]">& MORE</span>
                            </h1>
                            <div className="space-y-4 max-w-lg mx-auto lg:mx-0">
                                <p className={`text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Responsive Web Design Company Bringing Impactful Digital Strategies!</p>
                                <p className="text-[#e1c693] text-xs md:text-sm font-bold uppercase tracking-[0.3em]">Data-Driven • Creative Excellence</p>
                            </div>
                        </motion.div>

                        <div className="lg:w-1/2 w-full min-h-[500px] md:min-h-[700px] relative">
                            <motion.div variants={fadeInRight} initial="hidden" animate="visible" className="w-full h-full absolute inset-0 overflow-hidden border border-transparent hover:border-[#e1c693]/30 transition-all duration-700 shadow-2xl shadow-black/50" style={{ borderRadius: '12% 12% 12% 50%' }}>
                                <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop" alt="Creative Design" className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-110 transition-all duration-1000" />
                                <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent ${isDark ? 'from-[#050505]' : 'from-[#f5f5f7]'}`}></div>
                                <div className="absolute inset-0 bg-[#e1c693]/10 mix-blend-overlay pointer-events-none"></div>
                            </motion.div>
                        </div>
                    </div>
                </main>

                {/* ACHIEVEMENTS SECTION */}
                <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 z-20 py-20">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
                        <h3 className="text-xs md:text-sm font-bold uppercase tracking-[0.5em] text-[#e1c693]">Trusted & Recognized By</h3>
                        <p className={`text-xs mt-2 uppercase tracking-[0.3em] ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Achievements & Certifications</p>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
                        {achievements.map((item, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 50, rotateX: 45 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} whileHover={{ scale: 1.08, rotateY: 10, boxShadow: "0px 25px 50px rgba(225, 198, 147, 0.2)" }} transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }} viewport={{ once: true }} className={`group relative flex flex-col items-center justify-center p-6 md:p-8 rounded-xl border backdrop-blur-lg cursor-pointer transition-colors duration-300 ${isDark ? 'bg-white/[0.02] border-white/5 hover:border-[#e1c693]/40' : 'bg-white border-gray-100 hover:border-[#e1c693]/40 shadow-sm'}`} style={{ perspective: 1000 }}>
                                <div className={`relative w-20 h-20 rounded-full border flex items-center justify-center mb-5 transition-all duration-300 ${isDark ? 'bg-white/5 border-white/10 group-hover:border-[#e1c693] text-gray-600' : 'bg-gray-50 border-gray-200 group-hover:border-[#e1c693] text-gray-400'} group-hover:text-[#e1c693]`}>
                                    {item.icon}
                                    <motion.div animate={{ y: [0, -6, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }} className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#e1c693] rounded-full shadow-[0_0_10px_#e1c693]"></motion.div>
                                </div>
                                <h4 className={`text-sm font-bold leading-tight text-center ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>{item.title}</h4>
                                <p className={`text-[10px] font-medium mt-1 uppercase tracking-wider text-center ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating Action Buttons */}
            <div className="fixed left-4 md:left-8 bottom-6 md:bottom-10 flex flex-col gap-3 md:gap-4 z-50">
                <div className="group relative">
                    <div className="p-3 md:p-4 bg-[#e1c693] rounded-lg text-white shadow-xl cursor-pointer hover:bg-[#a78b54] transition-colors flex items-center justify-center"><HeroIcons.Phone /></div>
                    <div className="absolute left-full bottom-1/2 translate-y-1/2 ml-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
                        <div className={`${isDark ? 'bg-gray-900 border-[#e1c693]/30 text-[#e1c693]' : 'bg-[#1a1a1a] border-[#e1c693]/40 text-[#e1c693]'} text-xs font-bold px-3 py-2 rounded-md shadow-lg whitespace-nowrap border`}>+1-(877) 476-8827</div>
                    </div>
                </div>
                <div className="group relative">
                    <div className={`p-3 md:p-4 border rounded-lg shadow-xl cursor-pointer transition-colors flex items-center justify-center ${isDark ? 'bg-[#0a0a0a] border-[#e1c693] text-[#e1c693] hover:bg-[#e1c693]/10' : 'bg-[#1a1a1a] border-[#e1c693] text-[#e1c693] hover:bg-[#e1c693]/20'}`}><HeroIcons.Contact /></div>
                    <div className="absolute left-full bottom-1/2 translate-y-1/2 ml-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
                        <div className={`${isDark ? 'bg-gray-900 border-[#e1c693]/30 text-[#e1c693]' : 'bg-[#1a1a1a] border-[#e1c693]/40 text-[#e1c693]'} text-xs font-bold px-3 py-2 rounded-md shadow-lg whitespace-nowrap border`}>info@AM-Verify.com</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;