import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { useToast } from '../hooks/use-toast';
import { mockBrandInfo } from '../mock';

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactCards = [
    { icon: Mail, title: 'Email Us', info: mockBrandInfo.email, delay: '0s' },
    { icon: Phone, title: 'Call Us', info: mockBrandInfo.phone, delay: '0.2s' },
    { icon: MapPin, title: 'Visit Us', info: '123 Harvest Lane\nOakland, CA 94612', delay: '0.4s' },
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#61525a] rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#61525a] rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-[#61525a]/40 to-transparent animate-shimmer"></div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-16 w-48 h-48 border border-[#61525a]/20 rounded-full animate-orbit" style={{ animationDuration: '16s' }}></div>
        <div className="absolute bottom-1/4 right-16 w-56 h-56 border border-[#61525a]/20 rounded-full animate-orbit" style={{ animationDuration: '20s', animationDelay: '0.8s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#f7f5f2] px-6 py-3 rounded-full mb-4 shadow-lg animate-fade-in">
            <Sparkles className="w-5 h-5 text-[#61525a] animate-spin-slow" />
            <span className="text-[#61525a] font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-[#1e1919] mt-4 mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Contact Us
          </h2>
          <p className="text-lg text-[#736c64] max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Have questions about our products? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 border-2 hover:border-[#61525a] bg-white animate-fade-in-up"
                style={{ animationDelay: card.delay }}
              >
                <CardContent className="pt-10 pb-8 text-center relative overflow-hidden">
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-[-30%] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" style={{ animationDuration: '3s' }}></div>
                  </div>
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f7f5f2] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative">
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <div className="w-28 h-28 rounded-full border border-[#61525a]/20 animate-ripple" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <div className="relative w-20 h-20 bg-[#f7f5f2] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#61525a] transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12 shadow-lg group-hover:shadow-2xl">
                      <Icon className="w-10 h-10 text-[#61525a] group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1e1919] mb-3 group-hover:text-[#61525a] transition-colors duration-300">{card.title}</h3>
                    <p className="text-[#736c64] leading-relaxed whitespace-pre-line">{card.info}</p>
                  </div>

                  {/* Corner sparkle */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Sparkles className="w-5 h-5 text-[#61525a] animate-spin-slow" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="group max-w-3xl mx-auto shadow-2xl border-2 hover:border-[#61525a] transition-all duration-500 relative overflow-hidden animate-fade-in-scale" style={{ animationDelay: '0.6s' }}>
          {/* Shine effect */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 animate-shimmer" style={{ animationDuration: '4s' }}></div>
          <div className="pointer-events-none absolute -inset-10 rounded-[32px] border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ripple"></div>

          <CardContent className="p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-semibold text-[#1e1919] mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder="John Doe"
                      className={`border-2 transition-all duration-300 ${
                        focusedField === 'name' ? 'border-[#61525a] shadow-lg scale-105' : 'border-gray-200'
                      }`}
                    />
                  </div>
                </div>
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-semibold text-[#1e1919] mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      placeholder="john@example.com"
                      className={`border-2 transition-all duration-300 ${
                        focusedField === 'email' ? 'border-[#61525a] shadow-lg scale-105' : 'border-gray-200'
                      }`}
                    />
                  </div>
                </div>
              </div>

              <div className="relative">
                <label htmlFor="phone" className="block text-sm font-semibold text-[#1e1919] mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="+1 (555) 123-4567"
                    className={`border-2 transition-all duration-300 ${
                      focusedField === 'phone' ? 'border-[#61525a] shadow-lg scale-105' : 'border-gray-200'
                    }`}
                  />
                </div>
              </div>

              <div className="relative">
                <label htmlFor="message" className="block text-sm font-semibold text-[#1e1919] mb-2">
                  Your Message
                </label>
                <div className="relative">
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    placeholder="Tell us about your inquiry..."
                    className={`border-2 transition-all duration-300 resize-none ${
                      focusedField === 'message' ? 'border-[#61525a] shadow-lg scale-105' : 'border-gray-200'
                    }`}
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="group w-full bg-[#61525a] hover:bg-[#4a3f45] text-white transition-all duration-500 transform hover:scale-105 hover:shadow-2xl relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  Send Message
                </span>
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#4a3f45] to-[#61525a] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="pointer-events-none absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></span>
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};