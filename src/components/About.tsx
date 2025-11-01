import { Card } from "@/components/ui/card";
import { about } from "@/data/portfolioData";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 shadow-card hover:shadow-elegant transition-all animate-slide-in">
              <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
              <p className="text-muted-foreground leading-relaxed">
                {about.summary}
              </p>
            </Card>

            <Card className="p-8 shadow-card hover:shadow-elegant transition-all animate-slide-in" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-2xl font-bold mb-6">Key Highlights</h3>
              <ul className="space-y-4">
                {about.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
