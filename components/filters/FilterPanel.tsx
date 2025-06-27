
import React, { useState } from 'react';
import { Filters, Project } from '../../types';
import { ChevronDownIcon } from '../IconPack';

interface FilterPanelProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  projectData: Project[];
}

const FilterGroup: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="py-4 border-b border-gray-800 last:border-b-0 md:border-b-0">
    <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
    {children}
  </div>
);

const ToggleButton: React.FC<{
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, isActive, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-4 py-2 text-sm rounded-full border transition-colors duration-200 ${
      isActive
        ? 'bg-[#b29a68] text-black border-[#b29a68]'
        : 'bg-gray-800 text-gray-300 border-gray-700 hover:border-gray-500'
    }`}
  >
    {label}
  </button>
);


const FilterPanel: React.FC<FilterPanelProps> = ({ filters, setFilters, projectData }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleMultiSelect = (field: keyof Filters, value: string) => {
    setFilters(prev => {
      const currentValues = prev[field] as string[];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(item => item !== value)
        : [...currentValues, value];
      return { ...prev, [field]: newValues };
    });
  };
  
  const getUniqueValues = (key: keyof Project) => {
      const valueSet = new Set<string>();
      projectData.forEach(p => {
          const value = p[key];
          if (typeof value === 'string' && value.trim()) {
              valueSet.add(value.trim());
          }
      });
      return Array.from(valueSet).sort();
  };

  const options = {
    countries: getUniqueValues('city'),
    locations: getUniqueValues('community'),
    handoverDates: getUniqueValues('handoverDate'),
  };

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl mb-12 shadow-lg border border-gray-800">
      <button 
        className="w-full p-4 text-left text-xl font-bold flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="filter-content"
      >
        <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-white">Filter Properties</h2>
            <span className="text-sm font-normal text-gray-400 hidden md:inline">
                ({isOpen ? "Collapse" : "Expand"})
            </span>
        </div>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <ChevronDownIcon />
        </div>
      </button>

      <div 
        id="filter-content"
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 border-t border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8">
                <FilterGroup title="Country">
                  <div className="flex flex-wrap gap-2">
                    {options.countries.map(opt => <ToggleButton key={opt} label={opt} isActive={filters.cities.includes(opt)} onClick={() => handleMultiSelect('cities', opt)} />)}
                  </div>
                </FilterGroup>
                
                <FilterGroup title="Location">
                  <div className="flex flex-wrap gap-2">
                    {options.locations.map(opt => <ToggleButton key={opt} label={opt} isActive={filters.communities.includes(opt)} onClick={() => handleMultiSelect('communities', opt)} />)}
                  </div>
                </FilterGroup>

                <FilterGroup title="Handover Date">
                  <div className="flex flex-wrap gap-2">
                    {options.handoverDates.map(opt => <ToggleButton key={opt} label={opt} isActive={filters.handoverDates.includes(opt)} onClick={() => handleMultiSelect('handoverDates', opt)} />)}
                  </div>
                </FilterGroup>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
