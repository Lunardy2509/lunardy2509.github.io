// src/app/page.tsx
'use client';
import { useRef } from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/contact";

export default function Home() {
  const projectsRef = useRef<HTMLElement | null>(null);

  const handleScrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <main className="min-h-screen">
      <Header />
      <Hero onScroll={handleScrollToProjects} />
      <About />
      <section ref={projectsRef}>
        <Projects />
      </section>
      <Contact />
    </main>
  );
}
