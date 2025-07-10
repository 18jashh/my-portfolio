
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProjectFilter from './ProjectFilter';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, shopping cart, and payment integration.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/johndoe/ecommerce",
      liveUrl: "https://ecommerce-demo.com",
      image: "bg-gradient-to-br from-purple-600 to-purple-800"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team collaboration features.",
      techStack: ["Vue.js", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com/johndoe/taskmanager",
      liveUrl: "https://taskmanager-demo.com",
      image: "bg-gradient-to-br from-green-600 to-green-800"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts and interactive charts.",
      techStack: ["JavaScript", "Chart.js", "OpenWeather API"],
      githubUrl: "https://github.com/johndoe/weather",
      liveUrl: "https://weather-demo.com",
      image: "bg-gradient-to-br from-blue-600 to-blue-800"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills with modern design and animations.",
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/johndoe/portfolio",
      liveUrl: "https://johndoe-portfolio.com",
      image: "bg-gradient-to-br from-orange-600 to-orange-800"
    }
  ];

  // Get all unique technologies
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.techStack))
  ).sort();

  const [selectedTech, setSelectedTech] = useState<string[]>([]);

  // Filter projects based on selected technologies
  const filteredProjects = selectedTech.length === 0 
    ? projects 
    : projects.filter(project => 
        selectedTech.every(tech => project.techStack.includes(tech))
      );

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12 animate-fade-in-up">
          Featured Projects
        </h2>
        
        <ProjectFilter 
          technologies={allTechnologies}
          selectedTech={selectedTech}
          onFilterChange={setSelectedTech}
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card border-border animate-scale-in hover:border-primary/50" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className={`h-48 ${project.image} rounded-t-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105`}>
                <div className="text-white text-2xl font-bold opacity-90 animate-float">
                  {project.title.split(' ').map(word => word[0]).join('')}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className={`transition-all duration-300 hover:scale-105 ${
                        selectedTech.includes(tech)
                          ? 'bg-primary/30 text-primary border-primary/50'
                          : 'bg-primary/20 text-primary border-primary/30 hover:bg-primary/30'
                      }`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2 hover:bg-accent border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </Button>
                  <Button
                    size="sm"
                    className="flex items-center space-x-2 bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No projects found with the selected technologies.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
