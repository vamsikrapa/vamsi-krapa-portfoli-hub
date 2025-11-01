import { personalInfo } from "@/data/portfolioData";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> for recruiters and professionals
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
