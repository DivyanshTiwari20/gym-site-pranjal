import React, { useState, useEffect } from 'react';
import { Zap, Menu, X, Clock, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed z-50 transition-all duration-300 ${isScrolled || mobileMenuOpen
          ? 'top-2 inset-x-2 md:top-4 md:inset-x-6 lg:inset-x-12'
          : 'top-2 inset-x-2 md:top-6 md:inset-x-6 lg:inset-x-12'
          }`}
      >
        <div
          className={`
                relative mx-auto max-w-7xl px-4 py-2 md:px-6 md:py-2.5
                rounded-full border border-white/20
                bg-white/[0.03] backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.37)]
                flex items-center justify-between
                transition-all duration-300
            `}
        >
          {/* Logo */}
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="LEO FIT Logo" className="h-20 md:h-14 w-auto object-contain" />
            </a>
            {/* <div className="hidden sm:flex items-center gap-1.5 bg-[#1A1A1A] border border-white/5 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider text-brand-orange">
              {/* <Clock className="w-3 h-3" /> */}
            {/* </div> */}
          </div>

          {/* Desktop Links - Removed inner border to fix double border issue */}
          <div className="hidden md:flex items-center gap-1 p-1  rounded-full">
            {['Home', 'Services', 'Pricing'].map((item) => (
              <a key={item} href="#" className="px-5 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-6">
            {/* <button className="text-sm font-bold text-white hover:text-brand-orange transition-colors">Log In</button> */}
            <button className="bg-brand-orange hover:bg-orange-600 text-white text-sm font-bold py-2.5 px-6 rounded-xl shadow-[0_4px_20px_rgba(255,77,0,0.3)] transition-transform hover:scale-105 active:scale-95 flex items-center gap-2">
              Join Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2 bg-white/5 rounded-lg border border-white/5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav >

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {
          mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-x-2 top-[64px] z-40 md:hidden"
            >
              <div className="bg-[#111111]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col gap-2">
                {['Home', 'About Us', 'Services', 'Pricing'].map((item) => (
                  <a key={item} href="#" className="p-4 rounded-xl bg-white/5 text-gray-200 font-medium hover:bg-brand-orange hover:text-white transition-colors flex justify-between group">
                    {item}
                    <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white" />
                  </a>
                ))}
                <div className="mt-2 pt-4 border-t border-white/10 flex flex-col gap-3">
                  <button className="w-full py-4 rounded-xl font-bold bg-white text-black">Log In</button>
                  <button className="w-full py-4 rounded-xl font-bold bg-brand-orange text-white shadow-lg shadow-brand-orange/20">Join Now</button>
                </div>
              </div>
            </motion.div>
          )
        }
      </AnimatePresence >
    </>
  );
};

export default Navbar;