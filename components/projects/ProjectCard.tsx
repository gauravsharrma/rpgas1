import React from 'react';
import { Project } from '../../types';
import { MapPinIcon, CalendarDaysIcon, BedIcon } from '../IconPack';

interface ProjectCardProps {
    project: Project;
    onProjectSelect: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onProjectSelect }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-AE', {
      style: 'currency',
      currency: 'AED',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div 
        className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg border border-transparent hover:border-[#b29a68] transition-all duration-300 flex flex-col group cursor-pointer"
        onClick={() => onProjectSelect(project)}
    >
      <div className="relative">
        <img src={project.imageUrl} alt={project.name} className="w-full h-56 object-cover" />
        {project.tags.length > 0 && (
          <div className="absolute top-3 right-3 flex gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="bg-[#b29a68] text-black text-xs font-bold px-2 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white">{project.name}</h3>
        <div className="flex items-center gap-2 text-gray-400 mt-1">
          <MapPinIcon />
          <span>{[project.community, project.city].filter(Boolean).join(', ')}</span>
        </div>
        
        <div className="my-4 text-gray-300">
            <p className="text-sm">Starting From</p>
            <p className="text-3xl font-bold text-[#b29a68]">{formatPrice(project.startingPrice)}</p>
        </div>

        <div className="flex-grow space-y-3 text-gray-300">
          <div className="flex items-center gap-3">
            <BedIcon />
            <span className="font-semibold">Types:</span>
            <span>{project.unitTypes.join(', ')}</span>
          </div>
          <div className="flex items-center gap-3">
            <CalendarDaysIcon />
            <span className="font-semibold">Handover:</span>
            <span>{project.handoverDate} ({project.status})</span>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="w-full bg-gray-700 text-white font-bold py-3 rounded-lg transition-colors duration-300 group-hover:bg-[#b29a68] group-hover:text-black text-center">
            View Details
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
