import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="flex items-center justify-between py-3 px-4 md:py-5 md:px-[10%]">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2 flex-shrink-0" onClick={closeMenu}>
          <img src={logo} alt="NH Company Logo" className="h-8 md:h-10" />
          
          {/* Large screens - single line */}
          <span
            className="text-lg md:text-2xl font-bold tracking-wide hidden lg:block"
            style={{ color: '#c89434' }}
          >
            NextGen Horizons Consultancy LLP
          </span>

          {/* Medium screens - two lines */}
          <div className="hidden sm:block lg:hidden">
            <div className="text-sm md:text-base font-bold tracking-wide" style={{ color: '#c89434' }}>
              NextGen Horizons
            </div>
            <div className="text-sm md:text-base font-bold tracking-wide leading-tight" style={{ color: '#c89434' }}>
              Consultancy LLP
            </div>
          </div>

          {/* Mobile screens - compact two lines */}
          <div className="block sm:hidden">
            <div className="text-xs font-semibold tracking-wide" style={{ color: '#c89434' }}>
              NextGen Horizons
            </div>
            <div className="text-xs font-semibold tracking-wide leading-tight" style={{ color: '#c89434' }}>
              Consultancy LLP
            </div>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `mx-4 font-bold no-underline transition-colors duration-200 ${isActive ? 'text-amber-600' : 'text-gray-800 hover:text-amber-500'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `mx-4 font-bold no-underline transition-colors duration-200 ${isActive ? 'text-amber-600' : 'text-gray-800 hover:text-amber-500'
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `mx-4 font-bold no-underline transition-colors duration-200 ${isActive ? 'text-amber-600' : 'text-gray-800 hover:text-amber-500'
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `mx-4 font-bold no-underline transition-colors duration-200 ${isActive ? 'text-amber-600' : 'text-gray-800 hover:text-amber-500'
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div
            className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''
              }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
          ></div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
      >
        <nav className="flex flex-col py-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-6 py-3 font-bold no-underline transition-colors duration-200 ${isActive ? 'text-amber-600 bg-amber-50' : 'text-gray-800 hover:text-amber-500 hover:bg-gray-50'
              }`
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-6 py-3 font-bold no-underline transition-colors duration-200 ${isActive ? 'text-amber-600 bg-amber-50' : 'text-gray-800 hover:text-amber-500 hover:bg-gray-50'
              }`
            }
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `px-6 py-3 font-bold no-underline transition-colors duration-200 ${isActive ? 'text-amber-600 bg-amber-50' : 'text-gray-800 hover:text-amber-500 hover:bg-gray-50'
              }`
            }
            onClick={closeMenu}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-6 py-3 font-bold no-underline transition-colors duration-200 ${isActive ? 'text-amber-600 bg-amber-50' : 'text-gray-800 hover:text-amber-500 hover:bg-gray-50'
              }`
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;