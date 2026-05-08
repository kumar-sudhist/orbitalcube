import { Link } from 'react-router-dom';
import { SERVICES } from '../../utils/constants';

const ServicesSection = () => {
  return (
    <section className="py-20 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">
            Our Expertise
          </h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Premium Solutions for <br className="hidden md:block" /> Modern Real Estate
          </h3>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.path}
              className="group bg-gray-900 border border-gray-800 p-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] hover:border-blue-500/50 cursor-pointer"
            >
              <div className="w-12 h-12 bg-blue-600/10 text-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <Link
                to={service.path}
                className="text-blue-500 text-sm font-bold flex items-center hover:text-blue-400 transition-colors"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
