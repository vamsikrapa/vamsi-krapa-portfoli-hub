import { Card } from "@/components/ui/card";
import { experience } from "@/data/portfolioData";
import { Briefcase, MapPin, TrendingUp } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-accent"></div>

            <div className="space-y-12">
              {experience.map((job, index) => (
                <div
                  key={job.id}
                  className={`relative animate-slide-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-start`}>
                    {/* Content */}
                    <div className="md:w-1/2">
                      <Card className="p-6 shadow-card hover:shadow-elegant transition-all">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-1">{job.role}</h3>
                            <div className="flex items-center gap-2 text-muted-foreground mb-2">
                              <Briefcase className="w-4 h-4" />
                              <span className="font-semibold text-primary">{job.company}</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{job.location}</span>
                              </div>
                              <span className="text-accent font-medium">{job.period}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 text-sm italic">
                          {job.description}
                        </p>

                        <ul className="space-y-2">
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                              <span className="text-primary mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>

                        {job.metrics && (
                          <div className="mt-4 pt-4 border-t border-border">
                            <div className="flex items-center gap-2 text-sm">
                              <TrendingUp className="w-4 h-4 text-accent" />
                              <span className="font-semibold">Key Metrics:</span>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-3">
                              {Object.entries(job.metrics).map(([key, value]) => (
                                <span key={key} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                                  {value}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </Card>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow"></div>

                    {/* Spacer */}
                    <div className="hidden md:block md:w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
