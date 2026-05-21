"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Check, ArrowRight, Sparkles, Crown } from "lucide-react";

const packagesData = {
  "Web Design": [
    {
      name: "Basic",
      price: "$249",
      description: "Perfect for small businesses and personal portfolios.",
      features: [
        "Custom Logo Design",
        "1 Page Website",
        "Mobile Responsive",
        "Contact Form",
        "SEO Meta Tags",
      ],
    },
    {
      name: "Standard",
      price: "$599",
      description: "Ideal for growing businesses that need more pages.",
      features: [
        "Custom Logo Design",
        "Up to 5 Pages",
        "Mobile Responsive",
        "Contact Form",
        "SEO Meta Tags",
        "Social Media Integration",
        "Google Analytics",
      ],
    },
    {
      name: "Premium",
      price: "$999",
      description: "Complete web solution with advanced features.",
      features: [
        "Custom Logo Design",
        "Up to 10 Pages",
        "Mobile Responsive",
        "Contact Form",
        "SEO Optimization",
        "Social Media Integration",
        "Google Analytics",
        "CMS Integration",
        "SSL Certificate",
      ],
    },
    {
      name: "Enterprise",
      price: "$1,999",
      description: "For large organizations needing custom solutions.",
      features: [
        "Premium Logo & Branding",
        "Unlimited Pages",
        "Mobile Responsive",
        "Advanced Contact Forms",
        "Full SEO Suite",
        "Social Media Integration",
        "Google Analytics + Tracking",
        "Custom CMS",
        "SSL Certificate",
        "Priority Support",
      ],
    },
  ],
  Ecommerce: [
    {
      name: "Basic Store",
      price: "$499",
      description: "Start selling online with essential ecommerce features.",
      features: [
        "Up to 10 Products",
        "Payment Gateway",
        "Mobile Responsive",
        "Basic SEO",
        "Shopping Cart",
        "Order Management",
      ],
    },
    {
      name: "Standard Store",
      price: "$899",
      description: "Scale your online business with more products.",
      features: [
        "Up to 50 Products",
        "Payment Gateway",
        "Mobile Responsive",
        "Advanced SEO",
        "Shopping Cart",
        "Order Management",
        "Inventory Management",
        "Email Notifications",
      ],
    },
    {
      name: "Premium Store",
      price: "$1,499",
      description: "Full-featured online store with advanced tools.",
      features: [
        "Unlimited Products",
        "Multiple Payment Gateways",
        "Mobile Responsive",
        "Full SEO Suite",
        "Shopping Cart",
        "Order Management",
        "Inventory Management",
        "Email Automation",
        "Discount Coupons",
        "Analytics Dashboard",
      ],
    },
    {
      name: "Enterprise Store",
      price: "$2,999",
      description: "Large-scale ecommerce with custom integrations.",
      features: [
        "Unlimited Products",
        "Multiple Payment Gateways",
        "Custom Checkout",
        "Full SEO Suite",
        "Shopping Cart",
        "Order Management",
        "Inventory Management",
        "Email Automation",
        "Discount & Loyalty Programs",
        "Advanced Analytics",
        "Multi-Currency Support",
        "API Integrations",
      ],
    },
  ],
  "Video Animation": [
    {
      name: "Basic",
      price: "$199",
      description: "Simple animated videos for social media.",
      features: [
        "30 Second Video",
        "Script Writing",
        "Voice Over",
        "Background Music",
        "2 Revisions",
        "HD 1080p Delivery",
      ],
    },
    {
      name: "Standard",
      price: "$499",
      description: "Professional explainer and promo videos.",
      features: [
        "60 Second Video",
        "Script Writing",
        "Voice Over",
        "Background Music",
        "5 Revisions",
        "HD 1080p Delivery",
        "Storyboard",
        "Character Animation",
      ],
    },
    {
      name: "Premium",
      price: "$899",
      description: "High-quality 3D and motion graphics.",
      features: [
        "90 Second Video",
        "Script Writing",
        "Professional Voice Over",
        "Premium Music",
        "Unlimited Revisions",
        "4K Delivery",
        "Storyboard",
        "Character Animation",
        "3D Elements",
        "Motion Graphics",
      ],
    },
    {
      name: "Enterprise",
      price: "$1,999",
      description: "Complete video production package.",
      features: [
        "120 Second Video",
        "Script & Concept",
        "Professional Voice Over",
        "Licensed Music",
        "Unlimited Revisions",
        "4K Delivery",
        "Storyboard & Concept Art",
        "Character Animation",
        "3D Animation",
        "Motion Graphics",
        "Multiple Formats",
        "Social Media Cuts",
      ],
    },
  ],
  SEO: [
    {
      name: "Basic",
      price: "$199",
      description: "Foundation SEO for small businesses.",
      features: [
        "Keyword Research",
        "On-Page SEO (5 pages)",
        "Meta Tags Optimization",
        "Google My Business",
        "Monthly Report",
      ],
    },
    {
      name: "Standard",
      price: "$499",
      description: "Comprehensive SEO for medium businesses.",
      features: [
        "Advanced Keyword Research",
        "On-Page SEO (15 pages)",
        "Meta Tags Optimization",
        "Google My Business",
        "Backlink Building (20/month)",
        "Content Optimization",
        "Monthly Report",
        "Competitor Analysis",
      ],
    },
    {
      name: "Premium",
      price: "$899",
      description: "Aggressive SEO strategy for growth.",
      features: [
        "Advanced Keyword Research",
        "On-Page SEO (Unlimited)",
        "Meta Tags Optimization",
        "Google My Business",
        "Backlink Building (50/month)",
        "Content Writing (4 blogs)",
        "Monthly Report",
        "Competitor Analysis",
        "Technical SEO Audit",
        "Local SEO",
      ],
    },
    {
      name: "Enterprise",
      price: "$1,499",
      description: "Enterprise-level SEO with full management.",
      features: [
        "Advanced Keyword Research",
        "On-Page SEO (Unlimited)",
        "Meta Tags Optimization",
        "Google My Business",
        "Backlink Building (100/month)",
        "Content Writing (8 blogs)",
        "Weekly Report",
        "Competitor Analysis",
        "Technical SEO Audit",
        "Local + International SEO",
        "Dedicated SEO Manager",
        "Schema Markup",
      ],
    },
  ],
  "Combo Packages": [
    {
      name: "Basic Combo",
      price: "$445",
      description: "Suitable for potential super-startups and brand revamps for companies.",
      features: [
        "5 Custom Logo Design Concepts",
        "By 2 Designers",
        "Icon Design",
        "Business Card, Letterhead, Envelope",
        "1 Page Website",
        "Social Media Kit",
      ],
    },
    {
      name: "Startup Combo",
      price: "$995",
      description: "Ideal for startups needing a complete digital presence.",
      features: [
        "Unlimited Logo Design Concepts",
        "Social Media Design",
        "Mobile Responsive",
        "3 Dedicated Designers",
        "Up to 5 Pages Website",
        "SEO Setup",
        "Business Card & Letterhead",
      ],
    },
    {
      name: "Professional Combo",
      price: "$1,395",
      description: "Professional package for established businesses.",
      features: [
        "Unlimited Logo Concepts",
        "8 Dedicated Designers",
        "Icon Design",
        "2 Free Custom Stationary Designs",
        "Up to 10 Pages Website",
        "Full SEO Optimization",
        "Social Media Branding",
        "CMS Integration",
      ],
    },
    {
      name: "Corporate Combo",
      price: "$1,995",
      description: "Complete corporate solution for large organizations.",
      features: [
        "Unlimited Logo Concepts",
        "8 Dedicated Designers",
        "Icon Design",
        "2 Free Custom Stationary Designs",
        "Unlimited Pages Website",
        "Full SEO Suite",
        "Social Media Branding",
        "Custom CMS",
        "Priority Support",
        "SSL Certificate",
      ],
    },
  ],
};

