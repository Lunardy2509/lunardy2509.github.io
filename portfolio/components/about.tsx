// File: components/about.tsx
"use client";
import React from "react";
import { Smartphone, Code, Globe, Settings } from "lucide-react";
import { useScrollAnimation } from "../lib/utils";

export default function About() {
  const visibleElements = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div
          id="about-content"
          data-animate
          className={`transition-all duration-1000 ${
            visibleElements.has("about-content")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-8">
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
              Engineering Seamless Experiences Through{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                Hardware and iOS Innovation
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
              <div className="flex items-center justify-center w-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl overflow-hidden">
                <img
                  src="/assets/Ferdinand-Lunardy.png"
                  alt="Ferdinand Lunardy"
                  className="w-full h-full object-contain rounded-2xl shadow-lg"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                I’m a junior iOS developer and Computer Engineering graduate
                with a strong foundation in embedded systems and hands-on
                hardware development. Currently enrolled at the Apple Developer
                Academy @BINUS, I specialize in building user-centric
                applications with Swift while actively exploring the
                intersection between physical computing and software design.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                My experiences span from microcontroller-based prototypes to
                real-time iOS solutions, driven by a deep curiosity to bridge
                hardware and software into seamless, intelligent systems. I
                aspire to further this integration through advanced studies in
                Electronic and Computer Engineering at NTUST, where I aim to
                deepen my expertise and contribute meaningfully to the field of
                smart, connected technologies.
              </p>

              <div className="flex flex-wrap gap-4 pt-6">
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                  <Smartphone className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-blue-700 font-medium">
                    iOS Development
                  </span>
                </div>
                <div className="flex items-center bg-purple-50 px-4 py-2 rounded-full">
                  <Code className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="text-purple-700 font-medium">Swift</span>
                </div>
                <div className="flex items-center bg-indigo-50 px-4 py-2 rounded-full">
                  <Globe className="w-5 h-5 text-indigo-600 mr-2" />
                  <span className="text-indigo-700 font-medium">
                    Apple Ecosystem
                  </span>
                </div>
                <div className="flex items-center bg-indigo-50 px-4 py-2 rounded-full">
                  <Settings className="w-5 h-5 text-indigo-600 mr-2" />
                  <span className="text-indigo-700 font-medium">
                    Hands-on Hardware
                  </span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
