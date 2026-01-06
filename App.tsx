import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import PricingSection from './components/PricingSection';
import GlobalMap from './components/GlobalMap';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white overflow-x-hidden selection:bg-brand-orange selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <ServicesSection />
        <WhyChooseUs />
        <PricingSection />
        <GlobalMap />
      </main>
      <Footer />
    </div>
  );
};

export default App;