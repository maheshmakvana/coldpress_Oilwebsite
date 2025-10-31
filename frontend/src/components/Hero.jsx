import React, { useEffect, useState } from 'react';
import { Droplets, Sprout, Sun, ArrowRight, ChevronDown } from 'lucide-react';
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f5e6d3] via-[#faf5ef] to-[#e8dcc8] overflow-hidden">
      {/* Animated peanuts and sesame seeds background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute peanut-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            <svg width="30" height="30" viewBox="0 0 40 40" fill="#8B6F47">
              <ellipse cx="20" cy="15" rx="8" ry="12" transform="rotate(25 20 15)" />
              <ellipse cx="20" cy="25" rx="8" ry="12" transform="rotate(-25 20 25)" />
            </svg>
          </div>
        ))}
        
        {[...Array(20)].map((_, i) => (
          <div
            key={`seed-${i}`}
            className="absolute sesame-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${10 + Math.random() * 8}s`
            }}
          >
            <div className="w-2 h-3 bg-[#D4A574] rounded-full opacity-60"></div>
          </div>
        ))}
      </div>

      {/* Floating oil drops */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={`drop-${i}`}
            className="absolute oil-drop"
            style={{
              left: `${20 + i * 10}%`,
              animationDelay: `${i * 1.5}s`
            }}
          >
            <Droplets className="w-6 h-6 text-[#DAA520] opacity-30" />
          </div>
        ))}
      </div>

      {/* Organic shapes */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-10 w-96 h-96 bg-[#8B6F47] rounded-full blur-3xl opacity-10 animate-float"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#D4A574] rounded-full blur-3xl opacity-10 animate-float-delayed"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="pointer-events-none absolute -inset-x-24 -inset-y-16">
          <div className="absolute left-1/2 top-1/2 w-[560px] h-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 opacity-60 animate-ripple"></div>
          <div className="absolute left-1/2 top-1/2 w-[420px] h-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#8B6F47]/25 via-transparent to-[#D4A574]/30 blur-3xl animate-shimmer" style={{ animationDelay: '1s' }}></div>
          <div className="absolute left-1/2 top-1/2 w-[320px] h-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8B6F47]/30 animate-orbit"></div>
        </div>
        <div
          className={`relative transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md px-8 py-4 rounded-full mb-8 shadow-xl border-2 border-[#8B6F47]/20 animate-slide-down hover:scale-105 transition-transform duration-300">
            <Sprout className="w-6 h-6 text-[#8B6F47] animate-bounce-slow" />
            <span className="text-[#8B6F47] font-semibold text-lg">100% Organic Cold-Pressed</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-[#3d2817] mb-6 leading-tight drop-shadow-lg">
            <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {mockBrandInfo.name.split(' ')[0]}
            </span>
            <br />
            <span className="inline-block animate-fade-in-up bg-gradient-to-r from-[#8B6F47] via-[#A0826D] to-[#D4A574] bg-clip-text text-transparent bg-size-200 animate-gradient" style={{ animationDelay: '0.4s' }}>
              {mockBrandInfo.name.split(' ')[1]} {mockBrandInfo.name.split(' ')[2]}
            </span>
          </h1>
          
          <p className="text-3xl md:text-4xl text-[#8B6F47] mb-4 font-bold animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {mockBrandInfo.tagline}
          </p>
          <p className="text-lg text-[#6b5744] mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up font-medium" style={{ animationDelay: '0.8s' }}>
            {mockBrandInfo.description}
          </p>

          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#8B6F47]/20 to-[#D4A574]/20 blur-3xl animate-float-up"></div>
              <div className="absolute w-40 h-40 rounded-full border border-[#8B6F47]/30 animate-ripple" style={{ animationDelay: '0.8s' }}></div>
            </div>
            <Button
              onClick={scrollToProducts}
              size="lg"
              className="group bg-gradient-to-r from-[#8B6F47] to-[#A0826D] hover:from-[#6d5636] hover:to-[#8B6F47] text-white px-12 py-7 text-lg transform hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-[#8B6F47]/50 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center font-bold">
                Explore Our Oils
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <span className="pointer-events-none absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></span>
            </Button>
            <Button
              onClick={() => document.getElementById('process').scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              variant="outline"
              className="group border-3 border-[#8B6F47] text-[#8B6F47] hover:bg-[#8B6F47] hover:text-white px-12 py-7 text-lg transform hover:scale-110 transition-all duration-500 hover:shadow-2xl font-bold relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <Sun className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-700" />
                Our Process
              </span>
              <span className="pointer-events-none absolute inset-0 bg-[#8B6F47]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></span>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div
              className={`group bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl transform transition-all duration-700 delay-200 hover:scale-110 hover:rotate-2 hover:shadow-2xl border-2 border-[#8B6F47]/20 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="relative">
                <Sprout className="w-14 h-14 text-[#8B6F47] mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                <div className="absolute inset-0 bg-[#8B6F47]/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
              <h3 className="text-xl font-bold text-[#3d2817] mb-2 group-hover:text-[#8B6F47] transition-colors duration-300">100% Organic</h3>
              <p className="text-[#6b5744]">Naturally grown peanuts and sesame seeds</p>
            </div>

            <div
              className={`group bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl transform transition-all duration-700 delay-400 hover:scale-110 hover:-rotate-2 hover:shadow-2xl border-2 border-[#8B6F47]/20 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="relative">
                <Sun className="w-14 h-14 text-[#D4A574] mx-auto mb-4 group-hover:scale-125 group-hover:rotate-180 transition-all duration-700" />
                <div className="absolute inset-0 bg-[#D4A574]/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
              <h3 className="text-xl font-bold text-[#3d2817] mb-2 group-hover:text-[#D4A574] transition-colors duration-300">Cold-Pressed</h3>
              <p className="text-[#6b5744]">Traditional stone-mill extraction method</p>
            </div>

            <div
              className={`group bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl transform transition-all duration-700 delay-600 hover:scale-110 hover:rotate-2 hover:shadow-2xl border-2 border-[#8B6F47]/20 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="relative">
                <Droplets className="w-14 h-14 text-[#DAA520] mx-auto mb-4 group-hover:scale-125 group-hover:animate-bounce transition-all duration-500" />
                <div className="absolute inset-0 bg-[#DAA520]/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
              <h3 className="text-xl font-bold text-[#3d2817] mb-2 group-hover:text-[#DAA520] transition-colors duration-300">Pure & Fresh</h3>
              <p className="text-[#6b5744]">No chemicals or preservatives added</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow cursor-pointer" onClick={scrollToProducts}>
          <ChevronDown className="w-8 h-8 text-[#8B6F47]" />
        </div>
      </div>
    </section>
  );
};