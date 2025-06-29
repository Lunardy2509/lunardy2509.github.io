import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "iOS Development",
      skills: ["Swift", "SwiftUI", "UIKit", "Xcode"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
    },
    {
      title: "Backend & APIs",
      skills: ["MySQL", "SQLite","REST APIs", "Django", "Node.js", "JSON"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "Figma", "TestFlight", "App Store Connect"],
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50",
      borderColor: "border-green-200",
    },
  ]

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium border-purple-200 text-purple-700">
              Skills & Technologies
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                technical arsenal
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I work with cutting-edge technologies to build scalable, performant, and beautiful applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className={`h-full bg-gradient-to-br ${category.bgGradient} ${category.borderColor} shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2`}
              >
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3
                      className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                    >
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-sm px-3 py-1 bg-white/80 backdrop-blur-sm border border-gray-200 hover:bg-white transition-all duration-300 transform hover:scale-105"
                      >
                        {skill}
                      </Badge>
                    ))}
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
