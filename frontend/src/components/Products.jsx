import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Droplet, Award, Sparkles } from 'lucide-react';
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
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#61525a] rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#61525a] rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-[#61525a] text-white mb-4 px-6 py-2 text-sm animate-fade-in hover:scale-110 transition-transform duration-300">Our Collection</Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-[#1e1919] mb-4 animate-fade-in-up">
            Premium Oil Selection
          </h2>
          <p className="text-lg text-[#736c64] max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover our carefully curated collection of the world's finest oils
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {mockProducts.map((product, index) => {
            const isVisible = visibleCards.includes(product.id);
            return (
              <Card
                key={product.id}
                className={`group relative overflow-hidden border-2 border-gray-200 hover:border-[#61525a] transition-all duration-700 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-[#61525a]/20 bg-white ${
                  isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
                }`}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                style={{
                  animationDelay: `${index * 0.2}s`,
                  perspective: '1000px'
                }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-[#61525a] text-white shadow-lg group-hover:scale-110 transition-transform duration-300">{product.category}</Badge>
                </div>

                {/* Sparkle effect */}
                <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Sparkles className="w-6 h-6 text-[#61525a] animate-spin-slow" />
                </div>

                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-[#f7f5f2] to-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      hoveredProduct === product.id ? 'scale-125 rotate-3' : 'scale-100 rotate-0'
                    }`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-[#61525a]/60 via-transparent to-transparent transition-opacity duration-500 ${
                      hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  
                  {/* Floating price tag on hover */}
                  <div
                    className={`absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-6 py-3 rounded-full shadow-xl transform transition-all duration-500 ${
                      hoveredProduct === product.id ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}
                  >
                    <span className="text-2xl font-bold text-[#61525a]">${product.price}</span>
                  </div>
                </div>

                <CardHeader className="relative">
                  <CardTitle className="text-2xl text-[#1e1919] group-hover:text-[#61525a] transition-colors duration-500">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-[#736c64] flex items-center gap-2">
                    <Droplet className="w-4 h-4 group-hover:animate-bounce" />
                    {product.volume}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative">
                  <p className="text-[#736c64] leading-relaxed mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#61525a] group-hover:rotate-12 transition-transform duration-300" />
                      <span className="text-sm text-[#736c64] font-medium">Premium Grade</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="relative">
                  <Button
                    onClick={() => handleInquiry(product.name)}
                    className="w-full bg-[#61525a] hover:bg-[#4a3f45] text-white transition-all duration-500 transform hover:scale-105 hover:shadow-lg group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <ShoppingCart className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      Inquire Now
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#4a3f45] to-[#61525a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                  </Button>
                </CardFooter>

                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 right-0 w-full h-full bg-[#61525a]/5 rounded-tl-full"></div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};