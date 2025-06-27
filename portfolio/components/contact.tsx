import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-pink-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium border-pink-200 text-pink-700">
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's create something{" "}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                amazing together
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm always excited to work on new projects and collaborate with amazing people
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Let's start a conversation</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. Whether you have a question, want to
                  collaborate, or just want to say hi, I'd love to hear from you!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">ferdilunardy@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">+62-821-5788-6428</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Location</div>
                    <div className="text-gray-600">Jakarta, Indonesia</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900">Send me a message</CardTitle>
                <CardDescription className="text-gray-600">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="First Name"
                      className="bg-white/50 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                    />
                    <Input
                      placeholder="Last Name"
                      className="bg-white/50 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                    />
                  </div>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-white/50 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                  />
                  <Input
                    placeholder="Subject"
                    className="bg-white/50 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300"
                  />
                  <Textarea
                    placeholder="Your message..."
                    className="min-h-[140px] bg-white/50 border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                  />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
