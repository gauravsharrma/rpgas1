
import React, { useState, useEffect } from 'react';

const navItems = [
  { name: 'Home', href: '#/' },
  { name: 'About', href: '#about' },
  { name: 'Location', href: '#location' },
  { name: 'Project Materials', href: '#project-materials' },
  { name: 'Unit Types', href: '#unit-types' },
  { name: 'Register', href: '#register' },
];

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default action for all nav clicks
    const href = e.currentTarget.getAttribute('href');

    if (href && href.startsWith('#/')) {
      // This is a routing link, so we programmatically change the hash.
      window.location.hash = href;
    } else if (href) {
      // This is a smooth-scroll anchor link.
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerOffset = 80; // Offset to account for the sticky header's height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1a1a1a]/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex items-center justify-center space-x-1 md:space-x-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={handleNavClick}
                className="block px-3 py-2 text-xs md:text-sm font-thin uppercase tracking-wider text-gray-300 border border-gray-600 rounded-full transition-all duration-300 hover:bg-[#b29a68] hover:text-black hover:border-[#b29a68] cursor-pointer"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;