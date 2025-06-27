
import React, { useState, useMemo } from 'react';
import { Filters, Project } from '../../types';
import { ChevronDownIcon } from '../IconPack';

interface FilterPanelProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  projectData: Project[];
}

const FilterGroup: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="py-4 md:py-0">
    <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
    {children}
  </div>
);

const SelectInput: React.FC<{
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  disabled?: boolean;
}> = ({ id, label, value, onChange, options, disabled }) => (
    <select
      id={id}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#b29a68] transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
    >
        <option value="">{label}</option>
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
);


const FilterPanel: React.FC<FilterPanelProps> = ({ filters, setFilters, projectData }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleSelectChange = (field: keyof Filters, value: string) => {
    setFilters(prev => {
        const newFilters = { ...prev, [field]: value };
        // When country changes, reset location
        if (field === 'cities') {
            newFilters.communities = '';
        }
        return newFilters;
    });
  };
  
  const options = useMemo(() => {
    const countries = Array.from(new Set(projectData.map(p => p.city).filter(Boolean))).sort();
    
    let locations: string[] = [];
    if (filters.cities) {
        const locationSet = new Set<string>();
        projectData
            .filter(p => p.city === filters.cities)
            .forEach(p => {
                if (p.community && p.community.trim()) {
                    locationSet.add(p.community.trim());
                }
            });
        locations = Array.from(locationSet).sort();
        
        const hasRestOfLocations = projectData.some(p => p.city === filters.cities && (!p.community || p.community.trim() === ''));
        if (hasRestOfLocations) {
            locations.push('Rest of locations');
        }
    }
    
    const handoverDates = Array.from(new Set(projectData.map(p => p.handoverDate).filter(Boolean))).sort();
    
    return { countries, locations, handoverDates };
  }, [projectData, filters.cities]);

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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                <FilterGroup title="Country">
                  <SelectInput
                    id="country-filter"
                    label="All Countries"
                    value={filters.cities}
                    onChange={(e) => handleSelectChange('cities', e.target.value)}
                    options={options.countries}
                  />
                </FilterGroup>
                
                <FilterGroup title="Location">
                  <SelectInput
                    id="location-filter"
                    label="All Locations"
                    value={filters.communities}
                    onChange={(e) => handleSelectChange('communities', e.target.value)}
                    options={options.locations}
                    disabled={!filters.cities}
                  />
                </FilterGroup>

                <FilterGroup title="Handover Date">
                   <SelectInput
                    id="handover-filter"
                    label="All Dates"
                    value={filters.handoverDates}
                    onChange={(e) => handleSelectChange('handoverDates', e.target.value)}
                    options={options.handoverDates}
                  />
                </FilterGroup>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
