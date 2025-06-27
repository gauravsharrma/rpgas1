
import React from 'react';

const Hero: React.FC<{ title: string; tagline: string; heroImage: string; }> = ({ title, tagline, heroImage }) => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section id="hero" className="h-screen flex flex-col items-center justify-center text-center p-4" style={heroStyle}>
      <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter" style={{fontFamily: "'Inter', sans-serif"}}>
        {title}
      </h1>
      <p 
        className="mt-4 text-3xl md:text-4xl text-[#b29a68]" 
        style={{ fontFamily: "'Dancing Script', cursive" }}
      >
        {tagline}
      </p>
    </section>
  );
};

export default Hero;