// File: components/header.tsx
'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Optional: or replace with Unicode

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Brand Name */}
          <div className="font-semibold text-lg sm:text-xl text-gray-800">
            Ferdinand Lunardy
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-gray-800 transition-colors">Home</a>
            <a href="#about" className="text-gray-600 hover:text-gray-800 transition-colors">About</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-800 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 flex flex-col space-y-2 pb-4">
            <a href="#home" className="text-gray-600 hover:text-gray-800 px-2">Home</a>
            <a href="#about" className="text-gray-600 hover:text-gray-800 px-2">About</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-800 px-2">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800 px-2">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}
