import { SERVICES } from '../utils/constants';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  return (
    <div className="bg-[#030712] text-white selection:bg-blue-500/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-gray-900">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-600/5 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
            Our <span className="text-blue-500">Expertise</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-400">
            We provide cutting-edge digital solutions tailored for the modern real estate market. 
            From custom websites to cloud infrastructure, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {SERVICES.map((service) => (
              <ServiceCard key={service.path} service={service} isDark />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 border-t border-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tighter text-white">
            Ready to elevate your <br /> digital presence?
          </h2>
          <button className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-blue-600/20">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
