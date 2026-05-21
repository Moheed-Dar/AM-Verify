"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  MessageSquareText,
  LogOut,
  LifeBuoy,
  Receipt,
  ShieldCheck,
  Mail,
  Building2,
  Phone,
  CalendarDays,
} from "lucide-react";

const sections = [
  {
    icon: <MessageSquareText className="w-6 h-6" />,
    title: "SMS Consent",
    content: `By providing your mobile number and opting in, you expressly consent to receive SMS messages from Flashteck related to appointment information, confirmations, and reminder notifications. Message delivery may occur via an automated system. Consent to receive SMS messages is not a condition of purchase.`
  },
  {
    icon: <LogOut className="w-6 h-6" />,
    title: "Opt-Out Instructions",
    content: `You may opt out of receiving SMS messages at any time by replying "STOP" to +1 (831) 207-4991. Upon opting out, you will receive a one-time confirmation message, and no further messages will be sent unless you re-enroll. To rejoin, simply opt in again through the original sign-up method.`
  },
  {
    icon: <LifeBuoy className="w-6 h-6" />,
    title: "Help & Assistance",
    content: `For assistance, reply "HELP" to any message or contact us at info@flashteck.com or +1 (831) 207-4991.`
  },
  {
    icon: <Receipt className="w-6 h-6" />,
    title: "Message Rates & Frequency",
    content: `Message and data rates may apply. Message frequency may vary based on your interactions and services requested. Wireless carriers are not liable for delayed or undelivered messages.`
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Carrier & Privacy Info",
    content: `For questions regarding your mobile plan, please contact your wireless provider. For information on how we collect, use, and protect your personal information, please review our Privacy Policy.`
  }
];

