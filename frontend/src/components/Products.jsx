import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Droplet, Sprout, Sparkles, Info } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { mockProducts } from '../mock';
import { useToast } from '../hooks/use-toast';

export const Products = () => {
  const { toast } = useToast();
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(mockProducts.map(p => p.id));
            }, 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInquiry = (productName) => {
    toast({
      title: "Inquiry Sent!",
      description: `We'll contact you about ${productName} soon.`,
    });
  };

  return (
    <section id="products" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Animated background with peanuts */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute peanut-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            <svg width="30" height="30" viewBox="0 0 40 40" fill="#8B6F47">
              <ellipse cx="20" cy="15" rx="8" ry="12" transform="rotate(25 20 15)" />
              <ellipse cx="20" cy="25" rx="8" ry="12" transform="rotate(-25 20 25)" />
            </svg>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-[#8B6F47] to-[#D4A574] text-white mb-4 px-8 py-3 text-sm font-semibold animate-fade-in hover:scale-110 transition-transform duration-300 shadow-lg">
            Our Premium Collection
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-[#3d2817] mb-4 animate-fade-in-up">
            Pure Cold-Pressed Oils
          </h2>
          <p className="text-lg text-[#6b5744] max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Experience the authentic taste and nutrition of traditionally extracted peanut and sesame oils
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {mockProducts.map((product, index) => {
            const isVisible = visibleCards.includes(product.id);
            return (
              <Card
                key={product.id}
                className={`group relative overflow-hidden border-3 border-[#8B6F47]/30 hover:border-[#8B6F47] transition-all duration-700 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-[#8B6F47]/30 bg-gradient-to-br from-white to-[#faf5ef] ${
                  isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
                }`}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Floating peanuts on hover */}
                {hoveredProduct === product.id && (
                  <>
                    <div className="absolute top-10 right-10 opacity-70 animate-float z-20">
                      <svg width="20" height="20" viewBox="0 0 40 40" fill="#8B6F47">
                        <ellipse cx="20" cy="15" rx="8" ry="12" transform="rotate(25 20 15)" />
                        <ellipse cx="20" cy="25" rx="8" ry="12" transform="rotate(-25 20 25)" />
                      </svg>
                    </div>
                    <div className="absolute top-20 left-10 opacity-70 animate-float-delayed z-20">
                      <svg width="15" height="15" viewBox="0 0 40 40" fill="#D4A574">
                        <ellipse cx="20" cy="15" rx="8" ry="12" transform="rotate(25 20 15)" />
                        <ellipse cx="20" cy="25" rx="8" ry="12" transform="rotate(-25 20 25)" />
                      </svg>
                    </div>
                  </>
                )}

                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-[#8B6F47] to-[#A0826D] text-white shadow-lg group-hover:scale-110 transition-transform duration-300 font-semibold">
                    {product.category}
                  </Badge>
                </div>

                <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Sparkles className="w-6 h-6 text-[#DAA520] animate-spin-slow" />
                </div>

                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-[#faf5ef] to-[#f5e6d3]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredProduct === product.id ? 'scale-125 rotate-3' : 'scale-100 rotate-0'
                    }`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-[#8B6F47]/70 via-transparent to-transparent transition-opacity duration-500 ${
                      hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  
                  <div
                    className={`absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-6 py-3 rounded-full shadow-xl transform transition-all duration-500 ${
                      hoveredProduct === product.id ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                  >
                    <span className="text-2xl font-bold text-[#8B6F47]">${product.price}</span>
                  </div>
                </div>

                <CardHeader className="relative">
                  <CardTitle className="text-2xl text-[#3d2817] group-hover:text-[#8B6F47] transition-colors duration-500 font-bold">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-[#6b5744] flex items-center gap-2 font-medium">
                    <Droplet className="w-4 h-4 group-hover:animate-bounce text-[#DAA520]" />
                    {product.volume}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative">
                  <p className="text-[#6b5744] leading-relaxed mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-[#f5e6d3] px-3 py-2 rounded-full">
                      <Sprout className="w-5 h-5 text-[#8B6F47] group-hover:rotate-12 transition-transform duration-300" />
                      <span className="text-sm text-[#6b5744] font-semibold">{product.source}</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="relative">
                  <Button
                    onClick={() => handleInquiry(product.name)}
                    className="w-full bg-gradient-to-r from-[#8B6F47] to-[#A0826D] hover:from-[#6d5636] hover:to-[#8B6F47] text-white transition-all duration-500 transform hover:scale-105 hover:shadow-lg group relative overflow-hidden font-bold"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <ShoppingCart className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      Order Now
                    </span>
                  </Button>
                </CardFooter>

                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 right-0 w-full h-full bg-[#8B6F47]/10 rounded-tl-full"></div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};