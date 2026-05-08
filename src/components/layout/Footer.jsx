import { Link } from 'react-router-dom';
import {
  NAV_LINKS,
  SERVICES,
  COMPANY_INFO,
  CONTACT_INFO,
  SOCIAL_LINKS,
} from '../../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-gray-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8'>
          {/* Company Info */}
          <div className='space-y-6'>
            <Link
              to='/'
              className='text-2xl font-bold text-white tracking-tight'
            >
              {COMPANY_INFO.name}
            </Link>
            <p className='text-sm leading-relaxed max-w-xs'>
              {COMPANY_INFO.description}
            </p>
            <div className='flex space-x-4'>
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.path}
                  className='w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 hover:text-white transition-all'
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-white font-semibold text-lg mb-6 uppercase tracking-wider'>
              Quick Links
            </h3>
            <ul className='space-y-4'>
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className='text-sm hover:text-blue-500 transition-colors'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className='text-white font-semibold text-lg mb-6 uppercase tracking-wider'>
              Our Services
            </h3>
            <ul className='space-y-4'>
              {SERVICES.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className='text-sm hover:text-blue-500 transition-colors'
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-white font-semibold text-lg mb-6 uppercase tracking-wider'>
              Get in Touch
            </h3>
            <ul className='space-y-4'>
              {CONTACT_INFO.map((item) => (
                <li
                  key={item.label}
                  className='flex items-start space-x-3 text-sm'
                >
                  <i className={`${item.icon} text-blue-500 text-lg`}></i>

                  {item.href ? (
                    <a
                      href={item.href}
                      className='hover:text-blue-500 transition-colors'
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs'>
          <p>
            &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className='flex space-x-6'>
            <a href='#' className='hover:text-white transition-colors'>
              Privacy Policy
            </a>
            <a href='#' className='hover:text-white transition-colors'>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
