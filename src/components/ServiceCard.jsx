import { Link } from 'react-router-dom';

const ServiceCard = ({ service, isDark = false }) => {
  return (
    <div className={`group p-8 rounded-3xl transition-all duration-500 transform hover:-translate-y-2 border ${
      isDark 
        ? 'bg-gray-900/50 backdrop-blur-xl border-gray-800 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]' 
        : 'bg-white shadow-sm hover:shadow-2xl border-gray-100 hover:border-blue-100'
    }`}>
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 ${
        isDark 
          ? 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white' 
          : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
      }`}>
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <h3 className={`text-xl font-bold mb-4 transition-colors ${
        isDark ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'
      }`}>
        {service.title}
      </h3>
      <p className={`mb-8 leading-relaxed text-sm ${
        isDark ? 'text-gray-400' : 'text-gray-600'
      }`}>
        {service.description}
      </p>
      <Link
        to={service.path}
        className={`inline-flex items-center text-sm font-bold transition-all ${
          isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
        }`}
      >
        <span>Explore Service</span>
        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
};

export default ServiceCard;
