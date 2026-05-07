"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Code2,
  ShoppingBag,
  Palette,
  Smartphone,
  Play,
  Globe,
  Heart,
  ArrowUp,
  Share2,
  MessageCircle,
  User,
  Box,
  Monitor,
  Terminal
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const servicesLinks = [
    { name: "Website Development", href: "/services/web-development", icon: Code2 },
    { name: "Ecommerce Solutions", href: "/services/ecommerce", icon: ShoppingBag },
    { name: "Branding & Identity", href: "/services/branding", icon: Palette },
    { name: "Mobile Applications", href: "/services/mobile-apps", icon: Smartphone },
    { name: "Video Animation", href: "/services/animation", icon: Play },
    { name: "SEO Optimization", href: "/services/seo", icon: Globe },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Case Studies", href: "/portfolio" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "/support" },
    { name: "FAQs", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Sitemap", href: "/sitemap" },
  ];

  const quickLinks = [
    { name: "Get a Quote", href: "/quote" },
    { name: "Free Consultation", href: "/consultation" },
    { name: "Pricing", href: "/pricing" },
    { name: "Affiliate Program", href: "/affiliate" },
    { name: "Partner With Us", href: "/partners" },
    { name: "Resources", href: "/resources" },
  ];

  // Using generic icons to avoid build errors with brand icons in some lucide versions
  // If you want brand icons, update lucide-react: npm install lucide-react@latest
  const socialLinks = [
    { icon: Share2, href: "#", label: "Facebook" },
    { icon: MessageCircle, href: "#", label: "Twitter" },
    { icon: User, href: "#", label: "Instagram" },
    { icon: Globe, href: "#", label: "LinkedIn" },
    { icon: Terminal, href: "#", label: "GitHub" },
    { icon: Monitor, href: "#", label: "YouTube" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(251,146,60,0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(251,146,60,0.05)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Top Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="relative z-10">
        {/* ===== NEWSLETTER SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-b border-white/10"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Stay Updated with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                    Our News
                  </span>
                </h3>
                <p className="text-gray-400 text-sm">
                  Subscribe to our newsletter and get the latest updates delivered to your inbox.
                </p>
              </div>
              
              <div className="flex w-full lg:w-auto gap-3">
                <div className="relative flex-1 lg:w-80">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/10 transition-all duration-300"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 whitespace-nowrap"
                >
                  <Send className="w-4 h-4" />
                  <span className="hidden sm:inline">Subscribe</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== MAIN FOOTER ===== */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8"
          >
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <a href="/" className="inline-flex items-center gap-3 mb-6 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">M</span>
                  </div>
                  <motion.div
                    className="absolute -bottom-1 -right-1 w-3 h-3 bg-orange-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div>
                  <span className="text-2xl font-bold text-white">
                    AM-Verify<span className="text-orange-500">.</span>
                  </span>
                  <p className="text-[10px] text-white/50 uppercase tracking-[0.2em]">Agency</p>
                </div>
              </a>

              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                We craft digital experiences that drive growth, engagement, and lasting impact. 
                Let's build something extraordinary together.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <a
                  href="tel:+18774766927"
                  className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-all duration-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm">+1-(877) 476-6927</span>
                </a>

                <a
                  href="mailto:info@AM-Verify.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors duration-300 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-all duration-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">info@AM-Verify.com</span>
                </a>

                <div className="flex items-center gap-3 text-gray-400 group">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm">New York, USA</span>
                </div>
              </div>
            </motion.div>

            {/* Services Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-bold text-base mb-5 relative inline-block">
                Services
                <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
              </h4>
              <ul className="space-y-3">
                {servicesLinks.map((link, index) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {/* Animated Bullet Point */}
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0"
                        whileHover={{ scale: 1.5 }}
                      />
                      <motion.span
                        className="text-sm"
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {link.name}
                      </motion.span>
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-orange-400" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-bold text-base mb-5 relative inline-block">
                Company
                <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
              </h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0"
                        whileHover={{ scale: 1.5 }}
                      />
                      <motion.span
                        className="text-sm"
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {link.name}
                      </motion.span>
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-orange-400" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-bold text-base mb-5 relative inline-block">
                Support
                <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
              </h4>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0"
                        whileHover={{ scale: 1.5 }}
                      />
                      <motion.span
                        className="text-sm"
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {link.name}
                      </motion.span>
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-orange-400" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-bold text-base mb-5 relative inline-block">
                Quick Links
                <span className="absolute -bottom-1 left-0 w-8 h-[2px] bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0"
                        whileHover={{ scale: 1.5 }}
                      />
                      <motion.span
                        className="text-sm"
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {link.name}
                      </motion.span>
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-orange-400" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* ===== SOCIAL & BOTTOM BAR ===== */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-orange-500/40 hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </motion.div>

              {/* Copyright */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-500 text-sm text-center md:text-right"
              >
                © 2026{" "}
                <span className="text-white font-semibold">AM-Verify.</span>{" "}
                All rights reserved. Made with{" "}
                <Heart className="w-3.5 h-3.5 inline text-orange-500 fill-orange-500 animate-pulse" />{" "}
                in USA
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SCROLL TO TOP BUTTON ===== */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-shadow duration-300 group"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      </motion.button>
    </footer>
  );
}