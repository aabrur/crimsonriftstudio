import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Impor Komponen Global & Layout (Tanpa ekstensi .jsx agar aman di semua environment)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import GlobalAudio from './components/GlobalAudio';

// Impor Halaman
import Home from './app/home/Home';
import About from './app/about/about';
import Services from './app/services/Services';
import WebDev from './app/services/WebDev';
import Design from './app/services/Design';
import Multimedia from './app/services/Multimedia';
import Sosmed from './app/services/Sosmed';
import PortfolioGallery from './app/portfolio/PortfolioGallery';
import Contact from './app/contact/Contact';

// Fungsi Auto Scroll to Top
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      
      {/* 1. Cinematic Preloader (Muncul pertama kali 0-100%) */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      {/* 2. Global Relaxing Ambience Sound (Pemutar Musik) */}
      <GlobalAudio />

      {/* 3. Film Grain / Noise Overlay (Terhampar tipis di atas seluruh web) */}
      <div className="noise-overlay"></div>

      {/* Container Web Utama */}
      <div className="min-h-screen flex flex-col bg-[#030303] text-gray-100 font-sans selection:bg-red-600 selection:text-white overflow-x-hidden relative z-0">
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
            <Route path="/gallery" element={<PortfolioGallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}