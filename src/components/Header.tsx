import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onScheduleCall: () => void;
}

export default function Header({ onScheduleCall }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Company', path: '/company', bold: true },
    { name: 'Programs', path: '/programs', bold: true },
    { name: 'Guides', path: '/guides', bold: true },
    { name: 'Articles', path: '/blog', bold: true },
    { name: 'Research', path: '/research', bold: true },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = '/';
              window.scrollTo(0, 0);
            }}
            className="flex items-center gap-2 group hover:opacity-80 transition-opacity duration-200 flex-shrink-0"
          >
            <img
              src="https://i.imgur.com/KTSBU1c.png"
              alt="Dera Consultants Logo"
              className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain"
              loading="eager"
              decoding="async"
            />
            <div className="hidden sm:flex items-center gap-1.5">
              <span className="text-sm md:text-base font-bold text-gray-700 whitespace-nowrap tracking-wide">DERA</span>
              <span className="text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap tracking-wide">CONSULTANTS</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = link.path;
                  window.scrollTo(0, 0);
                }}
                className="text-sm xl:text-base font-semibold text-gray-600 hover:text-[#0f3460] transition-colors duration-200 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={onScheduleCall}
              className="bg-[#1B7A4E] text-white px-5 py-2.5 rounded-lg hover:bg-[#156B3F] transition-all duration-200 shadow-sm hover:shadow-md font-semibold whitespace-nowrap text-sm xl:text-base"
            >
              Become a Client
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 touch-manipulation"
            aria-label="Toggle menu"
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
          <div className="lg:hidden border-t border-gray-100 py-3 pb-4">
            <nav className="flex flex-col gap-1">
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
                  className="text-left px-4 py-3 rounded-lg transition-colors duration-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#0f3460] active:bg-gray-100"
                >
                  {link.name}
                </a>
              ))}
              <div className="px-4 pt-2">
                <button
                  onClick={() => {
                    onScheduleCall();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-[#1B7A4E] text-white px-4 py-3 rounded-lg hover:bg-[#156B3F] transition-all duration-200 font-semibold text-sm shadow-sm"
                >
                  Become a Client
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
