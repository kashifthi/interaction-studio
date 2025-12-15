import { Briefcase, GraduationCap, Award, Code, Palette, Wrench, Languages, FileText } from "lucide-react";

export const resumeTextContent = `
Kashif Iqbal - UX Designer.

Summary:
UX/UI Designer based in Ingolstadt, Germany with extensive experience in creating user-friendly interfaces 
and leading design initiatives for mobile apps, SaaS platforms, and web applications.

Experience:

UX/UI Designer (Werkstudent) at STIKKY // Nine37 Innovation GmbH, from October 2023 to Present.
Lead UX/UI design initiatives for Stikky, enabling Shopify merchants to turn their Shopify store into a mobile app.
Create user-friendly interfaces for the Shopify backend using Polaris design system.
Empowering merchants to design and customize their mobile apps through intuitive drag-and-drop functionality.
Collaborate with engineers to ensure implementability of design.
Iterate on designs based on user feedback using Hotjar and Firebase.

UX/UI Designer at vFairs, from November 2021 to September 2023.
Worked with vFairs' Internal CMS tool to implement approved design mock-ups and elements.
Prioritized delivering exceptional user experiences and troubleshooting UX issues.
Ensured compliance with style standards and WCAG guidelines.
Recognized as Top Rated Event Designer of the year in 2022.

UX/UI Designer at Blonk Group, from September 2020 to November 2021.
Served as a design generalist at Blonk, an HR technology startup.
Conceptualized and redesigned the Blonk iOS/Android app.
Led redesign efforts for SoBlonk AI based Recruiting SaaS Platform.
Achieved 66% improvement in user onboarding.
Key role in designing and maintaining the overall design system.

UX/UI Designer at Aykays, from June 2019 to September 2020.
Designed, prototyped, and implemented Bootstrap and CMS based sites.
Worked with WordPress, Webflow, and Shopify platforms.

Education:

Master of Science in User Experience Design and Research at Technische Hochschule Ingolstadt, Germany. In progress since 2024.

Skills:

Design: UX strategy, User flows, Concept sketches, Experience mapping, Wireframes, Prototypes, Mockups, Design systems.
Research: User interviews, Usability testing, Persona hypothesis, Competitor analysis.
Technical: HTML5, CSS3.
Tools: Figma, Miro, Adobe Suite, Hotjar, MS Clarity.
Product Management: Jira, Planning Poker, Google Docs.
Languages: German A1, English Fluent, Hindi/Urdu Fluent.

Certifications:
Google UX Design Certificate.
IBM Enterprise Design Thinking Practitioner.
IBM Enterprise Design Thinking Co-Creator.
UI/UX Design Specialization from Coursera.
McKinsey Forward Program.

Awards:
Top Rated Event Design Award at vFairs, December 2022.
`;

