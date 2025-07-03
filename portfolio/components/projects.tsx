import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Smartphone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "BSDGo App",
      description:
        "BSDGo is an iOS companion navigation app built to enhance the BSD Link commuting experience by providing real-time shuttle schedules and nearby stops through a fast, widget-ready interface.",
      image:
        "./assets/BSDGo_logo.png?height=300&width=500",
      technologies: ["SwiftUI", "UIKit", "Core Location", "WidgetKit", "MapKit"],
      appUrl: "https://apps.apple.com/id/app/bsdgo/id6747796706",
      githubUrl: "https://github.com/Lunardy2509/BSDGo",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "Ripely App",
      description:
        "Ripely is a CoreML-powered iOS app designed to help Academy Learners identify apple ripeness in real time using image classification.",
      image:
        "./assets/Ripely_logo.png?height=300&width=500",
      technologies: ["UIKit", "AVFoundation", "CreateML", "CoreML", "Vision", "PhotosUI"],
      appUrl: "https://apps.apple.com/id/app/ripely/id6747743774",
      githubUrl: "https://github.com/Lunardy2509/Ripely",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium border-green-200 text-green-700">
              Featured Projects
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My latest{" "}
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                creations
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are my recent iOS projects that showcase my skills and passion for mobile development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white border-gray-200 shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-contain max-w-full max-h-full hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs px-2 py-1 bg-gray-50 border-gray-200 hover:bg-gray-100 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      asChild
                    >
                      <Link href={project.appUrl}>
                        <Smartphone className="h-4 w-4 mr-2" />
                        App Store
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 bg-transparent"
                      asChild
                    >
                      <Link href={project.githubUrl}>
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
