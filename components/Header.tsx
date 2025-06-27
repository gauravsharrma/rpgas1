import React from 'react';
import { PhoneIcon } from './IconPack';

const Header: React.FC = () => {
  return (
    <div className="bg-[#1a1a1a] py-3 px-4 sm:px-6 lg:px-8 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Logo & Agent Name - responsive layout */}
        <div className="md:flex md:items-center md:space-x-6">
            {/* Logo */}
            <div className="flex-shrink-0">
                <h1 className="text-3xl font-black text-white leading-tight">
                    Reportage<span className="text-[#b29a68]">.</span>
                </h1>
                <p className="text-sm text-gray-300 -mt-1 tracking-wider">Properties</p>
            </div>

            {/* Agent info - stacks below logo on mobile, moves beside on desktop */}
            <div className="mt-2 md:mt-0 md:flex md:items-center md:space-x-6">
                <div className="hidden md:block border-l border-gray-600 h-10"></div>
                <div>
                    <p className="font-bold text-white">Bharti Sharma</p>
                    <p className="text-xs text-gray-400">Your Premier Access to Finest Homes in UAE.</p>
                </div>
            </div>
        </div>

        {/* Right side: Contact */}
        <a href="tel:+971502295179" className="inline-flex items-center space-x-3 text-white hover:text-[#b29a68] transition-colors flex-shrink-0">
          <PhoneIcon />
          <span className="text-base sm:text-lg font-semibold tracking-wide">971 50 229 5179</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
