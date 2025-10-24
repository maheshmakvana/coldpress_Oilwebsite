import React, { useEffect, useState } from 'react';
import { Sparkles, Award, Leaf, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { mockBrandInfo } from '../mock';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-[#f7f5f2] overflow-hidden">
      {/* Animated background with floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 left-10 w-96 h-96 bg-[#61525a] rounded-full blur-3xl opacity-10 animate-float"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#61525a] rounded-full blur-3xl opacity-10 animate-float-delayed"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#61525a] rounded-full blur-2xl opacity-5 animate-pulse-slow"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-32 right-20 w-4 h-4 bg-[#61525a] rounded-full animate-bounce-slow opacity-40"></div>
      <div className="absolute bottom-40 left-32 w-3 h-3 bg-[#61525a] rounded-full animate-bounce-slower opacity-40"></div>
      <div className="absolute top-1/3 left-20 w-2 h-2 bg-[#61525a] rounded-full animate-bounce-slow opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full mb-8 shadow-xl border border-[#61525a]/10 animate-slide-down hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-5 h-5 text-[#61525a] animate-spin-slow" />
            <span className="text-[#61525a] font-medium">Premium Quality Oils</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-[#1e1919] mb-6 leading-tight">
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {mockBrandInfo.name.split(' ')[0]}
            </span>
            <br />
            <span className="inline-block animate-fade-in-up bg-gradient-to-r from-[#61525a] via-[#4a3f45] to-[#61525a] bg-clip-text text-transparent bg-size-200 animate-gradient" style={{ animationDelay: '0.4s' }}>
              {mockBrandInfo.name.split(' ')[1]} {mockBrandInfo.name.split(' ')[2]}
            </span>
          </h1>
          
          <p className="text-2xl md:text-4xl text-[#61525a] mb-4 font-semibold animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {mockBrandInfo.tagline}
          </p>
          <p className="text-lg text-[#736c64] mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            {mockBrandInfo.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <Button
              onClick={scrollToProducts}
              size="lg"
              className="group bg-[#61525a] hover:bg-[#4a3f45] text-white px-10 py-7 text-lg transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-[#61525a]/50 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Explore Products
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#4a3f45] to-[#61525a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </Button>
            <Button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              variant="outline"
              className="group border-2 border-[#61525a] text-[#61525a] hover:bg-[#61525a] hover:text-white px-10 py-7 text-lg transform hover:scale-110 transition-all duration-500 hover:shadow-2xl relative overflow-hidden"
            >
              <span className="relative z-10">Contact Us</span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div
              className={`group bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl transform transition-all duration-700 delay-200 hover:scale-110 hover:rotate-2 hover:shadow-2xl border border-[#61525a]/10 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="relative">
                <Award className="w-14 h-14 text-[#61525a] mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                <div className="absolute inset-0 bg-[#61525a]/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
              <h3 className="text-xl font-bold text-[#1e1919] mb-2 group-hover:text-[#61525a] transition-colors duration-300">Premium Quality</h3>
              <p className="text-[#736c64]">Hand-selected from the finest sources worldwide</p>
            </div>

            <div
              className={`group bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl transform transition-all duration-700 delay-400 hover:scale-110 hover:-rotate-2 hover:shadow-2xl border border-[#61525a]/10 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="relative">
                <Leaf className="w-14 h-14 text-[#61525a] mx-auto mb-4 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500" />
                <div className="absolute inset-0 bg-[#61525a]/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
              <h3 className="text-xl font-bold text-[#1e1919] mb-2 group-hover:text-[#61525a] transition-colors duration-300">100% Natural</h3>
              <p className="text-[#736c64]">Pure, organic ingredients with no additives</p>
            </div>

            <div
              className={`group bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl transform transition-all duration-700 delay-600 hover:scale-110 hover:rotate-2 hover:shadow-2xl border border-[#61525a]/10 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="relative">
                <Sparkles className="w-14 h-14 text-[#61525a] mx-auto mb-4 group-hover:scale-125 group-hover:rotate-180 transition-all duration-500" />
                <div className="absolute inset-0 bg-[#61525a]/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
              <h3 className="text-xl font-bold text-[#1e1919] mb-2 group-hover:text-[#61525a] transition-colors duration-300">Cold-Pressed</h3>
              <p className="text-[#736c64]">Retaining maximum nutrients and flavor</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow cursor-pointer" onClick={scrollToProducts}>
          <ChevronDown className="w-8 h-8 text-[#61525a]" />
        </div>
      </div>
    </section>
  );
};