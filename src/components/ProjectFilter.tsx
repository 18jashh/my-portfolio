
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectFilterProps {
  technologies: string[];
  selectedTech: string[];
  onFilterChange: (selectedTech: string[]) => void;
}

const ProjectFilter = ({ technologies, selectedTech, onFilterChange }: ProjectFilterProps) => {
  const toggleTech = (tech: string) => {
    if (selectedTech.includes(tech)) {
      onFilterChange(selectedTech.filter(t => t !== tech));
    } else {
      onFilterChange([...selectedTech, tech]);
    }
  };

  const clearFilters = () => {
    onFilterChange([]);
  };

  return (
    <div className="mb-8 animate-fade-in-up">
      <div className="flex flex-wrap gap-3 justify-center items-center">
        <span className="text-muted-foreground font-medium">Filter by:</span>
        
        {technologies.map((tech) => (
          <Badge
            key={tech}
            variant={selectedTech.includes(tech) ? "default" : "secondary"}
            className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
              selectedTech.includes(tech)
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary'
            }`}
            onClick={() => toggleTech(tech)}
          >
            {tech}
          </Badge>
        ))}
        
        {selectedTech.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Clear All
          </Button>
        )}
      </div>
      
      {selectedTech.length > 0 && (
        <div className="text-center mt-4">
          <span className="text-sm text-muted-foreground">
            Showing projects with: {selectedTech.join(', ')}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProjectFilter;
