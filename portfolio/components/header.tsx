// File: components/header.tsx
'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const navItems = ['Home', 'About', 'Projects', 'Contact'];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Brand */}
            <div className="font-semibold text-lg sm:text-xl text-gray-800">
              Ferdinand Lunardy
            </div>

            {/* Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="text-gray-700 focus:outline-none"
              aria-label="Open Menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Right Slide-In Overlay Menu */}
      <div
        className={clsx(
          'fixed inset-y-0 right-0 w-4/5 max-w-sm bg-gradient-to-bl from-gray-900/90 to-gray-800/90 text-white z-[999] transform transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="h-full flex flex-col px-6 py-8">
          {/* Close Button */}
          <div className="flex justify-end mb-10">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white"
              aria-label="Close Menu"
            >
              <X size={32} />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col space-y-6 text-lg">
            {navItems.map((item, index) => (
              <React.Fragment key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  {item}
                </a>
                {index < navItems.length - 1 && (
                  <div className="border-b border-gray-700" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
