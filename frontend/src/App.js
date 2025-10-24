import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ExtractionProcess } from './components/ExtractionProcess';
import { Products } from './components/Products';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <ExtractionProcess />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;