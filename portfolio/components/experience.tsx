import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Experience() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      description:
        "Led frontend development for multiple client projects, mentored junior developers, and implemented modern React patterns.",
    },
    {
      title: "Full Stack Developer",
      company: "Startup Solutions",
      period: "2020 - 2022",
      description:
        "Developed and maintained web applications using React, Node.js, and PostgreSQL. Collaborated with design and product teams.",
    },
    {
      title: "Junior Developer",
      company: "Digital Agency",
      period: "2019 - 2020",
      description:
        "Built responsive websites and web applications. Gained experience in modern web development practices and agile methodologies.",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-blue-600">{exp.company}</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2 md:mt-0">{exp.period}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
