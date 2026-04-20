import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './app/home/Home';
import About from './app/about/about';
import Services from './app/services/Services';
import WebDev from './app/services/WebDev';
import Design from './app/services/Design';
import Multimedia from './app/services/Multimedia';
import Sosmed from './app/services/Sosmed';

// Komponen otomatis scroll ke atas setiap kali URL berubah
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Langsung lompat ke atas tanpa animasi agar terasa natural
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      {/* Pasang komponen ScrollToTop di dalam Router */}
      <ScrollToTop />
      
      <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-gray-100 font-sans selection:bg-red-600 selection:text-white">
        <Navbar />
        
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web-development" element={<WebDev />} />
            <Route path="/services/logo-branding" element={<Design />} />
            <Route path="/services/photography-videography" element={<Multimedia />} />
            <Route path="/services/social-media" element={<Sosmed />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;