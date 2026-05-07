"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

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

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,146,60,0.06)_0%,transparent_50%)]" />
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tight"
          >
            See Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-amber-300">
              Packages
            </span>
          </motion.h1>
        </div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-linear-to-r from-orange-500 to-amber-500 rounded-full"
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {packagesData[activeTab].map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl bg-white/3 border border-white/10 backdrop-blur-sm overflow-hidden flex flex-col"
              >
                {/* Gradient top border on hover */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-orange-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full p-6">
                  {/* Package Name */}
                  <h3 className="text-white text-lg font-bold text-center mb-4">
                    {pkg.name}
                  </h3>

                  {/* Price */}
                  <div className="text-center mb-2">
                    <span className="text-gray-400 text-xs uppercase tracking-wider">
                      Starting at
                    </span>
                  </div>
                  <div className="text-center mb-3">
                    <span className="text-3xl md:text-4xl font-black text-white">
                      {pkg.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-xs text-center mb-6 leading-relaxed min-h-10">
                    {pkg.description}
                  </p>

                  {/* CTA Button */}
                  <button className="w-full py-3 rounded-lg bg-linear-to-r from-orange-500 to-amber-500 text-white font-bold text-sm hover:from-orange-400 hover:to-amber-400 transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 flex items-center justify-center gap-2 mb-6">
                    Start
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Features */}
                  <div className="flex-1 space-y-3">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                        <span className="text-gray-300 text-xs leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}