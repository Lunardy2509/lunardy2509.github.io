import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function About() {
  return (
    <section className="py-24 px-6 relative bg-white">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium border-blue-200 text-blue-700">
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Passionate about creating{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                digital magic
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 rounded-3xl flex items-center justify-center relative overflow-hidden shadow-2xl border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10"></div>
                <div className="text-8xl relative z-10">👨‍💻</div>
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-full blur-xl"></div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-xl text-gray-600 leading-relaxed">
                  I'm a passionate iOS developer currently studying at Apple Developer Academy @BINUS. I love turning
                  complex problems into simple, beautiful mobile solutions. With expertise in Swift and iOS development,
                  I create digital experiences that make a real difference in users' daily lives.
                </p>

                <p className="text-xl text-gray-600 leading-relaxed">
                  When I'm not coding, you'll find me exploring new iOS technologies, contributing to open-source
                  projects, or sharing knowledge with the developer community.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
                      2
                    </div>
                    <div className="text-sm font-medium text-blue-700">iOS Projects</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-2">
                      3+
                    </div>
                    <div className="text-sm font-medium text-purple-700">Months at Academy</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
