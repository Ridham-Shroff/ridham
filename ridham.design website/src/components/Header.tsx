import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Inquiry', href: 'https://docs.google.com/forms/d/e/1FAIpQLSfxHo0eXX1OT4pM8_C-vBHMxokugNPM0_Mkptg1pMEfzmFbGQ/viewform' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center py-6">
          {/* Desktop Navigation - Dynamic Layout */}
          <nav className={`hidden md:flex transition-all duration-700 ease-out ${
            isScrolled 
              ? 'bg-blue-500/20 backdrop-blur-xl rounded-full px-8 py-3 shadow-2xl' 
              : 'bg-transparent px-0 py-0'
          }`}
          style={{
            border: isScrolled ? '1px solid rgba(255, 255, 255, 0.3)' : 'none',
            boxShadow: isScrolled ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)' : 'none'
          }}>
            <div className={`flex transition-all duration-700 ease-out ${
              isScrolled ? 'space-x-6' : 'space-x-12'
            }`}>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-light text-white/90 hover:text-white transition-all duration-300 tracking-wide text-sm uppercase ${
                    isScrolled 
                      ? 'px-3 py-2 rounded-full hover:bg-white/15' 
                      : 'px-4 py-3 hover:bg-white/10 rounded-lg'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden text-white p-3 transition-all duration-700 ease-out ${
              isScrolled 
                ? 'bg-blue-500/20 backdrop-blur-xl rounded-full shadow-2xl' 
                : 'bg-white/10 rounded-lg'
            }`}
            style={{
              border: isScrolled ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)'
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-500/20 backdrop-blur-xl rounded-2xl mx-4 mb-4 border border-white/20 shadow-2xl">
            <nav className="py-6 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-6 py-3 text-white/90 hover:text-white hover:bg-white/15 transition-all duration-300 rounded-xl mx-2 font-light tracking-wide text-sm uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;