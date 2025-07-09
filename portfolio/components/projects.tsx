// File: components/projects.tsx
"use client";
import React, { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "../lib/utils";

const projects = [
  {
    id: 1,
    title: "BSDGo",
    description:
      "BSDGo is a modern iOS application designed to enhance the daily commuting experience for BSD Link users. Inspired by the OneSmile App, BSDGo offers thoughtful enhancements in usability, speed, and convenience tailored specifically to meet the needs of BSD commuters.",
    image: "/assets/BSDGo-App-Icon.png",
    technologies: ["Swift", "UIKit", "CoreLocation", "MapKit", "WidgetKit"],
    github: "https://github.com/Lunardy2509/BSDGo",
    appStore: "https://apps.apple.com/id/app/bsdgo/id6747796706",
  },
  {
    id: 2,
    title: "Ripely",
    description:
      "Ripely is a smart iOS app that helps users identify the ripeness of apples in real-time using machine learning. Ripely leverages on-device image classification to instantly categorize apples based on ripeness making fruit checking faster, more reliable, and even fun.",
    image: "/assets/Ripely-App-Icon.png",
    technologies: [
      "SwiftUI",
      "UIKit",
      "Foundation",
      "CoreML",
      "Vision",
      "AVFoundation",
      "PhotosUI",
      "TOCropViewController",
    ],
    github: "https://github.com/Lunardy2509/Ripely",
    appStore: "https://apps.apple.com/id/app/ripely/id6747743774",
  },
  {
    id: 3,
    title: "Logic Lab Circuit",
    description: "On Progress",
    image: "/assets/LLC-App-Icon.png",
    technologies: ["SwiftUI", "Foundation"],
    github: "#",
    appStore: "#",
  },
];

export default function Projects() {
  const visibleElements = useScrollAnimation();
  const projectsRef = useRef(null);

  return (
    <section
      ref={projectsRef}
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          id="projects-header"
          data-animate
          className={`text-center mb-16 transition-all duration-1000 ${
            visibleElements.has("projects-header")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium mb-8 shadow-lg">
            Featured Work
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-gray-800 mb-6">
            My Latest{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
              Creations
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are my recent iOS projects that showcase my skills and passion
            for mobile development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              id={`project-${project.id}`}
              data-animate
              className={`bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                visibleElements.has(`project-${project.id}`)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative flex items-center justify-center w-full h-60 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 shadow-inner">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md mix-blend-overlay pointer-events-none"></div>
                
                {/* Liquid Glass Title Behind */}
                <h3 className="absolute text-6xl lg:text-7xl font-semibold text-white/30 drop-shadow-md z-0 select-none uppercase tracking-wide">
                  {project.title}
                </h3>

                {/* Project Image */}
                <img
                  src={project.image}
                  alt={`${project.title} icon`}
                  className="object-contain w-20 h-20 md:w-30 md:h-30 lg:w-40 lg:h-40 relative z-10"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-medium hover:bg-gray-900 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.appStore}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    App Store
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
