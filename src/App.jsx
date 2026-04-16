import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './app/home/Home';
import About from './app/about/about';
import Services from './app/services/Services';
import WebDev from './app/services/WebDev';
import Design from './app/services/Design'; // <--- IMPORT HALAMAN BARU DI SINI

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-gray-100 font-sans selection:bg-red-600 selection:text-white">
        <Navbar />
        
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web-development" element={<WebDev />} />
            <Route path="/services/logo-branding" element={<Design />} /> {/* <--- ROUTE BARU ---> */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;