import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills, certifications } from "@/data/portfolioData";
import { Code, TrendingUp, Users, Award } from "lucide-react";

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="text-gradient">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="shadow-card hover:shadow-elegant transition-all animate-slide-up">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Code className="w-5 h-5 text-primary" />
                  <CardTitle>Technical Skills</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill, idx) => (
                    <Badge key={idx} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <CardTitle>Marketing Skills</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.marketing.map((skill, idx) => (
                    <Badge key={idx} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-primary" />
                  <CardTitle>Management Skills</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.management.map((skill, idx) => (
                    <Badge key={idx} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-card hover:shadow-elegant transition-all animate-fade-in">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-accent" />
                <CardTitle className="text-2xl">Certifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-all">
                    <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">{cert.name}</p>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
