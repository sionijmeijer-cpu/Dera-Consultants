import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#0f3460] to-[#0a1f35] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
              <img 
                src="https://i.imgur.com/KTSBU1c.png" 
                alt="Dera Consultants Logo" 
                className="w-8 h-8 object-contain"
              />
              DERA
            </h3>
            <p className="text-sm mb-4">
              Your trusted partner for immigration and residency programs across the Caribbean, Portugal, and Europe.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#d4af37] transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#d4af37] transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#d4af37] transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#d4af37] transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-[#d4af37] transition-colors duration-200">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-[#d4af37] transition-colors duration-200">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-[#d4af37] transition-colors duration-200">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-[#d4af37] transition-colors duration-200">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#d4af37] transition-colors duration-200 cursor-pointer">Caribbean CBIP</li>
              <li className="hover:text-[#d4af37] transition-colors duration-200 cursor-pointer">Portugal & Europe Programs</li>
              <li className="hover:text-[#d4af37] transition-colors duration-200 cursor-pointer">Residency Solutions</li>
              <li className="hover:text-[#d4af37] transition-colors duration-200 cursor-pointer">Citizenship Planning</li>
              <li className="hover:text-[#d4af37] transition-colors duration-200 cursor-pointer">Investment Advisory</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#d4af37]" />
                <a href="mailto:info@deraconsultants.com" className="hover:text-[#d4af37] transition-colors duration-200">
                  info@deraconsultants.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#d4af37]" />
                <a href="tel:+1234567890" className="hover:text-[#d4af37] transition-colors duration-200">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#d4af37]" />
                <span>123 Business Ave, Suite 100<br />Miami, FL 33131</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1a5276] mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Dera Consultants. All rights reserved. | <span className="text-[#d4af37]">Excellence in Global Immigration Solutions</span></p>
        </div>
      </div>
    </footer>
  );
}
