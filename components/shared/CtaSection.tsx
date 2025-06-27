import React from 'react';
import { PhoneIcon } from '../IconPack';

const CtaSection: React.FC = () => {
  return (
    <section className="text-center py-24 my-16 bg-gray-900/50 rounded-xl">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white">Not sure what to choose?</h2>
        <p className="text-lg text-gray-400 mt-3 max-w-2xl mx-auto">
          Let our expert property advisors help you shortlist the best options tailored to your needs.
        </p>
        <button className="mt-8 bg-[#b29a68] text-black font-bold py-4 px-8 rounded-lg text-lg hover:bg-[#cbb982] transition-colors duration-300 shadow-lg flex items-center gap-3 mx-auto">
          <PhoneIcon />
          Talk to a Property Advisor
        </button>
      </div>
    </section>
  );
};

export default CtaSection;