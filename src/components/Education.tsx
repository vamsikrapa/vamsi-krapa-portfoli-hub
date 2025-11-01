import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { education, publications } from "@/data/portfolioData";
import { GraduationCap, BookOpen, MapPin, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Education & <span className="text-gradient">Publications</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>

          <div className="space-y-6 mb-8">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="shadow-card hover:shadow-elegant transition-all animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <p className="font-semibold text-primary">{edu.institution}</p>
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-accent font-medium">{edu.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-primary">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="shadow-card hover:shadow-elegant transition-all animate-fade-in">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-accent" />
                <CardTitle className="text-2xl">Publications</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              {publications.map((pub, index) => (
                <div key={index} className="p-4 bg-secondary/50 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">{pub.title}</h4>
                  <p className="text-sm text-muted-foreground mb-1">{pub.journal}</p>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span className="text-accent font-medium">Year: {pub.year}</span>
                    <span>ISSN: {pub.issn}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
