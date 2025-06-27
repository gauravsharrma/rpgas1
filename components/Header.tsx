import React from 'react';
import { PhoneIcon } from './IconPack';

const Header: React.FC = () => {
  return (
    <div className="bg-[#1a1a1a] py-3 px-4 sm:px-6 lg:px-8 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Logo & Agent Name */}
        <div className="flex items-center space-x-6">
            <div className="flex-shrink-0">
                <h1 className="text-3xl font-black text-white leading-tight">
                    Reportage<span className="text-[#b29a68]">.</span>
                </h1>
                <p className="text-sm text-gray-300 -mt-1 tracking-wider">Properties</p>
            </div>
            <div className="hidden md:block border-l border-gray-600 h-10"></div>
            <div className="hidden md:block">
                <p className="font-bold text-white">Bharti Sharma</p>
                <p className="text-xs text-gray-400">Real Estate Sales</p>
            </div>
        </div>

        {/* Right side: Contact */}
        <a href="tel:+971502295179" className="flex items-center space-x-3 text-white hover:text-[#b29a68] transition-colors">
          <PhoneIcon />
          <span className="hidden sm:inline text-lg font-semibold tracking-wide">971-50-2295179</span>
          <span className="sm:hidden text-lg font-semibold">Call</span>
        </a>
      </div>
    </div>
  );
};

export default Header;