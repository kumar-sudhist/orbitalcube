import { SERVICES } from '../utils/constants';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='bg-gradient-to-b from-[#0B0F19] via-[#0F1419] to-[#0B0F19] text-white min-h-screen'>
      {/* HERO SECTION */}
      <section className='relative pt-32 pb-24 overflow-hidden'>
        {/* Background Effects */}
        <div className='absolute inset-0 -z-10'>
          <div className='absolute top-20 -left-40 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl opacity-50 animate-pulse'></div>
          <div className='absolute -bottom-32 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl opacity-30 animate-pulse delay-1000'></div>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-20'></div>
        </div>

        <div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-20'>
          <div className='grid md:grid-cols-2 gap-16 items-center'>
            {/* LEFT - TEXT */}
            <div className='space-y-8'>
              <div className='space-y-4'>
                <div className='inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full'>
                  <span className='text-xs font-semibold text-blue-300 tracking-wider uppercase'>
                    ✨ Premium Web Solutions
                  </span>
                </div>

                <h1 className='text-5xl md:text-7xl font-black leading-tight tracking-tight'>
                  Build Stunning <br />
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500'>
                    Real Estate Websites
                  </span>
                </h1>
              </div>

              <p className='text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl'>
                We craft high-performance, conversion-optimized websites that
                help real estate businesses showcase properties and close deals
                faster.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                <Link
                  to='/contact-us'
                  className='group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-blue-600/50 hover:shadow-xl hover:shadow-blue-600/70 hover:scale-105 transform active:scale-95 flex items-center justify-center gap-2'
                >
                  Get Started
                  <svg
                    className='w-5 h-5 group-hover:translate-x-1 transition-transform'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M13 7l5 5m0 0l-5 5m5-5H6'
                    />
                  </svg>
                </Link>

                <Link
                  to='/services'
                  className='px-8 py-4 border-2 border-blue-500/50 hover:border-blue-400 bg-white/5 hover:bg-white/10 rounded-xl font-bold transition-all duration-300 backdrop-blur-sm'
                >
                  View Services
                </Link>
              </div>

              <div className='flex gap-6 pt-4 text-sm'>
                <div>
                  <p className='text-2xl font-bold text-blue-400'>500+</p>
                  <p className='text-gray-400'>Projects Done</p>
                </div>
                <div>
                  <p className='text-2xl font-bold text-blue-400'>98%</p>
                  <p className='text-gray-400'>Client Happy</p>
                </div>
              </div>
            </div>

            {/* RIGHT - IMAGE */}
            <div className='relative h-96 md:h-full hidden md:block'>
              <div className='absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-purple-600/20 rounded-2xl blur-2xl'></div>
              <div className='absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden'>
                <img
                  src='https://images.unsplash.com/photo-1568605114967-8130f3a36994'
                  alt='real estate'
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent'></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className='py-32 relative'>
        <div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-20'>
          <div className='text-center space-y-6 mb-20'>
            <h2 className='text-5xl md:text-6xl font-black tracking-tight'>
              Our{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>
                Services
              </span>
            </h2>
            <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
              Comprehensive solutions tailored to your real estate business
              needs
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {SERVICES.slice(0, 6).map((service, index) => (
              <div key={index} className='group relative h-full'>
                {/* Glow Effect */}
                <div className='absolute -inset-0.5 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                {/* Card */}
                <div className='relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-blue-500/30'>
                  {/* Icon */}
                  <div className='mb-6 text-blue-400 group-hover:text-blue-300 transition-all duration-300 transform group-hover:scale-110'>
                    <div dangerouslySetInnerHTML={{ __html: service.icon }} />
                  </div>

                  {/* Content */}
                  <h3 className='text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300'>
                    {service.title}
                  </h3>
                  <p className='text-gray-400 group-hover:text-gray-300 transition-colors mb-8 flex-grow'>
                    {service.description}
                  </p>

                  {/* Learn More Button */}
                  <Link
                    to={service.path}
                    className='inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-all group-hover:gap-3 bg-blue-500/10 px-4 py-2 rounded-lg hover:bg-blue-500/20'
                  >
                    Learn More
                    <svg
                      className='w-5 h-5 transition-transform group-hover:translate-x-1'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className='py-32 bg-gradient-to-b from-white/5 to-transparent'>
        <div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-20'>
          <div className='text-center space-y-6 mb-20'>
            <h2 className='text-5xl md:text-6xl font-black tracking-tight'>
              Why Choose{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>
                OrbitalCube
              </span>
            </h2>
            <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
              Industry-leading expertise and proven track record
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                icon: '⚡',
                title: 'Lightning Fast',
                desc: 'Optimized for speed and SEO performance',
              },
              {
                icon: '📱',
                title: 'Mobile First',
                desc: 'Perfect experience on all devices',
              },
              {
                icon: '✨',
                title: 'Premium Design',
                desc: 'Modern UI that builds trust instantly',
              },
            ].map((item, idx) => (
              <div key={idx} className='group relative'>
                <div className='absolute -inset-0.5 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                <div className='relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 group-hover:bg-white/10'>
                  <div className='text-5xl mb-4'>{item.icon}</div>
                  <h3 className='text-2xl font-bold mb-2'>{item.title}</h3>
                  <p className='text-gray-400 group-hover:text-gray-300 transition-colors'>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className='py-32 relative overflow-hidden'>
        {/* Background Effects */}
        <div className='absolute inset-0 -z-10'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl opacity-60 animate-pulse'></div>
        </div>

        <div className='max-w-4xl mx-auto px-6 text-center'>
          <div className='bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-12 md:p-16 shadow-2xl hover:shadow-3xl transition-shadow duration-300'>
            <h2 className='text-5xl md:text-6xl font-black mb-6 leading-tight'>
              Ready to{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>
                Elevate
              </span>{' '}
              Your Online Presence?
            </h2>

            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Let's build a powerful website that converts visitors into clients
              and drives real business growth.
            </p>

            <Link
              to='/contact-us'
              className='group inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-blue-600/50 hover:shadow-xl hover:shadow-blue-600/70 hover:scale-105 transform active:scale-95'
            >
              Start Your Project Today
              <svg
                className='w-6 h-6 group-hover:translate-x-1 transition-transform'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13 7l5 5m0 0l-5 5m5-5H6'
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
