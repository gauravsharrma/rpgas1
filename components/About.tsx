
import React from 'react';

const LogoPlaceholder: React.FC<{ name: string }> = ({ name }) => {
    const initials = name.split(' ').map(n => n[0]).slice(0, 2).join('');
    return (
        <div className="w-48 h-48 bg-gray-800 border-2 border-[#b29a68]/30 flex items-center justify-center">
            <span className="text-6xl font-black text-[#b29a68]" style={{fontFamily: "'Inter', sans-serif"}}>{initials}</span>
        </div>
    )
}

const About: React.FC<{ name: string, description: string }> = ({ name, description }) => {
  // Split description into paragraphs
  const paragraphs = description.split('\n').filter(p => p.trim() !== '');

  return (
    <section id="about" className="py-24 px-6 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div className="flex justify-center md:justify-start">
          <LogoPlaceholder name={name} />
        </div>
        <div className="md:col-span-2 text-gray-300 space-y-6 text-lg text-center md:text-left">
          <h2 className="text-4xl font-bold text-white mb-6">About {name}</h2>
          {paragraphs.map((p, index) => <p key={index}>{p}</p>)}
        </div>
      </div>
    </section>
  );
};

export default About;