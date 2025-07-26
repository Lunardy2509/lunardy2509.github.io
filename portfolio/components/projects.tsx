// File: components/projects.tsx
"use client";
import React, { useRef, useState } from "react";
import { Github, ExternalLink, AppleIcon, PlayCircle, X } from "lucide-react";
import { IoCloseOutline } from "react-icons/io5";
import { useScrollAnimation } from "../lib/utils";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "BSDGo",
    description:
      "[Core Project] BSDGo is a modern iOS application designed to enhance the daily commuting experience for BSD Link users. Inspired by the OneSmile App, BSDGo offers thoughtful enhancements in usability, speed, and convenience tailored specifically to meet the needs of BSD commuters.",
    contribution:
      "As a Junior iOS Developer on BSDGo, I contributed to building a commuter-focused iOS application designed to enhance the daily transit experience for BSD Link users. The app features an interactive map powered by MapKit and CoreLocation, and a sleek widget using WidgetKit that allows users to quickly view nearby bus stops without launching the full app. Drawing inspiration from the OneSmile app, I helped implement key enhancements in UI responsiveness and route accessibility, integrating SwiftUI and UIKit to deliver a seamless, modern commuter interface.",
    image: "/assets/BSDGo-App-Icon.png",
    previewImg: "/assets/preview/BSDGo-1.png",
    previewImg2: "/assets/preview/BSDGo-2.png",
    technologies: ["SwiftUI", "UIKit", "CoreLocation", "MapKit", "WidgetKit"],
    github: "https://github.com/Lunardy2509/BSDGo",
    appStore: "https://apps.apple.com/id/app/bsdgo/id6747796706",
    videoDemo: "#",
  },
  {
    id: 2,
    title: "Ripely",
    description:
      "[Core Project] Ripely is a smart iOS app that helps users identify the ripeness of apples in real-time using machine learning. Ripely leverages on-device image classification to instantly categorize apples based on ripeness making fruit checking faster, more reliable, and even fun.",
    contribution:
      "In Ripely, I took on the role of Technical Lead and iOS Developer, spearheading the development of a real-time fruit classification app that uses machine learning to identify apple ripeness. I implemented the CoreML and Vision framework to enable on-device image processing, supported by a responsive camera interface built with AVFoundation and PhotosUI. Beyond functionality, I focused on delivering a delightful user experience with SwiftUI and UIKit, making Ripely not just a useful tool for consumers, but also a fun and educational experience in food tech.",
    image: "/assets/Ripely-App-Icon.png",
    previewImg: "/assets/preview/Ripely-1.png",
    previewImg2: "/assets/preview/Ripely-2.png",
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
    videoDemo: "#",
  },
  {
    id: 3,
    title: "Logic Lab Circuit",
    description:
      "[Side Project - Still Under Development] Logic Lab Circuit is an innovative platform designed to facilitate the learning and experimentation of electronic circuits in Swift platform. It provides a virtual environment where users can build, simulate, and test their circuit designs before implementing them in the real world.",
    contribution:
      "As the solo developer of Logic Lab Circuit, I’m building a Swift-based circuit simulation tool to make electronics more accessible and interactive for learners. Still in development, the app allows users to virtually build and test logic circuits in a sandbox-style interface. This project reflects my initiative in creating a meaningful educational platform by combining my passion for electronics with software development using SwiftUI and real-time logic processing logic structures.",
    image: "/assets/LLC-App-Icon.png",
    previewImg: "/assets/preview/LLC-1.PNG",
    previewImg2: "/assets/preview/LLC-2.PNG",
    technologies: ["SwiftUI", "Foundation"],
    github: "https://github.com/Lunardy2509/Logic-Lab-Circuit",
    appStore: "#",
    videoDemo: "#",
  },
  {
    id: 4,
    title: "IoT Container Tracking",
    description:
      "This repository contains the source files for a thesis project focused on developing an IoT-powered smart container tracking system. The system is designed for a logistics company named Tanto and aims to monitor container conditions (e.g., location, temperature, and vibrations) in real time while in transit.",
    contribution:
      "For my thesis project, I led the development of an IoT Container Tracking system for a logistics company named Tanto. The system uses an ESP32 microcontroller integrated with GPS (TinyGPS++), temperature sensors (DHT), and vibration sensors (MPU6050) to monitor cargo conditions in real time during transit. I programmed the firmware to send data via GSM using TinyGsmClient and MQTT (PubSubClient) to a remote dashboard. This project demonstrates my ability to build end-to-end embedded systems that combine sensor fusion, communication protocols, and logistics tracking.",
    image: "/assets/IoT-Container-Tracking.png",
    previewImg: "/assets/preview/IoT-Container-Tracking-1.png",
    previewImg2: "/assets/preview/IoT-Container-Tracking-2.png",
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
    videoDemo: "#",
  },
  {
    id: 5,
    title: "SCARA 5 DOF Robot Arm",
    description:
      "This repository contains an Arduino-based SCARA (Selective Compliance Assembly Robot Arm) with 5 Degrees of Freedom, designed for educational and competitive use. Built from open-source resources, this project has been used as a prototype for: Introduce students to robotic kinematics, control, and mechatronics, and Provide a low-cost platform for learning automation and vision-guided tasks.",
    contribution:
      "As a Research Assistant in the Mechanical and Installation Division, I worked on the SCARA 5 DOF Robot Arm project, focusing on its mechanical assembly and hardware configuration. The Arduino-based robot arm was designed for educational and prototyping purposes to teach robotic motion and automation. I helped set up the servo and stepper motor system using libraries like AccelStepper, and contributed to refining the control logic for smooth arm articulation—paving the way for affordable robotics education tools.",
    image: "/assets/SCARA-5-DOF-Robot-Arm.png",
    previewImg: "/assets/preview/SCARA-5-DOF-1.jpg",
    previewImg2: "/assets/preview/SCARA-5-DOF-2.jpeg",
    technologies: ["Servo", "AccelStepper", "SoftwareSerial"],
    github: "https://github.com/Lunardy2509/SCARA_5_DOF_Robot",
    appStore: "#",
    videoDemo: "#",
  },
  {
    id: 6,
    title: "IoT Power Meter",
    description:
      "This project is an IoT-enabled ammeter to measure power and temperature monitoring system using ESP8266, implemented in a school environment in Depok, West Java, Indonesia. It aims to monitor energy usage in various electronic devices by sending real-time data to a dashboard from over 60+ ESP8266 nodes installed in classrooms.",
    contribution:
      "In the IoT Power Meter project, I assisted as a Research Assistant to develop a scalable monitoring system using ESP8266 microcontrollers. Over 60 nodes were deployed in a school in Depok to track power and temperature usage in classrooms. My role involved integrating sensors (DHT, ACS712), configuring MQTT communication with PubSubClient, and ensuring accurate data transmission to a central dashboard. This project showcases my hands-on ability to deliver real-world IoT solutions with a significant environmental and educational impact.",
    image: "assets/IoT-Power-Meter.png",
    previewImg: "/assets/preview/IoT-Power-Meter-1.jpg",
    previewImg2: "/assets/preview/IoT-Power-Meter-2.jpg",
    technologies: ["ESP8266", "DHT", "ACS712", "PubSubClient"],
    github: "https://github.com/Lunardy2509/IoT-Power-Meter",
    appStore: "#",
    videoDemo: "/assets/preview/IoT-Power-Meter-Demo.mp4",
  },
  {
    id: 7,
    title: "Arduino Multimeter",
    description:
      "This is an open-source Arduino project designed to function as a custom multimeter capable of measuring DC and AC current (up to 5A) for solar PV systems. Developed under the PKM MAN IC initiative, this project supports solar education by enabling students to monitor real-time voltage, current, and power (watts) in small-scale solar setups.",
    contribution:
      "As Technical Lead for the Arduino Multimeter project under the PKM MAN IC initiative, I developed a custom, open-source device to measure voltage, current (DC and AC), and power output for solar PV systems. Built using Arduino and components like ACS712 and LiquidCrystal display, the multimeter is designed for classroom use in solar energy education. I led the software and hardware integration, enabling real-time measurements that empower students to understand renewable energy systems hands-on.",
    image: "assets/Arduino-Multimeter.png",
    previewImg: "/assets/preview/arduino-multimeter-1.jpg",
    previewImg2: "/assets/preview/arduino-multimeter-2.jpg",
    technologies: ["Wire", "LiquidCrystal", "ACS712"],
    github: "https://github.com/Lunardy2509/arduino_multimeter",
    appStore: "#",
    videoDemo: "/assets/preview/arduino-multimeter-Demo.mp4",
  },
  {
    id: 8,
    title: "Arduino Robot Arm",
    description:
      "This is a microcontroller project built to control a 3-DoF robotic arm using Arduino.The arm can be controlled manually via joystick (HW-504) and supports a record & playback feature using a potentiometer.",
    contribution:
      "For my final academic project, I led the development of an Arduino Robot Arm with 3 degrees of freedom and a joystick-based manual control system. The project includes a unique record-and-playback feature using potentiometers, allowing users to program repeatable motion sequences. I handled both the mechanical and software aspects, including servo motor control and logic programming—providing an accessible way to demonstrate automation and mechatronics principles.",
    image: "assets/Arduino-Robot-Arm.png",
    previewImg: "/assets/preview/arduino-robot-arm-1.jpg",
    previewImg2: "/assets/preview/arduino-robot-arm-2.jpg",
    technologies: ["Servo"],
    github: "https://github.com/Lunardy2509/arduino_robot_arm",
    appStore: "#",
    videoDemo: "/assets/preview/arduino-robot-arm-Demo.mp4",
  },
];