export function ResumeContent() {
  return (
    <div className="container mx-auto py-12 space-y-12">
      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Kashif Iqbal</h1>
        <p className="text-xl text-primary font-medium">UX Designer</p>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          UX/UI Designer based in Ingolstadt, Germany with extensive experience in creating user-friendly interfaces 
          and leading design initiatives for mobile apps, SaaS platforms, and web applications.
        </p>
      </header>

      {/* Experience */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Briefcase className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold text-foreground">Experience</h2>
        </div>

        <div className="space-y-6 pl-4 border-l-2 border-border ml-4">
          <article className="relative pl-6">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary" />
            <h3 className="font-semibold text-lg text-foreground">UX/UI Designer (Werkstudent)</h3>
            <p className="text-primary font-medium">STIKKY // Nine37 Innovation GmbH • Oct 2023 - Present</p>
            <ul className="mt-2 text-muted-foreground space-y-1 list-disc list-inside">
              <li>Lead UX/UI design initiatives for Stikky, enabling Shopify merchants to create mobile apps</li>
              <li>Create user-friendly interfaces using Polaris design system with drag-and-drop functionality</li>
              <li>Collaborate with engineers to ensure design implementability</li>
              <li>Iterate on designs based on user feedback using Hotjar & Firebase</li>
            </ul>
          </article>

          <article className="relative pl-6">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent" />
            <h3 className="font-semibold text-lg text-foreground">UX/UI Designer</h3>
            <p className="text-primary font-medium">vFairs • Nov 2021 - Sep 2023</p>
            <ul className="mt-2 text-muted-foreground space-y-1 list-disc list-inside">
              <li>Implemented design mock-ups using vFairs' Internal CMS tool</li>
              <li>Prioritized exceptional user experiences and WCAG compliance</li>
              <li>Recognized as Top Rated Event Designer of the year in 2022</li>
            </ul>
          </article>

          <article className="relative pl-6">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent" />
            <h3 className="font-semibold text-lg text-foreground">UX/UI Designer</h3>
            <p className="text-primary font-medium">Blonk Group • Sep 2020 - Nov 2021</p>
            <ul className="mt-2 text-muted-foreground space-y-1 list-disc list-inside">
              <li>Conceptualized and redesigned Blonk iOS/Android app</li>
              <li>Led SoBlonk redesign achieving 66% improvement in user onboarding</li>
              <li>Designed and maintained the overall design system</li>
            </ul>
          </article>

          <article className="relative pl-6">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-muted-foreground" />
            <h3 className="font-semibold text-lg text-foreground">UX/UI Designer</h3>
            <p className="text-primary font-medium">Aykays • Jun 2019 - Sep 2020</p>
            <ul className="mt-2 text-muted-foreground space-y-1 list-disc list-inside">
              <li>Designed and prototyped Bootstrap & CMS based sites</li>
              <li>Worked with WordPress, Webflow, and Shopify platforms</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Education */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <GraduationCap className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold text-foreground">Education</h2>
        </div>

        <div className="grid md:grid-cols-1 gap-6">
          <article className="p-6 rounded-xl bg-card border border-border card-shadow">
            <h3 className="font-semibold text-foreground">M.Sc. User Experience Design and Research</h3>
            <p className="text-sm text-primary">Technische Hochschule Ingolstadt</p>
            <p className="text-sm text-muted-foreground">2024 - In Progress • Ingolstadt, Germany</p>
          </article>
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Code className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold text-foreground">Skills</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h3 className="font-medium text-foreground flex items-center gap-2">
              <Palette className="h-4 w-4 text-primary" />
              Design
            </h3>
            <div className="flex flex-wrap gap-2">
              {["UX Strategy", "User Flows", "Wireframes", "Prototypes", "Mockups", "Design Systems"].map((skill) => (
                <span key={skill} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium text-foreground">Research</h3>
            <div className="flex flex-wrap gap-2">
              {["User Interviews", "Usability Testing", "Persona Hypothesis", "Competitor Analysis"].map((skill) => (
                <span key={skill} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium text-foreground flex items-center gap-2">
              <Wrench className="h-4 w-4 text-primary" />
              Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Figma", "Miro", "Adobe Suite", "Hotjar", "MS Clarity", "Jira"].map((skill) => (
                <span key={skill} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium text-foreground">Technical</h3>
            <div className="flex flex-wrap gap-2">
              {["HTML5", "CSS3", "WordPress", "Webflow", "Shopify"].map((skill) => (
                <span key={skill} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium text-foreground flex items-center gap-2">
              <Languages className="h-4 w-4 text-primary" />
              Languages
            </h3>
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

      {/* Certifications */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold text-foreground">Certifications</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Google UX Design Certificate", org: "Google" },
            { title: "Enterprise Design Thinking Practitioner", org: "IBM" },
            { title: "Enterprise Design Thinking Co-Creator", org: "IBM" },
            { title: "UI/UX Design Specialization", org: "Coursera" },
            { title: "McKinsey Forward Program", org: "McKinsey & Company" },
          ].map((cert) => (
            <article key={cert.title} className="p-4 rounded-lg bg-card border border-border hover:card-shadow-hover transition-shadow">
              <h3 className="font-medium text-foreground">{cert.title}</h3>
              <p className="text-sm text-primary mt-1">{cert.org}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Award className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold text-foreground">Awards & Honors</h2>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <Award className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Top Rated Event Design Award - vFairs 2022</span>
          </div>
        </div>
      </section>
    </div>
  );
}
