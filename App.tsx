
import React from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Benefits } from './components/Benefits';
import { TargetAudience } from './components/TargetAudience';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PainPoints />
        <Benefits />
        <TargetAudience />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
