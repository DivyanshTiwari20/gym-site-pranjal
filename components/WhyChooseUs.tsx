import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number>(1);

  const items = [
    { id: 0, title: 'State-of-the-art Equipment', desc: 'Experience the latest in fitness technology with our premium selection of machines and free weights designed for every muscle group.' },
    { id: 1, title: 'Expert Trainers', desc: 'Our certified trainers are here to guide you every step of the way, offering personalized workout plans and expert advice. With years of experience, they ensure that your workouts are both safe and effective, helping you achieve your fitness goals faster and with confidence.' },
    { id: 2, title: 'Wide Range of Classes', desc: 'From yoga to HIIT, we have classes that fit every schedule and fitness level.' },
    { id: 3, title: 'Welcoming Community', desc: 'Join a supportive environment where everyone motivates each other to succeed.' },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-12">
            <p className="text-brand-orange font-semibold mb-2 text-sm uppercase">Preferences</p>
            <h2 className="text-4xl font-bold uppercase mb-12">
                Why Choose Us For Your <span className="text-brand-orange">Fitness</span> <br /> Journey?
            </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[600px] rounded-3xl overflow-hidden"
            >
                <img 
                    src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop" 
                    alt="Man with battle ropes" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
            </motion.div>

            {/* Content Side */}
            <div className="flex flex-col gap-4">
                {items.map((item) => (
                    <div 
                        key={item.id} 
                        onClick={() => setActiveItem(item.id)}
                        className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                            activeItem === item.id 
                            ? 'bg-[#1C1C1C] border-white/5' 
                            : 'bg-transparent border-transparent hover:bg-[#111]'
                        }`}
                    >
                        <div className="flex justify-between items-center mb-2">
                            <h3 className={`text-xl font-bold ${activeItem === item.id ? 'text-brand-orange' : 'text-white'}`}>
                                {item.title.split(' ').map((word, i) => {
                                    // Hacky way to color specific words based on the design screenshot logic if needed, 
                                    // but purely applying orange to the whole title when active for simplicity and better UX.
                                    // The design shows "Expert Trainers" where Expert is orange.
                                    // We will stick to highlighting the first word if active for visual flair.
                                    if(activeItem === item.id && i === 0) return <span key={i} className="text-brand-orange">{word} </span>;
                                    return <span key={i} className="text-white">{word} </span>;
                                })}
                            </h3>
                            <ArrowUpRight className={`w-5 h-5 transition-transform ${activeItem === item.id ? 'rotate-45 text-brand-orange' : 'text-gray-500'}`} />
                        </div>
                        <AnimatePresence>
                            {activeItem === item.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <p className="text-gray-400 text-sm leading-relaxed mt-2">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;