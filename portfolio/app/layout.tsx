// File: app/layout.tsx
'use client';
import type React from "react";
import "./globals.css";
import { useEffect } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const ring = document.querySelector('.cursor-ring') as HTMLDivElement;
    const dot = document.querySelector('.cursor-dot') as HTMLDivElement;

    const moveCursor = (e: MouseEvent) => {
      ring.style.left = `${e.clientX}px`;
      ring.style.top = `${e.clientY}px`;
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <html lang="en">
      <body>
        <div className="cursor-ring" />
        <div className="cursor-dot" />
        {children}
      </body>
    </html>
  );
}