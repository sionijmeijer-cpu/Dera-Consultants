import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onScheduleCall: () => void;
}

export default function Header({ onScheduleCall }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Company', path: '/about-us', bold: true },
    { name: 'Programs', path: '/programs', bold: true },
    { name: 'Articles', path: '/blog', bold: true },
    { name: 'Research', path: '/faq', bold: true },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
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
              <div className="text-sm md:text-base lg:text-lg font-bold text-gray-600 whitespace-nowrap">DERA</div>
              <div className="text-xs md:text-sm lg:text-base font-bold text-gray-600 whitespace-nowrap">CONSULTANTS</div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = link.path;
                  window.scrollTo(0, 0);
                }}
                className={`text-base transition-all duration-200 whitespace-nowrap text-gray-600 hover:text-[#0f3460] ${link.bold ? 'font-bold' : 'font-medium'}`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={onScheduleCall}
              className="bg-[#d4af37] text-[#0f3460] px-6 py-3 rounded-md hover:bg-[#c9a02e] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:shadow-[0_0_30px_rgba(212,175,55,0.8)] font-semibold whitespace-nowrap relative"
            >
              Become a Client
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
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = link.path;
                    window.scrollTo(0, 0);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-3 rounded-md transition-colors duration-200 text-sm text-gray-600 hover:bg-gray-100 ${link.bold ? 'font-bold' : 'font-medium'}`}
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  onScheduleCall();
                  setMobileMenuOpen(false);
                }}
                className="bg-[#d4af37] text-[#0f3460] px-4 py-3 rounded-md hover:bg-[#c9a02e] transition-all duration-300 font-semibold text-sm mt-2 shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:shadow-[0_0_30px_rgba(212,175,55,0.8)]"
              >
                Become a Client
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
