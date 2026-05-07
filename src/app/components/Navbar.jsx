"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setMounted(true);

        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Body scroll lock when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Work", href: "#work" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" },
    ];

    // Animation variants
    const menuVariants = {
        closed: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
        open: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const linkVariants = {
        closed: {
            x: 50,
            opacity: 0,
        },
        open: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
            },
        },
    };

    const backdropVariants = {
        closed: {
            opacity: 0,
            transition: {
                duration: 0.3,
            },
        },
        open: {
            opacity: 1,
            transition: {
                duration: 0.3,
            },
        },
    };

    const bottomSectionVariants = {
        closed: {
            y: 30,
            opacity: 0,
        },
        open: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.6,
                type: "spring",
                stiffness: 300,
                damping: 30,
            },
        },
    };

    // Hamburger line animations
    const topLineVariants = {
        closed: { rotate: 0, y: 0 },
        open: { rotate: 45, y: 8 },
    };

    const middleLineVariants = {
        closed: { opacity: 1, x: 0 },
        open: { opacity: 0, x: -20 },
    };

    const bottomLineVariants = {
        closed: { rotate: 0, y: 0 },
        open: { rotate: -45, y: -8 },
    };

    if (!mounted) {
        return (
            <>
                {/* Top Bar */}
                <div className="fixed top-0 left-0 right-0 z-60 h-10 overflow-hidden">
                    <div className="absolute inset-0 animate-rgb-shift" />
                    <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <span className="text-white/90 text-xs flex items-center gap-1.5">
                                <Phone className="w-3 h-3" />
                                +1-(877) 476-8927
                            </span>
                            <span className="text-white/90 text-xs hidden sm:flex items-center gap-1.5">
                                <Mail className="w-3 h-3" />
                                info@Offical.com
                            </span>
                        </div>
                        <span className="text-white/90 text-xs hidden md:flex items-center gap-1.5">
                            <MapPin className="w-3 h-3" />
                            New York, USA
                        </span>
                    </div>
                </div>
                {/* Main Navbar */}
                <nav className="fixed top-10 left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-xl z-50 border-b border-white/10">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-white tracking-tight">
                            <span className="text-orange-500">AM-Verify</span>.
                        </h1>
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <span
                                    key={link.name}
                                    className="text-white/80 text-sm font-medium"
                                >
                                    {link.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </nav>
            </>
        );
    }

    return (
        <>
            {/* ===== ANIMATED RGB TOP BAR ===== */}
            <motion.div
                initial={{ y: -40 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 left-0 right-0 z-60 h-10 overflow-hidden"
            >
                {/* Animated RGB Background */}
                <div className="absolute inset-0 animate-rgb-gradient" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <motion.a
                            href="tel:+18774768927"
                            className="text-white/90 text-xs flex items-center gap-1.5 hover:text-white transition-colors"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Phone className="w-3 h-3" />
                            <span className="hidden sm:inline">+1-(877) 476-8927</span>
                            <span className="sm:hidden">Call Us</span>
                        </motion.a>
                        <motion.a
                            href="mailto:info@AM-Verify.com"
                            className="text-white/90 text-xs hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Mail className="w-3 h-3" />
                            info@AM-Verify.com
                        </motion.a>
                    </div>
                    <motion.span
                        className="text-white/90 text-xs hidden md:flex items-center gap-1.5"
                        whileHover={{ scale: 1.05 }}
                    >
                        <MapPin className="w-3 h-3" />
                        New York, USA
                    </motion.span>
                </div>
            </motion.div>

            {/* ===== MAIN NAVBAR ===== */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.1 }}
                className={`fixed top-10 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                        ? "bg-[#0a0a0a]/95 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-white/10"
                        : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <motion.a
                            href="#home"
                            className="flex items-center gap-2 group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <motion.div
                                className="relative"
                                whileHover={{ rotate: 12 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="w-10 h-10 bg-linear-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">M</span>
                                </div>
                                <motion.div
                                    className="absolute -bottom-1 -right-1 w-3 h-3 bg-orange-400 rounded-full"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                            </motion.div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-white tracking-tight leading-none whitespace-nowrap">
                                    AM-Verify<span className="text-orange-500">.</span>
                                </span>
                                <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-medium whitespace-nowrap">
                                    Agency
                                </span>
                            </div>
                        </motion.a>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 group overflow-hidden"
                                    whileHover={{ y: -2 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <span className="whitespace-nowrap">{link.name}</span>
                                    {/* RGB Hover Line - Left to Right */}
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-red-500 via-green-500 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-full" />
                                </motion.a>
                            ))}
                        </div>

                        {/* Desktop Right Side */}
                        <div className="hidden lg:flex items-center gap-4">
                            <motion.a
                                href="#contact"
                                className="px-6 py-2.5 text-white text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl whitespace-nowrap relative overflow-hidden"
                                style={{
                                    background: "linear-gradient(90deg, #ff0055, #00ffaa, #0066ff, #ff00aa, #ff0055)",
                                    backgroundSize: "300% 100%",
                                }}
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                whileHover={{
                                    y: -3,
                                    scale: 1.05,
                                    boxShadow: "0 12px 40px -8px rgba(255, 0, 85, 0.6)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Let&apos;s Talk
                            </motion.a>

                            <motion.a
                                href="#login"
                                className="px-6 py-2.5 border border-orange-500/50 text-orange-400 text-sm font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 hover:border-orange-500 whitespace-nowrap"
                                whileHover={{
                                    y: -2,
                                    backgroundColor: "rgba(249, 115, 22, 1)",
                                    color: "#ffffff",
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                LOGIN
                            </motion.a>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle Menu"
                            whileTap={{ scale: 0.9 }}
                        >
                            <div className="relative w-6 h-5 flex flex-col justify-between">
                                <motion.span
                                    className="w-6 h-0.5 bg-white rounded-full origin-left"
                                    variants={topLineVariants}
                                    animate={isOpen ? "open" : "closed"}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                />
                                <motion.span
                                    className="w-6 h-0.5 bg-white rounded-full"
                                    variants={middleLineVariants}
                                    animate={isOpen ? "open" : "closed"}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                />
                                <motion.span
                                    className="w-6 h-0.5 bg-white rounded-full origin-left"
                                    variants={bottomLineVariants}
                                    animate={isOpen ? "open" : "closed"}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                />
                            </div>
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 z-40 lg:hidden bg-black/80 backdrop-blur-xl"
                            variants={backdropVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Menu Panel - Right to Left Slide */}
                        <motion.div
                            className="fixed top-0 right-0 h-full w-full max-w-sm bg-[#0f0f0f] border-l border-white/10 shadow-2xl z-40 lg:hidden"
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                        >
                            <div className="flex flex-col h-full pt-28 pb-8 px-8">
                                {/* Navigation Links with Stagger Animation */}
                                <motion.div
                                    className="flex flex-col gap-2"
                                    variants={menuVariants}
                                >
                                    {navLinks.map((link, index) => (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="group flex items-center justify-between py-4 px-4 rounded-xl text-lg font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300 overflow-hidden"
                                            variants={linkVariants}
                                            whileHover={{
                                                x: 10,
                                                backgroundColor: "rgba(255,255,255,0.05)",
                                            }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <span className="relative whitespace-nowrap">
                                                {link.name}
                                                {/* Mobile RGB Hover Line */}
                                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-red-500 via-green-500 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out rounded-full" />
                                            </span>
                                            <motion.span
                                                className="text-orange-500 text-sm"
                                                initial={{ opacity: 0, x: -10 }}
                                                whileHover={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                →
                                            </motion.span>
                                        </motion.a>
                                    ))}
                                </motion.div>

                                {/* Mobile Bottom Section */}
                                <motion.div
                                    className="mt-auto pt-8 border-t border-white/10"
                                    variants={bottomSectionVariants}
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                >
                                    <motion.a
                                        href="tel:+18774768927"
                                        className="flex items-center gap-3 text-white/60 hover:text-white transition-colors mb-6"
                                        whileHover={{ x: 5 }}
                                    >
                                        <motion.div
                                            className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center"
                                            whileHover={{
                                                scale: 1.1,
                                                backgroundColor: "rgba(249, 115, 22, 0.3)",
                                            }}
                                        >
                                            <Phone className="w-4 h-4 text-orange-500" />
                                        </motion.div>
                                        <span className="text-sm font-medium whitespace-nowrap">
                                            +1-(877) 476-8927
                                        </span>
                                    </motion.a>

                                    <div className="flex flex-col gap-3">
                                        <motion.a
                                            href="#contact"
                                            onClick={() => setIsOpen(false)}
                                            className="w-full py-3.5 bg-linear-to-r from-orange-500 to-orange-600 text-white text-center font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/20 whitespace-nowrap"
                                            whileHover={{
                                                scale: 1.02,
                                                boxShadow:
                                                    "0 10px 40px -10px rgba(249, 115, 22, 0.5)",
                                            }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Let&apos;s Talk
                                        </motion.a>
                                        <motion.a
                                            href="#login"
                                            onClick={() => setIsOpen(false)}
                                            className="w-full py-3.5 border border-orange-500/30 text-orange-400 text-center font-semibold rounded-xl hover:bg-orange-500/10 transition-all duration-300 whitespace-nowrap"
                                            whileHover={{
                                                scale: 1.02,
                                                backgroundColor: "rgba(249, 115, 22, 0.1)",
                                            }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            LOGIN
                                        </motion.a>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* ===== GLOBAL CSS FOR RGB ANIMATION ===== */}
            <style jsx global>{`
        @keyframes rgb-gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-rgb-gradient {
          background: linear-gradient(
            -45deg,
            #ee7752,
            #e73c7e,
            #23a6d5,
            #23d5ab,
            #ff0000,
            #00ff00,
            #0000ff,
            #ee7752
          );
          background-size: 400% 400%;
          animation: rgb-gradient 6s ease infinite;
        }
      `}</style>
        </>
    );
}