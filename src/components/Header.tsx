import { Menu, X, Mail } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  onScheduleCall: () => void;
}

export default function Header({ currentPage, setCurrentPage, onScheduleCall }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Caribbean CBI', id: 'caribbean' },
    { name: 'Portugal & Europe', id: 'portugal' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#0f3460] to-[#1a5276] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center gap-6 text-sm">
            <a href="mailto:info@deraconsultants.com" className="flex items-center gap-2 hover:text-[#d4af37] transition-colors duration-200" title="Email">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200" title="WhatsApp">
              <img src="https://www.svgrepo.com/show/299482/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Brand */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group hover:opacity-80 transition-opacity duration-200"
          >
            <img 
              src="https://i.imgur.com/KTSBU1c.png" 
              alt="Dera Consultants Logo" 
              className="w-12 h-12 object-contain"
            />
            <div className="text-lg font-bold text-[#0f3460]">DERA CONSULTANTS</div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-base font-medium transition-all duration-200 ${
                  currentPage === link.id
                    ? 'text-[#0f3460] border-b-2 border-[#d4af37] pb-1'
                    : 'text-gray-600 hover:text-[#0f3460]'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={onScheduleCall}
              className="bg-[#d4af37] text-[#0f3460] px-4 py-2 rounded-md hover:bg-[#c9a02e] transition-all duration-300 shadow-md hover:shadow-lg font-semibold text-sm"
            >
              Schedule a Call
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
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
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-4 py-2 rounded-md transition-colors duration-200 ${
                    currentPage === link.id
                      ? 'bg-[#0f3460] text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => {
                  onScheduleCall();
                  setMobileMenuOpen(false);
                }}
                className="bg-[#d4af37] text-[#0f3460] px-4 py-2 rounded-md hover:bg-[#c9a02e] transition-all duration-300 mx-4 font-semibold text-sm"
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
