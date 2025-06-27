
import React from 'react';
import type { Material } from '../types';
import { BrochureIcon, FactsheetIcon, TrifoldIcon, FloorPlanIcon, MasterPlanIcon } from './IconPack';

const materials: Material[] = [
  { name: 'Brochure', icon: <BrochureIcon /> },
  { name: 'Factsheet', icon: <FactsheetIcon /> },
  { name: 'Trifold', icon: <TrifoldIcon /> },
  { name: 'Floor Plan', icon: <FloorPlanIcon /> },
  { name: 'Master Plan', icon: <MasterPlanIcon /> },
];

const MaterialItem: React.FC<{ item: Material }> = ({ item }) => (
    <a href="#" className="flex flex-col items-center gap-4 p-6 bg-gray-800/50 rounded-lg group transition-all duration-300 hover:bg-gray-800 hover:-translate-y-2">
        {item.icon}
        <span className="text-lg font-semibold text-[#b29a68]">{item.name}</span>
    </a>
)

const Materials: React.FC = () => {
  return (
    <section id="project-materials" className="py-24 px-6 container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Project Materials</h2>
        <p className="text-lg text-gray-400 mt-2">Download everything you need to know about Taormina Village.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {materials.map((item) => (
          <MaterialItem key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Materials;