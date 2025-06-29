import { Button } from "@/components/ui/button"
import { ChevronDown, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-pink-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-lg">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Available for new opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Lun
            </span>
          </h1>

          <div className="text-lg md:text-xl text-gray-500 mb-8 font-medium">Ferdinand Lunardy</div>

          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-600 mb-6">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              iOS Developer
            </span>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-gray-600 mb-12 w-full sm:w-11/12 md:w-5/6 lg:w-4/5 xl:w-3/4 mx-auto leading-relaxed px-4 sm:px-6 md:px-8">
            I craft beautiful, intuitive, and user-centered iOS applications with{" "}
            <span className="text-blue-600 font-semibold">passion</span> and{" "}
            <span className="text-purple-600 font-semibold">precision</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="#contact">Let's Work Together</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 hover:border-blue-500 hover:bg-gray-50 px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent"
              asChild
            >
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-8 mb-16 relative">
            <Link
              href="https://github.com/Lunardy2509"
              className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ferdinand-lunardy-503648219/"
              className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
              id="linkedin-button"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:ferdilunardy@gmail.com"
              className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-600 hover:text-blue-600 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </Link>

            {/* Chevron Down - Clean icon under LinkedIn with 50px gap */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-12">
              <ChevronDown className="h-6 w-6 text-gray-600 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
