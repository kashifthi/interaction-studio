import { useState } from "react";
import { ChevronLeft, ChevronRight, Target, Users, Lightbulb, Palette, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CaseStudyPage {
  id: number;
  title: string;
  icon: React.ElementType;
  content: React.ReactNode;
}

const caseStudyPages: CaseStudyPage[] = [
  {
    id: 1,
    title: "Overview & Problem",
    icon: Target,
    content: (
      <div className="space-y-6">
        <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-border">
          <div className="text-center p-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Redesigning Fintech for Seniors</h3>
            <p className="text-muted-foreground">Making digital banking accessible to everyone</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-3">The Challenge</h4>
            <p className="text-muted-foreground">
              65% of adults over 60 struggle with mobile banking apps, leading to financial exclusion 
              and dependency on in-person banking services that are becoming increasingly limited.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-3">Project Goals</h4>
            <ul className="text-muted-foreground space-y-2 list-disc list-inside">
              <li>Reduce task completion time by 50%</li>
              <li>Increase user confidence scores</li>
              <li>Design for cognitive accessibility</li>
              <li>Create scalable design patterns</li>
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
          <h4 className="font-semibold text-foreground mb-3">Key Metrics (Before)</h4>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-destructive">73%</p>
              <p className="text-sm text-muted-foreground">Abandonment Rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">8.5 min</p>
              <p className="text-sm text-muted-foreground">Avg. Task Time</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">2.1/5</p>
              <p className="text-sm text-muted-foreground">Satisfaction Score</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "User Research",
    icon: Users,
    content: (
      <div className="space-y-6">
        <div className="p-6 rounded-xl bg-card border border-border">
          <h4 className="font-semibold text-foreground mb-4">Research Methodology</h4>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="text-center p-4 rounded-lg bg-secondary">
              <p className="text-3xl font-bold text-primary">24</p>
              <p className="text-sm text-muted-foreground">In-depth Interviews</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-secondary">
              <p className="text-3xl font-bold text-primary">156</p>
              <p className="text-sm text-muted-foreground">Survey Responses</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-secondary">
              <p className="text-3xl font-bold text-primary">12</p>
              <p className="text-sm text-muted-foreground">Contextual Inquiries</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-card border border-border space-y-4">
            <h4 className="font-semibold text-foreground">Participant Demographics</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Ages 60-69</span>
                  <span className="text-foreground">42%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "42%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Ages 70-79</span>
                  <span className="text-foreground">38%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "38%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Ages 80+</span>
                  <span className="text-foreground">20%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "20%" }} />
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-4">Key Pain Points</h4>
            <ul className="space-y-3">
              {[
                "Small text and touch targets",
                "Confusing navigation patterns",
                "Fear of making irreversible mistakes",
                "Overwhelming feature complexity",
                "Lack of clear feedback",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/10 text-destructive flex items-center justify-center text-sm font-medium">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <blockquote className="p-6 rounded-xl bg-accent/10 border-l-4 border-accent">
          <p className="text-lg italic text-foreground mb-2">
            "I'm always afraid I'll press the wrong button and lose all my money. 
            The app makes me feel stupid."
          </p>
          <footer className="text-sm text-muted-foreground">— Margaret, 74, Interview Participant</footer>
        </blockquote>
      </div>
    ),
  },
  {
    id: 3,
    title: "Sketches & Ideation",
    icon: Lightbulb,
    content: (
      <div className="space-y-6">
        <div className="p-6 rounded-xl bg-card border border-border">
          <h4 className="font-semibold text-foreground mb-4">Design Principles Established</h4>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Clarity Over Cleverness", desc: "Simple, straightforward language and icons" },
              { title: "Forgiving Interactions", desc: "Easy undo, confirmation dialogs, no dead ends" },
              { title: "Progressive Disclosure", desc: "Show only what's needed, when it's needed" },
              { title: "Consistent Patterns", desc: "Same actions work the same way everywhere" },
            ].map((principle) => (
              <div key={principle.title} className="p-4 rounded-lg bg-secondary">
                <h5 className="font-medium text-foreground">{principle.title}</h5>
                <p className="text-sm text-muted-foreground mt-1">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="aspect-square rounded-xl bg-muted border-2 border-dashed border-border flex flex-col items-center justify-center p-6">
            <div className="w-full h-8 bg-border rounded mb-4" />
            <div className="w-full space-y-3">
              <div className="h-16 bg-border/50 rounded" />
              <div className="h-16 bg-border/50 rounded" />
              <div className="h-16 bg-border/50 rounded" />
            </div>
            <p className="text-sm text-muted-foreground mt-4">Large Touch Targets</p>
          </div>
          <div className="aspect-square rounded-xl bg-muted border-2 border-dashed border-border flex flex-col items-center justify-center p-6">
            <div className="w-3/4 h-4 bg-border rounded mb-2" />
            <div className="w-1/2 h-3 bg-border/50 rounded mb-6" />
            <div className="w-full h-24 bg-primary/20 rounded-lg flex items-center justify-center">
              <span className="text-4xl font-bold text-primary">$500</span>
            </div>
            <div className="flex gap-2 mt-4">
              <div className="w-12 h-12 bg-border rounded-full" />
              <div className="w-12 h-12 bg-border rounded-full" />
              <div className="w-12 h-12 bg-border rounded-full" />
            </div>
            <p className="text-sm text-muted-foreground mt-4">Clear Visual Hierarchy</p>
          </div>
          <div className="aspect-square rounded-xl bg-muted border-2 border-dashed border-border flex flex-col items-center justify-center p-6">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <span className="text-2xl">✓</span>
            </div>
            <div className="w-3/4 h-4 bg-border rounded mb-2" />
            <div className="w-1/2 h-3 bg-border/50 rounded mb-6" />
            <div className="w-full h-12 bg-primary/30 rounded-lg" />
            <p className="text-sm text-muted-foreground mt-4">Success Confirmation</p>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-card border border-border">
          <h4 className="font-semibold text-foreground mb-4">Ideation Workshop Results</h4>
          <p className="text-muted-foreground mb-4">
            We conducted 3 co-design sessions with 18 senior participants, generating over 
            50 ideas that were then prioritized using a feasibility-impact matrix.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Voice commands",
              "Enlarged mode",
              "Step-by-step wizard",
              "Photo check deposit",
              "Family notifications",
              "Undo everything",
              "Simple dashboard",
            ].map((idea) => (
              <span key={idea} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                {idea}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "High Fidelity UI",
    icon: Palette,
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Design System</h4>
            <div className="p-6 rounded-xl bg-card border border-border space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Color Palette</p>
                <div className="flex gap-2">
                  <div className="w-12 h-12 rounded-lg bg-primary" title="Primary" />
                  <div className="w-12 h-12 rounded-lg bg-accent" title="Accent" />
                  <div className="w-12 h-12 rounded-lg bg-secondary" title="Secondary" />
                  <div className="w-12 h-12 rounded-lg bg-destructive" title="Error" />
                  <div className="w-12 h-12 rounded-lg border-2 border-border bg-background" title="Background" />
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Typography Scale</p>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-foreground">Heading - 24px Bold</p>
                  <p className="text-lg text-foreground">Body Large - 18px</p>
                  <p className="text-base text-muted-foreground">Body - 16px Regular</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Minimum Touch Target</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm">
                    48px
                  </div>
                  <p className="text-sm text-muted-foreground">WCAG AAA compliant</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Key Screens</h4>
            <div className="grid grid-cols-2 gap-4">
              {["Dashboard", "Transfer", "Bill Pay", "Settings"].map((screen) => (
                <div key={screen} className="aspect-[9/16] rounded-xl bg-gradient-to-br from-muted to-card border border-border p-3 flex flex-col">
                  <div className="h-4 bg-border rounded mb-2" />
                  <div className="flex-1 bg-border/30 rounded-lg flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">{screen}</span>
                  </div>
                  <div className="h-8 bg-border/50 rounded mt-2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-card border border-border">
          <h4 className="font-semibold text-foreground mb-4">Accessibility Features</h4>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-2xl">Aa</span>
              </div>
              <h5 className="font-medium text-foreground">High Contrast</h5>
              <p className="text-sm text-muted-foreground">7:1 contrast ratio minimum</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-2xl">🔊</span>
              </div>
              <h5 className="font-medium text-foreground">Voice Support</h5>
              <p className="text-sm text-muted-foreground">Full screen reader compatibility</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-2xl">👆</span>
              </div>
              <h5 className="font-medium text-foreground">Motor Friendly</h5>
              <p className="text-sm text-muted-foreground">Large targets, simple gestures</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Outcomes & Metrics",
    icon: TrendingUp,
    content: (
      <div className="space-y-6">
        <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
          <h4 className="font-semibold text-foreground mb-6 text-center">Results After Redesign</h4>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold text-primary">-58%</p>
              <p className="text-sm text-muted-foreground mt-1">Abandonment Rate</p>
              <p className="text-xs text-muted-foreground">(73% → 15%)</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">-62%</p>
              <p className="text-sm text-muted-foreground mt-1">Task Completion Time</p>
              <p className="text-xs text-muted-foreground">(8.5 min → 3.2 min)</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary">4.6/5</p>
              <p className="text-sm text-muted-foreground mt-1">Satisfaction Score</p>
              <p className="text-xs text-muted-foreground">(+119% improvement)</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-4">User Feedback</h4>
            <div className="space-y-4">
              {[
                { quote: "Finally, I can check my balance without asking my grandson!", author: "Robert, 78" },
                { quote: "The big buttons make all the difference.", author: "Helen, 69" },
                { quote: "I feel confident using this on my own now.", author: "James, 82" },
              ].map((feedback, i) => (
                <blockquote key={i} className="p-4 rounded-lg bg-secondary">
                  <p className="text-sm italic text-foreground">"{feedback.quote}"</p>
                  <footer className="text-xs text-muted-foreground mt-2">— {feedback.author}</footer>
                </blockquote>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-4">Business Impact</h4>
            <ul className="space-y-4">
              {[
                { metric: "Customer Support Calls", value: "-45%", desc: "Reduced confusion-related inquiries" },
                { metric: "Mobile Banking Adoption", value: "+67%", desc: "Among 60+ demographic" },
                { metric: "Customer Retention", value: "+23%", desc: "In senior segment" },
              ].map((item) => (
                <li key={item.metric} className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-primary w-20">{item.value}</span>
                  <div>
                    <p className="font-medium text-foreground">{item.metric}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-accent/10 border border-accent/20">
          <h4 className="font-semibold text-foreground mb-3">Key Takeaways</h4>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Inclusive design benefits all users, not just the target demographic",
              "Co-design with users leads to more effective solutions",
              "Simplification often requires more design effort, not less",
              "Accessibility is a competitive advantage, not just compliance",
            ].map((takeaway, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </span>
                <span className="text-muted-foreground">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
];

export function CaseStudyStorybook() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = caseStudyPages.length;
  const page = caseStudyPages[currentPage];
  const Icon = page.icon;

  const goToNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col pt-16">
      {/* Progress bar */}
      <div className="sticky top-16 z-40 bg-background border-b border-border">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Redesigning Fintech for Seniors</p>
                <h2 className="font-semibold text-foreground">{page.title}</h2>
              </div>
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              Page {currentPage + 1} of {totalPages}
            </span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 container mx-auto py-8">
        <div className="animate-fade-in" key={currentPage}>
          {page.content}
        </div>
      </div>

      {/* Navigation */}
      <div className="sticky bottom-0 bg-background border-t border-border">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={goToPrev}
              disabled={currentPage === 0}
              className="gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            {/* Page indicators */}
            <div className="flex gap-2">
              {caseStudyPages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentPage ? "bg-primary" : "bg-muted hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>

            <Button
              variant={currentPage === totalPages - 1 ? "default" : "outline"}
              onClick={goToNext}
              disabled={currentPage === totalPages - 1}
              className="gap-2"
            >
              {currentPage === totalPages - 1 ? "Complete" : "Next"}
              {currentPage < totalPages - 1 && <ChevronRight className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
