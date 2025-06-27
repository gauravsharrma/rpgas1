import React from 'react';

const WhatsAppIcon: React.FC = () => (
    <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l-.219.354-.925 3.375 3.414-.894.342-.089z" />
    </svg>
);


const FloatingWidget: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
      {/* Button 1: Call */}
      <a
        href="tel:+971502295179"
        className="flex items-center gap-3 bg-[#b29a68] text-black font-bold py-3 px-5 rounded-full shadow-lg transition-transform transform hover:scale-105 ease-in-out duration-200"
        aria-label="Call us"
      >
        <span className="text-2xl" role="img" aria-hidden="true">📞</span>
        <span>Call</span>
      </a>
      
      {/* Button 2: WhatsApp */}
      <a
        href="https://wa.me/971502295179"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-[#25D366] text-white font-bold py-3 px-5 rounded-full shadow-lg transition-transform transform hover:scale-105 ease-in-out duration-200"
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsAppIcon />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};

export default FloatingWidget;