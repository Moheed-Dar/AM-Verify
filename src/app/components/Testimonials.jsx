"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Jackson",
    role: "CEO Of Company",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the Printing industry Lorem Ipsum has been industry's standard dummy text ever since the 1500s when an unknown printer took a galley.",
  },
  {
    name: "Parvez Hossein",
    role: "CEO Of Company",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the Printing industry Lorem Ipsum has been industry's standard dummy text ever since the 1500s when an unknown printer took a galley.",
  },
  {
    name: "Shoikat Hasan",
    role: "CEO Of Company",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the Printing industry Lorem Ipsum has been industry's standard dummy text ever since the 1500s when an unknown printer took a galley.",
  },
  {
    name: "Sarah Williams",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the Printing industry Lorem Ipsum has been industry's standard dummy text ever since the 1500s when an unknown printer took a galley.",
  },
  {
    name: "David Chen",
    role: "Tech Lead",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the Printing industry Lorem Ipsum has been industry's standard dummy text ever since the 1500s when an unknown printer took a galley.",
  },
  {
    name: "Emma Thompson",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Lorem Ipsum is simply dummy text of the Printing industry Lorem Ipsum has been industry's standard dummy text ever since the 1500s when an unknown printer took a galley.",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex justify-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-orange-400" : "text-gray-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`group relative flex flex-col items-center text-center cursor-pointer transition-all duration-500 ${
        isActive ? "scale-100 opacity-100" : "scale-90 opacity-50"
      }`}
    >
      {/* Profile Image */}
      <div className="relative z-10 mb-[-20px]">
        <div
          className={`w-20 h-20 rounded-full overflow-hidden border-4 transition-all duration-500 ${
            isActive ? "border-orange-500 shadow-lg shadow-orange-500/30" : "border-gray-700"
          }`}
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Card */}
      <div
        className={`relative rounded-2xl px-6 py-8 pt-8 w-full max-w-sm transition-all duration-500 ${
          isActive
            ? "bg-gradient-to-b from-orange-500/10 to-white/[0.02] border border-orange-500/20"
            : "bg-white/[0.02] border border-white/10"
        }`}
      >
        {/* Active glow */}
        {isActive && (
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-orange-500/10 to-transparent pointer-events-none" />
        )}

        <div className="relative z-10">
          <StarRating rating={testimonial.rating} />

          <h3 className="text-white text-lg font-bold mb-1">
            {testimonial.name}
          </h3>
          <p className="text-gray-400 text-sm mb-4">{testimonial.role}</p>

          {/* Quote Icon */}
          <div className="flex justify-center mb-3">
            <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
              <Quote className="w-4 h-4 text-orange-400" />
            </div>
          </div>

          <p className="text-gray-400 text-xs leading-relaxed">
            {testimonial.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  // Visible cards: current, prev, next
  const visibleIndices = [
    (currentIndex - 1 + testimonials.length) % testimonials.length,
    currentIndex,
    (currentIndex + 1) % testimonials.length,
  ];

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(251,146,60,0.06)_0%,_transparent_50%)]" />
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

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            <span className="text-white">User </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              Testimonials
            </span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Cards Container */}
          <div className="flex items-center justify-center gap-4 md:gap-8 min-h-[380px]">
            <AnimatePresence mode="sync">
              {/* Prev Card (hidden on mobile) */}
              <motion.div
                key={`prev-${visibleIndices[0]}`}
                initial={{ opacity: 0, x: -100, scale: 0.8 }}
                animate={{ opacity: 0.4, x: 0, scale: 0.85 }}
                exit={{ opacity: 0, x: -100, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="hidden md:block"
              >
                <TestimonialCard
                  testimonial={testimonials[visibleIndices[0]]}
                  isActive={false}
                  onClick={goToPrev}
                />
              </motion.div>

              {/* Active Card */}
              <motion.div
                key={`active-${visibleIndices[1]}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0"
              >
                <TestimonialCard
                  testimonial={testimonials[visibleIndices[1]]}
                  isActive={true}
                  onClick={() => {}}
                />
              </motion.div>

              {/* Next Card (hidden on mobile) */}
              <motion.div
                key={`next-${visibleIndices[2]}`}
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{ opacity: 0.4, x: 0, scale: 0.85 }}
                exit={{ opacity: 0, x: 100, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="hidden md:block"
              >
                <TestimonialCard
                  testimonial={testimonials[visibleIndices[2]]}
                  isActive={false}
                  onClick={goToNext}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-8 h-2 bg-gradient-to-r from-orange-500 to-amber-500"
                  : "w-2 h-2 bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}