import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Impor Komponen Global & Layout
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Preloader from './components/Preloader.jsx';
import GlobalAudio from './components/GlobalAudio.jsx';
import CustomCursor from './components/CustomCursor.jsx';

// Impor Halaman
import Home from './app/home/Home.jsx';
import About from './app/about/about.jsx';
import Services from './app/services/Services.jsx';
import WebDev from './app/services/WebDev.jsx';
import Design from './app/services/Design.jsx';
import Multimedia from './app/services/Multimedia.jsx';
import Sosmed from './app/services/Sosmed.jsx';
import PortfolioGallery from './app/portfolio/PortfolioGallery.jsx';
import Contact from './app/contact/Contact.jsx';

// Fungsi Auto Scroll to Top saat pindah halaman
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

// Wrapper Footer agar otomatis tersembunyi di halaman Gallery
function FooterWrapper() {
  const location = useLocation();
  // Jangan render Footer jika path adalah /gallery
  if (location.pathname === '/gallery') {
    return null;
  }
  return <Footer />;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      
      {/* Kursor Magnetik Kustom */}
      <CustomCursor />
      
      {/* 1. Cinematic Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      {/* 2. Global Relaxing Ambience Sound */}
      <GlobalAudio />

      {/* 3. Film Grain / Noise Overlay */}
      <div className="noise-overlay"></div>

      <div className="min-h-screen flex flex-col bg-[#030303] text-gray-100 font-sans selection:bg-red-600 selection:text-white relative z-0">
        <Navbar />
        
        <main className="flex-grow pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web-development" element={<WebDev />} />
            <Route path="/services/logo-branding" element={<Design />} />
            <Route path="/services/photography-videography" element={<Multimedia />} />
            <Route path="/services/social-media" element={<Sosmed />} />
            
            {/* Route untuk halaman Showcase / Gallery yang baru */}
            <Route path="/gallery" element={<PortfolioGallery />} />
            
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Gunakan FooterWrapper untuk menyembunyikan Footer di /gallery */}
        <FooterWrapper />
      </div>
    </Router>
  );
}