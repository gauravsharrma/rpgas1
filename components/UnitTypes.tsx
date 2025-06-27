
import React, { useState, useEffect } from 'react';
import type { UnitType } from '../types';

const UnitTypes: React.FC<{ unitDetails: UnitType[] }> = ({ unitDetails }) => {
  const [activeTab, setActiveTab] = useState<string>('');

  useEffect(() => {
    if (unitDetails && unitDetails.length > 0) {
      setActiveTab(unitDetails[0].name);
    }
  }, [unitDetails]);

  if (!unitDetails || unitDetails.length === 0) {
    return null;
  }
  
  const activeUnit = unitDetails.find(unit => unit.name === activeTab);

  return (
    <section id="unit-types" className="py-24 px-6 bg-black/10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Find Your Perfect Home</h2>
          <p className="text-lg text-gray-400 mt-2">Explore our collection of spacious townhouses and villas.</p>
        </div>

        <div className="flex justify-center border-b border-gray-700 mb-8">
          {unitDetails.map((unit) => (
            <button
              key={unit.name}
              onClick={() => setActiveTab(unit.name)}
              className={`px-6 py-3 text-lg font-semibold transition-colors duration-300 focus:outline-none ${
                activeTab === unit.name
                  ? 'text-[#b29a68] border-b-2 border-[#b29a68]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {unit.name}
            </button>
          ))}
        </div>

        <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white uppercase tracking-widest">{activeUnit?.name}</h3>
            {activeUnit && activeUnit.subtypes.length > 0 && (
                <div className="mt-2 flex justify-center gap-4">
                    {activeUnit.subtypes.map(type => (
                        <span key={type} className="text-gray-400 border border-gray-600 px-3 py-1 rounded-full text-sm">{type}</span>
                    ))}
                </div>
            )}
        </div>

        <div className="w-full max-w-5xl mx-auto bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
          {activeUnit && (
            <img 
              src={activeUnit.image} 
              alt={`${activeUnit.name} floor plan`}
              className="w-full h-auto object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default UnitTypes;