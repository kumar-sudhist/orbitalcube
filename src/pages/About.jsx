import { TEAM } from '../utils/constants';

const About = () => {
  return (
    <div className='bg-[#030712] text-white selection:bg-blue-500/30'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-gray-900'>
        <div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-20'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            <div>
              <h1 className='text-5xl md:text-7xl font-black tracking-tight leading-tight mb-8'>
                Who We Are <br />
                <span className='text-blue-500'>at OrbitalCube</span>
              </h1>
              <p className='text-xl text-gray-400 leading-relaxed mb-8'>
                Founded on the intersection of premium design and
                high-performance engineering, we specialize in creating the
                digital foundations for the world's most ambitious real estate
                firms.
              </p>
            </div>
            <div className='relative'>
              <div className='aspect-square bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl transform rotate-3 shadow-2xl opacity-20' />
              <div className='absolute inset-0 bg-gray-900/50 backdrop-blur-3xl border border-white/5 rounded-3xl p-10 flex flex-col justify-center'>
                <h3 className='text-3xl font-bold mb-4 italic text-blue-400'>
                  "We don't just build websites; we build competitive
                  advantages."
                </h3>
                <p className='text-gray-400'>— Alex Rivera, Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className='py-24 lg:py-40'>
        <div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-20'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-32'>
            <div className='space-y-6'>
              <h2 className='text-blue-500 font-bold uppercase tracking-widest text-sm'>
                Our Mission
              </h2>
              <p className='text-3xl font-bold tracking-tight'>
                To empower real estate professionals with world-class digital
                tools that drive measurable growth and brand authority.
              </p>
            </div>
            <div className='space-y-6'>
              <h2 className='text-blue-500 font-bold uppercase tracking-widest text-sm'>
                Our Vision
              </h2>
              <p className='text-3xl font-bold tracking-tight text-gray-400'>
                To be the global benchmark for excellence in real estate
                technology and digital creative strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-24 lg:py-40 bg-gray-950/50'>
        <div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-20'>
          <div className='text-center mb-20'>
            <h2 className='text-4xl md:text-5xl font-black tracking-tight mb-6'>
              The Minds Behind the Magic
            </h2>
            <p className='max-w-xl mx-auto text-gray-400'>
              Our multidisciplinary team of designers, engineers, and
              strategists work in synergy to deliver perfection.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12'>
            {TEAM.map((member) => (
              <div key={member.name} className='group text-center'>
                <div className='aspect-[4/5] bg-gray-900 border border-gray-800 rounded-3xl mb-6 flex items-center justify-center text-4xl font-black text-gray-700 group-hover:bg-blue-600/10 group-hover:border-blue-500/50 transition-all'>
                  {member.image}
                </div>
                <h3 className='text-xl font-bold mb-1'>{member.name}</h3>
                <p className='text-sm text-gray-500 font-medium uppercase tracking-widest'>
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
