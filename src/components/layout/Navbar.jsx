import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS, SERVICES } from '../../utils/constants';
import logo from '../../assets/orbitalcube logo.jpeg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = NAV_LINKS.filter((link) => !link.isCTA);
  const ctaLink = NAV_LINKS.find((link) => link.isCTA);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/80 backdrop-blur-md py-0'
          : 'bg-transparent py-2'
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-20'>
        <div className='flex items-center justify-between h-16'>
          {/* Left: Logo */}
          <Link to='/' className='flex items-center group'>
            <img
              src={logo}
              alt='OrbitalCube'
              className='h-8 md:h-10 w-auto transition-transform group-hover:scale-105 mr-3'
            />
            <span className='text-xl md:text-2xl font-black text-white group-hover:text-blue-400 transition-colors'>
              OrbitalCube
            </span>
          </Link>

          {/* Center: Desktop Menu */}
          <div className='hidden lg:flex items-center space-x-8'>
            <ul className='flex items-center space-x-8'>
              {navLinks.map((link) => {
                const isServices = link.label === 'Services';

                if (isServices) {
                  return (
                    <li
                      key={link.path}
                      className='relative h-16 flex items-center'
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button className='flex items-center space-x-1 text-gray-300 hover:text-white font-medium transition-colors cursor-pointer'>
                        <span>{link.label}</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M19 9l-7 7-7-7'
                          />
                        </svg>
                      </button>

                      {/* Dropdown */}
                      <div
                        className={`absolute top-full left-0 w-64 bg-gray-900 rounded-xl shadow-2xl p-4 transition-all duration-300 origin-top ${
                          isServicesOpen
                            ? 'opacity-100 translate-y-0 scale-100'
                            : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
                        }`}
                      >
                        <div className='grid'>
                          {SERVICES.map((service) => (
                            <Link
                              key={service.path}
                              to={service.path}
                              className='block p-2 rounded-lg hover:bg-white/5 transition-colors group/item'
                            >
                              <p className='text-sm font-bold text-gray-200 group-hover/item:text-blue-400'>
                                {service.title}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={link.path} className='h-16 flex items-center'>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => `
                        relative text-gray-300 hover:text-white font-medium transition-colors
                        after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300
                        ${isActive ? 'text-white after:w-full' : 'after:w-0 hover:after:w-full'}
                      `}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: CTA Button */}
          <div className='flex items-center space-x-6'>
            <div className='hidden lg:block'>
              {ctaLink && (
                <Link
                  to={ctaLink.path}
                  className='
    relative inline-block px-6 py-2.5 rounded-xl font-bold overflow-hidden group
    bg-blue-600 text-white
    transition-all duration-500
    shadow-lg shadow-blue-600/20
    hover:scale-105 active:scale-95
  '
                >
                  {/* Overlay */}
                  <span
                    className='
      absolute inset-0 bg-[#0B0F19]
      transform skew-x-12 scale-x-0
      group-hover:scale-x-100
      origin-left
      transition-transform duration-500
      z-0
    '
                  ></span>

                  {/* Text */}
                  <span className='relative z-10 group-hover:text-white transition-colors'>
                    {ctaLink.label} Us
                  </span>
                </Link>
              )}
            </div>

            {/* Mobile Hamburger */}
            <button
              className='lg:hidden p-2 rounded-xl text-gray-300 hover:bg-white/5 transition-colors'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-xl transition-all duration-300 origin-top overflow-hidden ${
          isMobileMenuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className='px-4 py-6 space-y-6'>
          <ul className='space-y-4'>
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `
                    block text-lg font-medium py-2 transition-colors
                    ${isActive ? 'text-blue-500' : 'text-gray-300'}
                  `}
                >
                  {link.label}
                </NavLink>
                {link.label === 'Services' && (
                  <ul className='mt-2 ml-4 space-y-3 border-l border-gray-800 pl-4'>
                    {SERVICES.map((service) => (
                      <li key={service.path}>
                        <Link
                          to={service.path}
                          className='text-sm text-gray-500 hover:text-blue-400'
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          {ctaLink && (
            <Link
              to={ctaLink.path}
              className='block w-full text-center bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg'
            >
              {ctaLink.label} Us
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
