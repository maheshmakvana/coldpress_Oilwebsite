import React from 'react';
import { CheckCircle2, Heart, Globe, Users } from 'lucide-react';
import { mockGalleryImages } from '../mock';

export const About = () => {
  const features = [
    { icon: Heart, text: 'Sustainably Sourced' },
    { icon: Globe, text: 'Global Quality Standards' },
    { icon: Users, text: 'Family-Owned Business' },
    { icon: CheckCircle2, text: 'Quality Guaranteed' },
  ];

  return (
    <section id="about" className="py-24 bg-[#f7f5f2] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#61525a] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#61525a] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-[#61525a] font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e1919] mt-4 mb-6">Our Story of Excellence</h2>
              <p className="text-lg text-[#736c64] leading-relaxed mb-6">
                For over three generations, Golden Harvest Oils has been committed to bringing you the purest, 
                most flavorful oils from around the world. Our passion for quality drives everything we do.
              </p>
              <p className="text-lg text-[#736c64] leading-relaxed">
                We work directly with farmers and producers who share our values of sustainability, 
                authenticity, and excellence. Every bottle tells a story of craftsmanship and care.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Icon className="w-6 h-6 text-[#61525a] flex-shrink-0" />
                    <span className="text-sm font-medium text-[#1e1919]">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#61525a] mb-2">50+</div>
                <div className="text-sm text-[#736c64]">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#61525a] mb-2">100%</div>
                <div className="text-sm text-[#736c64]">Natural Products</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#61525a] mb-2">10k+</div>
                <div className="text-sm text-[#736c64]">Happy Customers</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {mockGalleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-500 ${
                  index === 0 ? 'col-span-2 h-80' : 'h-64'
                }`}
                style={{
                  animation: `fadeInScale 0.8s ease-out ${index * 0.2}s both`
                }}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};