import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import kashifPhoto from "@/assets/kashif-photo.png";

export function HeroSection() {
  return (
    <section className="min-h-screen hero-bg flex items-center pt-16">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium tracking-wider uppercase text-muted-foreground opacity-0 animate-fade-up stagger-1">
                UX Researcher & PhD Candidate
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground opacity-0 animate-fade-up stagger-2">
                I'm Kashif Iqbal -{" "}
                <span className="text-gradient">UX Designer</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl opacity-0 animate-fade-up stagger-3">
                Specializing in Human-Computer Interaction, bridging the gap between 
                user needs and technological innovation through rigorous research 
                and thoughtful design.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up stagger-4">
              <Button
                variant="hero"
                size="lg"
                asChild
              >
                <a
                  href="https://kashif-iqbal.com/assets/Resume-Iqbal.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-5 w-5" />
                  Download Resume
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
              >
                <Link to="/case-study">
                  View Case Study
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <div>
                <p className="text-3xl font-bold text-foreground">5+</p>
                <p className="text-sm text-muted-foreground">Years Research</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">20+</p>
                <p className="text-sm text-muted-foreground">Publications</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">User Studies</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end opacity-0 animate-slide-in-right">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
              
              {/* Main image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden card-shadow border border-border bg-card">
                <img
                  src={kashifPhoto}
                  alt="Kashif Iqbal - UX Designer"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
