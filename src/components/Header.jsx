import { useState } from 'react';
import logo from '../assets/logo.png';
import content from '../data/content.json';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { header } = content;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (e, path) => {
    e.preventDefault();
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 transition-all duration-300 shadow-sm">
      <div className="flex items-center justify-between py-4 px-4 sm:px-6 md:px-[10%]">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2 md:space-x-3 flex-shrink-0 group" onClick={(e) => scrollToSection(e, '#home')}>
          <img src={logo} alt={header.logoAlt} className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />

          {/* Large screens - single line */}
          <span
            className="text-lg md:text-2xl font-serif font-bold tracking-wide hidden lg:block text-gray-900"
          >
            {header.companyName}
          </span>

          {/* Medium screens - two lines */}
          <div className="hidden sm:block lg:hidden">
            <div className="text-sm md:text-base font-bold tracking-wide text-gray-900">
              {header.shortName}
            </div>
            <div className="text-xs md:text-sm font-semibold tracking-wide leading-tight text-brand">
              Consultancy LLP
            </div>
          </div>

          {/* Mobile screens - compact two lines */}
          <div className="block sm:hidden">
            <div className="text-sm font-bold tracking-wide text-gray-900">
              {header.shortName}
            </div>
            <div className="text-[10px] font-semibold tracking-wide leading-tight text-brand">
              Consultancy LLP
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          {header.navLinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="mx-3 lg:mx-5 font-medium text-xs lg:text-sm tracking-widest uppercase no-underline transition-all duration-300 text-gray-600 hover:text-brand relative group"
              onClick={(e) => scrollToSection(e, link.path)}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button - Fixed Position */}
        <button
          className="md:hidden fixed top-5 right-7 z-50 flex flex-col items-center justify-center w-8 h-8 space-y-1.5 focus:outline-none group"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div
            className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2 bg-brand' : ''
              }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''
              }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2 bg-brand' : ''
              }`}
          ></div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
      >
        <nav className="flex flex-col py-2">
          {header.navLinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="px-8 py-3 font-medium tracking-wide uppercase text-sm no-underline transition-colors duration-200 text-gray-700 hover:text-brand hover:bg-gray-50 border-1 border-transparent hover:border-l-4 hover:border-l-brand"
              onClick={(e) => scrollToSection(e, link.path)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;