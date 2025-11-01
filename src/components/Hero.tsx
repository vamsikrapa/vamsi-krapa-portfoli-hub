import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Youtube, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Profile image placeholder */}
          <div className="mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent shadow-glow mb-8 flex items-center justify-center text-5xl font-bold text-white">
            VK
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="block mb-2">{personalInfo.name}</span>
            <span className="text-gradient block">{personalInfo.title}</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {personalInfo.tagline}
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            MSc Project Management Student at SKEMA Business School | 4+ Years in Digital Transformation | 
            Certified Scrum & Agile Professional
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("contact")}
              className="shadow-elegant hover:shadow-glow transition-all"
            >
              Get In Touch <ArrowRight className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="shadow-card hover:shadow-elegant transition-all"
            >
              <Download className="mr-2" /> Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-8">
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all shadow-card hover:shadow-elegant"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all shadow-card hover:shadow-elegant"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href={personalInfo.youtube} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all shadow-card hover:shadow-elegant"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all shadow-card hover:shadow-elegant"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="pt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
