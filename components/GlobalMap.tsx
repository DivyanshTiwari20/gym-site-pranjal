import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const GlobalMap: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
            <div className="max-w-2xl">
                <p className="text-brand-orange font-semibold mb-2 text-sm uppercase">Find Us</p>
                <h2 className="text-4xl font-bold uppercase leading-tight">
                    Visit <span className="text-brand-orange">LEO FIT GYM</span> <br /> In Lucknow
                </h2>
            </div>
            
            <div className="flex items-center gap-4 bg-[#1A1A1A] p-4 rounded-2xl">
                <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-white">
                    <MapPin />
                </div>
                <div className="text-sm text-gray-300 max-w-[200px]">
                    <strong>Open 24/7</strong><br />
                    Come visit us and start your journey today.
                </div>
            </div>
        </div>

        {/* Google Map Iframe */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
        >
           <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.3303784808277!2d80.9436094!3d26.893008100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957fbe40b372f%3A0xc5a3dea4fdd9ae63!2sNeo%20Fitnes%20-%20Best%20Gym%20in%20Lucknow%20%7C%20Best%20Fitness%20Centre%20in%20Lucknow!5e0!3m2!1sen!2sin!4v1767705748428!5m2!1sen!2sin" 
                width="100%" 
                height="500" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
        </motion.div>

      </div>
    </section>
  );
};

export default GlobalMap;