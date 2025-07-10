// File: components/projects.tsx
// 1. Add Modal State and Selected Project
"use client";
import React, { useRef, useState } from "react";
import { Github, ExternalLink, X } from "lucide-react";
import { useScrollAnimation } from "../lib/utils";

const projects = [
  {
    id: 1,
    title: "BSDGo",
    description:
      "[Core Project] BSDGo is a modern iOS application designed to enhance the daily commuting experience for BSD Link users. Inspired by the OneSmile App, BSDGo offers thoughtful enhancements in usability, speed, and convenience tailored specifically to meet the needs of BSD commuters.",
    image: "/assets/BSDGo-App-Icon.png",
    technologies: ["SwiftUI", "UIKit", "CoreLocation", "MapKit", "WidgetKit"],
    github: "https://github.com/Lunardy2509/BSDGo",
    appStore: "https://apps.apple.com/id/app/bsdgo/id6747796706",
  },
  {
    id: 2,
    title: "Ripely",
    description:
      "[Core Project] Ripely is a smart iOS app that helps users identify the ripeness of apples in real-time using machine learning. Ripely leverages on-device image classification to instantly categorize apples based on ripeness making fruit checking faster, more reliable, and even fun.",
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
    description: "[Side Project - Still Under Development] Logic Lab Circuit is an innovative platform designed to facilitate the learning and experimentation of electronic circuits in Swift platform. It provides a virtual environment where users can build, simulate, and test their circuit designs before implementing them in the real world.",
    image: "/assets/LLC-App-Icon.png",
    technologies: ["SwiftUI", "Foundation"],
    github: "#",
    appStore: "#",
  },
  // Hardware Projects Start Here
  {
    id: 4,
    title: "IoT Container Tracking",
    description:
      "This repository contains the source files for a thesis project focused on developing an IoT-powered smart container tracking system. The system is designed for a logistics company named Tanto and aims to monitor container conditions (e.g., location, temperature, and vibrations) in real time while in transit.",
    image: "/assets/IoT-Container-Tracking.png",
    technologies: [
      "ESP32",
      "TinyGPS++",
      "DHT",
      "Adafruit MPU6050",
      "Wire",
      "HardwareSerial",
      "TinyGsmClient",
      "PubSubClient",
    ],
    github: "https://github.com/Lunardy2509/IoT-Container-Tracking",
    appStore: "#",
  },
  {
    id: 5,
    title: "SCARA 5 DOF Robot Arm",
    description:
      "This repository contains an Arduino-based SCARA (Selective Compliance Assembly Robot Arm) with 5 Degrees of Freedom, designed for educational and competitive use. Built from open-source resources, this project has been used as a prototype for: Introduce students to robotic kinematics, control, and mechatronics, and Provide a low-cost platform for learning automation and vision-guided tasks.",
    image: "/assets/SCARA-5-DOF-Robot-Arm.png",
    technologies: ["Servo", "AccelStepper", "SoftwareSerial"],
    github: "https://github.com/Lunardy2509/SCARA_5_DOF_Robot",
    appStore: "#",
  },
  {
    id: 6,
    title: "IoT Power Meter",
    description:
      "This project is an IoT-enabled ammeter to measure power and temperature monitoring system using ESP8266, implemented in a school environment in Depok, West Java, Indonesia. It aims to monitor energy usage in various electronic devices by sending real-time data to a dashboard from over 60+ ESP8266 nodes installed in classrooms.",
    image: "assets/IoT-Power-Meter.png",
    technologies: ["ESP8266", "DHT", "ACS712", "PubSubClient"],
    github: "https://github.com/Lunardy2509/IoT-Power-Meter",
    appStore: "#",
  },
  {
    id: 7,
    title: "Arduino Multimeter",
    description:
      "This is an open-source Arduino project designed to function as a custom multimeter capable of measuring DC and AC current (up to 5A) for solar PV systems. Developed under the PKM MAN IC initiative, this project supports solar education by enabling students to monitor real-time voltage, current, and power (watts) in small-scale solar setups.",
    image: "assets/Arduino-Multimeter.png",
    technologies: ["Wire", "LiquidCrystal", "ACS712"],
    github: "https://github.com/Lunardy2509/arduino_multimeter",
    appStore: "#",
  },
  {
    id: 8,
    title: "Arduino Robot Arm",
    description:
      "This is a microcontroller project built to control a 3-DoF robotic arm using Arduino.The arm can be controlled manually via joystick (HW-504) and supports a record & playback feature using a potentiometer.",
    image: "assets/Arduino-Robot-Arm.png",
    technologies: ["Servo"],
    github: "https://github.com/Lunardy2509/arduino_robot_arm",
    appStore: "#",
  },
];

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  appStore: string;
};

export default function Projects() {
  const visibleElements = useScrollAnimation();
  const projectsRef = useRef(null);
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  const isHardware = (project: Project) => project.id >= 4;

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
            My Latest {" "}
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
            <React.Fragment key={project.id}>
              {project.id === 4 && (
                <h2 className="text-4xl md:text-5xl font-light text-gray-800 col-span-full pt-12 pb-4">
                  My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">Hardware Projects</span>
                </h2>
              )}
              <div
                onClick={() => setSelectedProject(project)}
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
                  <h3 className="absolute text-6xl lg:text-7xl font-semibold text-white/30 drop-shadow-md z-0 select-none uppercase tracking-wide">
                    {project.title}
                  </h3>
                  <img
                    src={project.image}
                    alt={`${project.title} icon`}
                    className="object-contain w-40 h-40 md:w-50 md:h-60 lg:w-50 lg:h-60 relative z-10"
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
                    {project.appStore !== "#" && (
                      <a
                        href={project.appStore}
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        App Store
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden relative animate-fade-in">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-black"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {selectedProject.description}
                </p>
                <div className="flex gap-4 flex-wrap mb-4">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src={selectedProject.image}
                    alt="Screenshot 1"
                    className="rounded-xl object-cover w-full h-40"
                  />
                  <img
                    src={selectedProject.image}
                    alt="Screenshot 2"
                    className="rounded-xl object-cover w-full h-40"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}