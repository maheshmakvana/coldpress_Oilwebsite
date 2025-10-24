import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { mockBrandInfo } from '../mock';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1e1919] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#61525a] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="text-xl font-bold">{mockBrandInfo.name}</span>
            </div>
            <p className="text-[#bbb5ae] leading-relaxed mb-6 max-w-md">
              {mockBrandInfo.description}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#61525a] rounded-full flex items-center justify-center hover:bg-[#4a3f45] transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#61525a] rounded-full flex items-center justify-center hover:bg-[#4a3f45] transition-all duration-300 transform hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#61525a] rounded-full flex items-center justify-center hover:bg-[#4a3f45] transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#61525a] rounded-full flex items-center justify-center hover:bg-[#4a3f45] transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('products')}
                  className="text-[#bbb5ae] hover:text-white transition-colors duration-300"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-[#bbb5ae] hover:text-white transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-[#bbb5ae] hover:text-white transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-[#bbb5ae]">
              <li className="hover:text-white transition-colors duration-300">{mockBrandInfo.email}</li>
              <li className="hover:text-white transition-colors duration-300">{mockBrandInfo.phone}</li>
              <li className="hover:text-white transition-colors duration-300">123 Harvest Lane<br />Oakland, CA 94612</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#736c64] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#bbb5ae] text-sm">
              © {currentYear} {mockBrandInfo.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-[#bbb5ae] hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-[#bbb5ae] hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};