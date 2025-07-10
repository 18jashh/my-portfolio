
import { GraduationCap, Heart, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12 animate-fade-in-up">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with a love for creating intuitive and beautiful web experiences. 
                Currently pursuing my Computer Science degree, I enjoy turning complex problems into simple, elegant solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or enjoying a good cup of coffee while reading about the latest web development trends.
              </p>
            </div>
            
            <div className="space-y-6 animate-fade-in-right">
              <div className="flex items-start space-x-4 group transition-all duration-300 hover:transform hover:scale-105">
                <div className="p-3 bg-primary/10 rounded-lg transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Education</h3>
                  <p className="text-muted-foreground">Computer Science Student at University</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group transition-all duration-300 hover:transform hover:scale-105" style={{ animationDelay: '0.2s' }}>
                <div className="p-3 bg-primary/10 rounded-lg transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-lg">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Interests</h3>
                  <p className="text-muted-foreground">Web Development, UI/UX Design, Open Source</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group transition-all duration-300 hover:transform hover:scale-105" style={{ animationDelay: '0.4s' }}>
                <div className="p-3 bg-primary/10 rounded-lg transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-lg">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Goal</h3>
                  <p className="text-muted-foreground">Building impactful software that makes a difference</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
