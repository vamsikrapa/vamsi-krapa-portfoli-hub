import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolioData";
import { Lightbulb, Target, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Showcasing impactful projects in CDP implementation, omnichannel marketing, and data-driven transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="shadow-card hover:shadow-elegant transition-all cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="mb-2">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Details */}
                  {expandedProject === project.id && (
                    <div className="space-y-4 animate-slide-up">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Lightbulb className="w-4 h-4 text-primary" />
                          <span className="font-semibold">Project Details</span>
                        </div>
                        <ul className="space-y-1 ml-6">
                          {project.details.map((detail, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground">
                              • {detail}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="w-4 h-4 text-accent" />
                          <span className="font-semibold">Impact</span>
                        </div>
                        <p className="text-sm text-accent ml-6">{project.impact}</p>
                      </div>

                      {project.metrics && (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="w-4 h-4 text-primary" />
                            <span className="font-semibold">Key Metrics</span>
                          </div>
                          <div className="flex flex-wrap gap-2 ml-6">
                            {Object.entries(project.metrics).map(([key, value]) => (
                              <span key={key} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                                {key}: {value}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Technologies */}
                  <div>
                    <span className="text-sm font-semibold mb-2 block">Technologies Used</span>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Toggle Details Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    className="w-full"
                  >
                    {expandedProject === project.id ? "Show Less" : "Show More Details"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
