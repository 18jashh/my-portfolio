
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TypingEffect from './TypingEffect';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Jash_Gohil_Resume.pdf';
    link.click();
  };

  const typingTexts = [
    'Web Developer',
    'Problem Solver',
    'Tech Enthusiast',
    'Full Stack Developer',
    'UI/UX Designer'
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center text-primary-foreground text-4xl font-bold shadow-2xl animate-bounce-in animate-pulse-glow">
            JG
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 animate-fade-in-left">
            Jash Gohil
          </h1>
          <div className="text-xl md:text-2xl mb-6 animate-fade-in-right min-h-[2rem] flex items-center justify-center">
            <span className="mr-2 text-foreground">I'm a</span>
            <TypingEffect texts={typingTexts} speed={100} deleteSpeed={50} pauseTime={2000} />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Passionate about creating beautiful, functional web applications that solve real-world problems. 
            Currently seeking opportunities to contribute to innovative projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in-bottom" style={{ animationDelay: '0.5s' }}>
            <Button 
              onClick={scrollToAbout}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl animate-glow"
            >
              Learn More
              <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
            </Button>
            <Button 
              onClick={downloadResume}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
