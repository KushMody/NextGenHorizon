import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import content from '../data/content.json';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const { header } = content;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const viewportThreshold = window.innerHeight * 0.35;
      const sections = header.navLinks.map(link => link.path);

      let currentSection = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= viewportThreshold && rect.bottom >= viewportThreshold) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [header.navLinks]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, {
          duration: 1.4,
          offset: -40,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      closeMenu();
    }
  };

  return (
    <header className={`fixed left-0 right-0 z-50 flex justify-center w-full transition-all duration-[1200ms] ease-in-out ${isScrolled ? 'top-0 md:top-4 px-0 md:px-6' : 'top-0 px-0'}`}>
      <div className={`w-full transition-all duration-[1200ms] ease-in-out overflow-hidden mx-auto flex flex-col ${isScrolled
        ? 'max-w-5xl rounded-none md:rounded-full bg-white/95 backdrop-blur-xl border border-zinc-200 shadow-md'
        : 'max-w-[100vw] rounded-none bg-white/95 backdrop-blur-md shadow-sm border-b border-zinc-200'
        }`}
      >
        <div className={`flex items-center justify-between w-full transition-all duration-[1200ms] ease-in-out px-4 sm:px-8 md:px-10 ${isScrolled ? 'py-2.5' : 'py-4'}`}>
          {/* Logo */}
          <div
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-3 sm:space-x-4 flex-shrink-0 group cursor-pointer"
          >
            <div className="relative">
              <img src={logo} alt={header.logoAlt} className={`w-auto object-contain transition-all duration-[1200ms] ease-in-out ${isScrolled ? 'h-8 md:h-9' : 'h-9 md:h-12'}`} />
            </div>

            <div className="flex flex-col">
              <span className={`font-serif font-bold tracking-tight text-zinc-900 leading-tight transition-all duration-[1200ms] ease-in-out ${isScrolled ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'}`}>
                {header.shortName}
              </span>
              <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.2em] uppercase text-brand mt-0.5">
                Consultancy LLP
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {header.navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(link.path)}
                aria-current={activeSection === link.path ? 'page' : undefined}
                className={`font-medium text-xs tracking-[0.15em] uppercase transition-colors duration-200 relative group py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 rounded-sm ${activeSection === link.path ? 'text-brand font-bold' : 'text-zinc-600 hover:text-zinc-900'
                  }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-brand transition-all duration-300 ${activeSection === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 rounded-sm"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            <div className={`w-6 h-0.5 bg-zinc-900 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-zinc-900 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-zinc-900 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-nav"
              role="navigation"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden bg-white/98 backdrop-blur-xl border-t border-zinc-100 shadow-xl rounded-b-2xl overflow-hidden relative w-full"
            >
              {/* Subtle Top Gold Border */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

              <nav className="flex flex-col py-4 px-4 space-y-1.5">
                {header.navLinks.map((link, index) => {
                  const isActive = activeSection === link.path;
                  return (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: index * 0.04 }}
                      onClick={() => scrollToSection(link.path)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`w-full py-3.5 px-5 text-xs font-bold tracking-[0.25em] uppercase rounded-xl transition-all duration-200 flex items-center justify-between ${
                        isActive
                          ? 'bg-[#FAF6EF] text-brand border border-brand/30 shadow-xs'
                          : 'text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50 border border-transparent'
                      }`}
                    >
                      <span className="font-serif font-bold">{link.label}</span>
                      <span className={`text-xs ${isActive ? 'text-brand' : 'text-zinc-300'}`}>
                        {isActive ? '◆' : '→'}
                      </span>
                    </motion.button>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>


      </div>
    </header>
  );
}

export default Header;