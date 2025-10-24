import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
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

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#61525a] font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e1919] mt-4 mb-4">Contact Us</h2>
          <p className="text-lg text-[#736c64] max-w-2xl mx-auto">
            Have questions about our products? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 hover:border-[#61525a]">
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 bg-[#f7f5f2] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#61525a] transition-colors duration-300">
                <Mail className="w-8 h-8 text-[#61525a] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#1e1919] mb-2">Email Us</h3>
              <p className="text-[#736c64]">{mockBrandInfo.email}</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 hover:border-[#61525a]">
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 bg-[#f7f5f2] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#61525a] transition-colors duration-300">
                <Phone className="w-8 h-8 text-[#61525a] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#1e1919] mb-2">Call Us</h3>
              <p className="text-[#736c64]">{mockBrandInfo.phone}</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 hover:border-[#61525a]">
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 bg-[#f7f5f2] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#61525a] transition-colors duration-300">
                <MapPin className="w-8 h-8 text-[#61525a] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#1e1919] mb-2">Visit Us</h3>
              <p className="text-[#736c64]">123 Harvest Lane<br />Oakland, CA 94612</p>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-3xl mx-auto shadow-2xl border-2">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1e1919] mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="border-2 focus:border-[#61525a] transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1e1919] mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="border-2 focus:border-[#61525a] transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#1e1919] mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  className="border-2 focus:border-[#61525a] transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#1e1919] mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your inquiry..."
                  className="border-2 focus:border-[#61525a] transition-colors duration-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#61525a] hover:bg-[#4a3f45] text-white transition-all duration-300 transform hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};