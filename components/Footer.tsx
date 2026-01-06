import React from 'react';
import { Facebook, Instagram, Globe, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] pt-24 pb-12 border-t border-white/5 font-sans relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-start">
          {/* Brand Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="LEO FIT Logo" className="h-20 w-auto object-contain" />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight max-w-sm">
              Made By Athletes <br />
              <span className="text-brand-orange">For Athletes</span>
            </h3>
          </div>

          {/* Newsletter */}
          <div className="lg:max-w-md lg:ml-auto">
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Join our mailing list to receive exclusive updates, and discounts on your next service!
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-orange/50 transition-colors"
                />
              </div>
              <button className="bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-brand-orange/20 whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section: Socials & Quick Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[
              { icon: <Instagram className="w-5 h-5" />, label: 'Instagram' },
              { icon: <Facebook className="w-5 h-5" />, label: 'Facebook' },
              { icon: <Globe className="w-5 h-5" />, label: 'Website' }
            ].map((social, i) => (
              <a
                key={i}
                href="#"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-orange transition-all hover:bg-brand-orange/10"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-8 text-sm font-medium">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-gray-600 tracking-wider">
          <p>©{new Date().getFullYear()} LEO FIT. All Rights Reserved.</p>
          <div className="flex items-center gap-1 uppercase">
            <span>Powered by</span>
            <span className="text-gray-400">CMDigital</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;