type Project = {
  id: number;
  title: string;
  description: string;
  contribution: string;
  image: string;
  previewImg: string;
  previewImg2: string;
  technologies: string[];
  github: string;
  appStore: string;
  videoDemo: string;
};

export default function Projects() {
  const visibleElements = useScrollAnimation();
  const projectsRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeModal, setActiveModal] = useState<"details" | "video" | null>(
    null
  );
  const [isVideoClosing, setIsVideoClosing] = useState(false);
  const [isDetailClosing, setIsDetailClosing] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

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
            <React.Fragment key={project.id}>
              {project.id === 4 && (
                <h2 className="text-4xl md:text-5xl font-light text-gray-800 col-span-full pt-12 pb-4">
                  My{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                    Hardware Projects
                  </span>
                </h2>
              )}
              <div
                id={`project-${project.id}`}
                data-animate
                className={`bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:scale-105 flex flex-col justify-between h-full min-h-[530px]`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative flex items-center justify-center w-full h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 shadow-inner">
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

                <div className="p-6 min-h-[390px] flex flex-col justify-between h-full">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-4">
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

                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    <button
                      onClick={() => {
                        setSelectedProject(project);
                        setActiveModal("details");
                      }}
                      className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-medium hover:bg-purple-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      <span className="truncate block">View More</span>
                    </button>
                    <a
                      href={project.github}
                      className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-medium hover:bg-gray-900 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      <span className="truncate block">Code</span>
                    </a>
                    {project.appStore !== "#" && (
                      <a
                        href={project.appStore}
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                      >
                        <AppleIcon className="w-4 h-4 mr-2" />
                        <span className="truncate block">Store</span>
                      </a>
                    )}
                    {project.videoDemo !== "#" && (
                      <button
                        onClick={() => {
                          setSelectedProject(project);
                          setShowVideo(true);
                          setActiveModal("video");
                        }}
                        className="flex items-center px-4 py-2 bg-red-600 text-white rounded-full text-sm font-medium hover:bg-red-700 transition-colors"
                      >
                        <PlayCircle className="w-4 h-4 mr-2" />
                        <span className="ml-2 truncate block">Demo</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Video Modal */}
        {selectedProject &&
          activeModal === "video" &&
          showVideo &&
          selectedProject.videoDemo !== "#" && (
            <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in">
              <div
                className={`relative w-[90vw] max-w-[402px] aspect-[402/874] rounded-3xl overflow-hidden shadow-2xl ${
                  isVideoClosing ? "animate-pop-out" : "animate-pop-in"
                }`}
              >
                <video
                  src={selectedProject.videoDemo}
                  autoPlay
                  controls
                  muted
                  className="absolute top-[5.2%] left-[5.5%] w-[89%] h-[89%] rounded-[28px] object-cover"
                />
                <Image
                  src="/assets/preview/iPhone-bezel.png"
                  alt="iPhone Bezel"
                  fill
                  className="object-contain pointer-events-none"
                />
                <button
                  onClick={() => {
                    setIsVideoClosing(true);
                    setTimeout(() => {
                      setShowVideo(false);
                      setActiveModal(null);
                      setIsVideoClosing(false);
                    }, 300); // ⏱️ match pop-out duration
                  }}
                  className="absolute top-3.5 right-3.5 bg-white/70 backdrop-blur-sm text-black rounded-full p-1 hover:bg-white"
                >
                  <IoCloseOutline className="w-6 h-6" />
                </button>
              </div>
            </div>
          )}

        {/* Project Detail Modal */}
        {selectedProject && activeModal === "details" && (
          <div className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div
              className={`bg-white rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden relative max-h-[90vh] flex flex-col ${
                isDetailClosing ? "animate-pop-out" : "animate-pop-in"
              }`}
            >
              <button
                onClick={() => {
                  setIsDetailClosing(true);
                  setTimeout(() => {
                    setSelectedProject(null);
                    setActiveModal(null);
                    setIsDetailClosing(false);
                  }, 300);
                }}
                className="absolute top-4 right-4 text-gray-600 hover:text-black z-10"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-6 overflow-y-auto pr-4 space-y-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  {selectedProject.title}
                </h3>

                <div>
                  <h2 className="text-1xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                    Description
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h2 className="text-1xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                    Contribution
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.contribution}
                  </p>
                </div>

                <div>
                  <h2 className="text-1xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                    Image Documentation
                  </h2>
                  {selectedProject.previewImg === "#" &&
                  selectedProject.previewImg2 === "#" ? (
                    <p className="text-gray-500 italic">
                      No Image Documentation Yet.
                    </p>
                  ) : (
                    <div className="grid grid-cols-2 gap-4">
                      {selectedProject.previewImg !== "#" && (
                        <img
                          src={selectedProject.previewImg}
                          alt="Image Documentation 1"
                          className="rounded-xl object-cover w-full h-full"
                        />
                      )}
                      {selectedProject.previewImg2 !== "#" && (
                        <img
                          src={selectedProject.previewImg2}
                          alt="Image Documentation 2"
                          className="rounded-xl object-cover w-full h-full"
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
