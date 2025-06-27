import Link from "next/link"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-6 mb-8">
            <Link href="https://github.com/Lunardy2509" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/ferdinand-lunardy-503648219/" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="https://www.instagram.com/ferdinand_lunardy/" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:ferdilunardy@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>

          <p className="text-muted-foreground">© 2024 Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
