import React from 'react';
import { WhatsAppIcon } from './IconPack';

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
