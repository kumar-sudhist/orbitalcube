import { BLOG_POSTS } from '../utils/constants';
import { Link } from 'react-router-dom';

const Blogs = () => {
  return (
    <div className="bg-[#030712] text-white selection:bg-blue-500/30">
      {/* Header */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
            The Orbital <span className="text-blue-500">Perspective</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-400">
            Expert insights on real estate technology, digital marketing, and the future of property design.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="aspect-video bg-gray-900 border border-gray-800 rounded-2xl mb-8 flex items-center justify-center text-2xl font-black text-gray-800 group-hover:bg-blue-600/10 group-hover:border-blue-500/50 transition-all overflow-hidden relative">
                   {/* Background Decorative */}
                   <div className="absolute top-0 right-0 p-6 text-xs font-bold text-blue-500/30 tracking-widest uppercase">
                     {post.category}
                   </div>
                   Post {post.id}
                </div>
                <div className="flex items-center space-x-4 mb-4">
                   <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">{post.category}</span>
                   <span className="w-1 h-1 bg-gray-800 rounded-full"></span>
                   <span className="text-xs text-gray-500 font-medium uppercase tracking-widest">{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold mb-4 leading-snug group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link to={`/blogs/${post.id}`} className="text-sm font-bold flex items-center group-hover:text-blue-400 transition-colors">
                  Read Full Article
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 border-t border-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-black mb-8">Stay Ahead of the Curve</h3>
          <p className="text-gray-400 mb-10">Get the latest real estate tech trends delivered directly to your inbox. No spam, just pure strategy.</p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your professional email" 
              className="flex-grow bg-gray-900 border border-gray-800 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors text-white"
            />
            <button className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all">
              Subscribe Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
