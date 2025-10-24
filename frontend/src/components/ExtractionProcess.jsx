import React from 'react';
import { Wheat, Droplet, Recycle, Package, CheckCircle2 } from 'lucide-react';
import { extractionSteps } from '../mock';

export const ExtractionProcess = () => {
  const iconMap = {
    select: Wheat,
    clean: Droplet,
    press: Recycle,
    filter: Droplet,
    bottle: Package
  };

  return (
    <section id="process" className="py-24 bg-gradient-to-br from-[#faf5ef] to-[#f5e6d3] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute peanut-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`
            }}
          >
            <svg width="25" height="25" viewBox="0 0 40 40" fill="#8B6F47">
              <ellipse cx="20" cy="15" rx="8" ry="12" transform="rotate(25 20 15)" />
              <ellipse cx="20" cy="25" rx="8" ry="12" transform="rotate(-25 20 25)" />
            </svg>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full mb-6 shadow-lg border-2 border-[#8B6F47]/20 animate-fade-in">
            <Recycle className="w-5 h-5 text-[#8B6F47] animate-spin-slow" />
            <span className="text-[#8B6F47] font-semibold uppercase tracking-wider">Our Process</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#3d2817] mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Traditional Cold-Press <br />
            <span className="bg-gradient-to-r from-[#8B6F47] to-[#D4A574] bg-clip-text text-transparent">Extraction Method</span>
          </h2>
          <p className="text-lg text-[#6b5744] max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            We follow time-honored techniques passed down through generations, ensuring every drop of oil retains its natural goodness, aroma, and nutritional value.
          </p>
        </div>

        {/* Extraction Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#8B6F47] via-[#D4A574] to-[#8B6F47] transform -translate-y-1/2 animate-pulse-slow"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {extractionSteps.map((step, index) => {
              const Icon = iconMap[step.icon];
              return (
                <div
                  key={step.step}
                  className="relative group animate-fade-in-scale"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Step number */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#8B6F47] to-[#D4A574] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 z-10">
                    {step.step}
                  </div>

                  <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 pt-14 shadow-xl border-2 border-[#8B6F47]/20 transform group-hover:scale-105 group-hover:-translate-y-4 transition-all duration-500 h-full">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#f5e6d3] to-[#faf5ef] rounded-full flex items-center justify-center mx-auto group-hover:bg-gradient-to-br group-hover:from-[#8B6F47] group-hover:to-[#D4A574] transition-all duration-500 shadow-lg">
                        <Icon className="w-10 h-10 text-[#8B6F47] group-hover:text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                      </div>
                      <div className="absolute inset-0 bg-[#8B6F47]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    <h3 className="text-2xl font-bold text-[#3d2817] mb-3 group-hover:text-[#8B6F47] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-[#6b5744] leading-relaxed">{step.description}</p>

                    {/* Animated check mark on hover */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-100 scale-0">
                      <CheckCircle2 className="w-6 h-6 text-green-600 animate-bounce" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="mt-20 flex justify-center items-center space-x-4 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent to-[#8B6F47] animate-pulse"></div>
          <Droplet className="w-8 h-8 text-[#DAA520] animate-bounce-slow" />
          <div className="w-16 h-1 bg-gradient-to-l from-transparent to-[#8B6F47] animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};