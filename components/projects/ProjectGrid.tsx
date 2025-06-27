
import React from 'react';
import { Project } from '../../types';
import ProjectCard from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, onProjectSelect }) => {
  if (projects.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-white">No Properties Found</h2>
        <p className="text-gray-400 mt-2">Try adjusting your filters to find your ideal home.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} onProjectSelect={onProjectSelect} />
      ))}
    </div>
  );
};

export default ProjectGrid;
