import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Blogs from '../pages/Blogs';
import ContactUs from '../pages/ContactUs';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Redirect root to /home */}
        <Route index element={<Navigate to="/home" replace />} />
        
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact-us" element={<ContactUs />} />
        
        {/* Fallback for 404 inside Layout */}
        <Route path="*" element={
          <div className="flex items-center justify-center min-h-[60vh] bg-[#030712] text-white">
            <div className="text-center">
              <h1 className="text-6xl font-black mb-4">404</h1>
              <p className="text-xl text-gray-400 mb-8">Page Not Found</p>
              <Navigate to="/home" />
            </div>
          </div>
        } />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
