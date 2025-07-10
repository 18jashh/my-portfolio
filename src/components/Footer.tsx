
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 animate-fade-in-left">
            <p className="text-muted-foreground">
              © {currentYear} Jash Gohil. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6 animate-fade-in-right">
            <a
              href="https://github.com/18jashh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
            >
              <Github className="h-5 w-5 text-primary group-hover:text-primary transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/18jashgohil/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
            >
              <Linkedin className="h-5 w-5 text-primary group-hover:text-primary transition-colors duration-300" />
            </a>
            <a
              href="mailto:jashgohil1804@gmail.com"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
            >
              <Mail className="h-5 w-5 text-primary group-hover:text-primary transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