const tabs = [
  "Web Design",
  "Ecommerce",
  "Video Animation",
  "SEO",
  "Combo Packages",
];

export default function Packages() {
  const [activeTab, setActiveTab] = useState("Combo Packages");
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
      <section className="relative overflow-hidden py-24 transition-colors duration-500 bg-[#050505]">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#e1c693]/30 rounded-full bg-[#e1c693]/5 mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#e1c693]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e1c693]">Pricing</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
              See Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54]">
                Packages
              </span>
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`relative overflow-hidden py-24 transition-colors duration-500 ${
        isDark ? "bg-[#050505]" : "bg-[#f8f9fa]"
      }`}
      suppressHydrationWarning
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(225,198,147,0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(225,198,147,0.05)_0%,_transparent_50%)]" />
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#e1c693]/30 rounded-full bg-[#e1c693]/5 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#e1c693]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e1c693]">Pricing</span>
          </div>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tight transition-colors duration-500 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            See Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54]">
              Packages
            </span>
          </h2>
          <p
            className={`mt-6 max-w-2xl mx-auto text-lg leading-relaxed transition-colors duration-500 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Transparent pricing tailored for businesses of all sizes. No hidden fees.
          </p>
        </motion.div>

        {/* Minimalist Underline Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`flex flex-wrap justify-center gap-4 md:gap-8 mb-16 border-b pb-4 transition-colors duration-500 ${
            isDark ? "border-white/10" : "border-gray-200"
          }`}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative flex items-center gap-2 text-sm font-semibold uppercase tracking-wider transition-colors duration-300 pb-2 ${
                activeTab === tab
                  ? "text-[#e1c693]"
                  : isDark
                  ? "text-gray-500 hover:text-gray-300"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activePackageTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e1c693]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </motion.div>

        {/* Packages Grid */}
        <AnimatePresence mode="sync">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start"
          >
            {packagesData[activeTab].map((pkg, index) => {
              const isFeatured = index === 2; // Making the 3rd package (Premium/Standard) the featured one

              return (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ y: -8 }}
                  className={`group relative flex flex-col rounded-3xl overflow-hidden border backdrop-blur-md transition-all duration-700 ${
                    isFeatured
                      ? isDark
                        ? "border-[#e1c693]/60 bg-gradient-to-b from-[#e1c693]/10 to-[#0a0a0a] shadow-[0_0_50px_rgba(225,198,147,0.15)] scale-[1.02] z-10"
                        : "border-[#e1c693]/60 bg-gradient-to-b from-[#e1c693]/20 to-white shadow-[0_0_50px_rgba(225,198,147,0.1)] scale-[1.02] z-10"
                      : isDark
                      ? "border-white/5 bg-[#0a0a0a] hover:border-[#e1c693]/30"
                      : "border-gray-200 bg-white hover:border-[#e1c693]/40 shadow-sm hover:shadow-xl"
                  }`}
                >
                  {/* Featured Badge */}
                  {isFeatured && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-[#e1c693] text-black rounded-full text-xs font-bold uppercase tracking-wider shadow-lg z-20">
                      <Crown className="w-3 h-3" /> Popular
                    </div>
                  )}

                  <div className="relative z-10 flex flex-col h-full p-8">
                    {/* Package Name */}
                    <h3
                      className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                        isFeatured
                          ? "text-[#e1c693]"
                          : isDark
                          ? "text-white group-hover:text-[#e1c693]"
                          : "text-gray-900 group-hover:text-[#a78b54]"
                      }`}
                    >
                      {pkg.name}
                    </h3>

                    {/* Description */}
                    <p className={`text-sm mb-6 leading-relaxed min-h-10 ${
                      isDark ? "text-gray-500" : "text-gray-500"
                    }`}>
                      {pkg.description}
                    </p>

                    {/* Price */}
                    <div className="mb-8">
                      <span className={`text-xs uppercase tracking-widest ${
                        isDark ? "text-gray-600" : "text-gray-400"
                      }`}>
                        Starting at
                      </span>
                      <div className={`text-5xl font-black tracking-tight ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}>
                        {pkg.price}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 mb-8 transition-all duration-300 ${
                        isFeatured
                          ? "bg-gradient-to-r from-[#e1c693] to-[#a78b54] text-black shadow-lg shadow-[#e1c693]/20 hover:shadow-[#e1c693]/40"
                          : isDark
                          ? "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-[#e1c693]/40 hover:text-[#e1c693]"
                          : "bg-gray-100 border border-gray-300 text-gray-700 hover:bg-white hover:border-[#a78b54]/40 hover:text-[#a78b54]"
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    {/* Features */}
                    <div className="flex-1 space-y-4">
                      {pkg.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div
                            className={`mt-1 rounded-full p-0.5 transition-colors duration-300 ${
                              isFeatured
                                ? "bg-[#e1c693]/20 text-[#e1c693]"
                                : isDark
                                ? "bg-white/10 text-gray-500 group-hover:bg-[#e1c693]/10 group-hover:text-[#e1c693]"
                                : "bg-gray-200 text-gray-400 group-hover:bg-[#a78b54]/10 group-hover:text-[#a78b54]"
                            }`}
                          >
                            <Check className="w-3 h-3" />
                          </div>
                          <span
                            className={`text-sm leading-snug ${
                              isFeatured
                                ? isDark ? "text-gray-300" : "text-gray-700"
                                : isDark ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}