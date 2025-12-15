import { Menu, X, Mail } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onScheduleCall: () => void;
}

export default function Header({ onScheduleCall }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Caribbean CBI', path: '/caribbean-citizenship-by-investment' },
    { name: 'Portugal & Europe', path: '/portugal-europe-residency' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#0f3460] to-[#1a5276] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center gap-4 sm:gap-6 text-sm">
            <a href="mailto:info@getsecondpassport.eu" className="flex items-center gap-2 hover:text-[#d4af37] transition-colors duration-200" title="Email">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://wa.me/31629566895" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#d4af37] transition-colors duration-200" title="WhatsApp">
              <img src="https://www.svgrepo.com/show/299482/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-5">
          {/* Logo and Brand */}
          <a 
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/';
              window.scrollTo(0, 0);
            }}
            className="flex items-center gap-2 md:gap-3 group hover:opacity-80 transition-opacity duration-200 flex-shrink-0"
          >
            <img 
              src="https://i.imgur.com/KTSBU1c.png" 
              alt="Dera Consultants Logo" 
              className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain"
            />
            <div className="hidden sm:flex items-center gap-1 md:gap-2">
              <div className="text-sm md:text-base lg:text-lg font-bold text-blue-700 whitespace-nowrap">DERA</div>
              <div className="text-xs md:text-sm lg:text-base font-bold text-blue-700 whitespace-nowrap">CONSULTANTS</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="text-base font-medium transition-all duration-200 whitespace-nowrap text-gray-600 hover:text-[#0f3460]"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={onScheduleCall}
              className="bg-[#d4af37] text-[#0f3460] px-6 py-3 rounded-md hover:bg-[#c9a02e] transition-all duration-300 shadow-md hover:shadow-lg font-semibold whitespace-nowrap"
            >
              Schedule a Call
            </button>
          </nav>

          {/* Tablet & Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 py-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left px-4 py-3 rounded-md transition-colors duration-200 text-sm font-medium text-gray-600 hover:bg-gray-100"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  onScheduleCall();
                  setMobileMenuOpen(false);
                }}
                className="bg-[#d4af37] text-[#0f3460] px-4 py-3 rounded-md hover:bg-[#c9a02e] transition-all duration-300 font-semibold text-sm mt-2"
              >
                Schedule a Call
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
