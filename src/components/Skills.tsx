
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vue.js", "Sass"]
    },
    {
      title: "Backend", 
      skills: ["Node.js", "Python", "Express.js", "Django", "PostgreSQL", "MongoDB", "REST APIs"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "Firebase", "Webpack", "Vite", "Jest", "Figma"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Project Management", "Agile"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12 animate-fade-in-up">
          Skills & Technologies
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <h3 className="text-xl font-semibold text-foreground mb-4 animate-glow">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline"
                      className="px-3 py-2 text-sm border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in-left"
                      style={{ animationDelay: `${skillIndex * 0.1}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
