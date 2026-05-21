"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Swal from "sweetalert2";
import { Element } from "react-scroll";
import {
  Send,
  User,
  Mail,
  MessageSquare,
  Sparkles,
  Phone,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

// Dynamic Map Import
const ContactMap = dynamic(() => import("./ContactMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-[#0a0a0a] animate-pulse flex items-center justify-center text-gray-500">
      Loading Map...
    </div>
  ),
});

// Animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// ==========================================
// CONSENT OPTIONS CONFIG
// ==========================================
const consentOptions = {
  appointment: {
    label: "Appointment Notifications",
    text: "I Consent to receive appointment information, confirmations, and reminder notifications, alerts from Flashteck. Message frequency may vary. Message & data rates may apply. Text HELP to +1 (831) 207-4991 for assistance. Reply STOP to unsubscribe at any time.",
  },
  marketing: {
    label: "Marketing Messages",
    text: "I Consent to receive occasional marketing messages from Flashteck. Message frequency may vary. Message & data rates may apply. Text HELP to +1 (831) 207-4991 for assistance. Reply STOP to unsubscribe at any time.",
  },
};

const Contact = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    message: "",
  });

  const [selectedConsent, setSelectedConsent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const { name, email, phone, whatsapp, message } = formData;

    // ==========================================
    // ONLY EMAIL & CONSENT ARE REQUIRED
    // ==========================================
    if (!email.trim()) {
      Swal.fire({
        title: "Oops!",
        text: "Please provide your Email Address before submitting.",
        icon: "warning",
        confirmButtonColor: "#e1c693",
        background: mounted && theme === "dark" ? "#0a0a0a" : "#ffffff",
        color: mounted && theme === "dark" ? "#fff" : "#1a1a1a",
      });
      setIsSubmitting(false);
      return;
    }

    if (!selectedConsent) {
      Swal.fire({
        title: "Consent Required",
        text: "Please select one opt-in option before submitting.",
        icon: "warning",
        confirmButtonColor: "#e1c693",
        background: mounted && theme === "dark" ? "#0a0a0a" : "#ffffff",
        color: mounted && theme === "dark" ? "#fff" : "#1a1a1a",
      });
      setIsSubmitting(false);
      return;
    }

    // ==========================================
    // GET SELECTED CONSENT DETAILS
    // ==========================================
    const selectedConsentLabel =
      consentOptions[selectedConsent]?.label || "None";
    const selectedConsentText =
      consentOptions[selectedConsent]?.text || "No consent selected";

    // ==========================================
    // FALLBACK VALUES FOR OPTIONAL FIELDS
    // ==========================================
    const finalName = name.trim() || "Not provided";
    const finalPhone = phone.trim() || "Not provided";
    const finalWhatsapp = whatsapp.trim() || "Not provided";
    const finalMessage = message.trim() || "No message entered by the user";

    // ==========================================
    // BUILD FORMATTED MESSAGE BODY
    // ==========================================
    const formattedMessage = `${finalMessage}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 CUSTOMER INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Full Name: ${finalName}
Email Address: ${email}
Phone Number: ${finalPhone}
WhatsApp Number: ${finalWhatsapp}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ SELECTED OPT-IN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Opt-In Type: ${selectedConsentLabel}

Full Consent Text:
${selectedConsentText}`;

    // ==========================================
    // METHOD 1: Using EmailJS (Recommended)
    // First, install emailjs: npm install @emailjs/browser
    // Then sign up at https://www.emailjs.com/ and get your service ID, template ID, public key
    // ==========================================
    
    // Uncomment this block if using EmailJS
    /*
    try {
      const emailjs = (await import('@emailjs/browser')).default;
      
      const templateParams = {
        to_email: "info@flashteck.com",
        from_name: finalName,
        from_email: email,
        phone: finalPhone,
        whatsapp: finalWhatsapp,
        message: formattedMessage,
        consent_type: selectedConsentLabel,
      };
      
      const result = await emailjs.send(
        'YOUR_SERVICE_ID',     // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID',    // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY'      // Replace with your EmailJS public key
      );
      
      if (result.status === 200) {
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent successfully!",
          icon: "success",
          confirmButtonColor: "#e1c693",
          background: mounted && theme === "dark" ? "#0a0a0a" : "#ffffff",
          color: mounted && theme === "dark" ? "#fff" : "#1a1a1a",
        });
        
        setFormData({
          name: "",
          email: "",
          phone: "",
          whatsapp: "",
          message: "",
        });
        setSelectedConsent("");
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to send message. Please try again later.",
        icon: "error",
        confirmButtonColor: "#e1c693",
        background: mounted && theme === "dark" ? "#0a0a0a" : "#ffffff",
        color: mounted && theme === "dark" ? "#fff" : "#1a1a1a",
      });
    } finally {
      setIsSubmitting(false);
    }
    */

    // ==========================================
    // METHOD 2: Using Web3Forms (Already Configured)
    // This sends email to the email associated with your Web3Forms access_key
    // To send to info@flashteck.com, you need to update your Web3Forms dashboard
    // ==========================================
    
    const formPayload = new FormData();

    // IMPORTANT: Replace this access_key with your own from https://web3forms.com/
    // After creating account, set the forwarding email to info@flashteck.com
    formPayload.append("access_key", "acadce1d-c04f-4c18-8817-858cd3515b66");

    // TO EMAIL - Add this line to specify recipient
    formPayload.append("to_email", "info@flashteck.com");
    
    // Custom Subject Line
    formPayload.append(
      "subject",
      `New Inquiry from ${finalName} — ${selectedConsentLabel}`
    );

    // Sender name in email
    formPayload.append("from_name", "Flashteck Contact Form");

    // Reply to - so you can reply directly to the person who submitted
    formPayload.append("reply_to", email);

    // ==========================================
    // CLEAN FIELD NAMES WITH FALLBACK VALUES
    // ==========================================
    formPayload.append("Full Name", finalName);
    formPayload.append("Email Address", email);
    formPayload.append("Phone Number", finalPhone);
    formPayload.append("WhatsApp Number", finalWhatsapp);
    formPayload.append("Message & Opt-In", formattedMessage);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const data = await res.json();

      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent successfully to info@flashteck.com!",
          icon: "success",
          confirmButtonColor: "#e1c693",
          background: mounted && theme === "dark" ? "#0a0a0a" : "#ffffff",
          color: mounted && theme === "dark" ? "#fff" : "#1a1a1a",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          whatsapp: "",
          message: "",
        });

        setSelectedConsent("");
      } else {
        Swal.fire({
          title: "Error!",
          text: data.message || "Failed to send message.",
          icon: "error",
          confirmButtonColor: "#e1c693",
          background: mounted && theme === "dark" ? "#0a0a0a" : "#ffffff",
          color: mounted && theme === "dark" ? "#fff" : "#1a1a1a",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Network error, please try again later.",
        icon: "error",
        confirmButtonColor: "#e1c693",
        background: mounted && theme === "dark" ? "#0a0a0a" : "#ffffff",
        color: mounted && theme === "dark" ? "#fff" : "#1a1a1a",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Don't render theme-dependent styles until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <section
        id="Contact"
        className="relative py-20 md:py-32 bg-[#050505] overflow-hidden"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 border border-[#e1c693]/30 rounded-full bg-[#e1c693]/5 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-[#e1c693]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e1c693]">
                Get In Touch
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
              Let's Build Something{" "}
              <span className="italic text-transparent  bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54]">
                Great.
              </span>
            </h2>
          </div>
        </div>
      </section>
    );
  }

  const isDark = theme === "dark";

  return (
    <Element name="Contact">
      <section
        id="Contact"
        className={`relative py-20 md:py-32 transition-colors duration-500 overflow-hidden ${
          isDark ? "bg-[#050505]" : "bg-[#f8f9fa]"
        }`}
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {/* Background Effects */}
        <div
          className={`absolute inset-0 pointer-events-none ${
            isDark
              ? "bg-[radial-gradient(circle_at_top_right,rgba(225,198,147,0.08),transparent_40%)]"
              : "bg-[radial-gradient(circle_at_top_right,rgba(225,198,147,0.12),transparent_40%)]"
          }`}
        ></div>
        <div
          className={`absolute inset-0 pointer-events-none ${
            isDark
              ? "bg-[radial-gradient(circle_at_bottom_left,rgba(225,198,147,0.05),transparent_40%)]"
              : "bg-[radial-gradient(circle_at_bottom_left,rgba(225,198,147,0.08),transparent_40%)]"
          }`}
        ></div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 border border-[#e1c693]/30 rounded-full bg-[#e1c693]/5 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-[#e1c693]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e1c693]">
                Get In Touch
              </span>
            </div>

            <h2
              className={`text-4xl sm:text-5xl md:text-6xl font-black leading-tight ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Let's Build Something{" "}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54]">
                Great
              </span>
            </h2>

            <p
              className={`text-lg mt-6 max-w-2xl mx-auto leading-relaxed ${
                isDark ? "text-gray-400" : "text-slate-600"
              }`}
            >
              Feel free to contact us with any questions or concerns. You can use the form on our website or email us directly. We appreciate your interest and look forward to hearing from you.
            </p>
          </motion.div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            {/* LEFT SIDE */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col"
            >
              {/* FORM BOX */}
              <div
                className={`flex-1 relative p-6 md:p-10 rounded-[32px] border backdrop-blur-2xl overflow-hidden transition-colors duration-500 ${
                  isDark
                    ? "border-white/10 bg-[#0a0a0a]/70"
                    : "border-gray-200 bg-white/80"
                }`}
              >
                {/* Glow */}
                <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#e1c693]/10 blur-[120px] rounded-full"></div>

                <div className="relative z-10">
                  {/* Heading */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#e1c693] to-[#a78b54] flex items-center justify-center shadow-lg">
                      <MessageSquare className="w-7 h-7 text-black" />
                    </div>
                    <div>
                      <h3
                        className={`text-3xl font-bold ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        Contact Us
                      </h3>
                      <p
                        className={`text-sm mt-1 ${
                          isDark ? "text-gray-500" : "text-slate-500"
                        }`}
                      >
                        Fill in your details below
                      </p>
                    </div>
                  </div>

                  {/* FORM */}
                  <form className="space-y-6">
                    {/* Name (Optional) */}
                    <motion.div variants={itemVariants} className="relative">
                      <div
                        className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                          isDark ? "text-gray-500" : "text-slate-400"
                        }`}
                      >
                        <User className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className={`w-full h-14 rounded-2xl border px-12 transition-all duration-300 focus:outline-none focus:border-[#e1c693]/50 ${
                          isDark
                            ? "bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                            : "bg-gray-50 border-gray-200 text-slate-900 placeholder:text-slate-400"
                        }`}
                      />
                    </motion.div>

                    {/* Email (Required) */}
                    <motion.div variants={itemVariants} className="relative">
                      <div
                        className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                          isDark ? "text-gray-500" : "text-slate-400"
                        }`}
                      >
                        <Mail className="w-5 h-5" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address *"
                        className={`w-full h-14 rounded-2xl border px-12 transition-all duration-300 focus:outline-none focus:border-[#e1c693]/50 ${
                          isDark
                            ? "bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                            : "bg-gray-50 border-gray-200 text-slate-900 placeholder:text-slate-400"
                        }`}
                      />
                    </motion.div>

                    {/* Phone + WhatsApp (Optional) */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div variants={itemVariants} className="relative">
                        <div
                          className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                            isDark ? "text-gray-500" : "text-slate-400"
                          }`}
                        >
                          <Phone className="w-5 h-5" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number"
                          className={`w-full h-14 rounded-2xl border px-12 transition-all duration-300 focus:outline-none focus:border-[#e1c693]/50 ${
                            isDark
                              ? "bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                              : "bg-gray-50 border-gray-200 text-slate-900 placeholder:text-slate-400"
                          }`}
                        />
                      </motion.div>

                      <motion.div variants={itemVariants} className="relative">
                        <div
                          className={`absolute left-4 top-1/2 -translate-y-1/2 ${
                            isDark ? "text-gray-500" : "text-slate-400"
                          }`}
                        >
                          <MessageCircle className="w-5 h-5" />
                        </div>
                        <input
                          type="tel"
                          name="whatsapp"
                          value={formData.whatsapp}
                          onChange={handleChange}
                          placeholder="WhatsApp Number"
                          className={`w-full h-14 rounded-2xl border px-12 transition-all duration-300 focus:outline-none focus:border-[#e1c693]/50 ${
                            isDark
                              ? "bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                              : "bg-gray-50 border-gray-200 text-slate-900 placeholder:text-slate-400"
                          }`}
                        />
                      </motion.div>
                    </div>

                    {/* Message (Optional) */}
                    <motion.div variants={itemVariants} className="relative">
                      <div
                        className={`absolute left-4 top-5 ${
                          isDark ? "text-gray-500" : "text-slate-400"
                        }`}
                      >
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <textarea
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className={`w-full rounded-2xl border py-4 px-12 resize-none transition-all duration-300 focus:outline-none focus:border-[#e1c693]/50 ${
                          isDark
                            ? "bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                            : "bg-gray-50 border-gray-200 text-slate-900 placeholder:text-slate-400"
                        }`}
                      />
                    </motion.div>
                  </form>
                </div>
              </div>

              {/* OUTSIDE OPT-IN + BUTTON */}
              <div className="mt-8 px-2">
                {/* Opt-in */}
                <div className="space-y-5">
                  <h4
                    className={`text-xl font-semibold tracking-wide ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Opt-in *
                  </h4>

                  {/* Option 1 — Appointment */}
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <input
                      type="radio"
                      name="consent"
                      value="appointment"
                      checked={selectedConsent === "appointment"}
                      onChange={(e) => setSelectedConsent(e.target.value)}
                      className="mt-2 w-4 h-4 accent-[#e1c693] cursor-pointer"
                    />
                    <div>
                      <span className="text-[15px] font-semibold text-[#e1c693] group-hover:text-[#c9a96b] transition-colors duration-300">
                        Appointment Notifications
                      </span>
                      <p
                        className={`text-[15px] leading-8 font-light tracking-wide transition-colors duration-300 ${
                          isDark
                            ? "text-gray-300 group-hover:text-white"
                            : "text-slate-600 group-hover:text-slate-800"
                        }`}
                      >
                        I Consent to receive appointment information,
                        confirmations, and reminder notifications, alerts from
                        Flashteck. Message frequency may vary. Message & data
                        rates may apply. Text HELP to +1 (831) 207-4991 for
                        assistance. Reply STOP to unsubscribe at any time.
                      </p>
                    </div>
                  </label>

                  {/* Option 2 — Marketing */}
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <input
                      type="radio"
                      name="consent"
                      value="marketing"
                      checked={selectedConsent === "marketing"}
                      onChange={(e) => setSelectedConsent(e.target.value)}
                      className="mt-2 w-4 h-4 accent-[#e1c693] cursor-pointer"
                    />
                    <div>
                      <span className="text-[15px] font-semibold text-[#e1c693] group-hover:text-[#c9a96b] transition-colors duration-300">
                        Marketing Messages
                      </span>
                      <p
                        className={`text-[15px] leading-8 font-light tracking-wide transition-colors duration-300 ${
                          isDark
                            ? "text-gray-300 group-hover:text-white"
                            : "text-slate-600 group-hover:text-slate-800"
                        }`}
                      >
                        I Consent to receive occasional marketing messages from
                        Flashteck. Message frequency may vary. Message & data
                        rates may apply. Text HELP to +1 (831) 207-4991 for
                        assistance. Reply STOP to unsubscribe at any time.
                      </p>
                    </div>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  onClick={onSubmit}
                  disabled={isSubmitting}
                  className="mt-10 w-[220px] h-14 rounded-full bg-gradient-to-r from-[#e1c693] to-[#c9a96b] text-black font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(225,198,147,0.4)] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* RIGHT SIDE MAP */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div
                className={`h-full min-h-[700px] rounded-[32px] overflow-hidden border backdrop-blur-xl transition-colors duration-500 ${
                  isDark
                    ? "border-white/10 bg-[#0a0a0a]/70"
                    : "border-gray-200 bg-white/80"
                }`}
              >
                <ContactMap />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>

                {/* Text */}
                <div className="absolute bottom-8 left-8 z-20">
                  <h3 className="text-4xl font-bold text-white mb-3">
                    Let's Talk
                  </h3>
                  <p className="text-gray-300 max-w-sm leading-relaxed">
                    We create premium digital experiences that help businesses
                    grow faster and smarter.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;