import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import content from '../data/content.json';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const { header } = content;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 100; // Offset for header height

      const sections = header.navLinks.map(link => link.path);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [header.navLinks]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <header className={`fixed left-0 right-0 z-50 flex justify-center w-full transition-all duration-[600ms] ease-in-out ${isScrolled ? 'top-0 md:top-6 px-0 md:px-6' : 'top-0 px-0'}`}>
      <div className={`w-full transition-all duration-[600ms] ease-in-out overflow-hidden mx-auto flex flex-col ${
          isScrolled 
            ? 'max-w-5xl rounded-none md:rounded-[40px] bg-white/95 backdrop-blur-2xl border border-zinc-300 shadow-xl' 
            : 'max-w-[100vw] rounded-none bg-white/95 backdrop-blur-md shadow-md border-b border-zinc-200'
        }`}
      >
        <div className={`flex items-center justify-between w-full transition-all duration-[600ms] ease-in-out px-6 md:px-12 ${isScrolled ? 'py-3' : 'py-5'}`}>
          {/* Logo */}
          <div
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-4 flex-shrink-0 group cursor-pointer"
          >
            <div className="relative">
              <img src={logo} alt={header.logoAlt} className={`w-auto object-contain transition-all duration-700 group-hover:scale-105 ${isScrolled ? 'h-8 md:h-10' : 'h-10 md:h-14'}`} />
              <div className="absolute -inset-1 border border-brand/20 scale-0 group-hover:scale-100 transition-transform duration-700" />
            </div>

            <div className="flex flex-col">
              <span className={`font-serif font-bold tracking-tight text-zinc-900 leading-tight transition-all duration-700 ${isScrolled ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'}`}>
                {header.shortName}
              </span>
              <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase text-brand mt-0.5">
                Consultancy LLP
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {header.navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(link.path)}
                aria-current={activeSection === link.path ? 'page' : undefined}
                className={`font-medium text-xs tracking-[0.15em] uppercase transition-all duration-300 relative group py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 rounded-sm ${activeSection === link.path ? 'text-brand' : 'text-zinc-500 hover:text-zinc-900'
                  }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-px bg-brand transition-all duration-500 ${activeSection === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col items-center justify-center w-6 h-6 space-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 rounded-sm"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            <div className={`w-full h-px bg-zinc-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-full h-px bg-zinc-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-full h-px bg-zinc-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-nav"
          role="navigation"
          aria-label="Mobile navigation"
          className={`md:hidden bg-transparent border-t border-zinc-100 transition-all duration-500 ease-in-out w-full ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <nav className="flex flex-col items-center py-8 space-y-6">
            {header.navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(link.path)}
                aria-current={activeSection === link.path ? 'page' : undefined}
                className={`text-base font-serif tracking-widest uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 rounded-sm ${activeSection === link.path ? 'text-brand' : 'text-zinc-600 hover:text-zinc-900'
                  }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;