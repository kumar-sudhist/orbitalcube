export const COMPANY_INFO = {
  name: 'OrbitalCube',
  description: 'A premium digital agency dedicated to building high-performing, visually stunning websites for the real estate industry.',
  email: 'hello@orbitalcube.com',
  phone: '+1 (234) 567-890',
  address: '123 Digital Ave, Suite 400, San Francisco, CA 94103',
};

export const SOCIAL_LINKS = [
  { label: 'Twitter', icon: 'T', path: '#' },
  { label: 'LinkedIn', icon: 'L', path: '#' },
  { label: 'Instagram', icon: 'I', path: '#' },
];

export const NAV_LINKS = [
  { label: 'Home', path: '/home' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Contact', path: '/contact-us', isCTA: true },
];

export const SERVICES = [
  {
    title: "WordPress Development",
    description: "Custom WordPress websites tailored for real estate businesses.",
    path: "/services/wordpress",
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>`,
  },
  {
    title: "Elementor Design",
    description: "Visually stunning layouts using Elementor builder.",
    path: "/services/elementor",
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"/>
    </svg>`,
  },
  {
    title: "Responsive Layouts",
    description: "Mobile-first design that works on all devices.",
    path: "/services/responsive",
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
    </svg>`,
  },
  {
    title: "SEO Optimization",
    description: "Structured websites that rank better on Google.",
    path: "/services/seo",
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
    </svg>`,
  },
  {
    title: "Speed Optimization",
    description: "Fast-loading websites for better user experience.",
    path: "/services/performance",
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
    </svg>`,
  },
  {
    title: "Automation Solutions",
    description: "Custom features and automation for business growth.",
    path: "/services/automation",
    icon: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
    </svg>`,
  },
];

export const STATS = [
  { label: 'Projects Completed', value: '250+' },
  { label: 'Happy Clients', value: '180+' },
  { label: 'Awards Won', value: '15' },
  { label: 'Years Experience', value: '8+' },
];

export const BRANDS = [
  'Zillow', 'Realtor.com', 'Redfin', 'Compass', 'Trulia'
];

export const TEAM = [
  { name: 'Alex Rivera', role: 'Founder & CEO', image: 'AR' },
  { name: 'Sarah Chen', role: 'Head of Design', image: 'SC' },
  { name: 'Marcus Thorne', role: 'Lead Developer', image: 'MT' },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Top 10 Real Estate Web Trends in 2026',
    excerpt: 'Discover the latest technologies and design patterns shaping the future of property listings.',
    date: 'May 12, 2026',
    author: 'Sarah Chen',
    category: 'Trends',
  },
  {
    id: 2,
    title: 'Optimizing for Mobile: A Guide for Agents',
    excerpt: 'Why mobile performance is the number one factor in converting leads in today\'s market.',
    date: 'May 08, 2026',
    author: 'Marcus Thorne',
    category: 'Optimization',
  },
  {
    id: 3,
    title: 'The Power of High-End UI in Real Estate',
    excerpt: 'How premium design increases perceived property value and agent authority.',
    date: 'May 01, 2026',
    author: 'Alex Rivera',
    category: 'Design',
  },
];