export default function TermsOfService() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Get current theme (handle system theme)
  const currentTheme = !mounted ? "dark" : (theme === "system" ? systemTheme : theme);
  const isDark = currentTheme === "dark";

  // Don't render theme-dependent styles until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen transition-colors duration-500 bg-[#050505] text-gray-200">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[150px] bg-[#e1c693]/10" />
          </div>
          <div className="max-w-4xl mx-auto px-6 pt-36 pb-16 md:pt-44 md:pb-20 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 border bg-[#e1c693]/10 text-[#e1c693] border-[#e1c693]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e1c693] animate-pulse" />
              Legal
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-6 text-white">
              Terms of <span className="text-[#e1c693]">Service</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl leading-relaxed text-gray-400">
              Please review these terms carefully. This outlines the SMS communication policies and your rights when interacting with Flashteck.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm text-gray-500">
              <CalendarDays className="w-4 h-4" />
              Last updated: June 2025
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 border-b border-white/5" />
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-6">
          {sections.map((section, i) => (
            <div key={i} className="group rounded-3xl p-8 md:p-10 border transition-all duration-300 hover:border-[#e1c693]/30 bg-white/[0.02] border-white/5">
              <div className="flex items-start gap-4 mb-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 bg-[#e1c693]/10 text-[#e1c693]">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <span className="text-xs font-mono tracking-widest uppercase text-[#e1c693]/60">
                    0{i + 1}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold leading-tight text-white">
                    {section.title}
                  </h2>
                </div>
              </div>
              {section.content && (
                <p className="leading-relaxed text-gray-400">
                  {section.content}
                </p>
              )}
            </div>
          ))}
          <div className="relative rounded-3xl p-8 md:p-10 border overflow-hidden transition-colors duration-300 bg-gradient-to-br from-[#e1c693]/10 to-[#e1c693]/5 border-[#e1c693]/20">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#e1c693]/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#e1c693]/20 text-[#e1c693]">
                  <Mail className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Contact Us
                </h2>
              </div>
              <p className="mb-6 leading-relaxed text-gray-300">
                If you have questions or concerns about this Terms of Service or our practices, please contact us:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#e1c693]/20 text-[#e1c693]">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500">Company</p>
                    <p className="font-semibold text-white">Flashteck</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#e1c693]/20 text-[#e1c693]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500">Email</p>
                    <a href="mailto:info@flashteck.com" className="font-semibold text-[#e1c693] hover:underline">
                      info@flashteck.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#e1c693]/20 text-[#e1c693]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500">Phone</p>
                    <a href="tel:+18312074991" className="font-semibold text-[#e1c693] hover:underline">
                      +1 (831) 207-4991
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark ? "bg-[#050505] text-gray-200" : "bg-[#f8f9fa] text-gray-800"
      }`}
      suppressHydrationWarning
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[150px] ${
              isDark ? "bg-[#e1c693]/10" : "bg-[#e1c693]/15"
            }`}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 pt-36 pb-16 md:pt-44 md:pb-20 relative z-10">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 border ${
              isDark
                ? "bg-[#e1c693]/10 text-[#e1c693] border-[#e1c693]/20"
                : "bg-[#e1c693]/15 text-[#b08d57] border-[#e1c693]/30"
            }`}
            suppressHydrationWarning
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#e1c693] animate-pulse" />
            Legal
          </div>

          <h1
            className={`text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
            suppressHydrationWarning
          >
            Terms of{" "}
            <span className="text-[#e1c693]">Service</span>
          </h1>

          <p
            className={`text-lg md:text-xl max-w-2xl leading-relaxed ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
            suppressHydrationWarning
          >
            Please review these terms carefully. This outlines the SMS communication policies and your rights when interacting with Flashteck.
          </p>

          <div
            className={`mt-8 flex items-center gap-3 text-sm ${
              isDark ? "text-gray-500" : "text-gray-400"
            }`}
            suppressHydrationWarning
          >
            <CalendarDays className="w-4 h-4" />
            Last updated: June 2025
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className={`max-w-4xl mx-auto px-6 border-b ${
          isDark ? "border-white/5" : "border-gray-200"
        }`}
        suppressHydrationWarning
      />

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-6">
        {sections.map((section, i) => (
          <SectionCard
            key={i}
            index={i + 1}
            icon={section.icon}
            title={section.title}
            content={section.content}
            isDark={isDark}
          />
        ))}

        {/* Contact Card — Special */}
        <div
          className={`relative rounded-3xl p-8 md:p-10 border overflow-hidden transition-colors duration-300 ${
            isDark
              ? "bg-gradient-to-br from-[#e1c693]/10 to-[#e1c693]/5 border-[#e1c693]/20"
              : "bg-gradient-to-br from-[#e1c693]/20 to-[#e1c693]/10 border-[#e1c693]/30"
          }`}
          suppressHydrationWarning
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#e1c693]/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  isDark
                    ? "bg-[#e1c693]/20 text-[#e1c693]"
                    : "bg-[#e1c693]/25 text-[#b08d57]"
                }`}
                suppressHydrationWarning
              >
                <Mail className="w-6 h-6" />
              </div>
              <h2
                className={`text-2xl md:text-3xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
                suppressHydrationWarning
              >
                Contact Us
              </h2>
            </div>
            <p
              className={`mb-6 leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
              suppressHydrationWarning
            >
              If you have questions or concerns about this Terms of Service or our practices, please contact us:
            </p>

            <div className="space-y-4">
              {/* Company Name */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isDark
                      ? "bg-[#e1c693]/20 text-[#e1c693]"
                      : "bg-[#e1c693]/25 text-[#b08d57]"
                  }`}
                  suppressHydrationWarning
                >
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <p
                    className={`text-xs uppercase tracking-widest ${
                      isDark ? "text-gray-500" : "text-gray-400"
                    }`}
                    suppressHydrationWarning
                  >
                    Company
                  </p>
                  <p
                    className={`font-semibold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                    suppressHydrationWarning
                  >
                    Flashteck
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isDark
                      ? "bg-[#e1c693]/20 text-[#e1c693]"
                      : "bg-[#e1c693]/25 text-[#b08d57]"
                  }`}
                  suppressHydrationWarning
                >
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p
                    className={`text-xs uppercase tracking-widest ${
                      isDark ? "text-gray-500" : "text-gray-400"
                    }`}
                    suppressHydrationWarning
                  >
                    Email
                  </p>
                  <a
                    href="mailto:info@flashteck.com"
                    className="font-semibold text-[#e1c693] hover:underline"
                  >
                    info@flashteck.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isDark
                      ? "bg-[#e1c693]/20 text-[#e1c693]"
                      : "bg-[#e1c693]/25 text-[#b08d57]"
                  }`}
                  suppressHydrationWarning
                >
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p
                    className={`text-xs uppercase tracking-widest ${
                      isDark ? "text-gray-500" : "text-gray-400"
                    }`}
                    suppressHydrationWarning
                  >
                    Phone
                  </p>
                  <a
                    href="tel:+18312074991"
                    className="font-semibold text-[#e1c693] hover:underline"
                  >
                    +1 (831) 207-4991
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Reusable Section Card ─── */
function SectionCard({ index, icon, title, content, isDark }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="group rounded-3xl p-8 md:p-10 border transition-all duration-300 bg-white/[0.02] border-white/5">
        <div className="flex items-start gap-4 mb-5">
          <div className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-[#e1c693]/10 text-[#e1c693]">
            {icon}
          </div>
          <div className="flex-1">
            <span className="text-xs font-mono tracking-widest uppercase text-[#e1c693]/60">0{index}</span>
            <h2 className="text-xl md:text-2xl font-bold leading-tight text-white">{title}</h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group rounded-3xl p-8 md:p-10 border transition-all duration-300 hover:border-[#e1c693]/30 ${
        isDark
          ? "bg-white/[0.02] border-white/5 hover:bg-white/[0.04]"
          : "bg-white border-gray-200 hover:shadow-lg hover:shadow-[#e1c693]/5"
      }`}
      suppressHydrationWarning
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-5">
        <div
          className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
            isDark
              ? "bg-[#e1c693]/10 text-[#e1c693]"
              : "bg-[#e1c693]/15 text-[#b08d57]"
          }`}
          suppressHydrationWarning
        >
          {icon}
        </div>
        <div className="flex-1">
          <span
            className={`text-xs font-mono tracking-widest uppercase ${
              isDark ? "text-[#e1c693]/60" : "text-[#b08d57]/60"
            }`}
            suppressHydrationWarning
          >
            0{index}
          </span>
          <h2
            className={`text-xl md:text-2xl font-bold leading-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
            suppressHydrationWarning
          >
            {title}
          </h2>
        </div>
      </div>

      {/* Body */}
      {content && (
        <p
          className={`leading-relaxed ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
          suppressHydrationWarning
        >
          {content}
        </p>
      )}
    </div>
  );
}