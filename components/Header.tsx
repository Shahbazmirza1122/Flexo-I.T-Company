import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import Icon from './Icon';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // Extract ID from href (e.g., "#about" -> "about")
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      // Calculate offset to account for fixed header (approx 80px - 100px)
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (targetId === 'home') {
       window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zinc-950/80 backdrop-blur-lg border-b border-white/5 py-0 shadow-lg' : 'bg-transparent py-1'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center group"
          >
            <img 
               src="https://res.cloudinary.com/dxojom3da/image/upload/v1764497291/Flexo_Logo_gabfni.png" 
               alt="Flexo Logo" 
               className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 brightness-0 invert"
             />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-zinc-300 hover:text-violet-400 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-bold transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transform hover:-translate-y-0.5"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-white/10 shadow-2xl animate-fade-in-down">
          <div className="flex flex-col p-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-medium text-zinc-300 hover:text-violet-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <hr className="border-white/10 my-2" />
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-center px-5 py-3 rounded-xl bg-violet-600 text-white font-bold"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;