import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';

const PricingSection: React.FC = () => {
    return (
        <section className="py-24 bg-[#0F0F0F]">
            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-16">
                    <p className="text-brand-orange font-semibold mb-2 text-sm uppercase">Subscriptions</p>
                    <h2 className="text-4xl font-bold uppercase">
                        Flexible <span className="text-brand-orange">Plans</span> For Every Goal
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Basic */}
                    <PricingCard
                        title="Basic"
                        price="2500"
                        description="Essential package for regular workouts."
                        features={['Unlimited access to the gym', '1 free group class per month', 'Free access to relaxation areas']}
                    />

                    {/* Standard - Highlighted */}
                    <PricingCard
                        title="Standard"
                        price="3500"
                        description="Extended package for comprehensive training."
                        features={['Unlimited access to the gym', '3 free group classes per month', 'Free access to relaxation areas and sauna']}
                        isPopular
                    />

                    {/* Premium */}
                    <PricingCard
                        title="Premium"
                        price="4500"
                        description="Deluxe package with maximum benefits."
                        features={['Unlimited access to the gym', 'Unlimited group classes', '2 personal training sessions per month', 'Free access to relaxation areas, sauna, and pool']}
                    />
                </div>

            </div>
        </section>
    );
};

interface PricingCardProps {
    title: string;
    price: string;
    description: string;
    features: string[];
    isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, description, features, isPopular = false }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className={`p-8 rounded-3xl flex flex-col h-full border ${isPopular ? 'bg-[#FF4D00] border-[#FF4D00] text-white' : 'bg-[#1A1A1A] border-white/5 text-gray-300'
                }`}
        >
            <h3 className={`text-xl font-bold mb-4 ${isPopular ? 'text-white' : 'text-white'}`}>{title}</h3>
            <div className="flex items-baseline mb-2">
                <span className="text-4xl font-bold text-white">₹{price}</span>
                <span className={`text-sm ml-1 ${isPopular ? 'text-white/80' : 'text-gray-500'}`}>/monthly</span>
            </div>
            <p className={`text-xs mb-8 ${isPopular ? 'text-white/80' : 'text-gray-500'}`}>{description}</p>

            <div className="mb-8 flex-grow">
                <p className={`text-xs font-bold mb-4 uppercase ${isPopular ? 'text-white/90' : 'text-gray-500'}`}>What you get</p>
                <ul className="space-y-3">
                    {features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                            <Check className={`w-4 h-4 mt-0.5 ${isPopular ? 'text-white' : 'text-brand-orange'}`} />
                            <span className={isPopular ? 'text-white' : 'text-gray-300'}>{feat}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <button className={`w-full py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-colors ${isPopular
                ? 'bg-white text-brand-orange hover:bg-gray-100'
                : 'bg-[#2A2A2A] text-white hover:bg-[#333]'
                }`}>
                Get started <ArrowUpRight className="w-4 h-4" />
            </button>
        </motion.div>
    );
}

export default PricingSection;