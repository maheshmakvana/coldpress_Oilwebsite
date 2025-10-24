import React, { useState } from 'react';
import { ShoppingCart, Droplet, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { mockProducts } from '../mock';
import { useToast } from '../hooks/use-toast';

export const Products = () => {
  const { toast } = useToast();
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleInquiry = (productName) => {
    toast({
      title: "Inquiry Sent!",
      description: `We'll contact you about ${productName} soon.`,
    });
  };

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-[#61525a] text-white mb-4 px-6 py-2 text-sm">Our Collection</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e1919] mb-4">Premium Oil Selection</h2>
          <p className="text-lg text-[#736c64] max-w-2xl mx-auto">
            Discover our carefully curated collection of the world's finest oils
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockProducts.map((product, index) => (
            <Card
              key={product.id}
              className={`group relative overflow-hidden border-2 border-gray-200 hover:border-[#61525a] transition-all duration-500 transform hover:scale-105 hover:shadow-2xl`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
              }}
            >
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-[#61525a] text-white">{product.category}</Badge>
              </div>

              <div className="relative h-72 overflow-hidden bg-[#f7f5f2]">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredProduct === product.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>

              <CardHeader>
                <CardTitle className="text-2xl text-[#1e1919] group-hover:text-[#61525a] transition-colors duration-300">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-[#736c64] flex items-center gap-2">
                  <Droplet className="w-4 h-4" />
                  {product.volume}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-[#736c64] leading-relaxed mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#61525a]" />
                    <span className="text-sm text-[#736c64]">Premium Grade</span>
                  </div>
                  <span className="text-3xl font-bold text-[#61525a]">${product.price}</span>
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  onClick={() => handleInquiry(product.name)}
                  className="w-full bg-[#61525a] hover:bg-[#4a3f45] text-white transition-all duration-300 transform hover:scale-105"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Inquire Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};