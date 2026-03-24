// File: components/contact.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '../lib/utils';

function getLocalTimeString() {
  const date = new Date();
  const utc = date.getTime() + date.getTimezoneOffset() * 60000;
  const localTime = new Date(utc + 8 * 3600000);
  return localTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
}

export default function Contact() {
  const visibleElements = useScrollAnimation();
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => setTime(getLocalTimeString());
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div
          id="contact-content"
          data-animate
          className={`text-center transition-all duration-1000 ${
            visibleElements.has('contact-content')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-8">
            Let's Connect
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8">
            Let's Collaborate on Exciting Projects!
          </h2>

          <div className="mb-12">
            <a
              href="mailto:ferdilunardy@gmail.com"
              className="inline-block text-lg md:text-xl text-gray-600 hover:text-blue-600 transition-colors duration-300 mb-8"
            >
              ferdilunardy@gmail.com
            </a>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200">
            <p className="text-gray-600 mb-6 text-left">
              Built with <span className="font-medium text-blue-600">Next.js</span>, styled using{' '}
              <span className="font-medium text-blue-600">tailwindcss</span>, and deployed on{' '}
              <span className="font-medium text-blue-600">github.io</span>.
            </p>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">© 2025 Ferdinand Lunardy</p>
              {time && <p className="text-sm text-gray-500">{time} Taipei GMT+8</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
