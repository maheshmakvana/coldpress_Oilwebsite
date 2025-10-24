import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, Sprout, Mountain, Users, TrendingUp } from 'lucide-react';
import { mockGalleryImages } from '../mock';

export const About = () => {
  const [counters, setCounters] = useState({ years: 0, natural: 0, customers: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const features = [
    { icon: Sprout, text: 'Organically Grown' },
    { icon: Mountain, text: 'Traditional Methods' },
    { icon: Users, text: 'Family Tradition' },
    { icon: CheckCircle2, text: 'Chemical-Free' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const yearTarget = 50;
    const naturalTarget = 100;
    const customersTarget = 10;

    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounters({
        years: Math.floor(yearTarget * progress),
        natural: Math.floor(naturalTarget * progress),
        customers: Math.floor(customersTarget * progress),
      });

      if (step >= steps) {
        clearInterval(interval);
        setCounters({ years: yearTarget, natural: naturalTarget, customers: customersTarget });
      }
    }, duration / steps);
  };

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gradient-to-br from-[#f5e6d3] to-[#faf5ef] relative overflow-hidden">
      {/* Animated background with peanuts */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute peanut-float opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`
            }}
          >
            <svg width="35" height="35" viewBox="0 0 40 40" fill="#8B6F47">
              <ellipse cx="20" cy="15" rx="8" ry="12" transform="rotate(25 20 15)" />
              <ellipse cx="20" cy="25" rx="8" ry="12" transform="rotate(-25 20 25)" />
            </svg>
          </div>
        ))}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#8B6F47] rounded-full blur-3xl opacity-5 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#D4A574] rounded-full blur-3xl opacity-5 animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-[#8B6F47] font-semibold text-sm uppercase tracking-wider inline-block animate-fade-in">About Our Heritage</span>
              <h2 className="text-5xl md:text-6xl font-bold text-[#3d2817] mt-4 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Traditional <span className="bg-gradient-to-r from-[#8B6F47] to-[#D4A574] bg-clip-text text-transparent">Oil Extraction</span>
              </h2>
              <p className="text-lg text-[#6b5744] leading-relaxed mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                For over three generations, our family has been dedicated to extracting the purest peanut and sesame oils using traditional cold-press methods that preserve every nutrient and natural flavor.
              </p>
              <p className="text-lg text-[#6b5744] leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                We source our peanuts and sesame seeds from organic farms, ensuring that every bottle tells a story of authenticity, care, and time-honored craftsmanship.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group flex items-center space-x-3 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 border-2 border-[#8B6F47]/20 animate-fade-in-up"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <div className="relative">
                      <Icon className="w-7 h-7 text-[#8B6F47] flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                      <div className="absolute inset-0 bg-[#8B6F47]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <span className="text-sm font-medium text-[#3d2817] group-hover:text-[#8B6F47] transition-colors duration-300">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                <div className="relative inline-block">
                  <div className="text-5xl font-bold text-[#8B6F47] mb-2 group-hover:scale-110 transition-transform duration-300">
                    {counters.years}+
                  </div>
                  <TrendingUp className="w-5 h-5 text-[#8B6F47] absolute -top-2 -right-6 animate-bounce-slow" />
                </div>
                <div className="text-sm text-[#6b5744] font-medium">Years Tradition</div>
              </div>
              <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                <div className="relative inline-block">
                  <div className="text-5xl font-bold text-[#8B6F47] mb-2 group-hover:scale-110 transition-transform duration-300">
                    {counters.natural}%
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-[#8B6F47] absolute -top-2 -right-6 animate-bounce-slow" />
                </div>
                <div className="text-sm text-[#6b5744] font-medium">Organic</div>
              </div>
              <div className="text-center group animate-fade-in-up" style={{ animationDelay: '1s' }}>
                <div className="relative inline-block">
                  <div className="text-5xl font-bold text-[#8B6F47] mb-2 group-hover:scale-110 transition-transform duration-300">
                    {counters.customers}k+
                  </div>
                  <Sprout className="w-5 h-5 text-[#8B6F47] absolute -top-2 -right-6 animate-bounce-slow" />
                </div>
                <div className="text-sm text-[#6b5744] font-medium">Satisfied Families</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {mockGalleryImages.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 hover:rotate-2 transition-all duration-700 ${
                  index === 0 ? 'col-span-2 h-80' : 'h-64'
                } animate-fade-in-scale`}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#61525a]/40 via-transparent to-transparent group-hover:from-[#61525a]/60 transition-all duration-500"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};