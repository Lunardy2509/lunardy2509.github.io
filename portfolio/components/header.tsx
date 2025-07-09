// File: components/header.tsx
'use client';
import React from 'react';

export default function Header() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="font-semibold text-xl text-gray-800">
            Ferdinand Lunardy
          </div>

          <div className="flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-gray-800 transition-colors">Home</a>
            <a href="#about" className="text-gray-600 hover:text-gray-800 transition-colors">About</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-800 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}