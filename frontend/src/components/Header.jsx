import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Sparkles } from 'lucide-react';
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-[#61525a]/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer group" 
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative w-12 h-12 bg-gradient-to-br from-[#61525a] to-[#4a3f45] rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:shadow-[#61525a]/30">
              <span className="text-white font-bold text-2xl relative z-10">G</span>
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-[#61525a] opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow transition-opacity duration-500" />
            </div>
            <div>
              <span className="text-xl font-bold text-[#1e1919] group-hover:text-[#61525a] transition-colors duration-300">Golden Harvest</span>
              <div className="h-0.5 bg-gradient-to-r from-[#61525a] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {['products', 'about', 'contact'].map((section, index) => (
              <button 
                key={section}
                onClick={() => scrollToSection(section)} 
                className="relative text-[#736c64] hover:text-[#61525a] transition-colors duration-300 font-medium capitalize group"
              >
                {section}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#61525a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="group bg-[#61525a] hover:bg-[#4a3f45] text-white transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:shadow-[#61525a]/30 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <ShoppingBag className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Inquire Now
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#4a3f45] to-[#61525a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </Button>
          </nav>

          <button
            className="md:hidden text-[#1e1919] hover:text-[#61525a] transition-all duration-300 transform hover:scale-110"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? 
              <X className="w-6 h-6 animate-spin-slow" /> : 
              <Menu className="w-6 h-6" />
            }
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 animate-slide-down">
            <div className="flex flex-col space-y-4 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-[#61525a]/10">
              {['products', 'about', 'contact'].map((section, index) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)} 
                  className="text-[#736c64] hover:text-[#61525a] transition-all duration-300 text-left font-medium capitalize py-2 px-4 rounded-lg hover:bg-[#f7f5f2] transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {section}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="bg-[#61525a] hover:bg-[#4a3f45] text-white w-full transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
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