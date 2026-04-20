import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const LOGO_URL = "/favicon.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Beranda' },
    { path: '/services', label: 'Layanan' },
    { path: '/about', label: 'Tentang Kami' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center group">
            <img src={LOGO_URL} alt="Logo" className="h-14 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors hover:text-red-500 relative ${location.pathname === link.path ? 'text-red-600' : 'text-gray-300'}`}>
                {link.label}
                {location.pathname === link.path && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600 rounded-full"></span>}
              </Link>
            ))}
            {/* Update Tombol WA Desktop */}
            <a 
              href="https://wa.me/6281398621530" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-md transition-colors shadow-lg shadow-red-600/20"
            >
              Hubungi Kami
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-white">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Dropdown Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#111] border-b border-gray-800 animate-fadeIn">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsMobileMenuOpen(false)} 
                className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${location.pathname === link.path ? 'bg-red-600/10 text-red-600' : 'text-gray-300 hover:bg-gray-800 hover:text-white'}`}
              >
                {link.label}
              </Link>
            ))}
            {/* Update Tombol WA Mobile */}
            <a 
              href="https://wa.me/6281398621530" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full text-center mt-4 px-5 py-3 bg-red-600 hover:bg-red-700 text-white text-base font-semibold rounded-md transition-colors shadow-lg shadow-red-600/20"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}