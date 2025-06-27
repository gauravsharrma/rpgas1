import React, { useState } from 'react';
import { Filters, Project } from '../../types';
import { ChevronDownIcon } from '../IconPack';

interface FilterPanelProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  projectData: Project[];
}

const FilterGroup: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="py-4 border-b border-gray-800">
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

  const handlePriceChange = (field: 'min' | 'max', value: string) => {
    setFilters(prev => ({
      ...prev,
      price: { ...prev.price, [field]: value },
    }));
  };
  
  const getUniqueValues = (key: keyof Project) => {
      const valueSet = new Set<string>();
      projectData.forEach(p => {
          const values = p[key];
          if(Array.isArray(values)) {
              values.forEach(v => valueSet.add(v));
          } else if (typeof values === 'string') {
              valueSet.add(values);
          }
      });
      return Array.from(valueSet).sort();
  };

  const options = {
    unitTypes: getUniqueValues('unitTypes'),
    cities: getUniqueValues('city'),
    communities: getUniqueValues('community'),
    projects: getUniqueValues('name'),
    status: getUniqueValues('status'),
    paymentPlans: getUniqueValues('paymentPlans'),
    amenities: getUniqueValues('amenities'),
    views: getUniqueValues('views'),
    offers: getUniqueValues('offers'),
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8">
                {/* Price */}
                <FilterGroup title="Price Range (AED)">
                  <div className="flex gap-4 items-center">
                    <input type="number" placeholder="From" value={filters.price.min} onChange={(e) => handlePriceChange('min', e.target.value)} className="w-full bg-gray-800 border-gray-700 rounded-lg p-2 text-white placeholder-gray-500 focus:ring-[#b29a68] focus:border-[#b29a68]" />
                    <span className="text-gray-500">-</span>
                    <input type="number" placeholder="To" value={filters.price.max} onChange={(e) => handlePriceChange('max', e.target.value)} className="w-full bg-gray-800 border-gray-700 rounded-lg p-2 text-white placeholder-gray-500 focus:ring-[#b29a68] focus:border-[#b29a68]" />
                  </div>
                </FilterGroup>
                
                {/* Unit Type */}
                <FilterGroup title="Unit Type">
                  <div className="flex flex-wrap gap-2">
                    {options.unitTypes.map(opt => <ToggleButton key={opt} label={opt} isActive={filters.unitTypes.includes(opt)} onClick={() => handleMultiSelect('unitTypes', opt)} />)}
                  </div>
                </FilterGroup>
                
                {/* City */}
                <FilterGroup title="City / Area">
                  <div className="flex flex-wrap gap-2">
                    {options.cities.map(opt => <ToggleButton key={opt} label={opt} isActive={filters.cities.includes(opt)} onClick={() => handleMultiSelect('cities', opt)} />)}
                  </div>
                </FilterGroup>

                {/* Status */}
                <FilterGroup title="Handover Status">
                  <div className="flex flex-wrap gap-2">
                    {options.status.map(opt => <ToggleButton key={opt} label={opt} isActive={filters.status.includes(opt)} onClick={() => handleMultiSelect('status', opt)} />)}
                  </div>
                </FilterGroup>
            </div>

            {/* More filters can be revealed here or listed below */}
            <div className="pt-4 mt-4 border-t border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-3">More Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
                <FilterGroup title="Amenities">
                  <div className="flex flex-wrap gap-2">
                    {options.amenities.map(opt => <ToggleButton key={opt} label={opt} isActive={filters.amenities.includes(opt)} onClick={() => handleMultiSelect('amenities', opt)} />)}
                  </div>
                </FilterGroup>
                <FilterGroup title="Views">
                  <div className="flex flex-wrap gap-2">
                    {options.views.map(opt => <ToggleButton key={opt} label={opt} isActive={filters.views.includes(opt)} onClick={() => handleMultiSelect('views', opt)} />)}
                  </div>
                </FilterGroup>
                <FilterGroup title="Developer Offers">
                  <div className="flex flex-wrap gap-2">
                    {options.offers.map(opt => <ToggleButton key={opt} label={opt} isActive={filters.offers.includes(opt)} onClick={() => handleMultiSelect('offers', opt)} />)}
                  </div>
                </FilterGroup>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;