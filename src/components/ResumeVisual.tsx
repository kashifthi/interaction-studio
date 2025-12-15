import { Briefcase, GraduationCap, Award, Code, Palette, Wrench, Languages, FileText, Building2, Smartphone, Globe, Calendar } from "lucide-react";

export function ResumeVisual() {
  const experiences = [
    {
      title: "UX/UI Designer (Werkstudent)",
      company: "STIKKY // Nine37 Innovation GmbH",
      period: "Oct 2023 - Present",
      icon: Smartphone,
      color: "bg-primary",
      highlights: [
        "Lead UX/UI design initiatives for Stikky",
        "Create interfaces using Polaris design system",
        "Iterate designs with Hotjar & Firebase feedback"
      ]
    },
    {
      title: "UX/UI Designer",
      company: "vFairs",
      period: "Nov 2021 - Sep 2023",
      icon: Globe,
      color: "bg-accent",
      highlights: [
        "Implemented designs using Internal CMS tool",
        "Ensured WCAG compliance",
        "Top Rated Event Designer 2022"
      ]
    },
    {
      title: "UX/UI Designer",
      company: "Blonk Group",
      period: "Sep 2020 - Nov 2021",
      icon: Building2,
      color: "bg-secondary",
      highlights: [
        "Redesigned Blonk iOS/Android app",
        "66% improvement in user onboarding",
        "Maintained design system"
      ]
    },
    {
      title: "UX/UI Designer",
      company: "Aykays",
      period: "Jun 2019 - Sep 2020",
      icon: Code,
      color: "bg-muted",
      highlights: [
        "Bootstrap & CMS based sites",
        "WordPress, Webflow, Shopify"
      ]
    }
  ];

  return (
    <div className="container mx-auto py-12 space-y-16">
      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Kashif Iqbal</h1>
        <p className="text-xl text-primary font-medium">UX Designer</p>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          UX/UI Designer based in Ingolstadt, Germany with extensive experience in creating user-friendly interfaces 
          and leading design initiatives for mobile apps, SaaS platforms, and web applications.
        </p>
      </header>

      {/* Visual Experience Timeline */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 justify-center">
          <div className="p-2 rounded-lg bg-primary/10">
            <Briefcase className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold text-foreground">Experience Journey</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-muted-foreground transform -translate-x-1/2 hidden lg:block" />
          
          <div className="space-y-8 lg:space-y-0">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div key={exp.company} className="relative lg:flex lg:items-center lg:min-h-[200px]">
                  {/* Timeline node */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-16 h-16 rounded-full ${exp.color} flex items-center justify-center shadow-lg ring-4 ring-background`}>
                      <Icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                  </div>
                  
                  {/* Content card */}
                  <div className={`lg:w-1/2 ${isLeft ? 'lg:pr-24 lg:text-right' : 'lg:pl-24 lg:ml-auto'}`}>
                    <div className="p-6 rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
                      <div className={`flex items-center gap-3 mb-3 lg:hidden`}>
                        <div className={`w-12 h-12 rounded-full ${exp.color} flex items-center justify-center`}>
                          <Icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-foreground">{exp.title}</h3>
                          <p className="text-primary font-medium text-sm">{exp.company}</p>
                        </div>
                      </div>
                      
                      <div className="hidden lg:block">
                        <h3 className="font-semibold text-lg text-foreground">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      
                      <div className={`flex items-center gap-2 text-muted-foreground text-sm mt-2 ${isLeft ? 'lg:justify-end' : ''}`}>
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      
                      <ul className={`mt-4 space-y-2 ${isLeft ? 'lg:text-right' : ''}`}>
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 ${isLeft ? 'lg:order-2' : ''}`} />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visual Education */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 justify-center">
          <div className="p-2 rounded-lg bg-primary/10">
            <GraduationCap className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold text-foreground">Education</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-border shadow-xl">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg ring-4 ring-background">
                <GraduationCap className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            
            <div className="text-center pt-8">
              <h3 className="text-xl font-bold text-foreground">M.Sc. User Experience Design and Research</h3>
              <p className="text-primary font-medium mt-2">Technische Hochschule Ingolstadt</p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground mt-3">
                <Calendar className="h-4 w-4" />
                <span>2024 - In Progress</span>
              </div>
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                📍 Ingolstadt, Germany
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills - Visual Grid */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 justify-center">
          <div className="p-2 rounded-lg bg-primary/10">
            <Code className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold text-foreground">Skills</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-card border border-border shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Palette className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Design</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["UX Strategy", "User Flows", "Wireframes", "Prototypes", "Mockups", "Design Systems"].map((skill) => (
                <span key={skill} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Research</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["User Interviews", "Usability Testing", "Persona Hypothesis", "Competitor Analysis"].map((skill) => (
                <span key={skill} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Wrench className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Figma", "Miro", "Adobe Suite", "Hotjar", "MS Clarity", "Jira"].map((skill) => (
                <span key={skill} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Technical</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["HTML5", "CSS3", "WordPress", "Webflow", "Shopify"].map((skill) => (
                <span key={skill} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Languages className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["English (Fluent)", "German (A1)", "Hindi/Urdu (Fluent)"].map((skill) => (
                <span key={skill} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 justify-center">
          <div className="p-2 rounded-lg bg-primary/10">
            <Award className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold text-foreground">Certifications & Awards</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Google UX Design Certificate", org: "Google", icon: "🎯" },
            { title: "Enterprise Design Thinking Practitioner", org: "IBM", icon: "💡" },
            { title: "Enterprise Design Thinking Co-Creator", org: "IBM", icon: "🤝" },
            { title: "UI/UX Design Specialization", org: "Coursera", icon: "📚" },
            { title: "McKinsey Forward Program", org: "McKinsey & Company", icon: "🚀" },
            { title: "Top Rated Event Design Award", org: "vFairs 2022", icon: "🏆" },
          ].map((cert) => (
            <div key={cert.title} className="p-5 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl mb-3">{cert.icon}</div>
              <h3 className="font-medium text-foreground">{cert.title}</h3>
              <p className="text-sm text-primary mt-1">{cert.org}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}