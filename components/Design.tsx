
import React from 'react';

interface DesignProps {
  design: {
    architecturalElegance: string;
    refinedInteriors: string;
  }
}

const Design: React.FC<DesignProps> = ({ design }) => {
  return (
    <section id="design-philosophy" className="py-24 px-6 bg-black/10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-white">Architectural Elegance</h3>
          <div className="w-16 h-1 bg-[#b29a68]"></div>
          <p className="text-gray-300 text-lg">
            {design.architecturalElegance}
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-white">Refined Interiors</h3>
          <div className="w-16 h-1 bg-[#b29a68]"></div>
          <p className="text-gray-300 text-lg">
            {design.refinedInteriors}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Design;