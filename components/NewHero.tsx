import React from 'react';
import { WhatsAppIcon, LocationSolidIcon } from './IconPack';

export const NewHero: React.FC = () => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section 
      id="new-hero" 
      className="h-screen flex flex-col items-center justify-center text-center p-4" 
      style={heroStyle}
    >
        <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight leading-tight">
              Zero commission, trusted guidance, no hassles — just a smart property move, delivered professionally.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Work directly with Bharti Sharma – Your trusted Reportage Properties partner in Dubai.
            </p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+971502295179"
              className="flex items-center justify-center gap-2 w-full sm:w-auto bg-[#b29a68] text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-[#cbb982] transition-colors duration-300 shadow-lg"
            >
              <span className="text-xl" role="img" aria-hidden="true">📞</span>
              Call Now
            </a>
            <a
              href="https://wa.me/971502295179"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto bg-black/20 text-white font-bold py-3 px-8 rounded-full text-lg border border-white/30 hover:bg-white hover:text-black transition-colors duration-300 shadow-lg"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href="https://maps.google.com/?q=reportage+properties+dubai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto bg-black/20 text-white font-bold py-3 px-8 rounded-full text-lg border border-white/30 hover:bg-white hover:text-black transition-colors duration-300 shadow-lg"
            >
              <LocationSolidIcon />
              Get Directions
            </a>
        </div>
    </section>
  );
};
