// File: components/about.tsx
'use client';
import React from 'react';
import { Smartphone, Code, Globe } from 'lucide-react';
import { useScrollAnimation } from '../lib/utils';

export default function About() {
  const visibleElements = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div 
          id="about-content" 
          data-animate
          className={`transition-all duration-1000 ${
            visibleElements.has('about-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-8">
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
              Passionate about building seamless{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                iOS experiences
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
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate junior iOS developer currently enrolled at the Apple Developer Academy @BINUS. With a degree in Computer Engineering, I bring a solid foundation in hardware systems that complements my growing expertise in software development. My curiosity drives me to constantly explore emerging technologies and frameworks, especially within the Apple ecosystem.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                With growing expertise in Swift and iOS development, I enjoy crafting elegant, user-centric experiences that align with Apple’s ecosystem principles.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Beyond my core projects, you'll often find me experimenting with the latest iOS innovations, working on side projects to sharpen my skills, or actively contributing to the developer community through knowledge sharing and collaboration.
              </p>

              <div className="flex flex-wrap gap-4 pt-6">
                <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                  <Smartphone className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-blue-700 font-medium">iOS Development</span>
                </div>
                <div className="flex items-center bg-purple-50 px-4 py-2 rounded-full">
                  <Code className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="text-purple-700 font-medium">Swift</span>
                </div>
                <div className="flex items-center bg-indigo-50 px-4 py-2 rounded-full">
                  <Globe className="w-5 h-5 text-indigo-600 mr-2" />
                  <span className="text-indigo-700 font-medium">Apple Ecosystem</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
