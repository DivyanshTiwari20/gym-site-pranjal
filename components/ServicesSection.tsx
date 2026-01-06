import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    { title: 'Personal training', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1740&auto=format&fit=crop' },
    { title: 'CrossFit', img: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1769&auto=format&fit=crop' },
    { title: 'Cardio Zone', img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1740&auto=format&fit=crop' },
    { title: 'Strength Training', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1631&auto=format&fit=crop' },
  ];

  return (
    <section className="py-24 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
                <p className="text-brand-orange font-semibold mb-4 text-sm uppercase">Our Services</p>
                <h2 className="text-4xl font-bold uppercase leading-tight mb-6">
                    Unleash Your Potential: <span className="text-brand-orange">Premium Fitness Services</span> Tailored For You
                </h2>
                <p className="text-gray-400 text-sm">
                    At <strong>LEO FIT GYM</strong>, we offer personalized fitness services to help you reach your goals. From one-on-one training to high-energy classes, available 24/7.
                </p>
            </div>
            
            <div className="flex gap-4 mt-8 md:mt-0">
                <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-brand-orange text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>

        {/* Horizontal Scroll / Grid */}
        <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x">
            {services.map((service, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="min-w-[300px] md:min-w-[380px] h-[450px] relative rounded-3xl overflow-hidden group snap-center"
                >
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
                        <h3 className="text-xl font-bold">{service.title}</h3>
                        <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;