import { Header } from "../components/header"
import { Hero } from "../components/hero"
import { About } from "../components/about"
import { Skills } from "../components/skills"
import { Projects } from "../components/projects"
import { Contact } from "../components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
