
import React from 'react';
import type { Attraction } from '../types';
import { LocationPinIcon } from './IconPack';

const AttractionCard: React.FC<{ item: Attraction }> = ({ item }) => (
  <div className="flex-shrink-0 w-48 bg-gray-800 p-6 rounded-lg flex flex-col items-center justify-center text-center transition-transform hover:scale-105 hover:bg-gray-700">
    <div className="text-3xl font-bold text-[#b29a68]">{item.time}</div>
    <div className="mt-2 text-white font-semibold">{item.name}</div>
    <div className="mt-4">{item.icon}</div>
  </div>
);

const Location: React.FC<{ attractions: Attraction[] }> = ({ attractions }) => {
  if (!attractions || attractions.length === 0) {
    return null; // Don't render the section if there are no attractions
  }

  return (
    <section id="location" className="py-24 px-6 bg-black/10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-bold text-white">Get closer to</h2>
          <p className="text-xl text-gray-400 mt-2">The city’s attractions at your doorstep</p>
        </div>
        <div className="lg:col-span-2">
          <div className="flex space-x-6 overflow-x-auto pb-4 -mx-6 px-6">
            {attractions.map((item) => (
              <AttractionCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;