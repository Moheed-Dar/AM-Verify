"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";

const faqData = [
  {
    question: "What's the price?",
    answer: "Our pricing is tailored to your business size, industry, and goals — there's no one-size-fits-all package. Most clients invest between $2,000–$5,000 per month depending on the volume of leads and the complexity of the campaign. We'll break down the exact costs during your free strategy call so you know precisely what you're paying for before committing."
  },
  {
    question: "How quickly do we see results?",
    answer: "Most clients see their first qualified leads within 5–7 days of campaign launch. By the end of week two, your calendar should have consistent bookings flowing in. Our onboarding process takes 48–72 hours, so from signing up to seeing real appointments in your diary, you're looking at roughly 10 days. Results compound over time as we optimise your messaging, targeting, and follow-up sequences."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes — we stand behind our work with a performance guarantee. If we don't deliver the agreed number of qualified appointments within 30 days, you get a full refund. No fine print, no hoops to jump through. We take on the risk so you don't have to. It's that simple: results or your money back."
  },
  {
    question: "What industries do you work with?",
    answer: "We specialise in B2B service businesses, SaaS companies, digital agencies, professional services (consultants, coaches, accountants), and e-commerce brands looking to scale through outbound. We've delivered results across 45+ industries including recruitment, IT services, real estate, financial planning, and marketing agencies. If you sell a high-value product or service to other businesses, our system will work for you."
  },
  {
    question: "How long are the contracts?",
    answer: "Our standard engagement starts at 3 months — that's the minimum time needed to build, test, and optimise a high-performing outbound system. After the initial period, you can continue month-to-month with no lock-in. Most clients stay for 6–12 months because the results keep improving as we refine targeting and messaging based on real data from your campaigns."
  },
  {
    question: "What's included in the service?",
    answer: "Everything is done for you. That includes ideal client profiling, lead list building, multi-channel outreach (email, LinkedIn, phone), copywriting, A/B testing, appointment setting, CRM integration, and weekly performance reporting. You don't need to hire anyone or learn any new tools — we plug into your existing workflow and start filling your calendar."
  },
  {
    question: "Do I need to do anything once we start?",
    answer: "Just show up to the calls we book for you. Our team handles the entire outbound process from prospecting to appointment confirmation. You'll get a Slack notification every time a meeting is booked, and all you need to do is turn up and close. We also provide a brief onboarding questionnaire so we understand your ideal clients, but after that, it's completely hands-off."
  }
];

export default function FAQ() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-[#050505]" />;
  }

  const isDark = theme === "dark";

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={`relative md:py-16 py-10 overflow-hidden transition-colors duration-700 ${
        isDark ? "bg-[#050505]" : "bg-[#fafaf9]"
      }`}
    >
      {/* Section Ambient Light */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[500px] rounded-full blur-3xl pointer-events-none ${
          isDark ? "bg-[#a78b54]/5" : "bg-[#e1c693]/10"
        }`}
      />

      <div className="relative max-w-4xl mx-auto px-6 md:px-12 lg:px-20 z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-sm mb-4 transition-colors duration-300 ${
              isDark
                ? "border-[#e1c693]/20 bg-[#e1c693]/5"
                : "border-[#a78b54]/20 bg-[#a78b54]/5"
            }`}
          >
            <HelpCircle
              className={`w-3.5 h-3.5 ${isDark ? "text-[#e1c693]" : "text-[#a78b54]"}`}
            />
            <span
              className={`text-[10px] font-bold uppercase tracking-widest ${
                isDark ? "text-[#e1c693]" : "text-[#a78b54]"
              }`}
            >
              Got Questions?
            </span>
          </div>

          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1c693] to-[#a78b54]">
              Questions
            </span>
          </h2>

          <p
            className={`mt-4 text-base md:text-lg leading-relaxed ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Everything you need to know before getting started.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`relative rounded-xl border transition-all duration-500 overflow-hidden ${
                  isOpen
                    ? isDark
                      ? "bg-[#0a0a0a] border-[#e1c693]/30 shadow-[0_0_20px_-5px_rgba(225,198,147,0.15)]"
                      : "bg-white border-[#a78b54]/30 shadow-[0_0_20px_-5px_rgba(167,139,84,0.15)]"
                    : isDark
                    ? "bg-[#0a0a0a]/50 border-white/10 hover:border-white/20"
                    : "bg-white/50 border-gray-200 hover:border-gray-300"
                }`}
              >
                {/* Left Gold Accent Bar when active */}
                <div
                  className={`absolute top-0 left-0 bottom-0 w-0.5 rounded-l-xl bg-gradient-to-b from-[#e1c693] to-[#a78b54] transition-opacity duration-500 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                />

                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left cursor-pointer focus:outline-none"
                >
                  <h3
                    className={`text-sm md:text-base font-bold pr-4 transition-colors duration-300 ${
                      isOpen
                        ? isDark
                          ? "text-[#e1c693]"
                          : "text-[#a78b54]"
                        : isDark
                        ? "text-white"
                        : "text-gray-900"
                    }`}
                  >
                    {item.question}
                  </h3>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`flex-shrink-0 p-1 rounded-full transition-colors duration-300 ${
                      isOpen
                        ? isDark
                          ? "bg-[#e1c693]/10 text-[#e1c693]"
                          : "bg-[#a78b54]/10 text-[#a78b54]"
                        : isDark
                        ? "text-gray-500"
                        : "text-gray-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div
                        className={`px-4 md:px-5 pb-4 md:pb-5 pt-0 text-xs md:text-sm leading-relaxed ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}