// File: components/hero.tsx
"use client";
import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ChevronRight } from "lucide-react";

const TypingAnimation = ({
  texts,
  className = "",
}: {
  texts: string[];
  className?: string;
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentTextIndex];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(75);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default function Hero({ onScroll }: { onScroll: () => void }) {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-16"
    >
      <div className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-8">
        <div className="text-center max-w2xl mx-auto overflow-visible">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold text-gray-800 mb-10 leading-normal">
            <span className="block">Hi, I'm</span>
            <TypingAnimation
              texts={["an iOS Developer", "a Computer Engineer"]}
              className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-medium mt-2 pb-2"
            />
          </h1>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 sm:mb-16">
            <a
              href="https://github.com/Lunardy2509"
              className="p-4 rounded-full bg-white shadow-md hover:shadow-xl transition hover:scale-110 group"
            >
              <Github className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/ferdinand-lunardy-503648219/"
              className="p-4 rounded-full bg-white shadow-md hover:shadow-xl transition hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
            </a>
            <a
              href="mailto:ferdinandlunardy@gmail.com"
              className="p-4 rounded-full bg-white shadow-md hover:shadow-xl transition hover:scale-110 group"
            >
              <Mail className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={onScroll}
            className="group inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition hover:scale-105 hover:shadow-lg"
          >
            Explore My Work
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Subtle scroll hint */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 tracking-widest animate-pulse">
          SCROLL
        </div>
      </div>
    </section>
  );
}
