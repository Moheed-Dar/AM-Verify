"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  User, 
  Building2, 
  Globe, 
  MessageSquare, 
  Check, 
  Send,
  Sparkles,
  ArrowRight,
  Zap
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    website: "",
    services: [],
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);

  const services = [
    "Website Development",
    "Ecommerce",
    "Web Applications",
    "Branding",
    "Animations",
    "Mobile Applications",
  ];

  const handleServiceChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

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
    <section className="relative bg-black min-h-screen py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(251,146,60,0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(251,146,60,0.05)_0%,_transparent_50%)]" />
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

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-semibold">
              Get In Touch
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            We're ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              listen...
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed mb-4">
            Leave your details below or call us on{" "}
            <a
              href="tel:+18774766927"
              className="text-orange-400 hover:text-orange-300 font-semibold underline decoration-orange-500/30 hover:decoration-orange-400 underline-offset-4 transition-all"
            >
              +1-(877) 476-6927
            </a>{" "}
            and let's chat about your business, your goals, and how we can help you grow.
          </p>
          
          <p className="text-gray-500 text-sm">No obligation. No cost.</p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group relative">
                <div
                  className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                    focusedField === "name"
                      ? "bg-gradient-to-r from-orange-500/20 to-amber-500/20"
                      : ""
                  }`}
                />
                <div className="relative flex items-center">
                  <User
                    className={`absolute left-4 w-5 h-5 transition-colors duration-300 ${
                      focusedField === "name" ? "text-orange-400" : "text-gray-500"
                    }`}
                  />
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-4 py-4 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/10 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="group relative">
                <div
                  className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                    focusedField === "email"
                      ? "bg-gradient-to-r from-orange-500/20 to-amber-500/20"
                      : ""
                  }`}
                />
                <div className="relative flex items-center">
                  <Mail
                    className={`absolute left-4 w-5 h-5 transition-colors duration-300 ${
                      focusedField === "email" ? "text-orange-400" : "text-gray-500"
                    }`}
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-4 py-4 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/10 transition-all duration-300"
                  />
                </div>
              </div>
            </motion.div>

            {/* Phone & Business */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group relative">
                <div
                  className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                    focusedField === "phone"
                      ? "bg-gradient-to-r from-orange-500/20 to-amber-500/20"
                      : ""
                  }`}
                />
                <div className="relative flex items-center">
                  <Phone
                    className={`absolute left-4 w-5 h-5 transition-colors duration-300 ${
                      focusedField === "phone" ? "text-orange-400" : "text-gray-500"
                    }`}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-4 py-4 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/10 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="group relative">
                <div
                  className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                    focusedField === "business"
                      ? "bg-gradient-to-r from-orange-500/20 to-amber-500/20"
                      : ""
                  }`}
                />
                <div className="relative flex items-center">
                  <Building2
                    className={`absolute left-4 w-5 h-5 transition-colors duration-300 ${
                      focusedField === "business" ? "text-orange-400" : "text-gray-500"
                    }`}
                  />
                  <input
                    type="text"
                    placeholder="Enter Business Name"
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    onFocus={() => setFocusedField("business")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-4 py-4 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/10 transition-all duration-300"
                  />
                </div>
              </div>
            </motion.div>

            {/* Website */}
            <motion.div variants={itemVariants}>
              <div className="group relative">
                <div
                  className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                    focusedField === "website"
                      ? "bg-gradient-to-r from-orange-500/20 to-amber-500/20"
                      : ""
                  }`}
                />
                <div className="relative flex items-center">
                  <Globe
                    className={`absolute left-4 w-5 h-5 transition-colors duration-300 ${
                      focusedField === "website" ? "text-orange-400" : "text-gray-500"
                    }`}
                  />
                  <input
                    type="url"
                    placeholder="http://"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    onFocus={() => setFocusedField("website")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-4 py-4 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/10 transition-all duration-300"
                  />
                </div>
              </div>
            </motion.div>

            {/* Services Checkboxes */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6">
                <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  Services Interested In
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((service, index) => (
                    <motion.label
                      key={service}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                        formData.services.includes(service)
                          ? "bg-orange-500/10 border border-orange-500/30"
                          : "hover:bg-white/[0.02] border border-transparent"
                      }`}
                    >
                      <div className="relative flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="peer sr-only"
                        />
                        <div className="w-5 h-5 rounded-md border-2 border-gray-600 peer-checked:border-orange-500 peer-checked:bg-orange-500 transition-all duration-300 flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                      <span
                        className={`text-sm transition-colors duration-300 ${
                          formData.services.includes(service)
                            ? "text-orange-400 font-medium"
                            : "text-gray-400"
                        }`}
                      >
                        {service}
                      </span>
                    </motion.label>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Message Textarea */}
            <motion.div variants={itemVariants}>
              <div className="group relative">
                <div
                  className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                    focusedField === "message"
                      ? "bg-gradient-to-r from-orange-500/20 to-amber-500/20"
                      : ""
                  }`}
                />
                <div className="relative">
                  <MessageSquare
                    className={`absolute left-4 top-4 w-5 h-5 transition-colors duration-300 ${
                      focusedField === "message" ? "text-orange-400" : "text-gray-500"
                    }`}
                  />
                  <textarea
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    className="w-full pl-12 pr-4 py-4 bg-white/[0.02] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/10 transition-all duration-300 resize-none"
                  />
                </div>
              </div>
            </motion.div>

            {/* Privacy Policy */}
            <motion.div variants={itemVariants}>
              <p className="text-gray-500 text-xs text-center">
                By clicking submit you agree to our{" "}
                <a
                  href="/privacy-policy"
                  className="text-orange-400 hover:text-orange-300 underline decoration-orange-500/30 hover:decoration-orange-400 underline-offset-4 transition-all"
                >
                  Privacy policy
                </a>
              </p>
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full sm:w-auto sm:min-w-[300px] py-4 px-8 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 text-white font-bold text-base rounded-xl overflow-hidden shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 mx-auto block"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300 -z-10" />

                {/* Particle effects */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-xl">
                  <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <span className="relative z-10 flex items-center  cursor-pointer justify-center gap-3">
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}