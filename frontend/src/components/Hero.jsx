import React, { useEffect, useState } from 'react';
import { Sparkles, Award, Leaf } from 'lucide-react';
import { Button } from './ui/button';
import { mockBrandInfo } from '../mock';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-[#f7f5f2] overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#61525a] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#61525a] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-8 shadow-lg">
            <Sparkles className="w-5 h-5 text-[#61525a]" />
            <span className="text-[#61525a] font-medium">Premium Quality Oils</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-[#1e1919] mb-6 leading-tight">
            {mockBrandInfo.name}
          </h1>
          <p className="text-2xl md:text-3xl text-[#61525a] mb-4 font-medium">
            {mockBrandInfo.tagline}
          </p>
          <p className="text-lg text-[#736c64] mb-12 max-w-2xl mx-auto leading-relaxed">
            {mockBrandInfo.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              onClick={scrollToProducts}
              size="lg"
              className="bg-[#61525a] hover:bg-[#4a3f45] text-white px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Explore Products
            </Button>
            <Button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              variant="outline"
              className="border-2 border-[#61525a] text-[#61525a] hover:bg-[#61525a] hover:text-white px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div
              className={`bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg transform transition-all duration-700 delay-200 hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <Award className="w-12 h-12 text-[#61525a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1e1919] mb-2">Premium Quality</h3>
              <p className="text-[#736c64]">Hand-selected from the finest sources worldwide</p>
            </div>

            <div
              className={`bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg transform transition-all duration-700 delay-400 hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <Leaf className="w-12 h-12 text-[#61525a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1e1919] mb-2">100% Natural</h3>
              <p className="text-[#736c64]">Pure, organic ingredients with no additives</p>
            </div>

            <div
              className={`bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg transform transition-all duration-700 delay-600 hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <Sparkles className="w-12 h-12 text-[#61525a] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1e1919] mb-2">Cold-Pressed</h3>
              <p className="text-[#736c64]">Retaining maximum nutrients and flavor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};