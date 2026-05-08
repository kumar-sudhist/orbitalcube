import { COMPANY_INFO, SOCIAL_LINKS } from '../utils/constants';

const ContactUs = () => {
  return (
    <div className="bg-[#030712] text-white selection:bg-blue-500/30">
      {/* Header */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
            Let's Start a <br />
            <span className="text-blue-500">Conversation</span>
          </h1>
          <p className="max-w-2xl text-xl text-gray-400">
            Whether you have a specific project in mind or just want to explore what's possible, we're here to help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            
            {/* Form Side */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-black mb-4">Send us a message</h2>
                <p className="text-gray-500">Expect a response within 24 business hours.</p>
              </div>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                    <input type="text" className="w-full bg-gray-900 border border-gray-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email Address</label>
                    <input type="email" className="w-full bg-gray-900 border border-gray-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Inquiry Type</label>
                  <select className="w-full bg-gray-900 border border-gray-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors appearance-none text-gray-400">
                    <option>General Inquiry</option>
                    <option>New Project Request</option>
                    <option>Partnership Proposal</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Message</label>
                  <textarea rows="6" className="w-full bg-gray-900 border border-gray-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors" placeholder="How can we help you thrive?"></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transform active:scale-[0.98] transition-all shadow-xl shadow-blue-600/20">
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Info Side */}
            <div className="space-y-16">
              {/* Direct Contact */}
              <div className="space-y-10">
                <h2 className="text-2xl font-black">Direct Contact</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-6 group cursor-pointer">
                    <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <span className="font-bold">@</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Email Us</h3>
                      <p className="text-xl font-bold hover:text-blue-500 transition-colors">{COMPANY_INFO.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6 group cursor-pointer">
                    <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <span className="font-bold">#</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Call Us</h3>
                      <p className="text-xl font-bold hover:text-blue-500 transition-colors">{COMPANY_INFO.phone}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Location */}
              <div className="space-y-8">
                <h2 className="text-2xl font-black text-white">Office</h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  {COMPANY_INFO.address.split(', ').map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </p>
              </div>

              {/* Socials */}
              <div className="space-y-8">
                <h2 className="text-2xl font-black text-white">Follow Our Journey</h2>
                <div className="flex space-x-4">
                  {SOCIAL_LINKS.map((social) => (
                    <a key={social.label} href={social.path} className="w-14 h-14 bg-gray-900 border border-gray-800 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all transform hover:-translate-y-1">
                      <span className="font-black text-xl">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
