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
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactCards = [
    { icon: Mail, title: 'Email Us', info: mockBrandInfo.email },
    { icon: Phone, title: 'Call Us', info: mockBrandInfo.phone },
    { icon: MapPin, title: 'Visit Us', info: '123 Harvest Lane\nOakland, CA 94612' },
  ];

  return (
    <section id="contact" className="relative bg-[var(--theme-surface)] py-24">
      <div className="absolute inset-x-0 top-0 h-32 bg-[var(--theme-divider)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-[var(--theme-divider)]" />
      <div className="absolute inset-0 opacity-[0.05]" style={{ background: 'var(--theme-ripple)' }} />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--theme-border-soft)] bg-[var(--theme-surface-alt)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-[var(--theme-text-muted)] shadow">
            Get in Touch
            <Sparkles className="h-4 w-4 text-[var(--theme-highlight)]" />
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--theme-text-strong)]">
            Let's Press Something Beautiful Together
          </h2>
          <p className="max-w-2xl text-lg text-[var(--theme-text)]">
            Share your culinary dreams, wholesale needs, or wellness plans and we’ll tailor an oil ritual for you.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[minmax(0,1fr),minmax(0,1.2fr)]">
          <div className="space-y-6">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <Card key={card.title} className="relative overflow-hidden border border-[var(--theme-border-soft)] bg-[var(--theme-background)] shadow-xl shadow-[var(--theme-card-shadow)]">
                  <CardContent className="flex items-start gap-4 p-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--theme-primary-soft)] text-[var(--theme-primary)]">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--theme-text-muted)]">{card.title}</p>
                      <p className="mt-2 text-lg font-semibold text-[var(--theme-text-strong)] whitespace-pre-line">{card.info}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="relative overflow-hidden border border-[var(--theme-border-strong)] bg-[var(--theme-background)] shadow-2xl shadow-[var(--theme-card-shadow)]">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Your Name" id="name">
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                  </Field>
                  <Field label="Email Address" id="email">
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
                  </Field>
                </div>
                <Field label="Phone Number" id="phone">
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 123-4567" />
                </Field>
                <Field label="Your Message" id="message">
                  <Textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required placeholder="Tell us about your inquiry..." />
                </Field>
                <Button type="submit" className="group flex w-full items-center justify-center gap-2 bg-[var(--theme-primary)] py-4 text-white shadow-lg shadow-[var(--theme-card-shadow)] transition-transform duration-300 hover:scale-[1.02] hover:bg-[var(--theme-primary-strong)]">
                  Send Message
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, id, children }) => (
  <label htmlFor={id} className="block text-sm font-semibold text-[var(--theme-text-strong)]">
    {label}
    <div className="mt-2 rounded-2xl border border-[var(--theme-border-soft)] bg-[var(--theme-surface)] px-4 py-2 shadow-inner focus-within:border-[var(--theme-primary)] focus-within:shadow-[0_0_0_3px_var(--theme-primary-soft)]">
      {children}
    </div>
  </label>
);
