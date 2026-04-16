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
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center group">
            <img src={LOGO_URL} alt="Logo" className="h-12 w-auto object-contain group-hover:scale-105 transition-transform" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors hover:text-red-500 relative ${location.pathname === link.path ? 'text-red-600' : 'text-gray-300'}`}>
                {link.label}
                {location.pathname === link.path && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600 rounded-full"></span>}
              </Link>
            ))}
            <button className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-md transition-colors shadow-lg shadow-red-600/20">
              Hubungi Kami
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-white">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
