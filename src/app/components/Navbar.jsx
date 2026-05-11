"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, X, Info } from 'lucide-react';

// --- Icons Updated ---
const Icons = {
    Home: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
    About: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>,
    Work: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>,
    Services: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
    Contact: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>,
    Phone: () => <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
    Menu: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="20" y2="18" /></svg>,
    X: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>,
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

const popupVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.8, y: 20, transition: { duration: 0.2 } }
};

const LandingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDark, setIsDark] = useState(true);
    const [activeSection, setActiveSection] = useState('home');
    const [showThemePopup, setShowThemePopup] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 80);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle URL hash on load and hash change
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '') || 'home';
            setActiveSection(hash);
            
            // Smooth scroll to element if exists
            const element = document.getElementById(hash);
            if (element) {
                const offsetTop = element.offsetTop - 120; // Account for fixed navbar
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        };

        // Handle initial hash on page load
        if (window.location.hash) {
            setTimeout(handleHashChange, 100);
        }

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('section[id], main[id]');
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    setActiveSection(id);
                    // Update URL without scrolling
                    if (window.location.hash !== `#${id}`) {
                        window.history.replaceState(null, null, `#${id}`);
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') setShowThemePopup(false);
        };
        if (showThemePopup) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [showThemePopup]);

    // Updated navigation handler that updates URL
    const handleNavigation = (e, href, id) => {
        e.preventDefault();
        
        // Update URL hash
        window.history.pushState(null, null, href);
        setActiveSection(id);
        
        // Smooth scroll to section
        const element = document.getElementById(id);
        if (element) {
            const offsetTop = id === 'home' ? 0 : element.offsetTop - 120;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
        
        setIsMenuOpen(false);
    };

    const handleThemeToggle = () => {
        setShowThemePopup(true);
    };

    const navLinks = [
        { name: 'Home', href: '#home', id: 'home', icon: <Icons.Home /> },
        { name: 'About', href: '#about', id: 'about', icon: <Icons.About /> },
        { name: 'Work', href: '#work', id: 'work', icon: <Icons.Work /> },
        { name: 'Services', href: '#services', id: 'services', icon: <Icons.Services /> },
        { name: 'Contact', href: '#contact', id: 'contact', icon: <Icons.Contact /> },
    ];

    const achievements = [
        { icon: <BadgeIcons.Shield />, title: 'Google Partner', desc: 'Premier Status' },
        { icon: <BadgeIcons.Star />, title: 'Clutch Top Agency', desc: '2024 & 2025' },
        { icon: <BadgeIcons.Crown />, title: 'Meta Business', desc: 'Certified Partner' },
        { icon: <BadgeIcons.Award />, title: 'Bing Ads', desc: 'Accredited Pro' },
        { icon: <BadgeIcons.Palette />, title: 'Adobe Creative', desc: 'Enterprise Level' },
    ];

    return (
        <div className={`min-h-screen overflow-x-hidden relative transition-colors duration-500 ${isDark ? 'bg-[#050505] text-gray-200' : 'bg-[#f5f5f7] text-gray-900'}`} style={{ fontFamily: "'Outfit', sans-serif" }}>

            {/* Google Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet" />

            {/* Background Grid & Ambient Lights */}
            <div className={`fixed inset-0 z-0 transition-opacity duration-500 ${isDark ? 'bg-[radial-gradient(ellipse_at_top_right,_rgba(225,198,147,0.08)_0%,_transparent_50%)]' : 'bg-[radial-gradient(ellipse_at_top_right,_rgba(225,198,147,0.15)_0%,_transparent_50%)]'}`} />
            <div className="fixed inset-0 z-0 opacity-[0.03]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              linear-gradient(${isDark ? 'rgba(225,198,147,0.2)' : 'rgba(225,198,147,0.3)'} 1px, transparent 1px),
              linear-gradient(90deg, ${isDark ? 'rgba(225,198,147,0.2)' : 'rgba(225,198,147,0.3)'} 1px, transparent 1px)
            `,
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            {/* 1. NAVBAR */}
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-2 backdrop-blur-xl shadow-xl border-b' : 'py-4 md:py-5 bg-transparent'} ${isScrolled ? (isDark ? 'bg-[#050505]/90 border-white/5' : 'bg-white/90 border-gray-200') : ''}`}>
                <div className="max-w-6xl mx-auto px-6 md:px-12">
                    <div className={`${isDark ? 'bg-[#0a0a0a01] border-white/10' : 'bg-white border-gray-200'} border shadow-md rounded-lg px-4 md:px-10 py-3 md:py-4 flex justify-between items-center transition-all duration-300 backdrop-blur-md ${isScrolled ? 'shadow-lg border-[#e1c693]/30' : ''}`}>

                        {/* Logo */}
                        <a href="#home" onClick={(e) => handleNavigation(e, '#home', 'home')} className="flex items-center flex-shrink-0 z-10">
                            <img
                                src="/images/img1.png"
                                alt="AM-Verify Logo"
                                className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-md"
                            />
                        </a>

                        {/* Desktop Menu */}
                        <ul className={`hidden md:flex items-center justify-center flex-1 gap-8 lg:gap-10 text-sm font-semibold uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavigation(e, link.href, link.id)}
                                        className={`flex items-center gap-2 cursor-pointer transition-colors duration-300 ${
                                            activeSection === link.id 
                                                ? 'text-[#e1c693]'
                                                : (isDark ? 'text-gray-400 hover:text-[#e1c693]' : 'text-gray-600 hover:text-[#a78b54]')
                                        }`}
                                    >
                                        {link.icon} {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Right Side: Theme Toggle Button */}
                        <div className="flex items-center flex-shrink-0 cursor-pointer z-10 gap-3">
                            <button
                                onClick={handleThemeToggle}
                                className={`p-2 rounded-md transition-colors duration-300 ${isDark ? 'hover:bg-white/10 text-[#e1c693]' : 'hover:bg-gray-100 text-[#a78b54]'}`}
                                aria-label="Toggle Theme"
                            >
                                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`md:hidden p-2 rounded-md transition-colors ${isDark ? 'text-gray-300 hover:bg-white/5' : 'text-gray-800 hover:bg-gray-100'}`}
                            >
                                {isMenuOpen ? <Icons.X /> : <Icons.Menu />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className={`md:hidden absolute left-4 right-4 mt-2 border rounded-lg shadow-2xl py-6 px-6 z-50 backdrop-blur-xl ${isDark ? 'bg-[#0a0a0a] border-white/10' : 'bg-white border-gray-200'}`}
                        >
                            <ul className={`flex flex-col gap-2 text-lg font-medium ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                                {navLinks.map((link, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.05 }}
                                        className={`py-3 px-4 hover:bg-[#e1c693]/10 rounded-md cursor-pointer transition-colors ${
                                            activeSection === link.id ? 'bg-[#e1c693]/10 text-[#e1c693]' : ''
                                        }`}
                                    >
                                        <a 
                                            href={link.href} 
                                            onClick={(e) => handleNavigation(e, link.href, link.id)}
                                            className="flex items-center gap-4"
                                        >
                                            {link.icon} {link.name}
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* ==================== THEME POPUP MODAL ==================== */}
            <AnimatePresence>
                {showThemePopup && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowThemePopup(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] cursor-pointer"
                        />
                        
                        {/* Popup Content */}
                        <div className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none">
                            <motion.div
                                variants={popupVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                onClick={(e) => e.stopPropagation()}
                                className={`pointer-events-auto max-w-md mx-4 p-6 md:p-8 rounded-2xl border shadow-2xl ${
                                    isDark 
                                        ? 'bg-[#0a0a0a] border-[#e1c693]/30 text-gray-200' 
                                        : 'bg-white border-[#a78b54]/30 text-gray-900'
                                }`}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setShowThemePopup(false)}
                                    className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
                                        isDark ? 'hover:bg-white/10 text-gray-400 hover:text-[#e1c693]' : 'hover:bg-gray-100 text-gray-500 hover:text-[#a78b54]'
                                    }`}
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Icon */}
                                <div className="flex justify-center mb-4">
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                                        isDark ? 'bg-[#e1c693]/10 text-[#e1c693]' : 'bg-[#a78b54]/10 text-[#a78b54]'
                                    }`}>
                                        <Info className="w-8 h-8" />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className={`text-xl font-bold text-center mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                    Theme Toggle Notice
                                </h3>

                                {/* Message */}
                                <p className={`text-sm md:text-base text-center leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                    The dark and light mode functionality has been implemented <span className="font-semibold text-[#e1c693]">for testing purposes only</span> on the <span className="font-semibold text-[#e1c693]">hero section</span>. Full theme support across all sections will be added in future updates.
                                </p>

                                {/* Action Button */}
                                <div className="mt-6 flex justify-center">
                                    <button
                                        onClick={() => setShowThemePopup(false)}
                                        className="px-6 py-2.5 bg-gradient-to-r from-[#e1c693] to-[#a78b54] text-[#0a0a0a] font-semibold rounded-full hover:shadow-lg hover:shadow-[#e1c693]/30 transition-all duration-300"
                                    >
                                        Got it!
                                    </button>
                                </div>

                                {/* Decorative Bottom Line */}
                                <div className={`mt-6 h-px w-full ${isDark ? 'bg-gradient-to-r from-transparent via-[#e1c693]/30 to-transparent' : 'bg-gradient-to-r from-transparent via-[#a78b54]/30 to-transparent'}`} />
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
            {/* ==================== END THEME POPUP ==================== */}

            {/* Spacer */}
            <div className="pt-24 md:pt-28">

                {/* 2. Utility Top Bar */}
                <div className={`hidden lg:flex justify-between items-center px-12 py-2.5 backdrop-blur-md text-xs uppercase tracking-widest border-b relative z-40 ${isDark ? 'bg-[#050505]/50 border-white/5 text-gray-500' : 'bg-white/50 border-gray-200 text-gray-500'}`}>
                    <div className="flex gap-8">
                        <span className="flex items-center gap-2 hover:text-[#e1c693] cursor-pointer transition-colors"><Icons.Phone /> +1-(877) 476-8827</span>
                        <span className="flex items-center gap-2 hover:text-[#e1c693] cursor-pointer transition-colors"><Icons.Contact /> info@AM-Verify.com</span>
                    </div>
                    <div>New York, USA</div>
                </div>

                {/* 3. Logo Banner with Reflection Effect */}
                <div className="w-full flex justify-center mt-4 md:mt-6 relative z-30 px-4">
                    <div className={`shadow-md px-8 md:px-16 py-3 rounded-t-xl border relative overflow-hidden ${isDark ? 'bg-[#0a0a0a] border-white/10' : 'bg-white border-gray-100'}`}>
                        
                        {/* Infinite Reflection/Shine Sweep Effect */}
                        <motion.div
                            className="absolute inset-0 z-10 pointer-events-none"
                            style={{
                                background: `linear-gradient(105deg, transparent 40%, ${isDark ? 'rgba(225, 198, 147, 0.15)' : 'rgba(225, 198, 147, 0.3)'} 45%, ${isDark ? 'rgba(225, 198, 147, 0.3)' : 'rgba(225, 198, 147, 0.5)'} 50%, ${isDark ? 'rgba(225, 198, 147, 0.15)' : 'rgba(225, 198, 147, 0.3)'} 55%, transparent 60%)`
                            }}
                            initial={{ x: '-100%', skewX: '-15deg' }}
                            animate={{ x: '200%' }}
                            transition={{
                                duration: 1.2,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 1.8,
                            }}
                        />

                        <h2 className="relative z-20 text-xl md:text-3xl font-light tracking-[0.2em] md:tracking-[0.4em] text-gray-500">
                            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54] font-bold">VERIFY</span> PLATFORM
                        </h2>
                    </div>
                </div>

                {/* 4. MODERN HERO SECTION */}
                <main id="home" className="relative max-w-7xl mx-auto mt-10 md:mt-16 px-6 md:px-12 lg:px-20 z-20 pb-16">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

                        {/* Left Content */}
                        <motion.div
                            variants={fadeInLeft}
                            initial="hidden"
                            animate="visible"
                            className="lg:w-1/2 space-y-8 py-10 md:py-20 text-center lg:text-left"
                        >
                            <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                BRAND.<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54]">DESIGN</span><br />
                                PRODUCT.<br />
                                <span style={{ fontFamily: "'Playfair Display', serif" }} className={`italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Development</span><br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54]">& MORE</span>
                            </h1>

                            <div className="space-y-4 max-w-lg mx-auto lg:mx-0">
                                <p className={`text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Responsive Web Design Company Bringing Impactful Digital Strategies!
                                </p>
                                <p className="text-[#e1c693] text-xs md:text-sm font-bold uppercase tracking-[0.3em]">Data-Driven • Creative Excellence</p>
                            </div>
                        </motion.div>

                        {/* Right Side Image */}
                        <div className="lg:w-1/2 w-full min-h-[500px] md:min-h-[700px] relative">
                            <motion.div
                                variants={fadeInRight}
                                initial="hidden"
                                animate="visible"
                                className="w-full h-full absolute inset-0 overflow-hidden border border-transparent hover:border-[#e1c693]/30 transition-all duration-700 shadow-2xl shadow-black/50"
                                style={{ borderRadius: '12% 12% 12% 50%' }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop"
                                    alt="Creative Design"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-110 transition-all duration-1000"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent ${isDark ? 'from-[#050505]' : 'from-[#f5f5f7]'}`}></div>
                                <div className="absolute inset-0 bg-[#e1c693]/10 mix-blend-overlay pointer-events-none"></div>
                            </motion.div>
                        </div>

                    </div>
                </main>

                {/* 5. ACHIEVEMENTS SECTION */}
                <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 z-20 py-20">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h3 className="text-xs md:text-sm font-bold uppercase tracking-[0.5em] text-[#e1c693]">Trusted & Recognized By</h3>
                        <p className={`text-xs mt-2 uppercase tracking-[0.3em] ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Achievements & Certifications</p>
                    </motion.div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
                        {achievements.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50, rotateX: 45 }}
                                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                whileHover={{ scale: 1.08, rotateY: 10, boxShadow: "0px 25px 50px rgba(225, 198, 147, 0.2)" }}
                                transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
                                viewport={{ once: true }}
                                className={`group relative flex flex-col items-center justify-center p-6 md:p-8 rounded-xl border backdrop-blur-lg cursor-pointer transition-colors duration-300 ${isDark ? 'bg-white/[0.02] border-white/5 hover:border-[#e1c693]/40' : 'bg-white border-gray-100 hover:border-[#e1c693]/40 shadow-sm'}`}
                                style={{ perspective: 1000 }}
                            >
                                <div className={`relative w-20 h-20 rounded-full border flex items-center justify-center mb-5 transition-all duration-300 ${isDark ? 'bg-white/5 border-white/10 group-hover:border-[#e1c693] text-gray-600' : 'bg-gray-50 border-gray-200 group-hover:border-[#e1c693] text-gray-400'} group-hover:text-[#e1c693]`}>
                                    {item.icon}
                                    <motion.div
                                        animate={{ y: [0, -6, 0], opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#e1c693] rounded-full shadow-[0_0_10px_#e1c693]"
                                    ></motion.div>
                                </div>

                                <h4 className={`text-sm font-bold leading-tight text-center ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>{item.title}</h4>
                                <p className={`text-[10px] font-medium mt-1 uppercase tracking-wider text-center ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Floating Action Buttons with Hover Labels */}
            <div className="fixed left-4 md:left-8 bottom-6 md:bottom-10 flex flex-col gap-3 md:gap-4 z-50">

                <div className="group relative">
                    <div className="p-3 md:p-4 bg-[#e1c693] rounded-lg text-white shadow-xl cursor-pointer hover:bg-[#a78b54] transition-colors flex items-center justify-center">
                        <Icons.Phone />
                    </div>
                    <div className="absolute left-full bottom-1/2 translate-y-1/2 ml-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
                        <div className={`${isDark ? 'bg-gray-900 border-[#e1c693]/30 text-[#e1c693]' : 'bg-[#1a1a1a] border-[#e1c693]/40 text-[#e1c693]'} text-xs font-bold px-3 py-2 rounded-md shadow-lg whitespace-nowrap border`}>
                            +1-(877) 476-8827
                        </div>
                    </div>
                </div>
                
                <div className="group relative">
                    <div className={`p-3 md:p-4 border rounded-lg shadow-xl cursor-pointer transition-colors flex items-center justify-center ${isDark ? 'bg-[#0a0a0a] border-[#e1c693] text-[#e1c693] hover:bg-[#e1c693]/10' : 'bg-[#1a1a1a] border-[#e1c693] text-[#e1c693] hover:bg-[#e1c693]/20'}`}>
                        <Icons.Contact />
                    </div>
                    <div className="absolute left-full bottom-1/2 translate-y-1/2 ml-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
                        <div className={`${isDark ? 'bg-gray-900 border-[#e1c693]/30 text-[#e1c693]' : 'bg-[#1a1a1a] border-[#e1c693]/40 text-[#e1c693]'} text-xs font-bold px-3 py-2 rounded-md shadow-lg whitespace-nowrap border`}>
                            info@AM-Verify.com
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default LandingPage;