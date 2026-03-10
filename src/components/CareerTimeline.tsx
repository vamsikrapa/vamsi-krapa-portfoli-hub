import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

interface TimelineItem {
  type: "education" | "work";
  title: string;
  organization: string;
  location: string;
  period: string;
  description?: string;
}

const timelineData: TimelineItem[] = [
  {
    type: "education",
    title: "Bachelor of Engineering in Computer Science",
    organization: "Sathyabama Institute",
    location: "Chennai, India",
    period: "2016 - 2020",
  },
  {
    type: "work",
    title: "Omnichannel Developer",
    organization: "Cognizant",
    location: "India",
    period: "2020 - 2022",
  },
  {
    type: "work",
    title: "Project Manager - CDP Consultant",
    organization: "Indegene",
    location: "India",
    period: "2022 - 2024",
  },
  {
    type: "education",
    title: "MSc Project Management",
    organization: "SKEMA Business School",
    location: "Paris, France",
    period: "2024 - 2025",
  },
];

const CareerTimeline = () => {
  return (
    <section id="timeline" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Career <span className="text-gradient">Journey</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } animate-slide-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-5/12">
                    <Card className="p-6 shadow-card hover:shadow-elegant transition-all">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${item.type === "education" ? "bg-accent/20" : "bg-primary/20"}`}>
                          {item.type === "education" ? (
                            <GraduationCap className="w-5 h-5 text-accent" />
                          ) : (
                            <Briefcase className="w-5 h-5 text-primary" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                          <p className="text-primary font-medium">{item.organization}</p>
                          <p className="text-sm text-muted-foreground">{item.location}</p>
                          <p className="text-sm text-muted-foreground mt-2">{item.period}</p>
                          {item.description && (
                            <p className="text-sm mt-2">{item.description}</p>
                          )}
                        </div>
                      </div>
                    </Card>
                  </div>

                  <div className="w-2/12 flex justify-center">
                    <div className={`w-4 h-4 rounded-full border-4 ${
                      item.type === "education" ? "bg-accent border-accent/30" : "bg-primary border-primary/30"
                    } z-10`}></div>
                  </div>

                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
