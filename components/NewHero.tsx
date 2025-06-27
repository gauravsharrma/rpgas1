import React from 'react';

const WhatsAppIcon: React.FC = () => (
    <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-.219.354-.925 3.375 3.414-.894.342-.089z" />
    </svg>
);

const LocationIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 20l-4.95-5.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
);


export const NewHero: React.FC = () => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://picsum.photos/seed/dubai-skyline/1920/1080)`,
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
              <WhatsAppIcon />
              WhatsApp
            </a>
            <a
              href="https://maps.google.com/?q=reportage+properties+dubai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto bg-black/20 text-white font-bold py-3 px-8 rounded-full text-lg border border-white/30 hover:bg-white hover:text-black transition-colors duration-300 shadow-lg"
            >
              <LocationIcon />
              Get Directions
            </a>
        </div>
    </section>
  );
};
