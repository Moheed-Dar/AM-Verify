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
  MapPin,
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

  const contactInfo = [
    { icon: Phone, text: "+1-(877) 476-6927", href: "tel:+18774766927" },
    { icon: Mail, text: "info@AM-Verify.com", href: "mailto:info@AM-Verify.com" },
    { icon: MapPin, text: "New York, USA", href: "#" },
  ];

  return (
    <section id='contact' className="relative bg-[#050505] py-20 md:py-28 overflow-hidden">
      {/* Background Grid & Ambient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_left,_rgba(225,198,147,0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(225,198,147,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(225,198,147,0.2) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 w-full">
        
        {/* Main Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-stretch">
          
          {/* Left Side: Contact Info Panel with Background Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 md:p-10 overflow-hidden h-full min-h-[500px] flex flex-col justify-end group">
              
              {/* Background Image */}
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" 
                alt="Team Collaboration" 
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />

              {/* Heavy Overlays for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/30"></div>
              <div className="absolute inset-0 bg-[#e1c693]/10 mix-blend-overlay pointer-events-none"></div>

              {/* Decorative Number */}
              <div className="absolute top-6 right-6 text-[80px] font-black text-white/[0.05] leading-none pointer-events-none select-none">01</div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-[#e1c693]/30 mb-6">
                  <Sparkles className="w-4 h-4 text-[#e1c693]" />
                  <span className="text-[#e1c693] text-xs font-bold uppercase tracking-wider">Contact Us</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight tracking-tight drop-shadow-lg">
                  Let's build something{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54]">
                    great together.
                  </span>
                </h2>

                <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-sm drop-shadow-md">
                  Have a project in mind? Let's chat about your business, your goals, and how we can help you grow.
                </p>

                {/* Contact Details - Floating above image */}
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.a 
                      key={index}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-center gap-4 group/item"
                    >
                      <div className="w-10 h-10 rounded-lg bg-black/30 backdrop-blur-md border border-white/10 flex items-center justify-center text-gray-300 group-hover/item:text-[#e1c693] group-hover/item:border-[#e1c693]/50 transition-all duration-300">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <span className="text-gray-200 text-sm font-medium group-hover/item:text-white transition-colors drop-shadow-sm">
                        {item.text}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: The Form Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 relative"
          >
            <div className="relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/50 h-full">
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e1c693]/50 focus:ring-1 focus:ring-[#e1c693]/20 transition-all duration-300 text-sm"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e1c693]/50 focus:ring-1 focus:ring-[#e1c693]/20 transition-all duration-300 text-sm"
                    />
                  </div>
                </div>

                {/* Phone & Business */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e1c693]/50 focus:ring-1 focus:ring-[#e1c693]/20 transition-all duration-300 text-sm"
                    />
                  </div>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Business Name"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e1c693]/50 focus:ring-1 focus:ring-[#e1c693]/20 transition-all duration-300 text-sm"
                    />
                  </div>
                </div>

                {/* Website */}
                <div className="relative">
                  <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
                  <input
                    type="url"
                    placeholder="Website URL (http://)"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full pl-11 pr-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e1c693]/50 focus:ring-1 focus:ring-[#e1c693]/20 transition-all duration-300 text-sm"
                  />
                </div>

                {/* Services Checkboxes - Modern Chip Style */}
                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5">
                  <p className="text-white font-semibold mb-4 text-xs uppercase tracking-wider flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-[#e1c693]" /> Services Interested In
                  </p>
                  <div className="flex flex-wrap gap-2 ">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => handleServiceChange(service)}
                        className={`px-4 py-2 cursor-pointer rounded-full text-xs font-medium border transition-all duration-300 ${
                          formData.services.includes(service)
                            ? "bg-[#e1c693]/10 border-[#e1c693]/40 text-[#e1c693]"
                            : "bg-white/[0.02] border-white/10 text-gray-400 hover:bg-white/[0.05] hover:text-gray-200"
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gray-600 pointer-events-none" />
                  <textarea
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full pl-11 pr-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#e1c693]/50 focus:ring-1 focus:ring-[#e1c693]/20 transition-all duration-300 resize-none text-sm"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full sm:w-auto sm:min-w-[250px] py-3.5 px-8 bg-gradient-to-r from-[#e1c693] to-[#a78b54] text-black font-bold text-sm rounded-xl overflow-hidden shadow-lg shadow-[#e1c693]/20 hover:shadow-[#e1c693]/40 transition-all duration-300"
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <span className="relative cursor-pointer z-10 flex items-center justify-center gap-2">
                      Send Message
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </motion.button>

                  <p className="text-gray-500 text-xs text-center sm:text-left">
                    By clicking submit you agree to our{" "}
                    <a href="/privacy-policy" className="text-[#e1c693] hover:text-white underline decoration-[#e1c693]/30 hover:decoration-white underline-offset-4 transition-all">
                      Privacy policy
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}