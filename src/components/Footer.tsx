import { Mail, Phone, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0f3460] to-[#0a1f35] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
              <img 
                src="https://i.imgur.com/KTSBU1c.png" 
                alt="Dera Consultants Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-gray-400">DERA CONSULTANTS</span>
            </h2>
            <p className="text-sm mb-4">
              Your trusted partner for immigration and residency programs across the Caribbean, Portugal, and Europe.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-[#1B7A4E] transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/company" className="hover:text-[#1B7A4E] transition-colors duration-200">
                  Company
                </a>
              </li>
              <li>
                <a href="/programs" className="hover:text-[#1B7A4E] transition-colors duration-200">
                  Programs
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-[#1B7A4E] transition-colors duration-200">
                  Articles
                </a>
              </li>
              <li>
                <a href="/research" className="hover:text-[#1B7A4E] transition-colors duration-200">
                  Research
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#1B7A4E] transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#1B7A4E]" />
                <a href="mailto:info@getsecondpassport.eu" className="hover:text-[#1B7A4E] transition-colors duration-200 break-all">
                  info@getsecondpassport.eu
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#1B7A4E]" />
                <a href="tel:+31629566895" className="hover:text-[#1B7A4E] transition-colors duration-200">
                  +31 6 29 566 895
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="https://www.facebook.com/profile.php?id=100095517183538" target="_blank" rel="noopener noreferrer" className="hover:text-[#1B7A4E] transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/deraconsultants/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1B7A4E] transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/dera-consultants" target="_blank" rel="noopener noreferrer" className="hover:text-[#1B7A4E] transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1a5276] mt-8 pt-8 text-sm text-center">
          <p>&copy; 2026 Dera Consultants. All rights reserved. | <span className="text-[#1B7A4E]">Excellence in Global Immigration Solutions</span></p>
        </div>
      </div>
    </footer>
  );
}