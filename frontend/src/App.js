import React from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ExtractionProcess } from './components/ExtractionProcess';
import { Journey } from './components/Journey';
import { Products } from './components/Products';
import { Gallery } from './components/Gallery';
import { Wellness } from './components/Wellness';
import { Recipes } from './components/Recipes';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SectionDivider } from './components/SectionDivider';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <ThemeProvider>
      <div className="App bg-[var(--theme-background)] text-[var(--theme-text)]">
        <Header />
        <main>
          <Hero />
          <SectionDivider />
          <ExtractionProcess />
          <SectionDivider flipped />
          <Journey />
          <SectionDivider />
          <Products />
          <SectionDivider flipped />
          <Gallery />
          <SectionDivider />
          <Wellness />
          <SectionDivider flipped />
          <Recipes />
          <SectionDivider />
          <Testimonials />
          <SectionDivider flipped />
          <About />
          <SectionDivider />
          <Contact />
        </main>
        <Footer />
        <ThemeSwitcher />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
