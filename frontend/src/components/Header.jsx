import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-10 h-10 bg-[#61525a] rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className="text-xl font-bold text-[#1e1919]">Golden Harvest</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('products')} className="text-[#736c64] hover:text-[#61525a] transition-colors duration-300 font-medium">
              Products
            </button>
            <button onClick={() => scrollToSection('about')} className="text-[#736c64] hover:text-[#61525a] transition-colors duration-300 font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-[#736c64] hover:text-[#61525a] transition-colors duration-300 font-medium">
              Contact
            </button>
            <Button onClick={() => scrollToSection('contact')} className="bg-[#61525a] hover:bg-[#4a3f45] text-white transition-all duration-300 transform hover:scale-105">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Inquire Now
            </Button>
          </nav>

          <button
            className="md:hidden text-[#1e1919] hover:text-[#61525a] transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('products')} className="text-[#736c64] hover:text-[#61525a] transition-colors duration-300 text-left">
                Products
              </button>
              <button onClick={() => scrollToSection('about')} className="text-[#736c64] hover:text-[#61525a] transition-colors duration-300 text-left">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-[#736c64] hover:text-[#61525a] transition-colors duration-300 text-left">
                Contact
              </button>
              <Button onClick={() => scrollToSection('contact')} className="bg-[#61525a] hover:bg-[#4a3f45] text-white w-full">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Inquire Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};