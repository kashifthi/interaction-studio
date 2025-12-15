import { Briefcase, GraduationCap, Award, Code, Users, FileText } from "lucide-react";

export const resumeTextContent = `
Kashif Iqbal - UX Researcher and PhD Candidate.

Summary:
A dedicated UX researcher with over 5 years of experience in human-computer interaction research. 
Passionate about creating inclusive and accessible digital experiences through rigorous user research 
and evidence-based design practices.

Experience:

Graduate Research Assistant at University of Technology, from 2020 to Present.
Conducting mixed-methods research on accessibility in emerging technologies.
Led 15 user studies with over 200 participants across diverse demographics.
Published 8 peer-reviewed papers in top-tier HCI conferences including CHI and UIST.
Mentored 10 undergraduate students in research methodologies.

UX Research Intern at Tech Innovation Labs, from 2019 to 2020.
Conducted usability testing and heuristic evaluations for mobile applications.
Synthesized research findings into actionable design recommendations.
Collaborated with cross-functional teams to implement user-centered improvements.
Increased task completion rates by 35% through iterative design improvements.

Research Assistant at Digital Experience Lab, from 2018 to 2019.
Assisted in conducting user interviews and contextual inquiries.
Analyzed qualitative data using thematic analysis methods.
Contributed to grant proposals totaling over $500,000 in funding.

Education:

PhD in Human-Computer Interaction, University of Technology, Expected 2025.
Dissertation: "Designing Inclusive Interfaces for Aging Populations"
GPA: 3.9 out of 4.0

Master of Science in Computer Science, State University, 2019.
Thesis: "Accessibility Patterns in Mobile Application Design"
Graduated with Honors

Bachelor of Science in Information Systems, National University, 2017.
Minor in Psychology
Dean's List all semesters

Skills:

Research Methods: Usability Testing, A/B Testing, Card Sorting, Contextual Inquiry, 
Surveys, Interviews, Focus Groups, Diary Studies, Eye Tracking.

Analysis: Thematic Analysis, Statistical Analysis, SPSS, R, Python, NVivo.

Design Tools: Figma, Sketch, Adobe XD, InVision, Miro, Axure.

Technical: HTML, CSS, JavaScript, React, Python, SQL.

Publications:

"Designing Voice Interfaces for Older Adults" - CHI 2024
"Accessibility Challenges in Fintech Applications" - ASSETS 2023
"Understanding Mobile Usage Patterns Among Seniors" - MobileHCI 2023
"Inclusive Design Patterns for E-commerce" - DIS 2022

Awards:

Best Paper Award - CHI 2024 Accessibility Track
NSF Graduate Research Fellowship - 2021
Outstanding Graduate Student Award - 2023
ACM SIGCHI Student Research Competition Winner - 2022
`;

export function ResumeContent() {
  return (
    <div className="container mx-auto py-12 space-y-12">
      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Kashif Iqbal</h1>
        <p className="text-xl text-primary font-medium">UX Researcher & PhD Candidate</p>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A dedicated UX researcher with over 5 years of experience in human-computer interaction research. 
          Passionate about creating inclusive and accessible digital experiences.
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
            <h3 className="font-semibold text-lg text-foreground">Graduate Research Assistant</h3>
            <p className="text-primary font-medium">University of Technology • 2020 - Present</p>
            <ul className="mt-2 text-muted-foreground space-y-1 list-disc list-inside">
              <li>Conducting mixed-methods research on accessibility in emerging technologies</li>
              <li>Led 15+ user studies with 200+ participants across diverse demographics</li>
              <li>Published 8 peer-reviewed papers in top-tier HCI conferences</li>
              <li>Mentored 10 undergraduate students in research methodologies</li>
            </ul>
          </article>

          <article className="relative pl-6">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent" />
            <h3 className="font-semibold text-lg text-foreground">UX Research Intern</h3>
            <p className="text-primary font-medium">Tech Innovation Labs • 2019 - 2020</p>
            <ul className="mt-2 text-muted-foreground space-y-1 list-disc list-inside">
              <li>Conducted usability testing and heuristic evaluations</li>
              <li>Synthesized findings into actionable design recommendations</li>
              <li>Increased task completion rates by 35%</li>
            </ul>
          </article>

          <article className="relative pl-6">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-muted-foreground" />
            <h3 className="font-semibold text-lg text-foreground">Research Assistant</h3>
            <p className="text-primary font-medium">Digital Experience Lab • 2018 - 2019</p>
            <ul className="mt-2 text-muted-foreground space-y-1 list-disc list-inside">
              <li>Assisted in conducting user interviews and contextual inquiries</li>
              <li>Analyzed qualitative data using thematic analysis</li>
              <li>Contributed to grant proposals totaling $500,000+</li>
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

        <div className="grid md:grid-cols-3 gap-6">
          <article className="p-6 rounded-xl bg-card border border-border card-shadow">
            <h3 className="font-semibold text-foreground">PhD in HCI</h3>
            <p className="text-sm text-primary">University of Technology</p>
            <p className="text-sm text-muted-foreground">Expected 2025</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Dissertation: "Designing Inclusive Interfaces for Aging Populations"
            </p>
          </article>

          <article className="p-6 rounded-xl bg-card border border-border card-shadow">
            <h3 className="font-semibold text-foreground">M.S. Computer Science</h3>
            <p className="text-sm text-primary">State University</p>
            <p className="text-sm text-muted-foreground">2019 • Honors</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Thesis: "Accessibility Patterns in Mobile Application Design"
            </p>
          </article>

          <article className="p-6 rounded-xl bg-card border border-border card-shadow">
            <h3 className="font-semibold text-foreground">B.S. Information Systems</h3>
            <p className="text-sm text-primary">National University</p>
            <p className="text-sm text-muted-foreground">2017</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Minor in Psychology • Dean's List
            </p>
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-3">
            <h3 className="font-medium text-foreground flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              Research Methods
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Usability Testing", "A/B Testing", "Interviews", "Surveys", "Eye Tracking"].map((skill) => (
                <span key={skill} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium text-foreground">Analysis</h3>
            <div className="flex flex-wrap gap-2">
              {["SPSS", "R", "Python", "NVivo", "Thematic Analysis"].map((skill) => (
                <span key={skill} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium text-foreground">Design Tools</h3>
            <div className="flex flex-wrap gap-2">
              {["Figma", "Sketch", "Adobe XD", "Miro", "Axure"].map((skill) => (
                <span key={skill} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-medium text-foreground">Technical</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "JavaScript", "Python", "SQL", "HTML/CSS"].map((skill) => (
                <span key={skill} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold text-foreground">Selected Publications</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Designing Voice Interfaces for Older Adults", venue: "CHI 2024" },
            { title: "Accessibility Challenges in Fintech Applications", venue: "ASSETS 2023" },
            { title: "Understanding Mobile Usage Patterns Among Seniors", venue: "MobileHCI 2023" },
            { title: "Inclusive Design Patterns for E-commerce", venue: "DIS 2022" },
          ].map((pub) => (
            <article key={pub.title} className="p-4 rounded-lg bg-card border border-border hover:card-shadow-hover transition-shadow">
              <h3 className="font-medium text-foreground">{pub.title}</h3>
              <p className="text-sm text-primary mt-1">{pub.venue}</p>
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
          {[
            "Best Paper Award - CHI 2024",
            "NSF Graduate Research Fellowship",
            "Outstanding Graduate Student 2023",
            "ACM SIGCHI Student Competition Winner",
          ].map((award) => (
            <div key={award} className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Award className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-foreground">{award}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
