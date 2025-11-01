import { Card } from "@/components/ui/card";
import { personalInfo, languages } from "@/data/portfolioData";
import { Mail, Phone, MapPin, Linkedin, Github, Youtube, Globe } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Seeking a 6-month end-of-studies internship starting September 2025 in consulting support, 
              project management, or digital marketing roles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 shadow-card hover:shadow-elegant transition-all animate-slide-in">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-all group"
                >
                  <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground">{personalInfo.email}</span>
                </a>
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-all group"
                >
                  <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground">{personalInfo.phone}</span>
                </a>
                <div className="flex items-center gap-3 p-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">{personalInfo.location}</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Connect With Me</h4>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all shadow-card hover:shadow-elegant"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all shadow-card hover:shadow-elegant"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all shadow-card hover:shadow-elegant"
                  >
                    <Youtube className="w-4 h-4" />
                    <span>YouTube</span>
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mt-3 ml-1">
                  <Youtube className="w-4 h-4 inline mr-1" />
                  {personalInfo.youtubeDescription}
                </p>
              </div>
            </Card>

            <Card className="p-8 shadow-card hover:shadow-elegant transition-all animate-slide-in" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-2xl font-bold mb-6">Languages</h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="font-medium">{lang.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{lang.level}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Open to:</strong> Remote consulting support roles, 
                  project management internships, and digital marketing positions in purpose-driven, 
                  team-centric environments.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
