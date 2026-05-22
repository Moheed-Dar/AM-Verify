"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Heart,
  ArrowUp
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      return;
    }
    setIsSubscribing(true);
    // Add your newsletter subscription logic here
    console.log("Subscribing email:", email);
    setTimeout(() => {
      setEmail("");
      setIsSubscribing(false);
      alert("Thank you for subscribing!");
    }, 1000);
  };

  // Handle navigation for Home link
  const handleHomeClick = (e) => {
    e.preventDefault();
    if (pathname !== "/") {
      // If not on home page, navigate to home page
      router.push("/");
      // Small delay to ensure page loads then scroll
      setTimeout(() => {
        const homeSection = document.getElementById("home");
        if (homeSection) {
          homeSection.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
    } else {
      // If already on home page, just scroll to top
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const offsetTop = homeSection.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  // Quick Links Section
  const quickLinks = [
    { name: "Home", href: "/", isPageLink: true, isHashLink: false },
    { name: "Services", href: "/services", isPageLink: true, isHashLink: false },
    { name: "Contact", href: "/contact", isPageLink: true, isHashLink: false },
  ];

  const supportLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  // Get current theme (handle system theme)
  const currentTheme = !mounted ? "dark" : (theme === "system" ? systemTheme : theme);
  const isDark = currentTheme === "dark";

  return (
    <footer
      className={`relative overflow-hidden transition-colors duration-500 ${isDark ? "bg-[#020202]" : "bg-[#f8f9fa]"
        }`}
      suppressHydrationWarning
    >
      {/* Background Ambient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(225,198,147,0.06)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 opacity-[0.02]">
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

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12">

        {/* ===== MAIN FOOTER GRID ===== */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand & Contact Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-8 group">
              <img
                src="/images/img1.png"
                alt="AM-Verify Logo"
                className="h-12 w-12 object-contain rounded-lg"
              />
              <div>
                <span className={`text-2xl font-black tracking-tighter text-[#e1c693] transition-colors duration-500`}>
                  FlashTeck<span className="text-[#b08d57]">.</span>
                </span>
                <p className={`text-[10px] uppercase tracking-[0.2em] transition-colors duration-500 ${isDark ? "text-gray-500" : "text-gray-600"
                  }`}>Digital Agency</p>
              </div>
            </Link>

            <p className={`text-sm leading-relaxed mb-8 max-w-xs transition-colors duration-500 ${isDark ? "text-gray-400" : "text-gray-600"
              }`}>
              We craft digital experiences that drive growth, engagement, and lasting impact for brands worldwide.
            </p>

            <div className="space-y-4">
              <a href="tel:+18774766927" className={`flex items-center gap-4 transition-colors group ${isDark ? "text-gray-400 hover:text-[#e1c693]" : "text-gray-600 hover:text-[#a78b54]"
                }`}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${isDark
                    ? "bg-white/[0.03] border border-white/10 group-hover:border-[#e1c693]/30"
                    : "bg-white border border-gray-200 group-hover:border-[#a78b54]/30"
                  }`}>
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+1 (831) 207-4991</span>
              </a>
              <a href="mailto:info@AM-Verify.com" className={`flex items-center gap-4 transition-colors group ${isDark ? "text-gray-400 hover:text-[#e1c693]" : "text-gray-600 hover:text-[#a78b54]"
                }`}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${isDark
                    ? "bg-white/[0.03] border border-white/10 group-hover:border-[#e1c693]/30"
                    : "bg-white border border-gray-200 group-hover:border-[#a78b54]/30"
                  }`}>
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">info@flashteck.com</span>
              </a>
              <div className={`flex items-center gap-4 ${isDark ? "text-gray-400" : "text-gray-600"
                }`}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isDark ? "bg-white/[0.03] border border-white/10" : "bg-white border border-gray-200"
                  }`}>
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">New York, USA</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className={`font-bold text-sm uppercase tracking-widest mb-8 flex items-center gap-3 transition-colors duration-500 ${isDark ? "text-white" : "text-gray-900"
              }`}>
              <span className="w-8 h-[1px] bg-[#e1c693] inline-block"></span> Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.name === "Home" ? (
                    <a
                      href={link.href}
                      onClick={handleHomeClick}
                      className={`hover:text-[#e1c693] transition-colors text-sm flex items-center gap-2 group cursor-pointer ${isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                      <span className={`w-1 h-1 rounded-full transition-colors ${isDark ? "bg-gray-600 group-hover:bg-[#e1c693]" : "bg-gray-400 group-hover:bg-[#a78b54]"
                        }`}></span> {link.name}
                    </a>
                  ) : (
                    <Link href={link.href} className={`hover:text-[#e1c693] transition-colors text-sm flex items-center gap-2 group ${isDark ? "text-gray-400" : "text-gray-600"
                      }`}>
                      <span className={`w-1 h-1 rounded-full transition-colors ${isDark ? "bg-gray-600 group-hover:bg-[#e1c693]" : "bg-gray-400 group-hover:bg-[#a78b54]"
                        }`}></span> {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="lg:col-span-2">
            <h4 className={`font-bold text-sm uppercase tracking-widest mb-8 flex items-center gap-3 transition-colors duration-500 ${isDark ? "text-white" : "text-gray-900"
              }`}>
              <span className="w-8 h-[1px] bg-[#e1c693] inline-block"></span> Support
            </h4>
            <ul className="space-y-4">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={`hover:text-[#e1c693] transition-colors text-sm flex items-center gap-2 group ${isDark ? "text-gray-400" : "text-gray-600"
                    }`}>
                    <span className={`w-1 h-1 rounded-full transition-colors ${isDark ? "bg-gray-600 group-hover:bg-[#e1c693]" : "bg-gray-400 group-hover:bg-[#a78b54]"
                      }`}></span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column - Right Side */}
          <div className="lg:col-span-4">
            <div className={`rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden group ${isDark
                ? "bg-white/[0.02] border border-white/10"
                : "bg-black/[0.01] border border-gray-200"
              }`}>
              {/* Ambient glow inside card */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#e1c693]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <h4 className={`font-bold text-base mb-2 relative z-10 ${isDark ? "text-white" : "text-gray-900"
                }`}>Newsletter</h4>
              <p className={`text-xs mb-5 leading-relaxed relative z-10 ${isDark ? "text-gray-500" : "text-gray-600"
                }`}>Subscribe to get the latest updates and insights directly to your inbox.</p>

              <form onSubmit={handleSubscribe} className="space-y-3 relative z-10">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className={`w-full px-4 py-3 rounded-lg text-sm transition-colors duration-300 focus:outline-none focus:border-[#e1c693]/50 ${isDark
                      ? "bg-white/5 border border-white/10 text-white placeholder-gray-500"
                      : "bg-gray-100 border border-gray-200 text-gray-900 placeholder-gray-400"
                    }`}
                  required
                  suppressHydrationWarning
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="w-full flex items-center cursor-pointer justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#e1c693] to-[#a78b54] text-black font-bold text-sm rounded-lg hover:shadow-lg hover:shadow-[#e1c693]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  suppressHydrationWarning
                >
                  {isSubscribing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ===== BOTTOM BAR ===== */}
        <div className={`border-t py-8 flex flex-col items-center  justify-center gap-4 transition-colors duration-500 ${isDark ? "border-white/5" : "border-gray-200"
          }`}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`text-xs text-center transition-colors cursor-none duration-500 ${isDark ? "text-gray-500" : "text-gray-600"
              }`}
            suppressHydrationWarning
          >
            © {new Date().getFullYear()} <span className={`font-semibold ${isDark ? "text-white" : "text-gray-900"
              }`}>Flashteck</span> All rights reserved. Flashteck is a subsidiary of Leadanics LLC.
          </motion.p>
        </div>
      </div>

      {/* ===== SCROLL TO TOP ===== */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed bottom-8 right-8 z-50 cursor-pointer w-12 h-12 rounded-full border border-[#e1c693]/50 flex items-center justify-center shadow-lg transition-all duration-300 group ${isDark
            ? "bg-[#020202] text-[#e1c693] shadow-black/50 hover:bg-[#e1c693] hover:text-black"
            : "bg-white text-[#a78b54] shadow-gray-300 hover:bg-[#a78b54] hover:text-white"
          }`}
        suppressHydrationWarning
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
      </motion.button>
    </footer>
  );
}