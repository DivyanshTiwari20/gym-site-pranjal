import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const StatsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header and Stats */}
        <div className="mb-16">
            <p className="text-brand-orange font-semibold mb-4 tracking-wide uppercase text-sm">About Us</p>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-black mb-6 uppercase"
            >
                Your <span className="text-brand-orange">Fitness</span> Journey Starts Here
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-400 max-w-2xl mb-12"
            >
                At <strong>LEO FIT GYM</strong>, we are dedicated to helping you unlock your full fitness potential. As a premier 24/7 facility, we provide top-tier equipment, expert trainers, and a welcoming community whenever you need it.
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8">
                {[
                    { val: '24/7', label: 'Open Hours' },
                    { val: '2K+', label: 'Active Members' },
                    { val: 'Daily', label: 'Group Classes' },
                    { val: 'Premium', label: 'Equipment' },
                ].map((stat, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <h3 className="text-3xl font-bold text-white mb-1">{stat.val}</h3>
                        <p className="text-gray-500 text-sm">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Video Banner */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden group cursor-pointer"
        >
            <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
                alt="Gym Floor" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-300">
                    <Play className="w-8 h-8 fill-white text-white ml-1" />
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default StatsSection;