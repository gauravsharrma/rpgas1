
import React from 'react';
import { 
  SwimmingPoolIcon, GymIcon, GardenIcon, BBQIcon, ParkingIcon, 
  KidsPlayIcon, ChessIcon, SeatingIcon, RetailIcon, MosqueIcon, ParkIcon,
  EyeIcon // Generic fallback icon
} from './IconPack';

const iconMap: { [key: string]: React.FC } = {
  'Pool': SwimmingPoolIcon,
  'Swimming Pool': SwimmingPoolIcon,
  'Gym': GymIcon,
  'Gymnasium': GymIcon,
  'Park': ParkIcon,
  'Landscape Garden': GardenIcon,
  'BBQ Area': BBQIcon,
  'Covered Parking': ParkingIcon,
  'Kids Play Area': KidsPlayIcon,
  'Giant Chess': ChessIcon,
  'Seating Zones': SeatingIcon,
  'Retail': RetailIcon,
  'Retail Outlets': RetailIcon,
  'Mosque': MosqueIcon,
  'Waterfront': EyeIcon,
};


const AmenityItem: React.FC<{ name: string }> = ({ name }) => {
  const Icon = iconMap[name] || EyeIcon; // Fallback to a generic icon
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <Icon />
      <p className="text-gray-300 font-medium">{name}</p>
    </div>
  );
};

const Amenities: React.FC<{ amenities: string[] }> = ({ amenities }) => {
  return (
    <section id="amenities" className="py-24 px-6 container mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Unmatched Amenities</h2>
        <p className="text-lg text-gray-400 mt-2">A lifestyle of convenience, leisure, and luxury awaits.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-12">
        {amenities.map((item) => (
          <AmenityItem key={item} name={item} />
        ))}
      </div>
    </section>
  );
};

export default Amenities;
